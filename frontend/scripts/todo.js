
function register(e) {
  e.preventDefault();

  let formData = {
    textareaValue: document.getElementById("area").value,
  };

  fetch("http://localhost:3001/todo/addTodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
    
      fetchTodosFromBackend();
    })
    .catch((error) => {
      console.error("Error:", error);
     
    });
}




document.addEventListener('DOMContentLoaded', function () {
  let addTodo = document.getElementById("addTodo")
  addTodo.addEventListener('submit', register);

  
  
});
