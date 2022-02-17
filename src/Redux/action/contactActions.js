import * as Actions from "./Actions";

export const setContact = (contact) => {
    return {
        type: Actions.SET_CONTACT,
        payload: contact
    }
}

export const updateContact = (contact) => {
    return {
        type: Actions.UPDATE_CONTACT,
        payload: contact
    }
}