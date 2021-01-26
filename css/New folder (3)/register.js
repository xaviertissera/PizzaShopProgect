function reg_validate()
{
    var retn = true;

    var err_message = "";

    var email = document.getElementById("mail").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var postcode = document.getElementById("postcode").value;
    
    var gmail = /^\w+([\.-]?\w+)@\w([\.-]?\w+)(\.\w{2,3})+$/;

    if(email == "")
    {
        err_message += "You must enter an email address\n";
        retn = false;
    }

    if(!email.match(gmail) && !email == "")
    {
        err_message += "You have enterd and invalid email\n";
        retn = false;
    }
    
    if(password1 == "")
    {
        err_message += "Password 1 cannot be empty \n";
        retn = false;
    }
    if(password1.length != 8)
    {
        err_message += "You have to give at least 8 characters to password1\n";
        retn = false;
    }
    if(retn == false)
    {
        alert(err_message);
    }

    if(password2 == "")
    {
        err_message += "CONFIRM PASSWORD cannot be empty \n";
        retn = false;
    }
    if(password2.length != 8)
    {
        err_message += "You have to give at least 8 characters to CONFIRM PASSWORD\n";
        retn = false;
    }
    

    if(password1 != password2)
    {
        err_message += "Retype Password must be same as first Password!  \n";
        retn = false;
    }
    
    if(retn == false)
    {
        alert(err_message);
    }

    if(postcode.length !=4)
    {
        err_message += "You have to must enter your Postcode\n";
        retn = false;
    }
    {
        alert(err_message);
    }

    var gender = form.querySelectorAll('input[name="gender"]:checked');
        if (!gender.length) 
        {
            err_message += "'You must select male or female'\n";
            retn = false;
        }

        {
            alert(err_message);
        }

   





    return retn;
}

function init()
{
    var submit = document.getElementById("submitt");
    

    submit.onclick = reg_validate;
}
window.onload = init;