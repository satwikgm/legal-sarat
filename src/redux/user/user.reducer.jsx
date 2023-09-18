import {UserActionTypes} from './user.types'; 

const INITIAL_STATE = {
    currentUser : null,
    TypeOfUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) { 
        case UserActionTypes.SET_CURRENT_USER: 
            return {
                ...state, 
                currentUser: action.payload 
            };
        case UserActionTypes.SET_TYPE_OF_USER: //in case of...
            return {
                ...state,
                TypeOfUser: action.payload
            };

        default: 
            return state;
    }
}

export default userReducer;