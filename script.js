let inputData = document.querySelector(".inputData input");
let inputBtn = document.querySelector(".inputData button");
let ToDoList = document.querySelector(".ToDoList");
let content = document.querySelectorAll(".content");
let delBtn = document.querySelectorAll(".delBtn");

inputBtn.addEventListener("click", () => {
    let ID = inputData.value;
    let addList = ` 
        <div class="list">
            <h4 class="content">${ID}</h4>
            <button class="delBtn">Delete</button>
        </div>`;
    ToDoList.insertAdjacentHTML("beforeend", addList);
    content = document.querySelectorAll(".content");
    delBtn = document.querySelectorAll(".delBtn");
    inputData.value = "";
});

ToDoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delBtn")) {
        e.target.parentElement.remove();
    }
});
ToDoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("content")) {
        if (e.target.style.textDecoration == "line-through") {
            e.target.style.color = "black";
            e.target.style.textDecoration = "none";
        }
        else {
            e.target.style.textDecoration = "line-through";
            e.target.style.color = "red";
        }
    }
});