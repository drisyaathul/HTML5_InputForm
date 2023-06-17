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
let emailRegex = RegExp(('^[0-9a-z]+([+.-]([a-z0-9]+))*[@][a-z]+[.][a-z]{2,4}([.][a-z]{2,4})?$'));
if (emailRegex.test(email.value)) 
    emailError.textContent = "";
 else 
    emailError.textContent = "Invalid Email Address";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-ouput');
output.textContent = salary.value;
salary.addEventListener('input', function(){
output.textContent = salary.value;
});