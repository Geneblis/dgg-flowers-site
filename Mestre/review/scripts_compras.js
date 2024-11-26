var modal = document.getElementById("pagamentoModal");
var comprando = document.querySelector(".comprar");
var metodo_pagamento_boolean = document.getElementsByClassName("fechar_pagamento")[0];

// Abrir o modal de pagamento
comprando.onclick = function() {
    modal.style.display = "block";
}

// Fechar o modal de pagamento
metodo_pagamento_boolean.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("verFAQButao").onclick = function() {
    var conteudoFAQ = document.getElementById("faqContainer");
    
    // Verifica se o conteúdo FAQ está oculto ou visível
    if (conteudoFAQ.style.display === "none" || conteudoFAQ.style.display === "") {
        conteudoFAQ.style.display = "block";
        this.innerText = "Ver Menos";
    } else {
        conteudoFAQ.style.display = "none";
        this.innerText = "Ver Perguntas Frequentes";
    }
};