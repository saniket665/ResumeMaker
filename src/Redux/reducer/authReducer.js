import * as Actions from "../action/Actions";
import initialState from "./initialState.json";

const authReducer = (state = initialState.user, action) => {
    switch(action.type) {
        case Actions.REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case Actions.REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error.message
            }
        case Actions.SIGNIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case Actions.SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case Actions.SIGNIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error.message
            }
        case Actions.SIGNOUT_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case Actions.SIGNOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error.message
            }
        case Actions.REMOVE_ERROR:
            return {
                ...state,
                loading: false,
                error: ""
            }
        default: return state;
    }
}

export default authReducer;