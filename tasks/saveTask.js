const { getTasks } = require('./getTasks');
const fs = require('fs');

const saveTask = (tasks) => {
    let data = JSON.stringify(tasks);
    fs.writeFile('./toDo/toDo.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo crear la tarea');
        }
    });
    return 'Tarea creada con exito'.green;
}

module.exports = {
    saveTask
}