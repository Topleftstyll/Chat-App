import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBGlIUW7qONiyEIzGvp3AkNtHu-H6Nm0Lw",
    authDomain: "chat-room-83643.firebaseapp.com",
    projectId: "chat-room-83643",
    storageBucket: "chat-room-83643.appspot.com",
    messagingSenderId: "450814556181",
    appId: "1:450814556181:web:861abab64eac038c96f61c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();