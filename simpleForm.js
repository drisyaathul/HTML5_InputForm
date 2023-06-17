const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
if (nameRegex.test(text.value)) 
    textError.textContent = "";
 else 
    textError.textContent = "Name is Incorrect";
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
let emailRegex = RegExp("^[0-9a-z]+([+.-]([a-z0-9]+))*[@][a-z]+[.][a-z]{2,4}([.][a-z]{2,4})?$");
if (emailRegex.test(email.value)) 
    emailError.textContent = "";
 else 
    emailError.textContent = "Invalid Email Address";
});

const phoneNumber = document.querySelector('#tel');
const numberError = document.querySelector('.tel-error');
phoneNumber.addEventListener('input', function(){
let numberRegex = RegExp("^[91][0-9]{10}$");
if (numberRegex.test(phoneNumber.value))
    numberError.textContent = " ";
 else 
    numberError.textContent = "Invalid Phone Number";
});

const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
let passwordRegex = RegExp("^[a-zA-z]{8,}$");
if (passwordRegex.test(password.value)) 
    passwordError.textContent = "";
 else 
    passwordError.textContent = "Invalid Paasword";
});

