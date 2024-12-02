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

document.getElementById('translateCheckbox').addEventListener('change', translatePage);

async function translatePage() {
  const elementsToTranslate = document.body.querySelectorAll('h1, h2, p, a, li');
  const textsToTranslate = Array.from(elementsToTranslate).map(el => el.innerText.trim()).filter(text => text); // Coleta o texto dos elementos

  const isChecked = document.getElementById('translateCheckbox').checked;
  const sourceLang = isChecked ? 'pt' : 'en';
  const targetLang = isChecked ? 'en' : 'pt';

  console.log(`Traduzindo de ${sourceLang} para ${targetLang}`); // Mensagem de depuração

  try {
    const translatedTexts = await translateText(textsToTranslate.join('\n'), sourceLang, targetLang);
    const translatedArray = translatedTexts.split('\n');

    // Atualiza o conteúdo dos elementos com a tradução
    translatedArray.forEach((translatedText, index) => {
      if (index < elementsToTranslate.length) {
        elementsToTranslate[index].innerText = translatedText;
      }
    });
  } catch (error) {
    console.error('Erro ao traduzir:', error);
  }
}

async function translateText(text, sourceLang, targetLang) {
  // Dividir o texto em partes menores para evitar problemas de tamanho
    const chunkSize = 200; // Tamanho máximo da parte
    const textChunks = [];

    for (let i = 0; i < text.length; i += chunkSize) {
      textChunks.push(text.substring(i, i + chunkSize));
    }

    const translatedChunks = [];

    for (const chunk of textChunks) {
      console.log(`Traduzindo: "${chunk}"`); // Log do texto que está sendo traduzido
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=${sourceLang}|${targetLang}`);

      if (!response.ok) {
        throw new Error(`Erro na tradução: ${response.status}`);
      }

      const data = await response.json();
      console.log('Resposta da API:', data); // Log da resposta da API

      // Verifica se há tradução disponível
      if (data.responseData && data.responseData.translatedText) {
        translatedChunks.push(data.responseData.translatedText);
      } else {
        translatedChunks.push(chunk); // Se não houver tradução, mantém o texto original
      }
    }
    return translatedChunks.join('\n'); // Retorna o texto traduzido como uma string única
}