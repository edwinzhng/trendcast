import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB5MZmqH3YWZ6WnKbeOH2row22jB_4-a1k",
    authDomain: "yhack-predictor.firebaseapp.com",
    databaseURL: "https://yhack-predictor.firebaseio.com",
    projectId: "yhack-predictor",
    storageBucket: "yhack-predictor.appspot.com",
    messagingSenderId: "192132892408"
};

var fire = firebase.initializeApp(config);

export default fire;
