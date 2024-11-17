const list = document.querySelector(".todo-list")
const input = document.querySelector(".input-container input")
const button = document.querySelector(".btn")

button.addEventListener ('click', clickBtn);
function clickBtn(e) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    li.innerText = input.value;
    input.value = "";
    li.className = "todo-list-item"
    list.appendChild(li)
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener ('click', () => {
        list.removeChild(li) })  
    }
