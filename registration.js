function register(e){
    e.preventDefault();
    let firstName= document.getElementById("firstname").value;
    let lastName= document.getElementById("lastame").value;
    let username= document.getElementById("username").value;
    let dob= document.getElementById("dob").value;
    let password= document.getElementById("password").value;

let details = {
    firstName: firstName,
    lastName:lastName,
    username :username,
    dob :dob,
    password: password
};
console.log(details);

};
document.addEventListener('DOMContentLoaded',function(){
    let registerform = document.getElementById("registerForm")
    registerform.addEventListener('submit', register); 
});