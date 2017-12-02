import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCLtFY52ei6UJOUQ9DREicrpIj83lGaaQg",
    authDomain: "trendcast-yhack.firebaseapp.com",
    databaseURL: "https://trendcast-yhack.firebaseio.com",
    projectId: "trendcast-yhack",
    storageBucket: "",
    messagingSenderId: "789968588080"
};

var fire = firebase.initializeApp(config);

export default fire;
