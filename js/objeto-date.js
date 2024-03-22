
const dateHTML =  /* document.getElementById() */ document.querySelector("#date") /* alternativa a getElementById donde puedo buscar no solo por ID */
console.log(dateHTML)




// console.log(fecha);
// console.dir(fecha); //Para acceder a todas sus propiedades
// console.log(fecha.getDate()) //Accedo a número del día del mes
// console.log(fecha.getDay()) // Obtengo el día en el que yo me encuentro Ej: '2' = Martes / Como es un array '0' = Domingo
// console.log(fecha.getMonth()) // Idem anterior. '2' = Marzo
// console.log(fecha.getFullYear())
// console.log(fecha.getMinutes()) //Devuelve los minutos de cuando se ejecuto el script
// console.log(fecha.getTime()) // Cantidad de milisegundos que han pasado desde 1/1/1970 hasta la ejecución del script. Se puede usar para almacenar fechas debido a que new Date(_ _ _ _ _ _ _ _ _) ya que representa la fecha en un número relativamente pequeño.

/* Posibilidades con fecha */
// const hora = fecha.getHours()
// const minutos = fecha.getMinutes()
// const segundos = fecha.getSeconds()
// const Mes = fecha.getMonth() + 1 //Por que devuelve indice. Entonces le sumamos 1 para que de correcto el valor.
// const dia = fecha.getDate()
// const year = fecha.getFullYear()

/* console.log(hora, minutos, segundos)
console.log(`${dia}/${mes}/${year}`) */

//Ejercicio
let nombreDiasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
let nombresMeses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"]






// # Bienvenido, hoy es viernes 22  de marzo de 2024
// console.log(`Bienvenido, hoy es ${nombreDiaSemana} ${dia} de ${nombreMes} de ${year} `)




function setClock(){
    const fecha = new Date();
    
    const mes = fecha.getMonth();
    const diaSemana =fecha.getDay() // Empezando por domingo indice 0.

    let hora = formatClockValue(fecha.getHours())
    let minutos = fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes()
    let segundos = fecha.getSeconds() < 10 ? "0" + fecha.getSeconds() : fecha.getSeconds()

    const horaHTML = document.getElementById("hora")
    const minutosHTML = document.querySelector("#minutos")
    const segundosHTML = document.getElementById("segundos")
    horaHTML.innerText = hora;
    minutosHTML.innerText = minutos;
    segundosHTML.innerText = segundos;

    const nombreDiaSemana = nombreDiasSemana[diaSemana]; //Accedo al nombre por medio de la posición que devuelve getDay()
    const nombreMes = nombresMeses[mes]
    const dia = fecha.getDate()
    const year = fecha.getFullYear()
    dateHTML.innerText =`Bienvenido,\n Hoy es ${nombreDiaSemana} ${dia} de ${nombreMes} de ${year} `;
    
}

function formatClockValue(value){
    if(value < 10){
        return "0" + value;
    }
    return value;
}

setClock();

setInterval(() => {
    setClock();
}, 1000);

// setTimeout(() => {
//     alert("Hola este cartel se ejecuto 3 sec despues")
// }, 3000); /* Ejecuto algo luego de cierta demora preestablecida */

// setInterval(() =>{
//     console.log("Set interval")
// }, 3000) /* Repite cada cierto tiempo las instrucciones */

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



