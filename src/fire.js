import firebase from 'firebase' //from package npm i firebase in nodeModules

const firebaseConfig = {

  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: "todoa-pp01",
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId

};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
export default fire;