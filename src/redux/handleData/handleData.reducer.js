import handleDataTypes from "./handleData.types";

const INITIAL_STATE = {
  enquiries: null,
  enquiriesAll: null,
  isFetching: false, 
  errorMessage: undefined,
};

const handleDataReducer = (state = INITIAL_STATE, action) => {
  switch (
    action.type 
  ) {
    case handleDataTypes.FETCH_ENQUIRIES_START: //in case of...
      return {
        ...state,
        isFetching: true,
      };
    case handleDataTypes.FETCH_ENQUIRIES_SUCCESS:
      return {
        ...state,
        isFetching: false, 
        enquiries: action.payload, 
      };
    case handleDataTypes.FETCH_ENQUIRIES_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false, 
        enquiriesAll: action.payload, 
      };
    case handleDataTypes.FETCH_ENQUIRIES_FAILURE:
      return {
        ...state,
        isFetching: false, 
        errorMessage: action.payload, 
      };
    case handleDataTypes.SET_ENQUIRIES_NULL:
      return {
        ...state,
        enquiries: null,
      };
    default:
      return state;
  }
};

export default handleDataReducer;
