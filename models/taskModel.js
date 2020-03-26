const taskModel = {
    tasks: [],

    getAllTasks : function(){
        return this.tasks;
    },

    getTaskById : function(id) {
        let tasksFound = this.getAllTasks().filter(
            currentTask => currentTask.id === id
        );

        if(tasksFound.length >= 1) return tasksFound[0];
        else return null;
    },

    addTask: function(task) {
        if ( !task.name && !task.creator)
            throw new Error ("Name and Creator are required!");
        
        let taskToAdd = {
            id: this.getAllTasks().length ?
               this.task[this.tasks.length -1].id + 1
               : 1,
            name: task.name,
            description: task.description ? task.description : "",
            done: task.done ? task.done : false,
            deadline: task.deadline ? task.deadline : "",
            creator: task.creator,
            assigned: task.assigned ? task.assigned : ""
        };

        this.tasks.push(taskToAdd);
        return this.getTaskById(taskToAdd.id);
    },

    editTask: function(id, task) {
        let indexOfTaskToEdit = this.tasks.findIndex(
            currentTask => currentTask.id === id
        );

        if(indexOfTaskToEdit === -1)
            throw new Error( "Task doesn t exist");

        let originalTask = this.tasks[indexToTaskToEdit];

        let editedTask = {
            id: originalTask.id,
            name: task.name ? task.name : originalTask.name,
            description: task.description ? task.description : originalTask.description ,
            done: task.done ? task.done : originalTask.done,
            deadline: task.deadline ? task.deadline : originalTask.deadline,
            creator: task.creator ? task.creator : originalTask.creator,
            assigned: task.assigned ? task.assigned : originalTask.assigned
        };

        this.tasks[indexOfTaskToEdit] = editedTask;
        return this.getTaskById(editedTask.id);
    },

    deleteTask: function(id) {
        let indexOfTaskToDelete = this.tasks.findIndex(
            currentTask => currentTask.id === id
        );

        if(indexOfTaskToDelete === -1)
         throw new Error ("product does t exist");

         return this.tasks.splice(indexOfTaskToDelete, 1)[0];
    }
}

module.exports = taskModel;