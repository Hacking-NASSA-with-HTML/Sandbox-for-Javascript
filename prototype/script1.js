//This code creates a new <p> element:
//let futurePelement = document.createElement("p");
let results = document.createElement("p");

//To add text to the <p> element, you must create a text node first. This code creates a text node:
//let contentOfFuturePelement = document.createTextNode("This is a Sandbox to play with Javascript.");
let contentOfResults = document.createTextNode("See Results in the console.");

//Then you must append the text node to the < p > element:
//futurePelement.appendChild(contentOfFuturePelement);
results.appendChild(contentOfResults);

//Finally you must append the new element to an existing element.
//This code finds an existing element:
//let appendTheNewElementToAnExistingElement = document.getElementById("body");
let appendResultsToAnExistingElement = document.getElementById("body");

//This code appends the new element to the existing element:
//appendTheNewElementToAnExistingElement.appendChild(futurePelement);
appendResultsToAnExistingElement.appendChild(results);

let Person = function (name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

Person.prototype.planet = 'Earth';
Person.prototype.introduction = function () {
    return 'I am a ' + this.occupation;
}

let JohnDoe = new Person('John Doe', 36, 'Scientist');

JohnDoe.planet; //Earth
JohnDoe.introduction(); // I am a Scientist

console.log(JohnDoe.planet);
console.log(JohnDoe.introduction());