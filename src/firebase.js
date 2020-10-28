import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDUEvDRGRm63LovqItENHwRnOSv0qGGNCU",
  authDomain: "summerlin-labs-production.firebaseapp.com",
  databaseURL: "https://summerlin-labs-production.firebaseio.com",
  projectId: "summerlin-labs-production",
  storageBucket: "summerlin-labs-production.appspot.com",
  messagingSenderId: "1044214191843",
  appId: "1:1044214191843:web:d8d43080fc77631493d7d6"
})

export const auth = app.auth()
export default app