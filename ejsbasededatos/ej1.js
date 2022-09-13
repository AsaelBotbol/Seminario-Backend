console.log("Ej 1:-----------------------------");

const alumno = {
    nombre: "juan",
    apellido: "gomez",
    dni: 47345678,
    anio: 4,
    curso: "A",
    nota: 6,
}
const alumno2 = {
    nombre: "martin",
    apellido: "altamirano",
    dni: 46344678,
    anio: 4,
    curso: "A",
    nota: 7,
}

const alumno3 = {
    nombre: "matias",
    apellido: "blanco",
    dni: 46342878,
    anio: 4,
    curso: "B",
    nota: 8,
}

const alumno4 = {
    nombre: "matias",
    apellido: "blanco",
    dni: 46328678,
    anio: 4,
    curso: "B",
    nota: 2,
}

const alumno5 = {
    nombre: "roberto",
    apellido: "koblinc",
    dni: 46340178,
    anio: 3,
    curso: "B",
    nota: 9,
}

const alumno6 = {
    nombre: "ilan",
    apellido: "repiso",
    dni: 46975678,
    anio: 3,
    curso: "B",
    nota: 10,
}

const alumno7 = {
    nombre: "federico",
    apellido: "sued",
    dni: 46345988,
    anio: 5,
    curso: "A",
    nota: 1,
}

const alumno8 = {
    nombre: "ignacio",
    apellido: "vigilante",
    dni: 46349678,
    anio: 5,
    curso: "A",
    nota: 3,
}

console.log("Ej 2:-----------------------------");

const capitalizar = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
}
console.log(capitalizar('holaa'));

console.log("Ej 3:-----------------------------");

const mostrarAlumno = (alumno) => {
    console.log(`DNI: ${alumno.dni}`)
    console.log(`Nombre y apellido: ${alumno.nombre} ${alumno.apellido}`)
    console.log(`Curso: ${alumno.anio}${alumno.curso}`)
    console.log(`Nota: ${alumno.nota}`)
}
mostrarAlumno(alumno3)

console.log("Ej 4:-----------------------------");

const alumnos = [alumno, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8];
const resultadoCapitalizado = alumnos.map((alumno) => {
    alumno.nombre = capitalizar(alumno.nombre);
    alumno.apellido = capitalizar(alumno.apellido);
    return alumno;
});
console.log(resultadoCapitalizado);

console.log("Ej 5:-----------------------------");

const alumnosss = [alumno, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8];
let alumnosList = alumnosss.map(function(entrada) {
    return mostrarAlumno(entrada);
});
console.log(alumnosList); //imprime los objetos del map

console.log("Ej 6:-----------------------------");

const alumnoss = [alumno, alumno2, alumno3, alumno4, alumno5, alumno6]
const pasaron = alumnoss.filter((e) => e.nota >= 6) //filtro los que pasan
passed = pasaron.map((e) => e.nombre)
console.log(`Los que pasaron son ${passed}`)

console.log("Ej 7:-----------------------------");

const aluminiums = [alumno, alumno2, alumno3, alumno4, alumno5, alumno6]
const cuarto = aluminiums.filter((cuarto) => cuarto.anio === 4)
let nombreCuartos = cuarto.map((cuarto) => {
    cuartos = cuarto.nombre
    return cuartos
})
console.log(`Los alumnos de cuarto año son : ${nombreCuartos}`)

console.log("Ej 8:-----------------------------");

const alumnosDeCurso = [alumno, alumno2, alumno3, alumno4, alumno5, alumno6]
const cursoDos = alumnosDeCurso.filter((cursoDos) => cursoDos.curso === "B")
let nombreB = cursoDos.map((cursoDos) => {
    cuartos = cursoDos.nombre
    return cuartos
})
console.log(`Los alumnos del curso B son : ${nombreB}`)