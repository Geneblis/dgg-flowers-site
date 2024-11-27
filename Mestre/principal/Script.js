console.log("fds")

const list = document.querySelector(".bolas-ordenadas");
const items = document.querySelectorAll(".item");
const itemWidth = items[0].offsetWidth + 20; // Inclui margem

function handleClick(direction) {
    if (direction === "previous") {
        list.scrollBy({ left: -itemWidth, behavior: "smooth" });
        console.log("pra trasss")
    } else if (direction === "next") {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
        console.log("pra frente")
    }
}

function praFrente(){
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    console.log("pra trasss")   
}
function praTras(){
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
    console.log("pra frente")

}

document.querySelector(".button--antes").addEventListener("click", () => handleClick("previous"));
document.querySelector(".button--prox").addEventListener("click", () => handleClick("next"));
