const argv = require('./config/yargs').argv;
const { createFile, listTable } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command.toLowerCase()) {
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(res => console.log(`The file ${res} has been saved`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('command not exist.');
        break;
}