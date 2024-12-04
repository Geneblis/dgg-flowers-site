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

//o script q volta pra home ao clica no icone
document.querySelector('.logo2').addEventListener('click', function() {
    window.location.href = '../principal/idex.html';
});

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

function SalvarHistorico(){
  const historicodiv = document.getElementById('historico');
  let historico = JSON.parse(localStorage.getItem('historico')) || [];
  historicodiv.innerHTML = '';
  historico.forEach((item, index) => {
    historicodiv.innerHTML += `
        <div class="item-historico">
            <img src="${item.imagem}" alt="${item.nome}">
            <p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>
            <hr>
        </div>
    `;
});
    alert(`${nome} adicionado ao historico`);
}
SalvarHistorico();