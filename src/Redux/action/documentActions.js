import * as Actions from "./Actions";
import {v4 as uuidv4} from "uuid";

export const setDocument = (skincd) => {
    return {
        type: Actions.SET_SKIN,
        payload: {
            id: uuidv4(),
            skincd: skincd
        }
    }
}

export const updateDocument = (skincd) => {
    return {
        type: Actions.UPDATE_SKIN,
        payload: {
            skincd: skincd
        }
    }
}