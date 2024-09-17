const checkButton = document.getElementById('check-button');
const resultDiv = document.getElementById('result');
const nomeInput = document.getElementById('nome');

checkButton.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    if (nome.includes('Gabriel')) {
        // Animation and dramatic effect
        resultDiv.innerHTML = '';
        resultDiv.classList.add('loading');
        setTimeout(() => {
            resultDiv.classList.remove('loading');
            resultDiv.innerHTML = 'Você é tonto!';
        }, 2000);
    } else {
        resultDiv.innerHTML = 'Não é tonto!';
    }
});