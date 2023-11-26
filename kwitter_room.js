
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0aB-Cc5VSVrlu0VFk4lvnE34arUh4g9Q",
      authDomain: "kwitter-f58bb.firebaseapp.com",
      databaseURL: "https://kwitter-f58bb-default-rtdb.firebaseio.com",
      projectId: "kwitter-f58bb",
      storageBucket: "kwitter-f58bb.appspot.com",
      messagingSenderId: "270630593102",
      appId: "1:270630593102:web:ffcec20d581b26ac3cd91f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
