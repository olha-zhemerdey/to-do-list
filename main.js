const list = document.querySelector(".todo-list");
const input = document.querySelector(".input-container input");
const button = document.querySelector(".btn");

button.addEventListener("click", clickBtn);
function clickBtn(e) {
  // If input is empty, don't add a task
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";
  li.innerText = input.value;
  input.value = ""; // Clear input field after adding task
  li.className = "todo-list-item";
  list.appendChild(li);
  li.appendChild(deleteBtn);

  // Add delete functionality
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
    updateDeleteButtonVisibility();
  });
}
