const colors = require('colors');
const { getTasks } = require('./getTasks');
const { saveTask } = require('./saveTask');
let tasks;

const all = async(state) => {
    tasks = getTasks();
    for (task of tasks) {
        task.state = state;
    }
    saveTask(tasks);
    return 'Tareas actualizadas satisfactoriamente'.green;
}

module.exports = {
    all
}