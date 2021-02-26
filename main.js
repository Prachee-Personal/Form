var firstname = document.getElementById("examplefirstName");
var lastname = document.getElementById("examplelastName");
var age = document.getElementById("exampleage");
var gender = document.getElementById("examplegender");
var logiii = document.getElementById("location");
var email = document.getElementById("exampleEmail");
var education = document.getElementById("exampleeducation");
var mobilenumber = document.getElementById("exampleMobileNumber");
var picture = document.getElementById("examplepicture");
var resume = document.getElementById("exampleresume");
var hobby = document.getElementById("hobby");
var linkedin = document.getElementById("linkedinLink");
var skill = document.getElementById("exampleskills");
var language = document.getElementById("examplelanguages");
var Error = document.getElementById("error_message");

// error_message.style.padding = "10px";
function validateFields(fieldId, event) {
    var onlyTextRegex = /[^a-zA-Z]+/;
    var onlyNumberRegex = /[^0-9]+/;
    var element = document.getElementById(fieldId);

    if (element.type == "text") {
        console.log("The type is text and the event is", event);
        element.value = element.value.replace(onlyTextRegex, "");
    } else if (element.type == "number") {
        console.log("The type is num and the event is", event);
        element.value = element.value.replace(onlyNumberRegex, "");
    }
    console.log("The type of field is", element.type, " and event is ::", event);

}

function validateFormValues() {

    if (!mobilenumber.value.length == 10) {
        mobile.focus();
        return "Please enter a valid mobile number that is of 10 digits";
    }
    console.log("The email value is", email.value);
    var onlyEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value && !onlyEmailRegex.test(email.value)) {
        email.focus();
        return "Please enter a valid email address";
    }
    return "";

}
function validateFileUpload(fieldId) {
    if (fieldId == 'examplepicture') {
        var fieldPicture = document.getElementById('examplepicture');
        var picturePath = fieldPicture.value;
        var allowedPictureExtensions =
            /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!allowedPictureExtensions.exec(picturePath)) {
            alert("Please select a valid picture type file");
            fieldPicture.value = "";
            return;
        }

    } else if (fieldId == 'exampleresume') {
        var fieldResume = document.getElementById('exampleresume');
        var resumePath = fieldResume.value;
        var allowedResumeExtensions =
            /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i
        if (!allowedResumeExtensions.exec(resumePath)) {
            alert("Please select a valid resume type file");
            fieldResume.value = "";
            return;
        }
    }
}

function checkIfAddressIsSameAsPermanent(fieldId) {
    console.log("hd",document.getElementById(fieldId).checked)
    if (document.getElementById(fieldId).checked) {
        document.getElementById('exampleCA').value = document.getElementById('examplePA').value;
    }
}

function submit() {
    console.log("I am here in submit")
    var validationErrorMessage = validateFormValues();
    if (!validationErrorMessage.length > 0) {
        alert(validationErrorMessage);
        return;
    }
}
