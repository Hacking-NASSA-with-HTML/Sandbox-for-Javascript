//This code creates a new <p> element:
//let futurePelement = document.createElement("p");
let results = document.createElement("p");

//To add text to the <p> element, you must create a text node first. This code creates a text node:
//let contentOfFuturePelement = document.createTextNode("This is a Sandbox to play with Javascript.");
let contentOfResults = document.createTextNode("See script file in the console.");

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

let sendbox2 = document.getElementById('body');
sendbox2.insertAdjacentHTML('afterend', '<p id="example1">This text generated by JS as chunk of HTML markup.<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML" target="_blank"> See source on MDN</a></p>');

const thereWillBeMagic = document.getElementById('bbbbbbbbbbbbbutton');

// This commented option of the toggling works too:
// let magic = false;

// thereWillBeMagic.onclick = function () {

//     if (!magic) {
//         thereWillBeMagic.classList.add('over_write_button_style');
//         magic = true;
//     } else {
//         thereWillBeMagic.classList.remove('over_write_button_style');
//         magic = false;
//     }

// }

let magic = true;

thereWillBeMagic.onclick = function () {

    if (magic) {
        thereWillBeMagic.classList.add('over_write_button_style');
        magic = false;
    } else {
        thereWillBeMagic.classList.remove('over_write_button_style');
        magic = true;
    }

}