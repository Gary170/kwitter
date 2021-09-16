
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDWpy05S83plo5uKgjqgW3CdZOkEQCEb3U",
    authDomain: "whatsup-9f853.firebaseapp.com",
    databaseURL: "https://whatsup-9f853-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "whatsup-9f853",
    storageBucket: "whatsup-9f853.appspot.com",
    messagingSenderId: "482693025505",
    appId: "1:482693025505:web:e924a4c27db1678edab1a0",
    measurementId: "G-KEW4XXR1S9"
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