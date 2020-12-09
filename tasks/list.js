const { getTasks } = require('./getTasks');

const list = (state) => {
    let tasks = getTasks();
    if (state === 'all') {
        return tasks;
    } else {
        let updatedTasks = tasks.filter(task => task.state === state);
        return updatedTasks;
    }
}

module.exports = {
    list
}