import * as Actions from "./Actions";
import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";

const registerRequest = () => {
    return {
        type: Actions.REGISTER_REQUEST
    }
}
const registerSuccess = () => {
    return {
        type: Actions.REGISTER_SUCCESS
    }
}
const registerError = (err) => {
    return {
        type: Actions.REGISTER_ERROR,
        error: err
    }
}
const removeError = () => {
    return {
        type: Actions.REMOVE_ERROR,
    }
}

export const register = (userData) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch(registerRequest());
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then(async(data) => {
            const res = await firestore.collection("users").doc(data.user.uid).set({
                name: userData.name,
                email: userData.email,
                skincds: []
            })
            dispatch(registerSuccess());
        }).catch((err) => {
            dispatch(registerError(err))
            setTimeout(()=> {
                dispatch(removeError())
            }, 2000)
        })
    }
}

const signinRequest = () => {
    return {
        type: Actions.SIGNIN_REQUEST
    }
}
const signinSuccess = () => {
    return {
        type: Actions.SIGNIN_SUCCESS
    }
}
const signinError = (err) => {
    return {
        type: Actions.SIGNIN_ERROR,
        error: err
    }
}

export const SignIn = (userData) => {
    return async(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        dispatch(signinRequest());
        try {
            let res = await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
            dispatch(signinSuccess());
        }
        catch(err) {
            dispatch(signinError(err));
            setTimeout(() => {
                dispatch(removeError());
            }, 2000)
        }
    }
}

export const SignOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: Actions.SIGNOUT_SUCCESS})
        }).catch((err) => {
            dispatch({type: Actions.SIGNOUT_ERROR, error: err})
            setTimeout(() => {
                removeError()
            }, 2000)
        })
    } 
} 