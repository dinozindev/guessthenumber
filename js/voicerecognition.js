// busca a div com o id #guess.
const elementGuess = document.getElementById('guess');
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

// ao uma fala ser detectada, ativa a function onSpeak.
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    
    // para obter apenas o que foi dito, buscamos pela propriedade results(mostra o que foi obtido após a fala no microfone), entramos na array 0 que possui outra array 0 dentro, e por fim chegamos na propriedade transcript, que é onde a fala foi transcrita.
    guess = e.results[0][0].transcript;
    
    // chamamos a function showGuess com o parâmetro guess, que representa o número que foi dito.
    showGuess(guess);

    verifyValidValue(guess);
}
    
// entre as crases, criamos a array através de .innerHTML, inserindo-a dentro da div com id #guess, aplicando o parâmetro guess para que apareça na tela o chute feito pelo usuário.
// ${...}: template literals: através do cifrão com chaves podemos inserir variáveis.
function showGuess(guess) {
    elementGuess.innerHTML = `
    <div>You guessed:</div>
    <span class="box">${guess}</span>
    `
}

// quando o evento de reconhecimento de voz acaba (quando a pessoa fala no microfone), será chamada uma arrow function que iniciará novamente o reconhecimento de voz, mantendo o reconhecimento em um looping infinito.
recognition.addEventListener('end', () => {
    recognition.start();
})
    