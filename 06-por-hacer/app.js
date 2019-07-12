const argv = require('./config/yargs').argv;
const { create, list, update, destroy } = require('./to-do/to-do');

let command = argv._[0];

switch (command.toLowerCase()) {
    case 'create':
        create(argv.description);
        break;
    case 'list':
        list();
        break;
    case 'update':
        update(argv.description, argv.complete);
        break;
    case 'delete':
        destroy(argv.description);
        break;
    default:
        console.log('Comando no reconocido'.red);
        break;
};