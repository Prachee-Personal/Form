var firstname = document.getElementById("examplefirstName");
var lastname = document.getElementById("examplelastName");
var age = document.getElementById("exampleage");
var gender = document.getElementById("examplegender");
var email = document.getElementById("exampleEmail");
var mobilenumber = document.getElementById("exampleMobileNumber");
var picture = document.getElementById("examplepicture");
var resume = document.getElementById("exampleresume");
var hobby = document.getElementById("hobby");
var skill = document.getElementById("exampleskills");
var registrationForm = document.getElementById("myform");
 registrationForm.addEventListener("submit", (event) => {
//     console.log("yaha");
//     event.preventDefault();
     submit();
 });


function validateFields(fieldId) {
    var onlyTextRegex = /[^a-zA-Z]+/;
    var onlyNumberRegex = /[^0-9]+/;
    var element = document.getElementById(fieldId);


    if (element.type == "text" && element.id == "exampleMobileNumber") {
        element.value = element.value.replace(onlyNumberRegex, "");
    }
    else if (element.type == "text") {
        element.value = element.value.replace(onlyTextRegex, "");
    } else if (element.type == "number") {
        element.value = element.value.replace(onlyNumberRegex, "");
    }
}

function validateFormValues() {

    var onlyInidanMobileRegex = /^[6-9]\d{9}$/;
    // alert(onlyInidanMobileRegex)
    console.log("The length of mobile is " +mobilenumber.value.length);
    console.log("(mobilenumber.value.length != 10)",(mobilenumber.value.length != 10));
    console.log("(onlyInidanMobileRegex.test(mobilenumber.value))",(onlyInidanMobileRegex.test(mobilenumber.value)))
    if ((mobilenumber.value.length != 10) || !(onlyInidanMobileRegex.test(mobilenumber.value))) {
        mobilenumber.focus();
        return `Please enter a valid mobile number that begins with either numbers that is 6,7,8 or 9,
        Also the mobile number must be exactly 10 digits long`;
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
            alert("Please select a valid picture type file such as .jpg,.png,.gif,.jpeg");
            fieldPicture.value = "";
            return;
        }

    } else if (fieldId == 'exampleresume') {
        var fieldResume = document.getElementById('exampleresume');
        var resumePath = fieldResume.value;
        var allowedResumeExtensions =
            /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i
        if (!allowedResumeExtensions.exec(resumePath)) {
            alert("Please select a valid resume type file such as .doc,.docx,.odt,.pdf,.text,.txt,.wps,.wks");
            fieldResume.value = "";
            return;
        }
    }
}

function checkIfAddressIsSameAsPermanent(fieldId) {
    if (document.getElementById(fieldId).checked) {
        document.getElementById('exampleCA').value = document.getElementById('examplePA').value;
    }
}

function submit() {
    // alert("I am here in submit");
    console.log("I am here in submit")
    var validationErrorMessage = validateFormValues();
    if (validationErrorMessage.length > 0) {
        alert(validationErrorMessage);
        return;
    }
    return false;
}
