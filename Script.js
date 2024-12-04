document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".bolas-ordenadas");
    const items = document.querySelectorAll(".item");
    const itemWidth = items[0].offsetWidth + 20; // Inclui margem

    function handleClick(direction) {
        if (direction === "previous") {
            list.scrollBy({ left: -itemWidth, behavior: "smooth" });
            console.log("tras");
        } else if (direction === "next") {
            list.scrollBy({ left: itemWidth, behavior: "smooth" });
            console.log("frente");
        }
    }

    document.querySelector(".antes").addEventListener("click", () => {
        console.log("Botão anterior clicado");
        handleClick("previous");
    });

    document.querySelector(".prox").addEventListener("click", () => {
        console.log("Botão próximo clicado");
        handleClick("next");
    });
});