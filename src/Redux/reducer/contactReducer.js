import * as Actions from "../action/Actions";
import initialState from "./initialState.json";

const contactReducer = (state = initialState.contact, action) => {
    switch(action.type) {
        case Actions.SET_CONTACT:
            return {...action.payload}
        case Actions.UPDATE_CONTACT:
            return {...action.payload}
        default: return state
    }
}

export default contactReducer;
