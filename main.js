window.addEventListener('load', () => {
    const form = document.querySelector('#newTaskForm');
    const input = document.querySelector('#newTaskInput');
    const listElement = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert('Please enter a TODO')
            return;
        }

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        
        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');
        // taskContentElement.innerText = task;

        taskElement.appendChild(taskContentElement);
        const taskInputElement = document.createElement('input');
        taskInputElement.classList.add('text');
        taskInputElement.type = 'text';
        taskInputElement.value = task;
        taskInputElement.setAttribute('readonly', 'readonly');

        taskContentElement.appendChild(taskInputElement);

        const taskActionElement = document.createElement('div');
        taskActionElement.classList.add('actions');

        const editElement = document.createElement('button');
        editElement.classList.add('edit');
        editElement.innerHTML = 'Edit';

        const deleteElement = document.createElement('button');
        deleteElement.classList.add('done');
        deleteElement.innerHTML = "Remove Todo";
        
         taskElement.appendChild(taskActionElement);
        taskActionElement.appendChild(editElement);
        taskActionElement.appendChild(deleteElement);

       
        listElement.appendChild(taskElement);
        
        input.value = '';

      
        editElement.addEventListener('click', () => {
            if (editElement.innerText.toLowerCase() === "edit") {
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
                editElement.innerText = "Save";
            } else {
                taskInputElement.setAttribute("readonly", 'readonly');
                editElement.innerText = "Edit";
            }
           
        });

        deleteElement.addEventListener('click', () => {
            listElement.removeChild(taskElement);
            // alert("TASK REMOVED SUCCESSFULLY!!");
        })
         
    })
})