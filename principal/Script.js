const list = document.querySelector(".bolas-ordenadas");
const items = document.querySelectorAll(".item");
const itemWidth = items[0].offsetWidth + 20; // Inclui margem

function handleClick(direction) {
    if (direction === "previous") {
        list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else if (direction === "next") {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
}

document.querySelector(".button--antes").addEventListener("click", () => handleClick("previous"));
document.querySelector(".button--prox").addEventListener("click", () => handleClick("next"));
