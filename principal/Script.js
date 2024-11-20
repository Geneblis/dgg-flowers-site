const list = document.querySelector(".bolas-ordenadas");

const item = document.querySelector(".item");

const itemWidth = item.offsetWidth + 20;
function handleclick(direction){
    if (direction === "previous"){
        list.scrollBy({left: itemWidth, behavior: "smooth"})
    } else if (direction === "next") {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
}
document.querySelector(".button--antes").addEventListener("click",()=>handleClick("previous"))

document.querySelector(".button--prox").addEventListener("click", () => handleClick("next"));