//validation function
function validateLogIn()
{
    var logMail = document.getElementById("logMail").value; //call variable by id
    var logPwd = document.getElementById("logPwd").value;  //call variable by id

    //variable declaration
    var errMsg = "";			
    var result = true;
    //email patern
    var pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,8}$/;
    //passwprd pattern
    var epattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //conditions
    if(logMail == "")//email is empty
    {
        errMsg += "<li>Please Enter your Email address</li>";
    }

    //invalid email
    if (!logMail.match(epattern)) {
        errMsg += "<li>Invalid Email Address</li>";
    }

    //empty password
    if (logPwd == "") {
        errMsg += "<li>Please enter your password</li>";
    }
    //invalid password pattern
    if (!logPwd.match(pattern2)) {
        errMsg += "<li>Invalid Password Format!</li>";
    }
    //error genenration
    if (errMsg != "") {
        var scrnOverlay = document.getElementById("scrnOverlay"); //call variable by id
        var abcxxx = document.getElementById("abcxxx");  //call variable by id
        
        scrnOverlay.style.visibility = "visible";//css chanannges
        abcxxx.style.display = "block";  
        document.getElementById("abcxxx").innerHTML =
        
        errMsg + "<a href='#' id='errBtn' class='buttonq'>Close</a>";
        
        var errBtn = document.getElementById("errBtn");
        errBtn.onclick = cclose;

        result = false;
    }
    return result;
}

//close the window
function cclose(){
    
    var scrnOverlay = document.getElementById("scrnOverlay"); //call variable by id
    var abcxxx = document.getElementById("abcxxx");  //call variable by id
    //css chananges
    abcxxx.style.display = "none";
    scrnOverlay.style.visibility = "hidden"; 
}
//onsubmit
function init()
{
    var loginFormPg = document.getElementById("loginFormPg"); //call variable by id
    loginFormPg.onsubmit = validateLogIn;
}

window.onload = init;//start js

