

function register(event){

event.preventDefault();

let formData = {

  EMAIL_ID: document.getElementById("email_id").value,
 PASSWORD: document.getElementById("password").value
};
console.log(formData);
fetch("http://localhost:3001/users/login", {
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
    window.location.href="./HomePage.html";
  }
})
.catch((error) => {
  console.error("Error:", error);
  
});
}
document.addEventListener('DOMContentLoaded',function(){
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', register); 
});
