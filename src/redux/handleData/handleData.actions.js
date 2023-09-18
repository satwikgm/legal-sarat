import handleDataTypes from "./handleData.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const setEnquiriesToNull = () => ({
  type: handleDataTypes.SET_ENQUIRIES_NULL,
});

export const fetchEnquiriesStart = () => ({
  type: handleDataTypes.FETCH_ENQUIRIES_START,
});

export const fetchEnquiriesSuccess = (collectionsMap) => ({
  type: handleDataTypes.FETCH_ENQUIRIES_SUCCESS,
  payload: collectionsMap,
});

export const fetchEnquiriesSuccessAll = (collectionsMap) => ({
  type: handleDataTypes.FETCH_ENQUIRIES_ALL_SUCCESS,
  payload: collectionsMap,
});

export const fetchEnquiriesFailure = (errorMessage) => ({
  type: handleDataTypes.FETCH_ENQUIRIES_FAILURE,
  payload: errorMessage,
});

export const fetchEnquiriesStartAsync = (specialization) => {
  return (dispatch) => {
    const collectionRef = firestore.collection(specialization);
    const collectionRefAll = firestore.collection("All");
    dispatch(fetchEnquiriesStart()); 

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot); //gets the collections of enquiries from firestore in a readable way
        dispatch(fetchEnquiriesSuccess(collectionsMap)); 
      }) 
      .catch((error) => dispatch(fetchEnquiriesFailure(error.message)));
      
    collectionRefAll
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot); 
        dispatch(fetchEnquiriesSuccessAll(collectionsMap)); 
      }) 
      .catch((error) => dispatch(fetchEnquiriesFailure(error.message)));
  };
};

