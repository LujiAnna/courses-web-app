import { App } from './app.js';

async function addPet() {

    const response = await fetch('http://localhost:8080/api/api')
    
    const data = await response.json();

    return data;
}

export const addPetHandler = (event) => {

    event.preventDefault();

    const userTarget = event.target;

    if (document.getElementById('container').children){
        var node = document.getElementById('container');
        node.innerHTML = "";
    }

    const newApp = new App();

        newApp.type = userTarget.parentNode[0].value;
        newApp.name = userTarget.parentNode[1].value;
        newApp.breed = userTarget.parentNode[2].value;
        newApp.age = userTarget.parentNode[3].value;
        newApp.description = userTarget.parentNode[5].value;
        newApp.img_url = userTarget.parentNode[4].value;
        
        newApp.fetchPost();

    addPet().then(data =>{
        
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