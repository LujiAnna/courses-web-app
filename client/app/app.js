export class App {
    
    constructor(){
        this.id,
        this.name,
        this.type,
        this.breed,
        this.age,
        this.description,
        this.img_url
    }

    render(id){
        const divEl = document.createElement('div');
        divEl.className = 'row';

        const divEl2 = document.createElement('div');
        divEl2.className = 'text';

        const h4El = document.createElement('h4');
        h4El.innerHTML = 'Id Number : ';
        const spanEl = document.createElement('span');
        spanEl.innerHTML = this.id;
        spanEl.style.color = 'rgb(231, 90, 8)';
        h4El.appendChild(spanEl);

        const h4El2 = document.createElement('h4');
        h4El2.innerHTML = 'Type : ';
        const spanEl2 = document.createElement('span');
        spanEl2.innerHTML = this.type;
        spanEl2.style.color = 'rgb(231, 90, 8)';
        h4El2.appendChild(spanEl2);

        const h4El3 = document.createElement('h4');
        h4El3.innerHTML = 'Name : ';
        const spanEl3 = document.createElement('span');
        spanEl3.innerHTML = this.name;
        spanEl3.style.color = 'rgb(231, 90, 8)';
        h4El3.appendChild(spanEl3);

        const h4El4 = document.createElement('h4');
        h4El4.innerHTML = 'Breed : ';
        const spanEl4 = document.createElement('span');
        spanEl4.innerHTML = this.breed;
        spanEl4.style.color = 'rgb(231, 90, 8)';
        h4El4.appendChild(spanEl4);

        const h4El5 = document.createElement('h4');
        h4El5.innerHTML = 'Age : ';
        const spanEl5 = document.createElement('span');
        spanEl5.innerHTML = this.age;
        spanEl5.style.color = 'rgb(231, 90, 8)';
        h4El5.appendChild(spanEl5);

        const pEl = document.createElement('p');
        pEl.innerHTML = this.description;
        pEl.style.color = 'rgba(4, 28, 243, 0.973)';
        const buttonEl = document.createElement('button');
        buttonEl.className = 'delete';
        buttonEl.id = 'delete';
        buttonEl.innerHTML = 'Delete this Pet'
        divEl2.appendChild(h4El);
        divEl2.appendChild(h4El2);
        divEl2.appendChild(h4El3);
        divEl2.appendChild(h4El4);
        divEl2.appendChild(h4El5)
        divEl2.appendChild(pEl);
        divEl2.appendChild(buttonEl);

        const divEl3 = document.createElement('div');
        divEl2.className = 'image';
        const imgEl = document.createElement('img');
        imgEl.src = this.img_url;
        imgEl.alt = this.breed;
        imgEl.style.margin = '15px';
        divEl3.appendChild(imgEl);

        divEl.appendChild(divEl2);
        divEl.appendChild(divEl3);

        return document.getElementById('container').appendChild(divEl);
    }

    fetchPost(){
        console.log(this.type, this.name, this.img_url, this.breed, this.description, this.age)
        fetch('http://localhost:8080/api/api', {
            method: 'POST',
            body: JSON.stringify({
                "name": this.name,
                "img_url": this.img_url,
                "type": this.type,
                "breed": this.breed,
                "description": this.description,
                "age": this.age
            }),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then((response) => response.json())
        .then((json) => console.log(json)) 
    }

    fetchDelete(id){
        fetch('http://localhost:8080/api/api/' + id, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
    }
}