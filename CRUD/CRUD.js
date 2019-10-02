const rp = require('request-promise');

var autor={
    name: 'Jostin',
    last_name: 'Pizarro',
    nacionalidad: 'MX',
    biography: 'Estudiante',
    gender: 'M',
    age: 25 }

const URL='https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function createAuthor(URL, autor){
    const URI='authors/';
    const final_URL=URL+URI;
    rp.post(final_URL).form(autor)
    .then((body)=>{
        const data=JSON.parse(body);
        console.log(data);
    })
    .catch((err)=>{
        console.log('error '+err);
        console.log(autor)
    })
}

function findAuthor(URL,id){
    const URI=`authors/${id}`;
    const final_URL=URL+URI;
    rp.get(final_URL)
    .then((data)=>{
        const json=JSON.parse(data);
        console.log(json);
    })
    .catch((err)=>{
        console.log('error '+err);
    })
}

function updateAuthor(URL,id,autor){
    const URI=`authors/${id}/`;
    const final_URL=URL+URI;
    rp.put(final_URL).form(autor)
    .then((data)=>{
        console.log("se actualizo");
        const json=JSON.parse(data);
        console.log(json);
    })
    .catch((err)=>{
        console.log('error '+err);
    })
}

function deleteAuthor(URL,id){
    const URI=`authors/${id}/`;
    const final_URL=URL+URI;
    rp.delete(final_URL).form(autor)
    .then((data)=>{
        console.log("se elimino");
        const json=JSON.parse(data);
        console.log(json);
    })
    .catch((err)=>{
        console.log('error '+err);
    })
}
//createAuthor(URL,autor);
//deleteAuthor(URL,3143);
//findAuthor(URL,3143);
