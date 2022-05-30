import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

const authContext = createContext();
const provider = new GithubAuthProvider();
const auth = getAuth();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  console.log(user);

  const signinWithGithub = () => {
    return signInWithPopup(auth, provider)
      .then((response) => {
        setUser(response.user);
        return response.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signout = () => {
    return auth.signOut().then(() => {
      setUser(false);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout,
  };
}
