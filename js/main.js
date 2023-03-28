const minValue = 1;
const maxValue = 1000;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    // sorteia um número entre 1 e maxValue + 1, para que o valor máximo seja inclusivo.
    return parseInt(Math.random() * maxValue + 1);
}

// indica no console qual o número secreto sorteado.
console.log(secretNumber);

// altera o innerHTML do id #min-value de acordo com o valor da const minValue.
const elementMinValue = document.getElementById("min-value");
elementMinValue.innerHTML = minValue;

// altera o innerHTML do id #max-value de acordo com o valor da const maxValue.
const elementMaxValue = document.getElementById("max-value");
elementMaxValue.innerHTML = maxValue;