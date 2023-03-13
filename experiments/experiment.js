// alert("JS code is working")

let xhr = new XMLHttpRequest(); //creating an instance of "XMLHttpRequest" which is going to be used to load the content from the CSV file
xhr.open('GET', 'tl1.csv', true); //'tl1' is the name of the CSV that is going to be read and is located in the same folder of the JS script

xhr.onload = function() { //execute the "onload" function once the CSV file is loaded 
    if (xhr.status === 200) { //verify that that the request is ok
        let csv = xhr.responseText; //store data in a variable called "csv"
        let objects = createObjFromCSV(csv); //use the function "createObjFromCSV" to create a matrix of obejcts from the content of the file
    }
}

xhr.send();



function createObjFromCSV(csv) { //this function is going to take the information from the CSV file and is going to return an object matrix, where each object represents a row of the CSV file and its properties correspond to the columns of the CSV file
    let lines = csv.split('\n'); 
    let headers = lines[0].split(';');
    let objects = [];

    for (let i = 0; i < lines.length; i++) {
        let currentLine = lines[i].split(';');
        let obj = {};

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentLine[j].trim();
        }
        objects.push(obj);
    }
    console.log(objects);
    // console.table(objects);
}

// console.log(objects);
// return objects;obj







// Sln de Gepito:

// function createObjFromCSV(csv) {
//     var lines = csv.split('\n');
//     var headers = lines[0].split(',');
//     var objects = [];
  
//     for (var i = 1; i < lines.length; i++) {
//       var currentLine = lines[i].split(',');
//       var obj = {};
  
//       for (var j = 0; j < headers.length; j++) {
//         obj[headers[j].trim()] = currentLine[j].trim();
//       }
  
//       objects.push(obj);
//     }
  
//     return objects;
//   }



// var csv = 'nombre,tiempo,porcentaje,descripcion\nEvento 1,2020,50,"Descripción del evento 1"\nEvento 2,2022,75,"Descripción del evento 2"\nEvento 3,2025,90,"Descripción del evento 3"';
// var objetos = createObjFromCSV(csv);

// console.log(objetos[0]); // {nombre: "Evento 1", tiempo: "2020", porcentaje: "50", descripcion: "Descripción del evento 1"}
// console.log(objetos[1]); // {nombre: "Evento 2", tiempo: "2022", porcentaje: "75", descripcion: "Descripción del evento 2"}
// console.log(objetos[2]); // {nombre: "Evento 3", tiempo: "2025", porcentaje: "90", descripcion: "Descripción del evento 3"}

