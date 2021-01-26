//function validation -pg Sign up

function validate() {
    var ffName = document.getElementById("ffName").value; //Call by id - for value
    var ffUser = document.getElementById("ffUser").value; //Call by id - for value
    var pwd1 = document.getElementById("pwd1").value; //Call by id - for value
    var pwd2 = document.getElementById("pwd2").value; //Call by id - for value


    var genmale = document.getElementById("genmale").checked; //Call by id - when checked
    var genfemale = document.getElementById("genfemale").checked;//Call by id - when checked
    var genun = document.getElementById("genun").checked;//Call by id - when checked

    var signAgree = document.getElementById("signAgree");//Call by id
    var favP1 = document.getElementById("favP1");//Call by id
    var favP2 = document.getElementById("favP2");//Call by id
    var favP3 = document.getElementById("favP3");//Call by id

    //var declaration
    var errMsg = "";								
    var result = true;							
    var pattern = /^[a-zA-Z ]+$/;		
    
    /*password with atlest simple and capital and special password between 3 and 8*/
    var pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,8}$/;
    
    //condtions 
    //name cant be empty
    if (ffName == "") {
        errMsg += "Name cannot be empty.\n";
    }

    //psw matching
    if (!pwd1.match(pattern2)) {
        errMsg += "User name contains symbols.\n";
    }
    //agrrment
    if (signAgree.checked == false)
    {
        errMsg += "Please Agree with the Tearms\n";
    }
    //favourit check
    if ((favP3.checked == false) && (favP2.checked == false) && (favP1.checked == false)){
        errMsg += "Please Select atlest one Favourite Pizza\n";
    }
    //username cant be empty
    if (ffUser == "") {
        errMsg += "Username cannot be empty.\n";
    }
    //pwd cant be empty
    if (pwd1 == "") {
        errMsg += "Please enter a password\n";
    }
    //pwds missmatch 
    if (pwd1 != pwd2) {
        errMsg += "Passwords do not match.\n";
    }
    //gender check
    if ((genmale == "") && (genfemale == "") && (genun == "")) {
        errMsg += "Title must be selected.\n";
    } 

    /* Display error message any error(s) is/are detected */
    if (errMsg != "") {
        alert(errMsg);
        result = false;
    }
    return result;
}

/************************************************************************ */
//password show window
function showPwdWin() {
    var pwdHelpWin = document.getElementById("pwdHelpWin"); //call by id
    var scrnOverlay = document.getElementById("scrnOverlay");//get element by id

    //css changes
    pwdHelpWin.style.display = "block";    			
    scrnOverlay.style.visibility = "visible";  		

}

//hide pwd windwo
function hidePwdWin() {
    var pwdHelpWin = document.getElementById("pwdHelpWin");//get element by id
    var scrnOverlay = document.getElementById("scrnOverlay");//get element by id

    //css chananges
    pwdHelpWin.style.display = "none";  	
    scrnOverlay.style.visibility = "hidden"; 
}


//function linking with relalted events
function init() {
    var ffSignin = document.getElementById("ffSignin");
    ffSignin.onsubmit = validate;

    var pwdHelpBtn = document.getElementById("pwdHelpBtn");  //get element by id
    var pwdHelpClose = document.getElementById("pwdHelpClose");  //get element by id

    pwdHelpBtn.onclick = showPwdWin;//function linking	
    pwdHelpClose.onclick = hidePwdWin;//function linking 	
}

//execute the wnidow
window.onload = init;

