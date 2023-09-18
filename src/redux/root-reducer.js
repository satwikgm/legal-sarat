import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";

import handleDataReducer from "./handleData/handleData.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  data: handleDataReducer
});

export default  rootReducer;
