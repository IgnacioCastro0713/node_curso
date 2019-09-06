const opctions = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('List', 'imprime en consola la tabla de multiplicar', opctions) //node app List --help
    .command('Create', 'crea archivo de tabla de multiplicar', opctions) //node app Create --help
    .help() //node app --help
    .argv;

module.exports = {
    argv
}