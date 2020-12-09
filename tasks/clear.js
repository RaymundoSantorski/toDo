const colors = require('colors');
const { getTasks } = require('./getTasks');
const { saveTask } = require('./saveTask');
let tasks;

const clear = async(state) => {
    tasks = getTasks();
    if (state === 'all') {
        tasks = [];
        saveTask(tasks);
        return 'Todas las tareas han sido eliminadas'.green;
    } else {
        let updatedTasks = tasks.filter(task => task.state !== state);
        tasks = updatedTasks;
        saveTask(tasks);
        return 'Tareas limpiadas satisfactoriamente'.green;
    }
}

module.exports = {
    clear
}