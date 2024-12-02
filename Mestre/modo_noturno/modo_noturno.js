// modo noturno
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