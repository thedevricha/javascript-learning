/* Project: To-Do List Application
Development points:
- Implement task storage using arrays
- Create functions for adding, removing, and updating tasks
- Use loops to display and manage tasks
- Implement input validation using conditional statements */

// Task storage using an array
let taskList = ['Wake up','Walking','Breakfast',"Work"];

// Function to add a task
function addTask(task){
    taskList.push(task);
    console.log("\nTask added");
}

// Function to remove a task
function removeTask(task){
    const index = taskList.indexOf(task);
    if(index !== -1){
        taskList.splice(index, 1);
        console.log("\nTask removed");
    }else{
        console.log("\nTask not found");
    }
}

// Function to update a task (mark as completed)
function updateTask(oldTask, newTask){
    const index = taskList.indexOf(oldTask);
    if(index !== -1){
        taskList[index] = newTask;
        console.log("\nTask updated");
    } else {
      console.log("\nTask not found");
    }
}

// Function to display tasks
function displayTasks(){
    console.log("== Tasks List ==");
    for(let i = 0; i < taskList.length; i++){
        console.log(taskList[i]);
    }
}

function runApp(){
    console.log("== To-Do List Application ==");
    console.log("Options:");
    console.log("1. Add task");
    console.log("2. Remove task");
    console.log("3. Update task");
    console.log("4. Display tasks");
    console.log("5. Quit");

    const option = 1;
 
    switch (option) {
        case 1:
          const task = "Lunch";
          addTask(task);
          displayTasks();
          break;
        case 2:
          const id = 'Breakfast';
          removeTask(id);
          displayTasks();
          break;
        case 3:
          const updateTsk = "Wake up at 6am";
          const oldTsk = "Wake up";
          updateTask(oldTsk, updateTsk);
          displayTasks();
          break;
        case 4:
          displayTasks();
          break;
        case 5:
          console.log("Goodbye!");
          return;
        default:
          console.log("Invalid option. Please try again.");
    }
}

// Run the application
runApp()