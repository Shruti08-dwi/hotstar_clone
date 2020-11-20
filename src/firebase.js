import firebase from 'firebase';

  import 'firebase/auth'; //auth
 import'firebase/database'; //database like sql , mongodb

 import 'firebase/storage'; //storage//images ,videos, photos , pdf , fonts

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnhsQE2fFR_-LFvEDmhnbKI8UMT7tVDNE",
    authDomain: "hotstar-d4721.firebaseapp.com",
    databaseURL: "https://hotstar-d4721.firebaseio.com",
    projectId: "hotstar-d4721",
    storageBucket: "hotstar-d4721.appspot.com",
    messagingSenderId: "205500774345",
    appId: "1:205500774345:web:25da32b65032f628a19a18",
    // measurementId: "G-8732FTWCS4"
  };


//   initialize firebase and react application 
firebase.initializeApp(firebaseConfig);


export default firebase;