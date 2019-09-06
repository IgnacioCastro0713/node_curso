//requireds
const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {


    console.log(`===========================`.rainbow);
    console.log(`        Tabla de ${base}`.blue);
    console.log(`===========================`.rainbow);


    for (let index = 1; index <= limit; index++) {
        console.log(`${base} * ${index} = ${index*base}\n`);
    }

}


let createFile = (base, limit = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL valor introducido "${ base.red }" no es un número`);
            return;
        }

        let data = '';
        let file = `tabla-${base}-hasta-el-${limit}.txt`;

        for (let index = 1; index <= limit; index++) {
            data += `${base} x ${index} = ${index*base}\n`;
        }


        fs.writeFile(`tablas/${file}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.blue(file));
        });

    });
}

module.exports = {
    createFile,
    listTable
};