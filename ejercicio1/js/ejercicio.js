'use strict'
// MANUEL SOLIS GOMEZ (masogo008@gmail.com)
let divisibles = [2,3,5,7];
let confirmar = false;
let numero = 0;
let dividen = []; //defino el array pero no le digo su limite ni valores
let indice = 0

alert('Hola, soy tu amigo la pagina web');
do
{
  if (isNaN(numero) ==true)
  {
    alert(`Tipo de valor equivocado, por favor, introduzca un numero`)
  }
  numero = prompt ('Digame un numero y yo le dire si es divisible 2,3,5 o 7');
} while (isNaN(numero) == true);
for (let indiceNumeros = 0; indiceNumeros < divisibles.length ; indiceNumeros++)
{
  if (numero % divisibles[indiceNumeros] == 0)
  {
    confirmar = true;
    dividen[indice] = divisibles[indiceNumeros]; //hago un array dinamico dependiendo de los divisbles
    indice++;
  }
}

if (confirmar == true)
{
  alert (`Su numero (${numero}) si es divisible y es divisible por ${dividen}`);
}
else
{
  alert (`Su numero (${numero}) NO es divisible`);
}
