import firebase from './firebase';
import * as firestore from 'firebase/firestore';

const db = firestore.getFirestore();

export function createUser(uid, data) {
  return firestore.setDoc(
    firestore.doc(db, 'users', uid),
    { uid, ...data },
    { merge: true }
  );
}

export function createSite(data) {
  return firestore.addDoc(firestore.collection(db, 'sites'), { ...data });
}
