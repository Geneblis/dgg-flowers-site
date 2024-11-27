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

// Seleciona todos os botões "Voltar" e adiciona o evento de clique
document.querySelectorAll(".voltar").forEach(function(voltarButton) {
    voltarButton.onclick = function() {
        modalCartao.style.display = "none"; 
        modalPix.style.display = "none"; 
        modalBoleto.style.display = "none"; 
        modal.style.display = "block"; // Volta para o modal de pagamento
    }
});

//finalizar a compra
finalizarBotoes.forEach(function(finalizarButao) {
    finalizarButao.onclick = function() {
        removerDoCarrinho(this);
    };
});