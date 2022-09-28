const staticCat = document.querySelector(".static.cat-container");

staticCat.classList.add("calico");

staticCat.addEventListener("click", function(){
    let textBubble = staticCat.querySelector(".cat-speech-bubble");
    textBubble.innerHTML = "dont touch me";
});

staticCat.addEventListener("mouseenter", startWagging);
staticCat.addEventListener("mouseleave", stopWagging);

function startWagging() {
    staticCat.classList.add("aggro");
    catFace.innerText = "> W <";
}

function stopWagging() {
    staticCat.classList.remove("aggro");
    catFace.innerText = "u W u";
}

staticCat.addEventListener("click", function(){
    // get a random value
    
})

// const catFace = document.querySelector(".cat-face");
// const catHead = document.querySelector(".cat-head");
// catFace.innerText = "O W O";
// catHead.style.backgroundColor = "gray";

