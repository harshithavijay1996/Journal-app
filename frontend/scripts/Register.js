
function RegistrationForm(event){
    event.preventDefault();

let formData = {
  
     FIRST_NAME: document.getElementById("firstname").value,
     LAST_NAME: document.getElementById("lastname").value,
     EMAIL_ID: document.getElementById("email").value,
     PASSWORD: document.getElementById("password").value
};
console.log(formData);
fetch("http://localhost:3001/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
     
      if(data?.EMAIL_ID){
        console.log("data",data)
        window.location.href="./HomePage.html";}
    })
    .catch((error) => {
      console.error("Error:", error);
      
    });
}

document.addEventListener('DOMContentLoaded',function(){
    let registerForm = document.getElementById("registerForm")
    registerForm.addEventListener('submit', RegistrationForm); 
});
