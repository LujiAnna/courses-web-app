import { App } from './app.js';

async function getAllPets() {

    const response = await fetch('http://localhost:8080/api/api')
    
    const data = await response.json();

    return data;
}

export const getAllPetsHandler = (event) => {

    event.preventDefault();

    if (document.getElementById('container').children){
        var node = document.getElementById('container');
        node.innerHTML = "";
    }

    const newApp = new App();

    getAllPets().then(data =>{
        for (let i = 0; i < data.length; i++) {
            newApp.id = data[i].id;
            newApp.name = data[i].name;
            newApp.type = data[i].type;
            newApp.breed = data[i].breed;
            newApp.age = data[i].age;
            newApp.description = data[i].description;
            newApp.img_url = data[i].img_url;
            newApp.render();
        }
    })
}