class Person {
    constructor(name, age, gender, description) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
    }
}

const people = new Map();
createRandomPeople();

function createRandomPeople() {
    let person1 = new Person('Dylan', 20, 'male', 'Likes Dogs');
    let person2 = new Person('Emily', 24, 'female', 'Likes cutting hair');
    let person3 = new Person('Bobby', 25, 'male', 'Likes Pizza');
    people.set(person1.name, person1);
    people.set(person2.name, person2);
    people.set(person3.name, person3);
}

function createElement(person) {
    const div = document.createElement('div');
    div.className = 'person';
   
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.innerHTML = person.name;
    p.innerHTML = person.description;
    const ul = document.createElement('ul');
    const age = document.createElement('li');
    age.innerHTML = `Age: ${person.age}`;
    const gender = document.createElement('li');
    gender.innerHTML = `Gender: ${person.gender}`;

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(ul);

    ul.appendChild(gender);
    ul.appendChild(age);

    document.body.appendChild(div);
}

function loadPerson(name) {
    const person = people.get(name);
    if (person != undefined) {
        createElement(person);
    }
}

loadPerson('Dylan');
loadPerson('Emily');
loadPerson('Bobby');
