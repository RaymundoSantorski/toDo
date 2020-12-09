const { getTasks } = require('./getTasks');
const { saveTask } = require('./saveTask');
let tasks;

const del = async(name) => {
    tasks = getTasks();
    let updatedTasks = tasks.filter(task => task.name != name);
    if (tasks.length !== updatedTasks.length) {
        tasks = updatedTasks;
        saveTask(tasks);
        return 'Tarea eliminada satisfactoriamente'.green;
    } else {
        return 'No existe una tarea con ese nombre'.red;
    }
}

module.exports = {
    del
}