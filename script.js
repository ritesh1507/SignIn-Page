let username;
let password;
document.getElementById("btn").onclick = function(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if(username==='' || password==='') document.getElementById("top-container").innerHTML="Fill Complete Details" ;
    else document.getElementById("top-container").innerHTML="Welcome,  "+ username ;
    console.log("username: " + username);
}

var eyeImage = document.getElementById("eye");
var passwordType = document.getElementById("password");

eyeImage.onclick = function() {
    if (eyeImage.src.match ("image/close-eye.png")) {
        passwordType.type="text";
        eyeImage.src = "image/open-eye.png";
    } else {
        passwordType.type="password";
        eyeImage.src = "image/close-eye.png";
    }
}