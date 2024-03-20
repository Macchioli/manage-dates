const fecha = new Date();

console.log(fecha);
console.dir(fecha); //Para acceder a todas sus propiedades

console.log(fecha.getDate()) //Accedo a número del día del mes

console.log(fecha.getDay()) // Obtengo el día en el que yo me encuentro Ej: '2' = Martes / Como es un array '0' = Domingo
console.log(fecha.getMonth()) // Idem anterior. '2' = Marzo
console.log(fecha.getFullYear())
console.log(fecha.getMinutes()) //Devuelve los minutos de cuando se ejecuto el script

console.log(fecha.getTime()) // Cantidad de milisegundos que han pasado desde 1/1/1970 hasta la ejecución del script. Se puede usar para almacenar fechas debido a que new Date(_ _ _ _ _ _ _ _ _) ya que representa la fecha en un número relativamente pequeño.

//Ejercicio
const nombreDiasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

const hora = fecha.getHours()
const minutos = fecha.getMinutes()
const segundos = fecha.getSeconds()
const mes = fecha.getMonth() + 1 //Por que devuelve indice. Entonces le sumamos 1 para que de correcto el valor.
const dia = fecha.getDate()
const year = fecha.getFullYear()

const diaSemana =fecha.getDay() // Empezando por domingo indice 0.
let nombreDiaSemana = nombreDiasSemana[diaSemana]; //Accedo al nombre por medio de la posición que devuelve getDay()

/* switch(diaSemana){
    case 0:
        nombreDiaSemana = 'Domingo'
        break;
    case 1:
        nombreDiaSemana = 'Lunes'
        break
    case 2:
        nombreDiaSemana = 'Martes'
        break
    case 3:
        nombreDiaSemana = 'Miércoles'
        break;
    case 4:
        nombreDiaSemana = 'Jueves'
        break
    case 5:
        nombreDiaSemana = 'Viernes'
        break
    case 5:
        nombreDiaSemana = 'Sábado'
        break
    
} */


console.log(hora, minutos, segundos)
console.log(`${dia}/${mes}/${year}`)
