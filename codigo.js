

import productos from "./funciones/productos.js";


const container = document.getElementById('container');

const tTable = document.createElement('table');

const tHead = document.createElement('thead');
const tBody = document.createElement('tbody');


    const headerRow =document.createElement('tr');

    const titlesT =['ID','Nombre','Tipo','Marca','Precio','Descripción'];

    titlesT.map((title)=>{
        const th = document.createElement('th');
        th.textContent = title;
        headerRow.appendChild(th);
    })

    tHead.appendChild(headerRow);
tTable.appendChild(tHead);


productos.map((item)=>{
    const productoData = [item.id,item.nombre,item.producto,item.marca,`$ ${item.precio}`,item.descripcion];
    const tr = document.createElement('tr');   

    productoData.map((element)=>{
        const td = document.createElement('td');
        td.textContent = element;
        tr.appendChild(td);

    })

    tBody.appendChild(tr);
    
})

tTable.appendChild(tBody);
 container.appendChild(tTable);





//---------------------


// import productos from "./funciones/productos.js";

// const container = document.getElementById('container');

// // Crear elementos de la tabla
// const tTable = document.createElement('table');
// const tHead = document.createElement('thead');
// const tBody = document.createElement('tbody');

// // Crear una fila para los encabezados
// const headerRow = document.createElement('tr');

// // Definir los encabezados de la tabla
// const headers = ["ID", "Nombre", "Tipo", "Marca", "Precio", "Descripción"];

// // Crear th para cada encabezado
// headers.forEach(headerText => {
//     const th = document.createElement('th');
//     th.textContent = headerText;
//     headerRow.appendChild(th);
// });

// // Agregar la fila de encabezados al thead
// tHead.appendChild(headerRow);

// // Agregar el thead a la tabla
// tTable.appendChild(tHead);

// // Iterar sobre los productos y agregar cada fila al tbody
// productos.forEach(item => {
//     const productoData = [item.id, item.nombre, item.producto, item.marca, `$ ${item.precio}`, item.descripcion];
//     const tr = document.createElement('tr');

//     productoData.forEach(element => {
//         const td = document.createElement('td');
//         td.textContent = element;
//         tr.appendChild(td);
//     });

//     tBody.appendChild(tr);
// });

// // Agregar el tbody a la tabla
// tTable.appendChild(tBody);

// // Agregar la tabla al contenedor
// container.appendChild(tTable);
















