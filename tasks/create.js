const fs = require('fs');
const colors = require('colors');
const { getTasks } = require('./getTasks');
const { saveTask } = require('./saveTask');
let tasks;

const create = async(name, state) => {
    tasks = getTasks();
    const task = {
        name,
        state
    }
    tasks.push(task);
    saveTask(tasks);
    return 'Tarea creada con exito'.green;
}

module.exports = {
    create
}