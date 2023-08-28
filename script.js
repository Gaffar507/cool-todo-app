// import{toDo}from"./js/module.js"
// // finding Elements
// const form=document.querySelector(".form-body");
// const input=document.querySelector(".input-todo");
// const todoLists=document.querySelector(".lists");
// const message=document.querySelector("#message");

// // storingMessage
// const storingMessage=()=>{
//     return localStorage.getItem("myTodos")? JSON.parse(localStorage.getItem("myTodos")):[];
// }
// // showMessage
// const showMessage=(text,status)=>{
//     message.classList.add(`bg-${status}`)
//     message.innerHTML=`${text}`
//     setTimeout(()=>{
//     message.innerHTML=""
//     message.classList.remove(`bg-${status}`)
//     },900)
// }
// // creatingTodo
// const creatingTodo=(newTodo)=>{
//     const list=document.createElement('li');
//     list.id=newTodo.newId;
//     list.classList.add("form-style");
//     list.innerHTML=`<span>${newTodo.value}</span> <span><button id="deleteBtn" class="deleteButton"><i class="fa-sharp fa-solid fa-trash"></i></button></span>`
//     todoLists.appendChild(list);
//     const deleteBtn=list.querySelector('.deleteButton');
//     deleteBtn.addEventListener("click",removeChild)
// }
// // removeChild
// const removeChild=(event)=>{
//     const selectedChild=event.target.parentElement.parentElement.parentElement;
//     todoLists.removeChild(selectedChild);
//     showMessage("Message is deleted!","danger");
//     const todos= storingMessage();
//     let todol=todos.filter((todo)=>todo.newId != selectedChild.id);
//         localStorage.setItem("myTodos",JSON.stringify(todol));
//     }
// // addTodo
// const addTodo=(event)=>{
//     event.preventDefault();
//     const value=input.value;
//     // creating newid
//     const newId=Date.now().toString();
//     const newTodo=new toDo(newId,value);
//     creatingTodo(newTodo);
//     showMessage("Message is saved.","success");
//     const todos= storingMessage();
//     todos.push(newTodo);
//     localStorage.setItem("myTodos",JSON.stringify(todos));
//     input.value="";
// }
// // loadTodo
// const loadTodo=()=>{
//     const todos= storingMessage();
//     todos.map((todo)=>creatingTodo(todo));
// }
// // addding listerner
// form.addEventListener("submit",addTodo);
// window.addEventListener("DOMContentLoaded",loadTodo);

// export Class
import { newTodo } from "./js/module.js";
// new practice
const form = document.querySelector(".form-body");
const input = document.querySelector(".input-todo");
const message = document.querySelector("#message");
const lists = document.querySelector(".lists");
// showMessage
const showMessage = (text, style) => {
  message.textContent = `Message is ${text}`;
  message.classList.add(`bg-${style}`);
  setTimeout(() => {
    message.textContent = "";
    message.classList.remove(`bg-${style}`);
  }, 800);
};
// storingMessage
const storingMessage = () => {
  return localStorage.getItem("myTodo")
    ? JSON.parse(localStorage.getItem("myTodo"))
    : [];
};
// creatingTodo
let count = 0;
const creatingTodo = (newClass) => {
  count++;
  const list = document.createElement("li");
  list.id = newClass.id;
  list.classList.add("form-style");
  list.innerHTML = `<span>${count}. ${newClass.value}</span><span><button class='deleteBtn' id='deleteBtn'><i class="fa-solid fa-trash"></i></button></span>`;
  lists.appendChild(list);
  const deleteButton = list.querySelector(".deleteBtn");
  deleteButton.addEventListener("click", removeTodo);
};
// removeTodo
const removeTodo = (event) => {
  const child = event.target.parentElement.parentElement.parentElement;
  lists.removeChild(child);
  showMessage("removed!", "danger");
  const todo = storingMessage();
  const newTodo = todo.filter((id) => id.id != child.id);
  localStorage.setItem("myTodo", JSON.stringify(newTodo));
};
// addingInformation
const addInfo = (event) => {
  event.preventDefault();
  const value = input.value;
  // random id generate
  const id = Date.now();
  const newClass = new newTodo(id, value);
  creatingTodo(newClass);
  showMessage("saved.", "success");
  const todo = storingMessage();
  todo.push(newClass);
  localStorage.setItem("myTodo", JSON.stringify(todo));
  input.value = "";
};
// reAddTodo
const reAddTodo = () => {
  const todo = storingMessage();
  todo.map((info) => creatingTodo(info));
};
// adding listener
form.addEventListener("submit", addInfo);
window.addEventListener("DOMContentLoaded", reAddTodo);
