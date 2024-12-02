document.addEventListener("DOMContentLoaded", function() {
    const translateCheckbox = document.getElementById('translateCheckbox');
    translateCheckbox.addEventListener('change', translatePage);
});

async function translatePage() {
    const body = document.body; // Seleciona o corpo da página
    const textToTranslate = getTextFromNode(body); // Obtém todo o texto do corpo
    const isChecked = document.getElementById('translateCheckbox').checked;

    if (isChecked) {
        const translatedText = await translateText(textToTranslate, 'pt', 'en');
        replaceTextInNode(body, translatedText); // Substitui o texto no corpo
    } else {
        const translatedText = await translateText(textToTranslate, 'en', 'pt');
        replaceTextInNode(body, translatedText); // Substitui o texto no corpo
    }
}

// Função para obter todo o texto de um nó
function getTextFromNode(node) {
    let text = '';
    node.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
            text += child.textContent; // Adiciona o texto
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            text += getTextFromNode(child); // Chama recursivamente para filhos
        }
    });
    return text;
}

// Função para substituir o texto em um nó
function replaceTextInNode(node, translatedText) {
    let index = 0; // Índice para controlar a posição do texto traduzido
    node.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
            const textLength = child.textContent.length;
            const newText = translatedText.substring(index, index + textLength);
            child.textContent = newText; // Substitui o texto
            index += textLength; // Atualiza o índice
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            replaceTextInNode(child, translatedText); // Chama recursivamente para filhos
        }
    });
}

async function translateText(text, sourceLang, targetLang) {
    const response = await fetch(`https://libretranslate.com/translate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: text,
            source: sourceLang,
            target: targetLang,
            format: 'text'
        })
    });

    const data = await response.json();
    return data.translatedText;
}

// Modo noturno
function toggleDarkMode() {
    const modoNoturno = document.getElementById('dark-mode-styles');
    const modoClaroCheckbox = document.getElementById('modoClaro');
    if (modoClaroCheckbox.checked) {
        modoNoturno.removeAttribute('disabled'); // Ativa o modo noturno
        localStorage.setItem('darkMode', 'enabled'); // Armazena a preferência
    } else {
        modoNoturno.setAttribute('disabled', 'true'); // Desativa o modo noturno
        localStorage.setItem('darkMode', 'disabled'); // Armazena a preferência
    }
}

// Função para aplicar o modo ao carregar a página
function applyDarkMode() {
    const modoNoturno = document.getElementById('dark-mode-styles');
    const darkModePreference = localStorage.getItem('darkMode');

    if (darkModePreference === 'enabled') {
        modoNoturno.removeAttribute('disabled'); // Ativa o modo noturno
        document.getElementById('modoClaro').checked = true; // Marca o checkbox
    } else {
        modoNoturno.setAttribute('disabled', 'true'); // Desativa o modo noturno
        document.getElementById('modoClaro').checked = false; // Desmarca o checkbox
    }
}
window.onload = applyDarkMode;

// traducao pra gringo fudido saber ler