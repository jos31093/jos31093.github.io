class Maestro{
    constructor(materia,calificaciones){
        this.materia=materia;
        this.calificaciones=calificaciones;
        this.promedio=function() {
            let total=0
            for(var i=0;i<this.calificaciones.length;i++){
                total+=this.calificaciones[i];            
            }
            return 'el promedio es de: '+(total/this.calificaciones.length);
        }
    }    
}

class MaestroMusica extends Maestro{
    constructor(materia,calificaciones,edad){
        super(materia,calificaciones);
        this.edad=edad;
    }
}

class MaestroFisica extends Maestro{
    constructor(materia,calificaciones,antiguedad){
        super(materia,calificaciones);
        this.antiguedad=antiguedad;
    }
}

const profeMusica=new MaestroMusica('musica',[9,8,9,7,5],35);
console.log(profeMusica.promedio());
//---------------------------------------------------------------------
class Electrodomestico{
    constructor(precio,color,capacidad,consumoEnergetico=100){
        this.precio=precio;
        this.color=color;
        this.consumoEnergetico=consumoEnergetico;
        this.capacidad=capacidad;
    };
}

class Lavadora extends Electrodomestico{
    constructor(precio,color,capacidad,carga,consumoEnergetico){
        super(precio,color,capacidad,consumoEnergetico);
        this.carga=carga;
    }

    precioFinal(){
        return (this.consumoEnergetico*this.carga);
    }
}
const lavadora = new Lavadora(1000000,"rojo",10,20);
console.log('el precio final es de '+lavadora.precioFinal());
//---------------------------------------------------------------------
class Construccion{
    constructor(numPuertas, numVentanas,numPisos,direccion, altura, largo, ancho){
        this.numPuertas=numPuertas; 
        this.numVentanas=numVentanas;
        this.numPisos=numPisos;
        this.direccion=direccion;
        this.altura=altura;
        this.largo=largo;
        this.ancho=ancho;
    }
    metrosCuadrados(){
        return(this.largo*this.ancho);
    }
    getDireccion(){
        return "la direccion es "+this.direccion;
    }

    setDireccion(nuevaDireccion){
        this.direccion=nuevaDireccion;
    }
}

class Casa extends Construccion{
    constructor(numPuertas, numVentanas,numPisos,direccion, altura, largo, ancho){
        super(numPuertas, numVentanas,numPisos,direccion, altura, largo, ancho);
    }
}

class Edificio extends Construccion{
    constructor(numPuertas, numVentanas,numPisos,direccion, altura, largo, ancho){
        super(numPuertas, numVentanas,numPisos,direccion, altura, largo, ancho);
    }
}

const edi = new Edificio(5,12,3,"heredia",12.0,20.0,20.0);
console.log("el edificio tiene "+edi.metrosCuadrados()+" metros cuadrados");
console.log(edi.getDireccion());
edi.setDireccion("San Jose");
console.log(edi.getDireccion());
//---------------------------------------------------------------------
class Bebida{
    constructor(cantidad){
        this.cantidad=cantidad;
    }

    getCantidad(){
        return this.cantidad;
    }

    setCantidad(cantidad){
        this.cantidad=cantidad;
    }
}

class Cerveza extends Bebida{
    constructor(cantidad,porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol=porcentajeAlcohol;
    }
    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }
    setPorcentajeAlcohol(porcentaje){
        this.porcentajeAlcohol=porcentaje;
    }
}

class Refresco extends Bebida{
    constructor(cantidad,azucar){
        super(cantidad);
        this.azucar=azucar;
    }
    getAzucar(){
        return this.azucar;
    }
    setAzucar(azucar){
        this.azucar=azucar;
    }
}

const pilsen=new Cerveza(355,4.7);
const cocaCola=new Refresco(250,100);

console.log("el porcentaje de alcohol es "+pilsen.getPorcentajeAlcohol());
console.log("el porcentaje de azucar es "+cocaCola.getAzucar());
//---------------------------------------------------------------------
//Clase padre o super clases
class Mascota{
    constructor(patas,nombre){
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        console.log('Se creo la Mascota');
    }

    getNombre(){
        return this.nombre
    }
}
class Perro extends Mascota{
    constructor(raza,color,nombre){
        super(4,nombre);
        console.log('Se creo el Perro');
        this.raza = raza;
        this.color = color;
    }
    getRaza(){
        return this.raza
    }
}
const snoopy = new Perro('Beagle','Negro y Blanco','Snoopy');
console.log(snoopy);