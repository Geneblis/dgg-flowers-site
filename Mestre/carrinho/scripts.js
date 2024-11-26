function atualizarCarrinho(){
  const carrinhoDiv = document.getElementById('carrinho');
  const totalSpan = document.getElementById('total');

  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let total = 0;

  carrinhoDiv.innerHTML = '';

  carrinho.forEach((item, index) => {
    carrinhoDiv.innerHTML += `
        <div class="item-carrinho">
            <img src="${item.imagem}" alt="${item.nome}">
            <p>${item.nome} - R$ ${item.preco.toFixed(2)} 
            <button class="remover" onclick="removerDoCarrinho(${index})">Remover</button></p>
            <hr>
        </div>
    `;
    total += item.preco; 
});
totalSpan.innerHTML = total.toFixed(2)
}


function removerDoCarrinho(index){
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  carrinho.splice(index, 1);

  localStorage.setItem('carrinho', JSON.stringify(carrinho))

  atualizarCarrinho();

}
atualizarCarrinho();