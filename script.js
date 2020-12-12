//This code creates a new <p> element:
let futurePelement = document.createElement('p');
let results = document.createElement('p');

//To add text to the <p> element, you must create a text node first. This code creates a text node:
let contentOfFuturePelement = document.createTextNode('This is a Sandbox to play with Javascript.');
let contentOfResults = document.createTextNode('See Results in the console.');

//Then you must append the text node to the < p > element:
futurePelement.appendChild(contentOfFuturePelement);
results.appendChild(contentOfResults);

//Finally you must append the new element to an existing element.
//This code finds an existing element:
let appendTheNewElementToAnExistingElement = document.getElementById('body');
let appendResultsToAnExistingElement = document.getElementById('body');

//This code appends the new element to the existing element:
appendTheNewElementToAnExistingElement.appendChild(futurePelement);
appendResultsToAnExistingElement.appendChild(results);

//Create chunk of HTML markup using 'afterend'
let sendbox1 = document.getElementById('body');
sendbox1.insertAdjacentHTML('afterend', '<p id="example1"><a href="prototype/index1.html" target="_blank">1. Works with Prototype</a></p>');

let sendbox2 = document.getElementById('example1');
sendbox2.insertAdjacentHTML('afterend', '<p id="example2"><a href="creatingElements/index2.html" target="_blank">2. The insertAdjacentHTML() method to create HTML markup</a></p>');