//*usar Object.seal(instancia) para no permitir agregar nuevos metodos o atributos

//*hacer los set y get dentro del constructor para encapsular

myPenguin={
    character : "Tux",
    origin : "Linux",
    notes : "He is the mascot of the Linux kernel",
    puedeVolar : false,    
};

myPenguin.graznar = () =>{
    console.log("kaww kaww");
}

myPenguin.saludar = function() {
    console.log('Hola, soy un pinguino y mi nombre es  '+this.character);//en funciones de flecha el this toma valores dentro de la funcion, no del objeto
}

myPenguin.volar = function() {
    if(this.puedeVolar){
        console.log("Puedo Volar!");
    }else{
        console.log("No puedo Volar :(");
    }        
}

myPenguin.graznar();
myPenguin.character = "Senor Pingu";
myPenguin.saludar();
myPenguin.puedeVolar=true;
myPenguin.volar();

//MOLE-------------------------------------------------------------
receta={
    titulo:"Mole",
    porciones:2,
    ingredientes:["canela","comino","cocoa"],
};

libros=[
    {
        titulo:"amor en tiempo de colera",
        autor:"Gabriel Garcia Marquez",
        leido:false
    },
    {
        titulo:"Rebelion en la granja",
        autor:"George Orwell",
        leido:false
    },
    {
        titulo:"1984",
        autor:"George Orwell",
        leido:true
    }
];

for(var i=0;i<libros.length;i++){
    console.log("Titulo: "+libros[i].titulo);
    console.log("Autor: "+libros[i].autor);
    console.log("Leido: "+libros[i].leido);
}

class Persona{
    constructor(nombre, edad, RFC, sexo, peso, altura){
        this.nombre=nombre;
        this.edad=edad;
        this.RFC=RFC;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;        
    }

    calcularIMC() {
        var IMC=this.altura/this.peso;
       console.log("Su IMC es de: "+IMC); 
    };

    esMayorDeEdad(){
        if(this.edad>=18){
            console.log("Es Mayor de Edad");
        }else{
            console.log("Es Menor de Edad");
        }
    };

}

var persona = new Persona("Jostin",25,"RFC","masculino",80,170);
persona.esMayorDeEdad();
persona.calcularIMC();
persona.edad=14;
persona.esMayorDeEdad();

class Cuenta{
    constructor(titular,cantidad){
        this.titular=titular;
        this.cantidad=cantidad;
    };
    ingresar(dinero){
        if(dinero>0){
            if(this.cantidad+dinero>900){
                console.error("No puede tener mas de 900");
            } else{
                this.cantidad+=dinero;
                console.log("tienes en tu cuenta "+this.cantidad);
            }
        } 
    };
    retirar(dinero){
        if(dinero>0){
            if(this.cantidad-dinero<10){
                console.error("No puede tener menos de 10");
            } else{
                this.cantidad-=dinero;
                console.log("tienes en tu cuenta "+this.cantidad);
            }
        } 
    };
}

var cuenta = new Cuenta("Jostin", 100);
cuenta.ingresar(700);
cuenta.ingresar(101);
cuenta.retirar(100);
cuenta.retirar(700);

