import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDvfbznLZU0X89cRDCLv86zD9MOYHWVV8o",
    authDomain: "login-using-react-and-fi-a217e.firebaseapp.com",
    projectId: "login-using-react-and-fi-a217e",
    storageBucket: "login-using-react-and-fi-a217e.appspot.com",
    messagingSenderId: "683334469979",
    appId: "1:683334469979:web:c3d384f870f4ba4ff8327e"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;