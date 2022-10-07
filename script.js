const formEl=document.querySelector(".form");

const inputEl=document.querySelector(".input");
const ulEl=document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));

list?.forEach (task=> {
    toDoList(task)
});

formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      toDoList()
});

function toDoList(task)
{
    /* putting the entered input in the list */
     let newTask=inputEl.value;
     if(task){
        newTask=task.name
     }

     const liEl=document.createElement("li");

     if(task && task.checked){
        liEl.classList.add("checked");
     }

     liEl.innerText=newTask;
     ulEl.appendChild(liEl);
     inputEl.value="";

     /* making tick green on adding task to the list */
     const checkBtnEl=document.createElement("div");
     checkBtnEl.innerHTML= `<i class="fa-solid fa-circle-check">`;
     liEl.appendChild(checkBtnEl);

     /* making trash symbol red */
     const trashBtnEl=document.createElement("div");
     trashBtnEl.innerHTML=`</i><i class="fa-solid fa-trash"></i>`;
     liEl.appendChild(trashBtnEl);

     /* crossing the completed tasks */
     checkBtnEl.addEventListener("click", ()=> {
        liEl.classList.toggle("checked");
        updateLocalStorage();
     });

     /* deleting the items when trash icon is clicked */
     trashBtnEl.addEventListener('click',()=>{
        liEl.remove();
        updateLocalStorage()
     });
        updateLocalStorage()
    }

     /* to store the data in the local storage */
     function updateLocalStorage()
     {
        const liEls=document.querySelectorAll("li");
         list=[];
        liEls.forEach(liEl =>{
            list.push({
                name: liEl.innerText,
                checked: liEl.classList.contains("checked")
            })
        })
        localStorage.setItem("list",JSON.stringify(list));
     }

