let students = [
    {
        codigo: "1001",
        nombre: "Alberto",
        apellido: "Gonzales",
        profile_picture: "https://randomuser.me/api/portraits/men/54.jpg",
        email: ""
    },
    {
        codigo: "1102",
        nombre: "Yadira",
        apellido: "Sanchez",
        profile_picture: "https://randomuser.me/api/portraits/women/60.jpg",
        email: ""
    },
    {
        codigo: "1203",
        nombre: "Carol",
        apellido: "Martinez",
        profile_picture: "https://randomuser.me/api/portraits/women/62.jpg",
        email: ""
    },
    {
        codigo: "1042",
        nombre: "Junior",
        apellido: "Prieto",
        profile_picture: "https://randomuser.me/api/portraits/men/44.jpg",
        email: ""
    },
    {
        codigo: "1025",
        nombre: "Pedro",
        apellido: "Ampuero",
        profile_picture: "https://randomuser.me/api/portraits/men/48.jpg",
        email: ""
    },
    {
        codigo: "1018",
        nombre: "Ines",
        apellido: "Valencia",
        profile_picture: "https://randomuser.me/api/portraits/women/44.jpg",
        email: ""
    },
    {
        codigo: "1104",
        nombre: "Anita",
        apellido: "Quispe",
        profile_picture: "https://randomuser.me/api/portraits/women/35.jpg",
        email: ""
    },
    {
        codigo: "1246",
        nombre: "Armando",
        apellido: "Paredes",
        profile_picture: "https://randomuser.me/api/portraits/men/64.jpg",
        email: ""
    },
]
 
// 1. Crear una funcion que ordene a los estudiantes en funcion de su codigo, nombre o apellido
function ordenarArregloDeObjetosPorParametro(arreglo, parametro){
    const parametrosValidos = Object.keys(arreglo[0])
    if (parametrosValidos.includes(parametro)){
        if (typeof arreglo[0][parametro] === "number"){
            return arreglo.sort((a,b) => a[parametro] - b[parametro])    
        } else {
            return arreglo.sort((a,b) => a[parametro].localeCompare(b[parametro]))
        }
    } else {
        console.log(`Por favor utilice uno de los parametros validos: ${parametrosValidos.join(' - ')}`)
    }
}
 
// 2. Crear una funcion que genere un correo electronico en base a el nombre y apellido del alumno.
// Ejemplo: Andres Perez -> aperez@mtpecertus.com
// La funcion debe verificar que no existan dos personas con el mismo email.En caso asi sea se agregara
// un numero al nombre del correo.
// Ejemplo: Anita Perez -> aperez2@mtpecertus.com

function generarCorreo(arreglo) {
    for (const object of arreglo){
        let email = `${object.nombre.charAt(0)}${object.apellido}@mtpecertus.com`.toLowerCase() //aperez@mtpecertus.com
        let filteredByMail = arreglo.filter(obj => obj.email === email)
        if (filteredByMail.length > 0){
            object.email=`${object.nombre.charAt(0)}${object.apellido}${filteredByMail.length + 1}@mtpecertus.com`.toLowerCase()
            //object.email=`${object.nombre.charAt(0)}${object.apellido}${object.codigo}@mtpecertus.com`.toLowerCase()
        } else {
            object.email = email
        }
        console.log(arreglo)
    }
    
}
 
// 3. Crear una funcion que permita crear un nuevo alumno pidiendo los datos a traves de un prompt al
// usuario. OJO: Recuerda que el correo es autogenerado. El profile_picture debe ser llenado con la api
// https://randomuser.me/api/portraits/{gender}/{number}.jpg. Para efectos del ejercicio, dos personas
// podrian compartir la misma foto de perfil.
function crearNuevoElemento(arreglo){
    let attributes = Object.keys(arreglo[0])
    let newElement = {}

    for(const index in attributes){
        newElement[attributes[index]] = prompt(`Ingrese el ${attributes[index]}`)// newElement["codigo"]
    }
    arreglo.push(newElement)

    return arreglo
}
 
// 4. Crea un input text para ingresar parametros de busqueda de alumnos y que renderice la informacion
// del alumno al hacer submit en el boton de "buscar".
function buscarAlumno(parametro, valor){
    let busqueda = students.filter((student => student[parametro] === valor)) // Array
    let respuesta
    if (busqueda.length === 0){
        respuesta = "No se encontraron registros"
    } else if (busqueda.length === 1){
        respuesta = Object.entries(busqueda[0]) // {nombre: "Julio", apellido: "Martinez"} => [[nombre, "Julio"], [apellido, "martinez"]]
    } else {
        respuesta = "Son muchos registros por favor utilice otro parametro de busqueda"
    }
    return respuesta
}
const root = document.getElementById("root")
const inputParametro = document.createElement("input")
const inputValor = document.createElement("input")
const button = document.createElement("button")
const respuesta = document.createElement("p")
button.textContent = "Buscar"
root.append(inputParametro, inputValor, button, respuesta)

button.addEventListener("click", () =>{
    respuesta.textContent = buscarAlumno(inputParametro.value, inputValor.value)
})

// 5. FETCHING DATA: crear una funcion asincrona para pedir informacion a la api de pokemon.
// https://pokeapi.co/api/v2/generation/1/

// async function pedirYMostrar(num){
//     let response = await fetch(`https://pokeapi.co/api/v2/generation/${num}/`)
//     let data = await response.json()
//     data.pokemon_species.forEach((element) => {
//         console.log(element)
//     })
//     return data
// }

const BASE_URL = "https://the-one-api.dev/v2/"
const BOOK = "book"
const QUOTES = "quotes"
const CHARACTERS = "characters"
 
async function requestBooks(){
    let response = await fetch(`${BASE_URL}${BOOK}`, {method: "GET", headers: `token: ${token}`})
    let data = await response.json()
    console.log(data)
}
 
 
async function requestQuotes(){
    let response = await fetch(`${BASE_URL}${QUOTES}`, {method: "GET", headers: `token: ${token}`})
    let data = await response.json()
    console.log(data)
}
 
 
async function requestCharacters(){
    let response = await fetch(`${BASE_URL}${CHARACTERS}`, {method: "GET", headers: `token: ${token}`})
    let data = await response.json()
    console.log(data)
}

// 6. Crear una lista de pokemons del objeto pokemon_species y renderizarlos en pantalla
 
// 7. Usando la informacion obtenida de la API, haz una funcion asincrona que pida las fotos de los pokemons
// y los renderice en la pantalla.
