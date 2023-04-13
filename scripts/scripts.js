// function that adds a task

function addTask() {

    // task title
    
    const taskTitle = document.querySelector("#task-title").value;
    
    if (taskTitle) {
    
        // clone template
        const template = document.querySelector(".template")
    
        const newTask = template.cloneNode(true);
    
        // add title
        newTask.querySelector(".task-title").textContent = taskTitle
    
        // remove unused classes
        newTask.classList.remove("template")
        newTask.classList.remove("hide")
    
        // add task to the list
        const list = document.querySelector("#task-list")
    
        list.appendChild(newTask);
    
        // add remove event
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        })
    
        // add complete task event
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        })
    
        document.querySelector("#task-title").value = ""
    }
    }
    
    // function to remove task
    function removeTask(task){
    task.parentNode.remove(true);
    }
    
    // function to complete task
    function completeTask(task){
    
    const taskToComplete = task.parentNode;
    
    taskToComplete.classList.toggle("done");
    }
    
    // add task event
    
    const addBtn = document.querySelector("#add-btn");
    
    addBtn.addEventListener("click", function (e) {
    
    e.preventDefault();
    
    addTask()
    })