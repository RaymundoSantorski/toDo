const getTasks = () => {
    let tasks;
    try {
        tasks = require('../toDo/toDo.json');
    } catch (err) {
        tasks = [];
    } finally {
        return tasks;
    }
}

module.exports = {
    getTasks
}