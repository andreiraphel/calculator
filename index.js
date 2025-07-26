const screen = document.querySelector(".calc-screen");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;
let isSecondOperator = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            const value = button.dataset.value;

            if (!isSecond){
                firstNumber += value;
                screen.textContent = firstNumber;
            } else {
                secondNumber += value;
                screen.textContent = secondNumber;
            }
        }

        if (button.classList.contains("operator")) {
            if (!isSecondOperator) {
                operator = button.dataset.value;
                isSecond = true;
                isSecondOperator = true;
            } else {
                Operate();
                firstNumber = screen.textContent;
                secondNumber = ""
                operator = button.dataset.value;
                isSecond = true;
                isSecondOperator = false;
            }
        }

        if (button.classList.contains("equal")) {
            Operate();
        }

        if (button.classList.contains("cancel")) {
            screen.textContent = "0"
            firstNumber = "";
            secondNumber = "";
            operator = "";
            isSecond = false;
        }

    });
});

function Operate() {
    num1 = Number(firstNumber);
    num2 = Number(secondNumber);

    if (operator == "+") {
        screen.textContent = num1 + num2;
    } else if (operator == "-") {
        screen.textContent = num1 - num2;
    } else if (operator == "*") {
        screen.textContent = num1 * num2;
    } else if (operator == "/") {
        screen.textContent = num1 / num2;
    }
}
