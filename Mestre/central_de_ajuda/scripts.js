function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
};

//abrir os modais ao clicar no link do footer
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const modal = urlParams.get('modal');
    if (modal) {
        openModal(modal + 'Modal'); // 
    }
};

//sistema do chat
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message.trim() !== "") {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
        input.value = ""; // Limpa o campo de entrada
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Rola para a última mensagem
    }
};