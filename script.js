let username;
let password;
let prevPassword;
let cnt=0;
document.getElementById("btn").onclick = function(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if((password==prevPassword && cnt!=0) || cnt==0 ){
        document.getElementById("top-container").innerHTML="Welcome,  "+ username ;
    }
    else{
        document.getElementById("top-container").innerHTML="Sorry, wrong password :( ";
    }
    console.log("username: " + username);
    cnt++;
    prevPassword=password;
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