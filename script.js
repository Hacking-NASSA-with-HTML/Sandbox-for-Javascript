//This code creates a new <p> element:
let futurePelement = document.createElement('h1');
//let results = document.createElement('p');

//To add text to the <p> element, you must create a text node first. This code creates a text node:
let contentOfFuturePelement = document.createTextNode('This is a Sandbox to play with Javascript.');
//let contentOfResults = document.createTextNode('See Results in the console.');

//Then you must append the text node to the < p > element:
futurePelement.appendChild(contentOfFuturePelement);
//results.appendChild(contentOfResults);

//Finally you must append the new element to an existing element.
//This code finds an existing element:
let appendTheNewElementToAnExistingElement = document.getElementById('body');
//let appendResultsToAnExistingElement = document.getElementById('body');

//This code appends the new element to the existing element:
appendTheNewElementToAnExistingElement.appendChild(futurePelement);
//appendResultsToAnExistingElement.appendChild(results);

//Create chunk of HTML markup using 'afterend'
let sendbox1 = document.getElementById('body');
sendbox1.insertAdjacentHTML('afterend', '<p id="example1"><a href="prototype/index1.html" target="_blank">1. Works with Prototype</a></p>');

let sendbox2 = document.getElementById('example1');
sendbox2.insertAdjacentHTML('afterend', '<p id="example2"><a href="creatingElements/index2.html" target="_blank">2. The insertAdjacentHTML() method to create HTML markup</a></p>');

let sendbox3 = document.getElementById('example2');
sendbox3.insertAdjacentHTML('afterend', '<p id="example3"><a href="buttonToggle/index3.html" target="_blank">3. Button toggle with true/false statement</a></p>');

let sendbox4 = document.getElementById('example3');
sendbox4.insertAdjacentHTML('afterend', '<p id="example4"><a href="firstReactAsCDNlink/index4.html" target="_blank">4. Starting React with a CDN link, like JQuery</a></p>');

let sendbox5 = document.getElementById('example4');
sendbox5.insertAdjacentHTML('afterend', '<p id="example5"><a href="reactExample1/index5.html" target="_blank">5. React example Counter</a></p>');

let sendbox6 = document.getElementById('example5');
sendbox6.insertAdjacentHTML('afterend', '<p id="example6"><a href="6reactButton/index6.html" target="_blank">6. React Button Count on click</a></p>');

let sendbox7 = document.getElementById('example6');
sendbox7.insertAdjacentHTML('afterend', '<p id="example7"><a href="7reactLikeButton/index7.html" target="_blank">7. React Like Button</a></p>');

let sendbox8 = document.getElementById('example7');
sendbox8.insertAdjacentHTML('afterend', '<p id="example8"><a href="8reactMouseHovering/index8.html" target="_blank">8. Mouse hovering using React</a></p>');