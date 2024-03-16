import fetch from 'node-fetch'
const API= 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi)
}

/*Este tipo de llamado lo utilizamos para mostrar todos los productos de nuestra api
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
         console.log(products)
    })
    .catch(error => console.log(error))
*/
//Este fetchData lo estamos utilizando para ahora no traer todos los productos, si no solo el primero de ellos
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products =>{
        console.log(products)
        //Petición para solo traer un producto
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product =>{
        console.log(product.title)
        //Petición para traer la categoria de ese producto
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))