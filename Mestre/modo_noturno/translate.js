document.getElementById('translateCheckbox').addEventListener('change', translatePage);

async function translatePage() {
    const elementsToTranslate = document.querySelectorAll('.translatable');
    const textsToTranslate = Array.from(elementsToTranslate).map(el => el.textContent.trim()).filter(text => text); // Remove textos vazios
    
    const isChecked = document.getElementById('translateCheckbox').checked;
    const sourceLang = isChecked ? 'pt' : 'en';
    const targetLang = isChecked ? 'en' : 'pt';

    console.log(`Traduzindo de ${sourceLang} para ${targetLang}`); // Mensagem de depuração
    console.log('Textos a traduzir:', textsToTranslate); // Log dos textos a serem traduzidos

    try {
        const translatedTexts = await translateText(textsToTranslate, sourceLang, targetLang);
        console.log('Textos traduzidos:', translatedTexts); // Exibe os textos traduzidos no console

        translatedTexts.forEach((translatedText, index) => {
            if (index < elementsToTranslate.length) {
                elementsToTranslate[index].textContent = translatedText;
            }
        });
    } catch (error) {
        console.error('Erro ao traduzir:', error);
    }
}

async function translateText(texts, sourceLang, targetLang) {
    const translatedTexts = [];

    for (const text of texts) {
        console.log(`Traduzindo: "${text}"`); // Log do texto que está sendo traduzido
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
        
        if (!response.ok) {
            throw new Error(`Erro na tradução: ${response.status}`);
        }

        const data = await response.json();
        console.log('Resposta da API:', data); // Log da resposta da API

        // Verifica se há tradução disponível
        if (data.responseData && data.responseData.translatedText) {
            translatedTexts.push(data.responseData.translatedText);
        } else {
            translatedTexts.push(text); // Se não houver tradução, mantém o texto original
        }
    }

    return translatedTexts;
}