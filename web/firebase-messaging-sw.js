importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCMseuZdwVM1utfyEKt4Ksx0qV8J7boNik",
    authDomain: "joints-zar.firebaseapp.com",
    databaseURL: "https://joints-zar-default-rtdb.firebaseio.com",
    projectId: "joints-zar",
    storageBucket: "joints-zar.firebasestorage.app",
    messagingSenderId: "476825650444",
    appId: "1:476825650444:web:c1e707831fa76c09e0b529",
    measurementId: "G-ENVMMNTZ9R"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
});
