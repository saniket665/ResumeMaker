import * as Actions from "../action/Actions";
import initialState from "./initialState.json";

const documentReducer = (state = initialState.document, action) => {
    switch(action.type) {
        case Actions.SET_SKIN:
            return {
                ...state,
                id: action.payload.id,
                skincd: action.payload.skincd
            }
        case Actions.UPDATE_SKIN:
            return {
                ...state,
                skincd: action.payload.skincd
            }
        default: return state;
    }
}

export default documentReducer;