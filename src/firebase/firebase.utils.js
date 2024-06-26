import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

//Collected from google firebase, it is how firebase knows that the application
//is connected to your firebase account and database
const config = {
  apiKey: "AIzaSyC1RS5XjTBzw2HTpnHLqS4RULWjusUTBGQ",
  authDomain: "your-lawyer-db.firebaseapp.com",
  projectId: "your-lawyer-db",
  storageBucket: "your-lawyer-db.appspot.com",
  messagingSenderId: "1076039336510",
  appId: "1:1076039336510:web:7feba9be835b1bd813c76f",
  measurementId: "G-P3FQY77VEP",
};

//Add new collections or documents to firestore
export const addCollectionAndDocuments = async (objectToAdd) => {
  //if the collection ref exists, use it otherwise creates a new collection
  const collectionRef = firestore.collection(objectToAdd.specialization); 

  //it is a secury way to upload things to database since if it is interrupted it doesn't upload, only if it is completely successful
  const batch = firestore.batch(); 
  //creates a new document reference and randomly generate IDs
  const newDocRef = collectionRef.doc(); 
  batch.set(newDocRef, objectToAdd);
  //commit the changes in the the database with a confirmation that everything was uploaded
  return await batch.commit(); 
};

//convert collections snapshot doc from the firestore in object with only the properties needed
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    //goes through each doc
    const { createdAt, currentUser, enquiry, specialization, title } =
      doc.data(); //gets the data from the doc
    //returns the trasnformed obj with the properties needed
    return {
      //javascript render to convert unreadable url string to readable url
      id: doc.id,
      createdAt,
      currentUser,
      enquiry,
      specialization,
      title,
    };
  });
  //returns the collection of objects
  return transformedCollection;
};

//Check if the user exist or create a new one in the firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //if the user doesn't exist, do nothing

  //if the user exists, get the uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //by using the userRef, it gets the snapShot document
  const snapShot = await userRef.get(); //it returns the document including a property "exists" to say if it exist or not

  if (!snapShot.exists) {
    //if it doesn't exist, create a new user...
    const { specialization, license, displayName, email } = userAuth; //properties that we want to store from the userAuth
    var { TypeOfUser } = userAuth; //using var to avoid "undefined" errors by changing it's value to "Client" if it is different of "Lawyer"
    const createdAt = new Date(); //current date and time it was created

    //uses the user reference to create a new document snapshot in firestore
    try {
      //the new document will depend on the "TypeOfUser"
      if (TypeOfUser === "Lawyer") {
        //if it is a Lawyer, set specialisation and license
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
        //otherwise type of user will be Client, so it does not need specialisation or license
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

  return userRef; //returns the snapShot document containing the userRef object
};

//Start connection with firebase using the credentials identified in "config"
firebase.initializeApp(config);

//gives access to the auth method from firebase
export const auth = firebase.auth();

//gives access to firestore from firebase. It is used to get the reference of objects in firebase
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//trigger google pop up whenever we use the google auth provider for authentication and sign in
provider.setCustomParameters({ prompt: "select_account" });

//uses the google pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case we want the whole library
export default firebase;