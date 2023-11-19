document.addEventListener('DOMContentLoaded', function() {
  class User {
    constructor(firstName, lastName, username, dateOfBirth, password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.dateOfBirth = dateOfBirth;
      this.password = password;
    }
  }
  function register(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const dateOfBirth = document.getElementById('dateofbirth').value;
    const password = document.getElementById('password').value;
    const newUser = new User(firstName, lastName, username, dateOfBirth, password);
    console.log(newUser);
  }
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', register);
});
