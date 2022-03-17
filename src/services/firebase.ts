import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCb4IGlZthQIqirT3W3-k3VpX3ZfSpXTFA",
  authDomain: "letmeask-acc89.firebaseapp.com",
  databaseURL: "https://letmeask-acc89-default-rtdb.firebaseio.com",
  projectId: "letmeask-acc89",
  storageBucket: "letmeask-acc89.appspot.com",
  messagingSenderId: "375964379610",
  appId: "1:375964379610:web:827d2732fe8902424ff8e3"
  };


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();


export  {auth,database,firebase}

