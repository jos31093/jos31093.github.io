const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];

    //Genera un nuevo arreglo en el que solo se encuentren los conejos del arreglo original.

    function soloConejos(animales){
        const conejos = animales.filter((animal)=>animal.especie === "conejo");
        return conejos;
    }

    console.log(soloConejos(animalitos));

    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];

    //Genera un nuevo arreglo que contenga los nombres de todas las mascotas.

    function soloNombre(mascotas){
        const nombres = mascotas.map((mascota)=>mascota.nombre);
        return nombres;
    }

    console.log(soloNombre(mascotas));

 