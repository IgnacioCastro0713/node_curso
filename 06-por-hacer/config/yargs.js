const description = {
    demand: true,
    alias: 'd',
    desc: 'Mensaje de tarea completada'
};

const argv = require('yargs')
    .command('create', 'crear nuevo elemento', { description })
    .command('list', 'lista los elementos', {})
    .command('update', 'actualiza los elementos', {
        description,
        complete: {
            default: true,
            alias: 'c',
            desc: 'Marca si la tarea esta completa'
        }
    })
    .command('delete', 'elimina un elemento de la lista', { description })
    .help()
    .argv;

module.exports = {
    argv
};