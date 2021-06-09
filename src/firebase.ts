import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apikey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderID: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
});

export const auth = app.auth();

export default app;
