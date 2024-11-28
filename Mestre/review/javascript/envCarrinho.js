function adicionarAoCarrinho(button){
    const produto = button.parentElement;
    const nome = produto.getAttribute('data-nome');
    const imagem = produto.getAttribute('data-imagem');
    const preco = parseFloat(produto.getAttribute('data-preco'));

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push({nome, preco, imagem});

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    console.log(`${nome} foi adicionado ${preco} ${imagem}`)
    alert(`${nome} adicionado ao carrinho`);
}