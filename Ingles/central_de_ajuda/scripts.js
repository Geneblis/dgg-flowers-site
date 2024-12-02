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


function sendPredefinedQuestion(question) {
    displayMessage(question, 'user');
    handleChatbotResponse(question);
}

function displayMessage(message, sender) {
    const messagesDiv = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    newMessage.className = sender; // Adiciona classe para estilização
    messagesDiv.appendChild(newMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Rola para a última mensagem
}

function handleChatbotResponse(message) {
    const predefinedQuestions = [
        'Qual é o horário de atendimento?',
        'Como posso entrar em contato?',
        'Quais serviços vocês oferecem?'
    ];

    if (predefinedQuestions.includes(message)) {
        // Resposta do chatbot para perguntas pré-definidas
        const response = getChatbotResponse(message);
        displayMessage(response, 'chatbot');
    } else {
        // Resposta para mensagens não reconhecidas
        displayMessage("Desculpe, o chat está lento. Por favor, volte mais tarde.", 'chatbot');
    }
}

function getChatbotResponse(question) {
    const responses = {
        'Qual é o horário de atendimento?': 'Nosso horário de atendimento é das 9h às 18h.',
        'Como posso entrar em contato?': 'Você pode entrar em contato pelo telefone (xx) xxxx-xxxx.',
        'Quais serviços vocês oferecem?': 'Oferecemos uma variedade de serviços, incluindo consultoria e suporte técnico.'
    };
    return responses[question] || "Desculpe, não entendi sua pergunta.";
}