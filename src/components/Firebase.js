import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBliw4A7kKfda0dN2dURf_lUQ2cUIMCsfA",
    authDomain: "contact-form-749ea.firebaseapp.com",
    projectId: "contact-form-749ea",
    storageBucket: "contact-form-749ea.appspot.com",
    messagingSenderId: "107296068436",
    appId: "1:107296068436:web:6ad7061db2784561b92ec1"
})

const db = firebaseApp.firestore();

export { db };