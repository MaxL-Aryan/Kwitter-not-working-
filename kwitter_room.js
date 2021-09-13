//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6EWjHvvnQmNBXj5oncqJuT7ptjL_x1iM",
  authDomain: "kwitter-ae778.firebaseapp.com",
  databaseURL: "https://kwitter-ae778-default-rtdb.firebaseio.com",
  projectId: "kwitter-ae778",
  storageBucket: "kwitter-ae778.appspot.com",
  messagingSenderId: "989607291373",
  appId: "1:989607291373:web:b1c419f09fb0fd8a919fe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    username =localStorage.getItem("user_name");
    document.getElementById("user_nme").innerHTML=username;
    
    function add_room()
    {
          room_name=document.getElementById("room_nme").value;
          firebase.database().ref("/").child(room_name).update({
                purpose :"Adding Room Name"
          });
          localStorage.setItem("room_name",room_name);

          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name = "+Room_names);
      row="<div class='room_name' class='button' id="+Room_names+" onlick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
