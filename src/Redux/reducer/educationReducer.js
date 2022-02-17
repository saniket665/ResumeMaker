import * as Actions from "../action/Actions";
import initialState from "./initialState.json";

const educationReducer = (state = initialState.education, action) => {
    switch(action.type) {
        case Actions.SET_EDUCATION:
            return {...action.payload}
        case Actions.UPDATE_EDUCATION:
            return {...action.payload}
        default: return state;
    }
}

export default educationReducer;