//order page validation
function validateOrder()
{
    //get elelemnt by id
    var pCode = document.getElementById("pCode").value;
    var pCodeCpy = document.getElementById("pCodeCpy").value;
    //get elelemnt by id
    var pStreet = document.getElementById("pStreet").value;
    var pStreetCpy = document.getElementById("pStreetCpy").value;
    //get elelemnt by id
    var pCity = document.getElementById("pCity").value;
    var pCityCpy = document.getElementById("pCityCpy").value;
    //get elelemnt by id
    var contNo = document.getElementById("contNo").value;
    var mail = document.getElementById("mail").value;
    //get elelemnt by id
    var op3 = document.getElementById("op3");
    var cNumber = document.getElementById("cNumber").value;
    var americanEx = document.getElementById("americanEx");
    //get elelemnt by id
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var ccv = document.getElementById("ccv").value;
    var cardHolder = document.getElementById("cardHolder").value;

    //variable declaration
    var errMsg = "";								
    var result = true;						
    var pattern = /^\d{4}$/;//postal code validating for 4 numbers
    var patternC = /^\d{10}$/;//contact number patern
    //email address pattern
    var patternM = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var patternAcard = /^\d{15}$/;
    var patterncard = /^\d{16}$/;
   
    
    //postal code 4 digit delection also this wont alloved for empty postal codes
    if (!pCode.match(pattern) && !pCodeCpy.match(pattern)  ) {
        errMsg += "<li>Please Enter 4 digit Postal Code</li>";
    }
    //street validation
    if (pStreet == "" && pStreetCpy == "") {
        errMsg += "<li>Please enter your Street Name</li>";
    }
    //email cannot be null
    if (mail == "" ) {
        errMsg += "<li>Please enter your Email Address</li>";
    }
    //email match patern
    if (!mail.match(patternM)) {
        errMsg += "<li>Invalid Email Address</li>";
    }
    //contact number 10 digits
    if (!contNo.match(patternC)) {
        errMsg += "<li>Please enter valide Contact Number</li>";
    }

    //card validation
    if (op3.checked)
    {
        if ((!americanEx.checked) && (!mastersCard.checked) && (!visaCard.checked)) {
            errMsg += "<li>Please select the card type</li>";
        }
    }

    //american card digit validation
    if (americanEx.checked)
    {
        if (!cNumber.match(patternAcard)) {
            errMsg += "<li>Invalid American Express Card</li>";
        }
    }
    //master card card digit validation
    if (mastersCard.checked) {
        if (!cNumber.match(patterncard)) {
            errMsg += "<li>Invalid Master Card</li>";
        }
    }
    //visa card digit validation
    if (visaCard.checked) {
        if (!cNumber.match(patterncard)) {
            errMsg += "<li>Invalid Visa Card</li>";
        }
    }
    //for all the cards name , year, month and ccv has to be entered
    if ((americanEx.checked) || (mastersCard.checked) || (visaCard.checked)) {

        if (month == "" || year == "" || ccv == "" || cardHolder == "") {
            errMsg += "<li>Please enter Card Details</li>";
        }

    }

    //error genenration
    if (errMsg != "") {
        //alert(errMsg);
        var scrnOverlay = document.getElementById("scrnOverlay");//get element by id
        var abcxxx2 = document.getElementById("abcxxx2");//get element by id

        //css chananges
        scrnOverlay.style.visibility = "visible";
        abcxxx2.style.display = "block";
        document.getElementById("abcxxx2").innerHTML =

        errMsg + "<a href='#' id='errBtn' class='buttonq'>Close</a>";

        var errBtn = document.getElementById("errBtn");
        errBtn.onclick = ccloseOrder;

        result = false;
    }
    return result;

}

//close btn
function ccloseOrder() {

    var scrnOverlay = document.getElementById("scrnOverlay");//get element by id
    var abcxxx2 = document.getElementById("abcxxx2");//get element by id
    //css
    abcxxx2.style.display = "none";
    scrnOverlay.style.visibility = "hidden";
}

//delivary menu
function delivary(){
    var ordert2 = document.getElementById("ordert2");//get element by id

    var op1 = document.getElementById("op1").checked;//get element by id- checked
    //css
    ordert2.style.position = "relative";
    ordert2.style.margin = "0 auto";
    ordert2.style.visibility = "visible";
    
}

function delivary2() {

    var ordert2 = document.getElementById("ordert2");//get element by id
    var op2 = document.getElementById("op2").checked;//get element by id - checked
    //css 
    ordert2.style.position = "absolute";
    ordert2.style.marginLeft = "350px";
    ordert2.style.visibility = "hidden";
}

//cardPayaments menu
function cardPay() {
    var ordert5 = document.getElementById("ordert5");//get element by id
    var op3 = document.getElementById("op3").checked;//get element by id - checked

    //css
    ordert5.style.position = "relative";
    ordert5.style.margin = "0 auto";
    ordert5.style.visibility = "visible";
}

function cardPay2() {
    var ordert5 = document.getElementById("ordert5");//get element by id
    var op4 = document.getElementById("op4").checked;//get element by id - checked
    //css
    ordert5.style.position = "absolute";
    ordert5.style.marginLeft = "350px";
    ordert5.style.visibility = "hidden";

}

//auto fill function dilivary / billing address
function autoFill() {

    var cbOne = document.getElementById("cbOne");//get element by id
    var pCode = document.getElementById("pCode").value;//get element by id for value
    var pStreet = document.getElementById("pStreet").value;//get element by id 4 value
    var pCity = document.getElementById("pCity").value;//get element by id 4 value
    
    //validation
    if (cbOne.checked == true) {
       if(pCode == "" || pStreet == "" || pCity =="")
       {
           alert("Please enter your delivery address first");
           cbOne.checked = false;
       }
       else//copy content to the new location scanned by id ref value
       {
            document.getElementById("pCodeCpy").value = pCode;
            document.getElementById("pStreetCpy").value = pStreet;
            document.getElementById("pCityCpy").value = pCity;
        }
    }
    else{//re verse the copy statmeent
       
        document.getElementById("pCodeCpy").value = "";
        document.getElementById("pStreetCpy").value = "";
        document.getElementById("pCityCpy").value = "";
    }
    
}




//link with respective events
function init() {

    /**order page delivary address**************************************** */
    var op1 = document.getElementById("op1");
    op1.onclick = delivary;

    var op2 = document.getElementById("op2");
    op2.onclick = delivary2;

    /**order page cardPayment**************************************** */
    var op3 = document.getElementById("op3");
    op3.onclick = cardPay;

    var op4 = document.getElementById("op4");
    op4.onclick = cardPay2;

    /****autoFill function************************************************* */
    var cbOne = document.getElementById("cbOne");
    cbOne.onclick = autoFill;

    var OrderingFormPg = document.getElementById("OrderingFormPg");
    /* assigns functions to corresponding events */
    OrderingFormPg.onsubmit = validateOrder;


}
//execute the js
window.onload = init;

//end of order.js