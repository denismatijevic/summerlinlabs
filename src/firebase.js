import firebase from "firebase/app";
import "firebase/auth";
import {apiKey} from "./apiKey";

const app = firebase.initializeApp({
  apiKey: apiKey.apiKey,
  authDomain: apiKey.authDomain,
  databaseURL: apiKey.databaseURL,
  projectId: apiKey.projectId,
  storageBucket: apiKey.storageBucket,
  messagingSenderId: apiKey.messagingSenderId,
  appId: apiKey.appId,
});


export const auth = app.auth();
export default app;
