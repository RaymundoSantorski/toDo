const { getTasks } = require('./getTasks');
const { saveTask } = require('./saveTask');
let tasks;

const update = async(name, state) => {
    tasks = getTasks();
    let index = tasks.findIndex(task => task.name === name);
    if (index >= 0) {
        tasks[index].state = state;
        saveTask(tasks);
        return 'Tarea actualizada satisfactoriamente'.green;
    } else {
        return `No se encontró la tarea ${name.white}`.red;
    }

}

module.exports = {
    update
}