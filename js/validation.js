function verifyValidValue(guess) {
    // arredonda o número para que se torne o valor válido.
    const number = +guess;

    // a function é acionada caso o valor dito não for um número. Caso o valor dito for "GAME OVER", será adicionada uma array ao body, contendo informações sobre a tela de game over, além de mudar a cor de fundo. Caso o valor dito não seja "GAME OVER", será adicionada outra array com o elemento '<div>Valor inválido</div>' dentro da <div> com id #guess.
    if(invalidNumber(number)) {
        if (guess.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = 
            ` 
            <h2>GAME OVER</h2>
            <h3>Press the button to restart the game.</h3>
            <button id='play-again' class="btn-play">Play Again</button>
            ` 
            document.body.style.backgroundColor = "black";
        } else {
        elementGuess.innerHTML += '<div>Invalid Number <i class="fa-solid fa-circle-exclamation fa-shake"></i></div>'
        return    
    }
}
    // a function é acionada caso uma das condições informadas na function for verdadeira, adicionando o array dentro da <div> com id #guess.
    if(numberIsHigherOrLowerThanMax(number)) {
        elementGuess.innerHTML += `<div> Invalid number: the secret number needs to be from ${minValue} to ${maxValue}. <i class="fa-solid fa-circle-exclamation fa-shake"></i></div>`
        return   
    }  


    // se o número dito for igual ao número gerado pela function generateRandomNumber, insere a array `<h2>Você acertou!</h2><h3>O número secreto era ${secretNumber}</h3>` dentro do body, indicando que o usuário acertou o número. Além disso, ele também insere um botão de Jogar Novamente.   
    if(number === secretNumber) {
        document.body.innerHTML = `
        <h2>You're correct!</h2>
        <h3>The secret number was ${secretNumber}.</h3>
        `
        
    } 
    // se o número dito for maior que o número secreto, será adicionado uma array dentro da div com id #guess dizendo que o número secreto é menor. 
    else if(number > secretNumber) {
        elementGuess.innerHTML += `
        <div>The secret number is lower. <i class="fa-solid fa-arrow-down-9-1"></i></div>`
    } 
     // se o número dito for menor que o número secreto, será adicionado uma array dentro da div com id #guess dizendo que o número secreto é maior. 
    else {
        elementGuess.innerHTML += `
        <div>The secret number is higher. <i class="fa-solid fa-arrow-up-9-1"></i></div>`
    } 

    
}

// retorna se o número informado é um número ou não.
function invalidNumber(number) {
    return Number.isNaN(number)
}

// retorna se o número informado possui valor maior que o maxValue ou valor menor que o minValue.
function numberIsHigherOrLowerThanMax(number) {
    return number > maxValue || number < minValue;
}

// adicionamos um escutador de evento ao body, que ao receber o clique, irá executar o evento com arrow function, que se o clique tiver sido feito no botão de id #play-again, a página será recarregada para que o usuário possa reiniciar o jogo. 
document.body.addEventListener('click', e => {
    if(e.target.id == 'play-again') {
        window.location.reload();
    }
})