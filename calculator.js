

//DOM variables
const buttonSelector = document.querySelectorAll(".buttonColumn > button");
const currentNumber = document.querySelector("#currentNumber");
const currentOpeartion = document.querySelector('#currentOperation')

//array list to store operation
const storedOperation = [];

//adds eventListener to all buttons, returns key-value
buttonSelector.forEach(button => button.addEventListener('click', () => {
    addInput(button.dataset.action, button.dataset.key);
}));

//addInput function => does a different action depending on the buttons dataset action value;
function addInput(action, key) {
    console.log(storedOperation);
    switch(action) {
        case "operator":
            if(key === "=") {
                storedOperation[2] = currentNumber.textContent;
                currentOperation.textContent = storedOperation.join(" ");
                currentNumber.textContent = solve(Number(storedOperation[0]), Number(storedOperation[2]), storedOperation[1]);
                storedOperation.length = 0;
            } else {
                if (storedOperation[0] == undefined) {
                    storedOperation.push(currentNumber.textContent)
                }
                currentNumber.textContent = " ";
                storedOperation[1] = key;
                currentOperation.textContent = storedOperation.join(" ");
            }

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
            currentOperation.textContent = "";
            storedOperation.length = 0;
            break;

        default:
            if(currentNumber.textContent.includes(".") && key == ".") {
                break;
            } 
            currentNumber.textContent += key;
            currentOperation.textContent = storedOperation.join(" ");
            break;
    }
}

//returns solution
function solve(firstNumber, secondNumber, operation) {
    if(operation === "+") {
        return firstNumber + secondNumber;
    } else if(operation === "-") {
        return firstNumber - secondNumber;
    } else if(operation === "*") {
        return firstNumber * secondNumber;
    } else if (operation === "/"){
        return firstNumber / secondNumber;
    }

}