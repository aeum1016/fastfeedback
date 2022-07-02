import React, { useState, useEffect, useContext, createContext } from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { createUser } from './db';
import Cookies from 'js-cookie';

const authContext = createContext();
const provider = new GithubAuthProvider();
const auth = getAuth();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useAuthProvider() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      Cookies.set('fast-feedback-auth', true, {
        expires: 1,
      });
      return user;
    } else {
      setUser(false);
      Cookies.remove('fast-feedback-auth');
      return false;
    }
  };

  const signinWithGithub = () => {
    return signInWithPopup(auth, provider).then((response) =>
      handleUser(response.user)
    );
  };

  const signout = () => {
    return auth.signOut().then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => handleUser(user));

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout,
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.accessToken,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
