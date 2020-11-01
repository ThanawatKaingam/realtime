import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBmcyJSoP_Xb0GewXiMFaEot8jIlZmiHWQ",
        authDomain: "realtimerefresh-9d610.firebaseapp.com",
        databaseURL: "https://realtimerefresh-9d610.firebaseio.com",
        projectId: "realtimerefresh-9d610",
        storageBucket: "realtimerefresh-9d610.appspot.com",
        messagingSenderId: "491318876077",
        appId: "1:491318876077:web:b4b66c94521161efb4b324",
        measurementId: "G-6F91Z3ZR18"
    };
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore()