document.addEventListener("DOMContentLoaded",()=>{
    console.log("all contents are loaded");
    const ourTodoForm=document.querySelector(".todo-form");
    const ourTodoForm2=document.querySelector(".todo-form2");
    const ourTodoList=document.getElementById("list-id");
    const nameDiv=document.getElementById("nameDiv2");
    console.log("todo dom:",ourTodoForm);
    const todoApp = document.querySelector(".todo-app")
    let counter=0;
    ourTodoForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log(event);
        const ourNewTask=document.getElementById("new-task");
        console.log("New task:",ourNewTask.value);
        
        if(ourNewTask.value.trim()!=""){
            counter++;
        const ourTaskItem=document.createElement("div");
        const checkBox=document.createElement("input");
        const labelArea=document.createElement("label");
        const deleteButton=document.createElement("button");
        const editButton=document.createElement("button");
        const taskCounter=document.createElement("p")
        taskCounter.className="task-counter";
        ourTaskItem.className="todo-item";
        checkBox.type="checkbox";
        labelArea.innerHTML=ourNewTask.value;
        labelArea.className="task-label";
        deleteButton.className="delete-button";
        deleteButton.innerText="X";
        editButton.className="edit-button";
        editButton.innerText="Edit";
        taskCounter.innerHTML="Task no: "+counter;

        ourTaskItem.appendChild(taskCounter);
        ourTaskItem.appendChild(checkBox);
        ourTaskItem.appendChild(labelArea);
        ourTaskItem.appendChild(deleteButton);
        ourTaskItem.appendChild(editButton);
        
        
        ourTodoList.appendChild(ourTaskItem);
        }

    });
    ourTodoForm2.addEventListener("submit",(event)=>{
        event.preventDefault();
        const name=document.createElement("h3");

        const nameInput=document.getElementById("name");
        nameInput.className="name2";
        name.innerHTML="Welcome "+nameInput.value;
        console.log("hello");
        console.log("Her name is",nameInput.value);
        // const nameItem=document.createElement("div");
        name.className="hiName";
        nameInput.innerHTML="";
        ourTodoForm2.appendChild(nameInput);
        nameDiv.appendChild(name);
        // nameInput.value = "";
       




    });


    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Enter task name to search";
    searchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            const searchName = searchInput.value.trim();
            if (searchName !== "") {
                const taskItems = document.querySelectorAll(".todo-item");
                taskItems.forEach((taskItem) => {
                    const taskLabel = taskItem.querySelector(".task-label").textContent;
                    // const taskLabel2=taskItem.querySelector(".spanCounter").textContent;
                    if (taskLabel.includes(searchName)) {
                        taskItem.style.backgroundColor = "yellow";
                    } else {
                        taskItem.style.backgroundColor = "";
                    }
                });
            }
        }
    });

    todoApp.insertBefore(searchInput, ourTodoList);

    // Rest of your code...



    ourTodoList.addEventListener('click',(event)=>{
        // event.preventDefault();
        if(event.target.matches(".delete-button")){
            
            
            if(confirm("Do you want to delete this?")){
                const item=event.target.parentElement;
                ourTodoList.removeChild(item);
            }
        }

    }
    );
    ourTodoList.addEventListener('click', (event) => {
        if (event.target.matches(".delete-button")) {
            if (confirm("Do you want to delete this?")) {
                const item = event.target.parentElement;
                ourTodoList.removeChild(item);
            }
        } else if (event.target.matches(".edit-button")) {
            const taskItem = event.target.parentElement;
            const label = taskItem.querySelector(".task-label");
            const currentLabel = label.textContent;
    
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentLabel;
            input.className = "edit-input";
    
            input.addEventListener('keyup', (e) => {
                if (e.key === "Enter") {
                    label.textContent = input.value;
                    label.style.display = "inline";
                    input.remove();
                }
            });
    
            input.addEventListener('blur', () => {
                if (input.value.trim() === "") {
                    const item = input.parentElement;
                    ourTodoList.removeChild(item);
                } else {
                    label.textContent = input.value;
                    label.style.display = "inline";
                    input.remove();
                }
            });
    
            label.style.display = "none";
            label.parentElement.insertBefore(input, label);
            input.focus();
        }
    });
    

    const deleteSelectedButton = document.querySelector('.delete-selected-button');

    deleteSelectedButton.addEventListener('click', () => {
        const selectedItems = document.querySelectorAll('.todo-item input[type="checkbox"]:checked');
        if (selectedItems.length > 0) {
            if (confirm('Do you want to delete selected items?')) {
                selectedItems.forEach((checkbox) => {
                    const item = checkbox.parentElement;
                    ourTodoList.removeChild(item);
                });
            }
        } else {
            alert('No items selected.');
        }
    });

});  