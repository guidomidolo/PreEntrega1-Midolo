//Calcular el promedio de dos notas de un alumno pidiendo los datos por teclado (usando prompt);

let nombreAlumno = prompt("¿Cuál es tu nombre?");
let apellidoAlumno = prompt ("¿Cuál es tu apellido?")
console.log("El alumno se llama " + nombreAlumno + " " + apellidoAlumno + ".");

let notaTercerParcial = parseFloat(prompt("¿Qué nota sacaste en tu tercer parcial?"));
let notaCuartoParcial = parseFloat(prompt("¿Qué nota sacaste en tu cuarto parcial?"));
console.log("El alumno " + nombreAlumno + " " + apellidoAlumno + " sacó " + "'" + notaTercerParcial + "'" + " en su tercer parcial y " + "'" + notaCuartoParcial + "'" + " en su cuarto parcial.");

let promedio = (notaTercerParcial + notaCuartoParcial) / 2;
console.log("El alumno " + nombreAlumno + " " + apellidoAlumno + " tiene un promedio final de " + promedio);

