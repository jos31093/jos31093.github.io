//? 1.- Muestra un mensaje en consola mediante un callback
function saludar(callback){
    console.log("hola, soy "+callback);
}

function obtenerNombre(nombre){
    return nombre;
}

saludar(obtenerNombre("Jostin"));

/**
  *?2.- Crear una función de orden superior que reciba como
  *? argumento un mensaje y callback. Según el callback que
  *?se pase como argumento, la función de orden superior
  *?debe mostrar el mensaje en un console.warn o en un console.log*/

  function enviarMensaje(mensaje,callback){
      callback(mensaje);
  }
  
  function mensajeWarn(m){
      console.warn(m);
  }

  function mensajeLog(m){
      console.log(m);
  }

  enviarMensaje("un mensaje de texto", mensajeLog);
  enviarMensaje("otro mensaje de texto", mensajeWarn);

  /**
   *?3.- Crear una función de orden superior que reciba como
   *?argumentos dos números y un callback. Según el callback
   *?que se pase a la función, se devuelve la suma de los
   *?dos números, la resta de los dos números o la
   *?multiplicación de los dos números.*/

function matematicas(a,b,callback){
    callback(a,b);
}

function sumar (a,b){
    console.log(a+b);
}
function restar (a,b){
    console.log(a-b);
}
function multiplicar (a,b){
    console.log(a*b);
}

matematicas(3,2,sumar);
matematicas(3,2,restar);
matematicas(3,2,multiplicar);

/**
  *?4.- Escribe una función de orden superior que reciba una cadena de
  *?caracteres y debe devolver, mediante un callback, la
  *?cadena de caracteres en mayúsculas o en minusculas.*/

  function caracteres(texto,callback){
      callback(texto);
  }

  function mayus(t){
      let texto=t.toUpperCase();
      console.log(texto);
  }

  function minus(t){
      let texto=t.toLowerCase();
      console.log(texto);
  }

  caracteres("Hola Mundo", mayus);
  caracteres("Hola Mundo", minus);

/**
 *?5.- Hacer un arreglo de 4 cantidades de tiempo en minutos
 *?EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
 *?mayores a dos horas (hacer la comparación en horas)
 *?mediante un callback */ 

 let arreglo=[120,80,200,100];

 function minutosAHoras(arreglo){
    let nuevaTabla=[]
    for(let i=0;i<arreglo.length;i++){
        nuevaTabla.push(arreglo[i]/60);
    }
    return nuevaTabla;
 }

 function mayorADos(arreglo,callback){

    for(let i=0;i<arreglo.length;i++){
        //console.error(callback(arreglo)[i])
     if(callback(arreglo)[i]>2){
         console.log(callback(arreglo)[i]);
     }
    }
 }

 mayorADos(arreglo,minutosAHoras);