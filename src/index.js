import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './Redux/reducer/rootReducer';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {getFirestore, reduxFirestore, createFirestoreInstance} from "redux-firestore";
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA4w2rkhfbQeFuhqROz5uCajyQoWfhkPUk",
    authDomain: "resume-builder-practi.firebaseapp.com",
    projectId: "resume-builder-practi",
    storageBucket: "resume-builder-practi.appspot.com",
    messagingSenderId: "862252816982",
    appId: "1:862252816982:web:c177d9190c34be825779f7",
    measurementId: "G-D0PK3NWQS5"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), reduxFirestore(firebase)));

    ReactDOM.render(
        <Provider store={reduxStore}>
            <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
        </Provider>
        ,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
