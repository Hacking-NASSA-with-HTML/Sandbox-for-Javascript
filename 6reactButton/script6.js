
// Creating text with JS
let results = document.createElement("h1");
let contentOfResults = document.createTextNode("This page is written with React.");
results.appendChild(contentOfResults);
let appendResultsToAnExistingElement = document.getElementById("body");
appendResultsToAnExistingElement.appendChild(results);

// Creating one more <p> element with JS
let results1 = document.createElement("p");
let contentOfResults1 = document.createTextNode("There is a Counter, which shows how many times the page was reloaded.");
results1.appendChild(contentOfResults1);
let appendResultsToAnExistingElement1 = document.getElementById("body");
appendResultsToAnExistingElement1.appendChild(results1);

// Creating one more <p> element with JS
let results2 = document.createElement("p");
let contentOfResults2 = document.createTextNode("Reload the page to set zero increments.");
results2.appendChild(contentOfResults2);
let appendResultsToAnExistingElement2 = document.getElementById("body");
appendResultsToAnExistingElement2.appendChild(results2);

// Reference to the intellectual ownership
let intellectualOwner = document.getElementById('container');
intellectualOwner.insertAdjacentHTML('afterend', '<p id="example6">With Big Gratitude to: <a href="https://www.edx.org/course/programming-for-the-web-with-javascript" target="_blank">EDx course "programming-for-the-web-with-javascript"</a></p>');