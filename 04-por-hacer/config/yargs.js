const argv = require('yargs')
    .command('create', 'crear nuevo elemento', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'agrega un nuevo elemento a la lista'
        }
    })
    .command('list', 'lista los elementos', {})
    .command('update', 'actualiza los elementos', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'actualiza un nuevo elemento a la lista'
        },
        complete: {
            default: true,
            alias: 'c',
            desc: 'Marca si la tarea esta completa'
        }
    })
    .command('delete', 'elimina un elemento de la lista', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'elimina elemento a la lista'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};