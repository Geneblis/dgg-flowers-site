var modal = document.getElementById("pagamentoModal");
var modalCartao = document.getElementById("cartaoModal");
var modalPix = document.getElementById("pixModal");
var modalBoleto = document.getElementById("boletoModal");

var comprando = document.querySelector(".comprar");
var fecharModal = document.querySelectorAll(".fechar_pagamento");
var cartaoCredito = document.getElementById("cartaoCredito");
var pixButton = document.getElementById("pix");
var boletoButton = document.getElementById("boleto");

var finalizarBotoes = document.querySelectorAll(".finalizar");

var modalAgradecimento = document.getElementById("agradecimentoModal");

// Abrir o modal de pagamento
comprando.onclick = function() {
    modal.style.display = "block";
}

// Fechar qualquer modal ao clicar no botão de fechar
fecharModal.forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "none";
        modalCartao.style.display = "none";
        modalPix.style.display = "none";
        modalBoleto.style.display = "none";
    }
});

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal || event.target == modalCartao || event.target == modalPix || event.target == modalBoleto) {
        modal.style.display = "none";
        modalCartao.style.display = "none";
        modalPix.style.display = "none";
        modalBoleto.style.display = "none";
    }
}

// Abrir o modal de cartão de crédito
cartaoCredito.onclick = function() {
    modal.style.display = "none"; 
    modalCartao.style.display = "block"; 
}

// Abrir o modal de PIX
pixButton.onclick = function() {
    modal.style.display = "none"; 
    modalPix.style.display = "block"; 
}

// Abrir o modal de Boleto
boletoButton.onclick = function() {
    modal.style.display = "none"; 
    modalBoleto.style.display = "block"; 
}

//agradecimentos
document.getElementById("fecharAgradecimento").onclick = function() {
    modalAgradecimento.style.display = "none";
};
document.querySelectorAll(".fechar_pagamento").forEach(function(click) {
    click.onclick = function() {
        modalAgradecimento.style.display = "none";
    };
});

// Seleciona todos os botões "Voltar" e adiciona o evento de clique
document.querySelectorAll(".voltar").forEach(function(voltarButton) {
    voltarButton.onclick = function() {
        modalCartao.style.display = "none"; 
        modalPix.style.display = "none"; 
        modalBoleto.style.display = "none"; 
        modal.style.display = "block"; // Volta para o modal de pagamento
    }
});

//finalizar a compra, remove todos os produtos
finalizarBotoes.forEach(function(finalizarButao) {
    finalizarButao.onclick = function() {
        modalAgradecimento.style.display = "block"; //ativar modal de agradecimento

        //o certo seria criar uma variavel pra ver se ele esta finalizando uma compra direta ou pelo carrinho e decidir
        //se vai remover tudo ou remover o produto, neste caso usar um
        //removerDoCarrinho(this);
        //-G.
        removerTudo();
    };
});


//botao de FAQ
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