'use strict'

const MAX = 150; //CONSTANTE PARA EL MAXIMO
const MIN = -150; // CONSTANTE PARA EL MINIMO
let numeroNegativos = 0; //LOS DIFERENTE VALORES QUE QUIERO GUARDAR PARA LUEGO MOSTRARLOS
let numerosPositivosMasDeQuin = 0;
let numerosMultiplesQuin = 0;
let sumaDePares = 0;

let listaNumero = [];

for (var indice = 0; indice < 10; indice++)
{
  listaNumero[indice]= (Math.floor(Math.random() * ((MAX+1) - MIN)) + MIN); //TOMO LOS VALORES AL AZAR
}

document.getElementsByTagName('section')[0].innerHTML+= (`<p> Lista de numeros: ${listaNumero} </p>`); //MUESTRO EL ARRAY


for (let numero of listaNumero) // CON ESTO PASO POR CADA NUMERO DE LA LISTA Y VEO QUE CONDICIONES HACEN
{
  if (numero < 0)
  {
    numeroNegativos = numeroNegativos + 1;
  }

  if (numero > 15)
  {
    numerosPositivosMasDeQuin = numerosPositivosMasDeQuin + 1;
  }

  if ((numero % 15) == 0)
  {
    numerosMultiplesQuin = numerosMultiplesQuin + 1;
  }

  if ((numero % 2) == 0)
  {
    sumaDePares = sumaDePares + numero;
  }
}

document.getElementsByTagName('section')[0].innerHTML+= (`<p> Cantidad de numeros negativos: ${numeroNegativos} </p>`);
document.getElementsByTagName('section')[0].innerHTML+= (`<p> Cantidad de numeros positivos mayores a 15: ${numerosPositivosMasDeQuin} </p>`);
document.getElementsByTagName('section')[0].innerHTML+= (`<p> Cantidad de numeros multiples de 15: ${numerosMultiplesQuin} </p>`);
document.getElementsByTagName('section')[0].innerHTML+= (`<p> La suma de todos los pares es: ${sumaDePares} </p>`);
