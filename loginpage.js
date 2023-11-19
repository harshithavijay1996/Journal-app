document.addEventListener('DOMContentLoaded', function() {
  // Define a User class
  class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }
  function register(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const newUser = new User(username, password);
    console.log(newUser);
  }
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', register);
});
