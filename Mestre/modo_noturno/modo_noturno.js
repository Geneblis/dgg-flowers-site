let isPortuguese = true; 

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


//não mais necessario por causa da API do google. 
//perda de tempo do ^ pra isso não ser usado.
//
//
// Função para alternar o idioma e o ícone
//function toggleLanguage() {
//    isPortuguese = !isPortuguese; // Alterna o idioma
//    const languageIcon = document.getElementById('languageIcon');
//    
//    if (isPortuguese) {
//        languageIcon.classList.remove('fa-flag-usa'); // Remove ícone da bandeira dos EUA
//        languageIcon.classList.add('fa-language'); // Adiciona ícone de idioma
//        translatePage('pt'); // Chama a função de tradução para português
//    } else {
//        languageIcon.classList.remove('fa-language'); // Remove ícone de idioma
//        languageIcon.classList.add('fa-flag-usa'); // Adiciona ícone da bandeira dos EUA
//        translatePage('en'); // Chama a função de tradução para inglês
//    }
//
//    alert("Traduzindo...")
//}

// Adiciona um listener para o toggle de idioma
//document.querySelector('.language-toggle').addEventListener('click', toggleLanguage);
//
//async function translatePage(language) {
//    const elementsToTranslate = document.body.querySelectorAll('h1, h2, p, a, li');
//    const textsToTranslate = Array.from(elementsToTranslate).map(el => el.innerText.trim()).filter(text => text);
//    
//    const sourceLang = language === 'pt' ? 'pt' : 'en';
//    const targetLang = language === 'pt' ? 'en' : 'pt';
//
//    console.log(`Traduzindo de ${sourceLang} para ${targetLang}`);
//
//    // Array para armazenar os textos traduzidos
//    const translatedTexts = [];
//
//    for (const text of textsToTranslate) {
//        // Divide o texto em partes de até 500 caracteres
//        const chunks = text.match(/.{1,500}/g) || []; // Divide o texto em pedaços de até 500 caracteres
//
//        for (const chunk of chunks) {
//            let translatedChunk;
//
//            // Tenta traduzir com tratamento de erro
//            while (true) {
//                try {
//                    translatedChunk = await translateText(chunk, sourceLang, targetLang);
//                    break; // Sai do loop se a tradução for bem-sucedida
//                } catch (error) {
//                    if (error.message.includes('429')) {
//                        console.warn('Limite de solicitações atingido. Aguardando 5 segundos...');
//                        await new Promise(resolve => setTimeout(resolve, 5000)); // Aguarda 5 segundos
//                    } else {
//                        throw error; // Lança o erro se não for 429
//                    }
//                }
//            }
//            translatedTexts.push(translatedChunk);
//        }
//    }
//
//    // Atualiza os elementos com os textos traduzidos
//    translatedTexts.forEach((translatedText, index) => {
//        if (index < elementsToTranslate.length) {
//            elementsToTranslate[index].innerText = translatedText;
//        }
//    });
//}
//
//async function translateText(text, sourceLang, targetLang) {
//    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
//
//    if (!response.ok) {
//        throw new Error(`Erro na tradução: ${response.status}`);
//    }
//
//    const data = await response.json();
//    console.log('Resposta da API:', data); // Log da resposta da API
//
//    // Verifica se há tradução disponível
//    if (data.responseData && data.responseData.translatedText) {
//        return data.responseData.translatedText; // Retorna o texto traduzido
//    } else {
//        return text; // Se não houver tradução, mantém o texto original
//    }
//}