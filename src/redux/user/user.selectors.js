 import { createSelector } from "reselect"; //has to import "yarn add reselect"
 const selectUser = state => state.user;
 const typeOfUser = state => state.user.TypeOfUser;

 export const selectCurrentUser = createSelector(
     [selectUser],
     user => user.currentUser
 );
 export const selectTypeOfUser = createSelector(
     [typeOfUser],
     TypeOfUser => TypeOfUser
 );

