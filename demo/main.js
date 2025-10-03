const input=document.getElementById("todo-input");
const addBtn=document.getElementById("add-btn");
const todoList=document.getElementById("todo-list");
const todoInfo=document.getElementById("todo-info");
const clearBtn=document.getElementById("clear-btn");
const validation=document.getElementById("validation");

let count=0;
function todoContext(){
    count=todoList.children.length;
    todoInfo.innerText=`Bạn có ${count} công việc cần xử lý`;
}
function onChangeInput(){
    validation.innerText="";
}
function addTask(){
    const value=input.value.trim();
    if(value==""){
        validation.innerText="Giá trị nhập vào không được để trống";
        return;
    }

    const tasks=todoList.querySelectorAll(".todo-app__display");
    let isDuplicate = false;
    tasks.forEach(task =>{
        if(task.textContent.trim() == value){
            isDuplicate=true
        }
    });
    if(isDuplicate){
        validation.innerText = "Task này đã tồn tại!";
    return;
    }

    const div=document.createElement("div");
    div.className="todo-app__item";
    div.draggable=true;
    todoList.appendChild(div);

    const task= document.createElement("p");
    task.className="todo-app__display";
    task.innerText=value;

    const icon=document.createElement("i")
    icon.className="fa-solid fa-trash icon-trash";

    icon.addEventListener("click", function(){
        div.remove();
        todoContext();
    });

    div.appendChild(task);
    div.appendChild(icon);
    todoContext();

    input.value="";

    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragover",dragOver);
    div.addEventListener("drop",drop);

}

function searchTask() {
    const keyword = document.getElementById("search-input").value;
    const items = document.querySelectorAll(".todo-app__item");
  
    items.forEach(item => {
      const text = item.querySelector(".todo-app__display").textContent;
      if (text.includes(keyword)) {
        item.style.display = "flex"; 
      } else {
        item.style.display = "none";
      }
    });
}


function clearAll(){
    todoList.innerText="";
    count=0;
    todoInfo.innerText="Bạn có 0 công việc cần xử lý";
}

let draggedItem = null;

function dragStart(){
    draggedItem=this;
}

function dragOver(e){
    e.preventDefault();
    if (this != draggedItem) {
        // Hoán đổi vị trí giữa draggedItem và this
        let draggedNext = draggedItem.nextSibling;
        let targetNext = this.nextSibling;

        let parent = this.parentNode;

        // draggedItem đứng trước this
        if (draggedNext == this) {
            parent.insertBefore(this, draggedItem);
        }
        // this đứng trước draggedItem
        else if (targetNext == draggedItem) {
            parent.insertBefore(draggedItem, this);
        } else {
            parent.insertBefore(draggedItem, targetNext);
            parent.insertBefore(this, draggedNext);
        }
    }
}

function drop(e){
    e.preventDefault();
    draggedItem = null;
}
