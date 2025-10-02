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

    const div=document.createElement("div");
    div.className="todo-app__item";
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
}

function clearAll(){
    todoList.innerText="";
    count=0;
    todoInfo.innerText="Bạn có 0 công việc cần xử lý";
}