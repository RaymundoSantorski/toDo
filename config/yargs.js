const name = {
    demand: 'true',
    alias: 'n'
}

const argv = require('yargs')
    .command('create', 'Crea una nueva tarea', {
        name,
        state: {
            alias: 's',
            default: 'false'
        }
    })
    .command('update', 'Actualiza una tarea existente', {
        name,
        state: {
            alias: 's',
            default: 'true'
        }
    })
    .command('delete', 'Elimina una tarea', {
        name
    })
    .command('list', 'Lista las tareas almacenadas', {
        state: {
            alias: 's',
            default: 'all'
        }
    })
    .command('all', 'Marca todas las tareas con el mismo estado', {
        state: {
            alias: 's',
            demand: true
        }
    })
    .command('clear', 'Elimina las tareas que cumplan con la condicion, si no se especifica, se eliminan todas las tareas', {
        state: {
            alias: 's',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}