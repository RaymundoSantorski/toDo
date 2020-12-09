const colors = require('colors');
const { create, del, update, list, all, clear } = require('./config/tasks');
const argv = require('./config/yargs').argv;
let command = argv._[0];

switch (command) {
    case 'create':
        create(argv.name, argv.state)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        break;
    case 'update':
        update(argv.name, argv.state)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        break;
    case 'delete':
        del(argv.name)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        break;
    case 'list':
        tasks = list(argv.state);
        if (tasks.length >= 1) {
            console.log('=====Tareas====='.green);
            for (task of tasks) {
                task.state === 'true' ?
                    console.log(`- ${task.name}`.gray) :
                    console.log(`- ${task.name}`.blue);
            }
            console.log('==============='.green);
        } else {
            console.log('No hay tareas para mostrar'.red);
        }
        break;
    case 'all':
        all(argv.state)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        break;
    case 'clear':
        clear(argv.state)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido'.red);
}