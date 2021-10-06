'use strict'

setTimeout( 'mueveReloj()', 1000); // CON ESTA FUNCION LE MANDAMOS LA FUNCION QUE LLAMARA, COMENTADA, Y EL RETRASO DEL TIEMPO

function mueveReloj()
{
  let momentoActual = new Date() // COGEMOS HORA ACTUAL
  let hora = momentoActual.getHours() //HORA
  let minuto = momentoActual.getMinutes() //MINUTOS
  let segundo = momentoActual.getSeconds() // SEGUNDOS

  let horaImprimible = hora + " : " + minuto + " : " + segundo;

  // console.log(horaImprimible);
  document.getElementsByTagName('section')[0].innerHTML+= (`<p> AHORA: ${horaImprimible} </p>`);

  setTimeout( 'mueveReloj()', 1000); // VOLVEMOS A LLAMAR LA FUNCION PARA QUE SE HAGA RECURSIVA
}

//https://desarrolloweb.com/articulos/549.php, USE ESTA INFORMACION PARA EL EJERCICIO
