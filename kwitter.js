function add_user()
{
    username=document.getElementById("user_nme").value;
    localStorage.setItem("user_name",username);
    window.location="kwitter_room.html";
}