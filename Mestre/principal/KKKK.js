// Gerar um número aleatório entre 1 e 100
const randomNumber = 1
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    const resultElement = document.getElementById('result');

    if (userGuess === randomNumber) {
        resultElement.textContent = `parabens voce encontrou meu Easter egg,agora por favor se dirija a ian e peça pra ele ficar so de peruca e calcinha `;
    } else if (userGuess < randomNumber) {
        resultElement.textContent = 'Muito baixo! Tente novamente.';
    } else {
        resultElement.textContent = 'Muito alto! Tente novamente.';
    }
});