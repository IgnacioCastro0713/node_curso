const fs = require('fs');
const { red, blue, green } = require('colors');

let listToDo = [];

const db = () => {
    try {
        return require('../db/data.json.js');
    } catch (error) {
        return [];
    }

}

const save = (json, msg = true) => {

    let data = JSON.stringify(json);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (!err) {
            if (msg) console.log('Guardado correctamente '.blue);
        } else {
            throw new Error('Error: ', err);
        }
    });

}

const list = () => {

    listToDo = db();

    console.log('Lista de tareas:'.magenta);

    listToDo.forEach((element, index) => {
        console.log(`==== Tarea ${index+1} ====`.green);
        console.log('Descripción: ' + element.description);
        console.log('Estado: ' + element.complete);
    });
}

const create = (description) => {

    if (description === "") {
        console.log('Descripción no puede estar nulo.'.red);
        return;
    }

    listToDo = db();

    let toDo = {
        description,
        complete: false
    };

    listToDo.push(toDo);

    save(listToDo);

}

const update = (description, complete = true) => {

    listToDo = db();

    let index = listToDo.findIndex(toDo => toDo.description === description);

    if (index >= 0) {
        listToDo[index].complete = complete;
        save(listToDo, false);
        console.log('Actualizada corectamente'.blue);
    } else {
        console.log('No existe elemento con esta con la descripción indicada'.red);
    }

}

const destroy = (description) => {

    listToDo = db();

    let index = listToDo.findIndex(toDo => toDo.description === description);

    if (index >= 0) {
        listToDo.splice(index, 1);
        save(listToDo, false);
        console.log('Eliminado correctamente'.blue);
    } else {
        console.log('No existe elemento con esta con la descripción indicada'.red);
    }

}

module.exports = {
    list,
    create,
    update,
    destroy
};