
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyBFtj67j6SIYZk07HfvslF49BcQvjenM34",
    authDomain: "whatsp-d330c.firebaseapp.com",
    databaseURL: "https://whatsp-d330c-default-rtdb.firebaseio.com/",
    projectId: "whatsp-d330c",
    storageBucket: "whatsp-d330c.appspot.com",
    messagingSenderId: "736201777920",
    appId: "1:736201777920:web:5d5572b83839a1e43289e5",
    measurementId: "G-WG840RNZC5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        practice : "test succesful"
    });
}