import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'


//Función que se encarca de utilizar fetch y transformarlo a tipo POST con las configuraciones minimas que se tiene para hacerlo
function postData(urlApi, data){
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}
//Variable de tipo diccionario en donde se obtienen todos los valores de nuestro data que queremos agregar a la api
const data = {
    
    "title": "New Product Course",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
      
}

//Utilización de  postData como una promesa para hacer que nuestro metodo POST funcione transformando la información en un JSON y mostrandolo en consola
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))