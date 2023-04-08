/*
1. add event listeners to all buttons, each button assigns its associated *data-key* action to the currentNumber label.
    - the only operations which data-keys can not be directly translated to Strings are 'all-clear', 'clear', and 'sign'

FOR EVENT LISTENER
- every time a new data-key is inserted to currentNumber, the previous value should be sent to storedOperation array, 
   if an equals sign is inserted, then calculate the operation and assign its value to currentNumber

- operators should be directly displayed on storedNumber if there is a number stored in it, if there is no number, nothing should happen

- if a number is inserted after an equals, the previous operation should be deleted.
*/

const buttonContainer = document.querySelector("#buttonContainer");