'use strict'

let listaCaracteresProhibidos = ['a','c','d'];
let longitud = 10;
let listaCaracteresProhibidosValor= [];
let listaCaracteresAleatorios = [];
const MAX = 255;
const MIN = 0;

guardarValorAscii(listaCaracteresProhibidos,listaCaracteresProhibidosValor);

function guardarValorAscii(listaCaracteres, listaCaracteresValor)
{
  for (let indice = 0; indice < listaCaracteres.length; indice++)
   {
    listaCaracteresValor[indice]=listaCaracteres[indice].charCodeAt(0);
  }
  return listaCaracteresValor;
}

console.log(listaCaracteresProhibidos);
console.log(listaCaracteresProhibidosValor);

for (let indice = 0; indice < 10; indice++)
{
  let validad=0;
  let numeroAzar = (Math.floor(Math.random() * ((MAX+1) - MIN)) + MIN);
  for (let valor of listaCaracteresProhibidosValor)
  {
    if (numeroAzar == valor)
    {
      validad=1;
    }
  }

  if (validad == 0)
  {
    listaCaracteresAleatorios[i] = String.charCodeAt(numeroAzar);
  }
  else
  {
    indice = indice-1;
  }

}

console.log(listaCaracteresAleatorios);
