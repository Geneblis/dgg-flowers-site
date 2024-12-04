document.getElementById('searchButton').addEventListener('click', function() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    console.log("Input digitado:", input); // Adicione esta linha
    // Aqui você pode definir as flores e suas respectivas URLs
    var flowers = {
        "abacaxi ornamental": "../review/abacaxi_ornamental.html",
        "alamanda": "../review/alamanda.html",
        "alpinia": "../review/alpinia.html",
        "anturio": "../review/anturio.html",
        "bougainvillea": "../review/bougainvillea.html",
        "canna": "../review/canna.html",
        "cachepo de vime": "../review/cachepoDeVime.html",
        "bastao do imperador": "../review/emperors_bastion.html",
        "estrelitzia": "../review/estrelitzia.html",
        "flor de lotus": "../review/florDeLotus.html",
        "gengibre magnifico": "../review/gengibreginger.html",
        "heliconia": "../review/heliconia.html",
        "hibisco": "../review/hibisco.html",
        "ixora": "../review/ixora.html",
        "jasmine": "../review/jasmine.html",
        "macrame": "../review/macrame.html",
        "orquidea": "../review/orquidea.html",
        "plumaria": "../review/plumaria.html",
        "tiare": "../review/tiare.html",
        "zinnia": "../review/zinnia.html",
        "protea compacta": "../review/proteaCompacta.html",
        "protea cynaroides": "../review/proteaCynaroides.html",
        "protea laurel": "../review/proteaLaurel.html",
        "protea neriifolia": "../review/proteaNeriifolia.html",
        "protea pink ice": "../review/proteaPinkIce.html",
        "protea repens": "../review/proteaRepens.html",
        "vaso de barro": "../review/vasoDeBarro.html",
        "vaso de cimento": "../review/vasoDeCimento.html",
        "vaso de madeira": "../review/vasoDeMadeira.html",
        "vaso de plastico com drenagem": "../review/vasoDePlasticoComDrenagem.html",
        "vaso de plastico": "../review/vasoDePlasticoComDrenagem.html",
    };

    if (flowers[input]) {
        window.location.href = flowers[input]; 
    } else {
        alert("Flor não encontrada!");
    }
});