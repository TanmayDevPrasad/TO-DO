let inputbox = document.getElementById("user-input");
let addbtn = document.getElementById("btn");

// Load previous tasks from localStorage
const arrTask = JSON.parse(localStorage.getItem("taskList")) || [];

// Function to insert a new task in the pending list
function insertTask(text) {
    let newtask = document.createElement("li");
    newtask.innerHTML = `
        <div class="taskside">${text}</div>
        <img src="cancel_45dp_E8EAED_FILL0_wght700_GRAD200_opsz48.svg" alt="" class="deletebtn">
    `;

    document.getElementById("pendingtasks").appendChild(newtask);

    // Attach delete event to the new delete button
    newtask.querySelector(".deletebtn").addEventListener("click", () => {
        deleteTask(text, newtask);
    });
}

// Function to delete a specific task
function deleteTask(taskText, taskElement) {
    // Remove the task from the UI
    taskElement.remove();

    // Remove the task from the array
    const taskIndex = arrTask.indexOf(taskText);
    if (taskIndex !== -1) {
        arrTask.splice(taskIndex, 1); // Remove from array
        localStorage.setItem("taskList", JSON.stringify(arrTask)); // Update localStorage
    }
}

// Load saved tasks on page reload
arrTask.forEach(insertTask);

//Add new task on pressing enter
inputbox.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        if (inputbox.value === "") {
            alert("Hey, you gotta type something first 😕");
        } else {
            const taskText = inputbox.value;
            arrTask.push(taskText);
            insertTask(taskText);

            // Update localStorage
            localStorage.setItem("taskList", JSON.stringify(arrTask));

            // Clear the input box after adding task
            inputbox.value = "";
        }
    }
})


// Add a new task on button click
addbtn.addEventListener("click", () => {
    if (inputbox.value === "") {
        alert("Hey, you gotta type something first 😕");
    } else {
        const taskText = inputbox.value;
        arrTask.push(taskText);
        insertTask(taskText);

        // Update localStorage
        localStorage.setItem("taskList", JSON.stringify(arrTask));

        // Clear the input box after adding task
        inputbox.value = "";
    }
});
