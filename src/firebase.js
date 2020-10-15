import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDriqIkGKI1YGWL-X6_fZQnWiZujhAnF28",
    authDomain: "amazin-store.firebaseapp.com",
    databaseURL: "https://amazin-store.firebaseio.com",
    projectId: "amazin-store",
    storageBucket: "amazin-store.appspot.com",
    messagingSenderId: "979231350361",
    appId: "1:979231350361:web:21bc097280cfbb1a501b48",
    measurementId: "G-FQKZVKQFF0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
