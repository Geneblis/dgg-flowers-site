function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {

    //checa por todos os modais possiveis
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

//nao sei oq faz lol
function filtrarApelacoes() {
    const filtro = document.getElementById('filtroApelacoes').value;
    const itens = document.querySelectorAll('#listaApelacoes li');

    itens.forEach(item => {
        const status = item.textContent.match(/Status: (.+?) -/)[1].trim();
        if (filtro === 'todas' || status.toLowerCase() === filtro) {
            item.style.display = 'list-item'; // Mostra o item
        } else {
            item.style.display = 'none'; // Esconde o item
        }
    });
}