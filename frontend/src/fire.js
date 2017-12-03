import firebase from 'firebase'

var config = {
    apiKey: "",
    authDomain: "trendcast-yhack.firebaseapp.com",
    databaseURL: "https://trendcast-yhack.firebaseio.com",
    projectId: "trendcast-yhack",
    storageBucket: "",
    messagingSenderId: ""
};

var fire = firebase.initializeApp(config);

export default fire;
