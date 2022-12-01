window.onload = function init() {
  let columnsCount = 6;
  let body = document.body;
  // create button
  let createButton = document.createElement('button')
  createButton.setAttribute('id', 'createButton')
  createButton.textContent = "CREAR USUARIO"
  createButton.style.margin = "20px"
  createButton.style.background = "#b3d977"
  createButton.addEventListener('click', function () {
    CREATE()
  });
  body.appendChild(createButton)

  // table
  let table = document.createElement('table')
  table.setAttribute('id', 'usersTable')
  table.style.width = '100%';
  table.style.border = '1px solid black';
  table.style.margin = "20px"
  // header
  let thead = table.createTHead();
  let tr = thead.insertRow();
  for (let j = 0; j < columnsCount; j++) {
    let th = tr.insertCell();
    switch(j) {
      case 0:
        th.appendChild(document.createTextNode(`ID`));
        break;
      case 1:
        th.appendChild(document.createTextNode(`NOMBRES`));
        break;
      case 2:
        th.appendChild(document.createTextNode(`APELLIDOS`));
        break;
      case 3:
        th.appendChild(document.createTextNode(`EDAD`));
        break;
      case 4:
        th.appendChild(document.createTextNode(`PROFESIÓN`));
        break;
      case 5:
        th.appendChild(document.createTextNode(`CREATED_AT`));
        break;
    }
    th.style.border = '1px solid black';
  }
  tableBody = table.createTBody();
  body.appendChild(table);

  // update button
  let updateButton = document.createElement('button')
  updateButton.setAttribute('id', 'updateButton')
  updateButton.textContent = "MODIFICAR REGISTRO"
  updateButton.style.margin = "20px"
  updateButton.style.background = "#f8c3ca"
  updateButton.addEventListener('click', function () {
    let id = prompt('Ingrese el id del usuario que desea modificar')
    UPDATE(id)
  })
  body.appendChild(updateButton)

  // delete button
  let deleteButton = document.createElement('button')
  deleteButton.setAttribute('id', 'deleteButton')
  deleteButton.textContent = "BORRAR REGISTRO"
  deleteButton.style.margin = "20px"
  deleteButton.style.background = "#f17c7b"
  deleteButton.style.marginLeft = "10px"
  deleteButton.addEventListener('click', function () {
    let id = prompt('Ingrese el id del usuario que desea eliminar')
    DELETE(id)
  })
  body.appendChild(deleteButton)

}


let users = []
let tableBody

updateRows = function () {
  tableBody.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let row = tableBody.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = users[i].id;
    cell2.innerHTML = users[i].nombre;
    cell3.innerHTML = users[i].apellido;
    cell4.innerHTML = users[i].edad;
    cell5.innerHTML = users[i].profesion;
    cell6.innerHTML = users[i].created_at;
  }
}

updateRow1 = function (id) {
  let user = users.filter(x => x.id == id);
  if (user.length == 0) {
    alert('El usuario no existe')
  } else {
    user = user[0];
    let newUser = prompt("Ingrese la informacion del usuario con el id: " + id + ": (nombre, apellido, edad, profesion)")
    newUser = newUser.split(", ")
    user.nombre = newUser[0]
    user.apellido = newUser[1]
    user.edad = newUser[2]
    user.profesion = newUser[3]
    updateRows()
  }
}

function CREATE() {
  let user = prompt("Ingrese la información del usuario (nombre, apellido, edad, profesion)")
  user = user.split(", ")
  let id = users.length + 1
  const fec = new Date().toISOString()
  users.push(
  {id: id, nombre: user[0], apellido: user[1], edad: user[2], profesion: user[3], created_at: fec}
  )
  updateRows()
}

function UPDATE(id) {
  let user = users.filter(x => x.id == id)
  const fec = new Date().toISOString()
  if (user.length === 0) {
    alert("El usuario no existe")
    updateRows()
  } else {
    user = user[0]
    let nuevoUsuario = prompt("Ingrese la informacion del usuario con el id: " + id + ": (nombre, apellido, edad, profesion)")
    nuevoUsuario = nuevoUsuario.split(", ")
    user.nombre = nuevoUsuario[0]
    user.apellido = nuevoUsuario[1]
    user.edad = nuevoUsuario[2]
    user.profesion = nuevoUsuario[3]
    user.created_at = fec
    updateRows()
  }
}

function DELETE(id) {
  let user = users.filter(x => x.id == id)
  console.log(user)
  if (user.length === 0) {
    alert("El usuario no existe")
  } else {
    //user=user[0]
    let confirmar = prompt("Esta usted seguro? Si/No")
    if (confirmar === "Si" || confirmar==="SI" || confirmar==="si") {
      users.splice(user,1)
      updateRows()
      //console.log(users)
    } else {
      updateRows()
    }
  }
}

// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.
 
// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.
 
// OPCIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.
 
// OPCIONAL2: Crear un selector que permita filtrar los datos por fecha.