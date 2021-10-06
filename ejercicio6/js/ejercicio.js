'use strict'

class Prueba
{
  constructor()
  {
    document.getElementsByTagName('section')[0].innerHTML+=(`<p> Pruebas de las clases edificio, casa y oficina </p>`);

    //INSTANCIAMOS LAS CLASES
    this.edificio1 = new Edificio(3,5,500);
    this.edificio2 = new Edificio();
    this.casa1 = new Casa(4, 2); // Si no se añade mas valores, pondras los de por defecto del constructor, por eso ponemos el metodo super(), que llama al constructor de la clase padre y le cambia los valores
    this.casa2 = new Casa(3, 1, 2, 3, 400); // Aqui añadimos mas parametros para cambiar los valores de la clase padre
    this.oficina1 = new Oficina('CoCode',2, 10, 4, 2, 600); // Aqui añadimos mas parametros para cambiar los valores de la clase padre
    this.oficina2 = new Oficina('ProCode',2, 10,); // Aqui no añadimos los parametros para cambiar los valores de la clase padre

    document.getElementsByTagName('section')[0].innerHTML+=(`<p> La clase edificio puede mostrar: el numero de plantas (${this.edificio1.numeroPlantas}), el numero de habitaciones (${this.edificio1.numeroHabitaciones}) y la superficie (${this.edificio1.superficieTotal} m2)</p>`);
    document.getElementsByTagName('section')[0].innerHTML+=(`<p> La clase casa puede mostrar: el numero de plantas (${this.casa1.numeroPlantas}), el numero de habitaciones (${this.casa1.numeroHabitaciones}) y la superficie (${this.casa1.superficieTotal} m2).</p>`);
    document.getElementsByTagName('section')[0].innerHTML+=(`<p> La clase casa tambien puede mostrar: el numero de dormitorios (${this.casa1.numeroDormitorios}) y el numero de baños (${this.casa1.numeroBanios} ).</p>`);
    document.getElementsByTagName('section')[0].innerHTML+=(`<p> La clase oficina puede mostrar: el numero de plantas (${this.oficina1.numeroPlantas}), el numero de habitaciones (${this.oficina1.numeroHabitaciones}) y la superficie (${this.oficina1.superficieTotal} m2)</p>`);
    document.getElementsByTagName('section')[0].innerHTML+=(`<p> La clase oficina tambien puede mostrar: el nombre de la oficina(${this.oficina1.nombreOficina}), el numero de telefonos (${this.oficina1.numeroTelefonos}) y el numero de extintores (${this.oficina1.numeroExtintores})</p>`);

  }
}

class Edificio
{
  constructor(numeroPlantas = 1, numeroHabitaciones = 1, superficieTotal = 1 )
  {
    this.numeroPlantas = numeroPlantas;
    this.numeroHabitaciones = numeroHabitaciones;
    this.superficieTotal = superficieTotal;
  }
}

class Casa extends Edificio // CON EXTENDS SE HEREDAN
{
  constructor(numeroDormitorios = 1, numeroBanios = 1, numeroPlantas = 1, numeroHabitaciones = 1, superficieTotal = 1 )
  {
    super(numeroPlantas , numeroHabitaciones , superficieTotal );
    this.numeroDormitorios = numeroDormitorios;
    this.numeroBanios =numeroBanios;
  }
}

class Oficina extends Edificio
{
  constructor(nombreOficina = 'sin definir', numeroExtintores = 1, numeroTelefonos = 1, numeroPlantas = 1, numeroHabitaciones = 1, superficieTotal = 1 )
  {
    super(numeroPlantas , numeroHabitaciones , superficieTotal );
    this.nombreOficina = nombreOficina;
    this.numeroExtintores = numeroExtintores;
    this.numeroTelefonos = numeroTelefonos;
  }
}

let prueba = new Prueba();
