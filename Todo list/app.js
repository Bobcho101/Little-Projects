const createTaskForm = document.querySelector("#form-create");

createTaskForm.addEventListener('submit', createTaskHandler);


function createTaskHandler(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const taskText = formData.get('task');
    if(taskText.trim() === "") return alert('The field cannot be empty!');

    const taskList = document.querySelector("#to-do-list");

    const li = document.createElement('li');
    const div = document.createElement('div');
    div.className = 'remove-task-btn';
    div.textContent = '✅';
    const a = document.createElement('a');
    a.textContent = taskText;


    div.addEventListener('click', (e) => {
        const parentLi = e.target.parentNode;
        parentLi.remove();
        checkForZeroTasks();
    });
    
    li.appendChild(div);
    li.appendChild(a);
    taskList.appendChild(li);
    const taskInputEl = document.querySelector("#task-input");
    taskInputEl.value = "";
    checkForZeroTasks();
}



function checkForZeroTasks() {
    const tasksList = document.querySelector("#to-do-list");
    let noTasksH1 = document.querySelector("#no-tasks-notif");

    if (tasksList.children.length === 0) {
        if (!noTasksH1) { 
            noTasksH1 = document.createElement('h1');
            noTasksH1.id = "no-tasks-notif";
            noTasksH1.textContent = 'No Tasks';
            tasksList.parentNode.insertBefore(noTasksH1, tasksList);
        }
    } else {
        if (noTasksH1) { 
            noTasksH1.remove();
        }
    }
}

checkForZeroTasks();