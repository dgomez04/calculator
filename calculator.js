/*
1. add event listeners to all buttons, each button assigns its associated *data-key* action to the currentNumber label.
    - the only operations which data-keys can not be directly translated to Strings are 'all-clear', 'clear', and 'sign'

FOR EVENT LISTENER
- every time a new data-key is inserted to currentNumber, the previous value should be sent to storedOperation array, 
   if an equals sign is inserted, then calculate the operation and assign its value to currentNumber

- operators should be directly displayed on storedNumber if there is a number stored in it, if there is no number, nothing should happen

- if a number is inserted after an equals, the previous operation should be deleted.
*/


//DOM variables
const buttonSelector = document.querySelectorAll(".buttonColumn > button");
const currentNumber = document.querySelector("#currentNumber");

//array list to store operation
const storedOperation = [];

//adds eventListener to all buttons, returns key-value
buttonSelector.forEach(button => button.addEventListener('click', () => {
    addInput(button.dataset.action, button.dataset.key);
    storedOperation.push(button.dataset.key);
}));

// until another operator is added, do not add to list
//if button is equals, solve the array and assign its result to the label.
//on change sign, assign before the number a + or - sign using itinerary operator ? : 
//through data-action keys, decide what each key will do if it has a certain action, else just append as a number

//operator, number (default), clear, all-clear, sign
function addInput(action, key) {
//use a switch to go through multiple cases
    switch(action) {
        case "operator":
            break;

        case "sign": //find a way to improve this code.
            if(currentNumber.textContent.includes("-")) {
                currentNumber.textContent = currentNumber.textContent.slice(1);
            } else {
                currentNumber.textContent = `-${currentNumber.textContent}`;
            }

            break;

        case "clear": 
            currentNumber.textContent = "";
            break;
            
        case "all-clear":
            currentNumber.textContent = "";
            storedOperation.length = 0;
            break;

        default:
            currentNumber.textContent += key;
            break;
    }
}
