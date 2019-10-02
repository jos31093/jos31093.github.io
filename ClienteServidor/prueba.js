const request = require('request');

// function getName(id){
//     const URL = `https://swapi.co/api/people/${id}/`;
//     request.get(URL, function(error, response,body){
//         console.log(`status code ${response.statusCode}`);
//         const data = JSON.parse(body);
//         //console.log(data);
//         if (response.statusCode===200) {
//             console.log('Peticion Correcta');
//             console.log(`La altura de ${data.name} es ${data.height}`);
//         }else{
//             console.log("Peticion Erronea");
//             console.log(data.detail);
//         }
//     });    
// } 

// getName(9);

// function getPokemonTipo(pokemon){
//     console.log('pokemon')
//     const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
//     request .get(URL, function(error,response,body){
//         if (response.statusCode===200) {
//             const data=JSON.parse(body);
//             console.log(`el pokemon ${data.name} es de tipo ${data.types[0].type.name}`);
//         }else{
//             console.log("Peticion Erronea");
//             console.log(data.detail);
//         }
//     });
// }

//getPokemonTipo('pikachu');

const URL_LIBRERIA = 'http://openlibrary.org/search.json?q=';
let peticionLibro = (titulo) => {
    let URL_FINAL = URL_LIBRERIA + titulo;      
    request.get(URL_FINAL, (error, response, body) => {
        if (response.statusCode == 200) {                                         
            JSON.parse(body)                      
                .docs                             
                .map((element,index) =>                    
                    element.author_name           
                        .map((element,index) =>  
                            console.log(element))   
                    
                );                                         
        } else console.log(response.statusCode, error);
    });
}

//peticionLibro('i robot');

//libros por autor

function librosPorAutor(autor){
    const URL=`http://openlibrary.org/search.json?author=${autor}`;
    request.get(URL, (error, request, body)=>{
        if(request.statusCode===200){
            JSON.parse(body)
            .docs
            .map((data)=>
                console.log(data.title_suggest)
            );

        }
    })
}

//librosPorAutor('j. k. rowling');

//Genero de la Banda

function generoDeBanda(banda){
    URL=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${banda}`;
    request.get(URL,(error, response, body)=>{
        if(response.statusCode===200){
            const data=JSON.parse(body);                     
                const genero=data.artists[0].strGenre;
                console.log(`el genero musical de la banda ${banda} es ${genero}`);
        }
    });
}

//generoDeBanda('kings of leon');

//peliculas por personaje

function peliPorPersonaje(personaje){
    const URL=`https://swapi.co/api/people/${personaje}/`;
    request.get(URL, (error,response,body)=>{
        if(response.statusCode===200){
            const data=JSON.parse(body)
            console.log(`las peliculas en las que aparece ${data.name}`)
            //data.films.map((d)=>console.log(d));
            data.films.map((d)=>{
                request.get(d, (error,response,body)=>{                    
                    if(response.statusCode===200){
                        const peli=JSON.parse(body);
                        console.log(peli.title);
                    }
                })
            });
        }
    });
}

//peliPorPersonaje(1);

// asteroides

function asteroides(inicio, fin){
    const apiKey ='aB34FseUE0pNhcHkv1nVOeBNWXkpmtbQSfJKH9YV';
    const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${inicio}&end_date=${fin}&api_key=${apiKey}`;
    request.get(URL, (error,response,body)=>{
        console.log(URL)
        console.log(response.statusCode)
        if(response.statusCode===200){
            const d = JSON.parse(body);            
            //console.log(d.near_earth_objects);                
        }
    });
}

 asteroides('2019-09-15','2019-09-21');