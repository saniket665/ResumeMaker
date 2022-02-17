import * as Actions from "./Actions";

export const setEducation = (education) => {
    return {
        type: Actions.SET_EDUCATION,
        payload: education
    }
}

export const updateEducation = (education) => {
    return {
        type: Actions.UPDATE_EDUCATION,
        payload: education
    }
}