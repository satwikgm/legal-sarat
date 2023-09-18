import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDCajEP0ROQJsqWoCaFP0pzCPENR66x-vI",
  authDomain: "sample-c8766.firebaseapp.com",
  projectId: "sample-c8766",
  storageBucket: "sample-c8766.appspot.com",
  messagingSenderId: "394734800348",
  appId: "1:394734800348:web:24ac4bfaa14666a37c5319"
};

export const addCollectionAndDocuments = async (objectToAdd) => {
  const collectionRef = firestore.collection(objectToAdd.specialization); 
  const batch = firestore.batch(); 
  const newDocRef = collectionRef.doc(); 
  batch.set(newDocRef, objectToAdd);
  return await batch.commit(); 
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { createdAt, currentUser, enquiry, specialization, title } =
      doc.data(); 
    return {
      id: doc.id,
      createdAt,
      currentUser,
      enquiry,
      specialization,
      title,
    };
  });
  return transformedCollection;
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; 

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); 

  if (!snapShot.exists) {
    const { specialization, license, displayName, email } = userAuth; 
    var { TypeOfUser } = userAuth; 
    const createdAt = new Date(); 
    try {
      if (TypeOfUser === "Lawyer") {
        await userRef.set({
          TypeOfUser,
          specialization,
          license,
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } else {
        TypeOfUser = "Client";
        await userRef.set({
          TypeOfUser,
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      }
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;