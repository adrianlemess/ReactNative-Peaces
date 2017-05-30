import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', error: '', user: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            //the curl braces say it to create a new object and the three dots 
            //indicate that it's to use all atributes in the old state 
            //and if email already exists, will be replaced by the the new one
            //We have to be sure that redux will produce a new object, because 
            //if don't reduce will not update the object
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

