//DRAFT SCRIPT

/* selecting elements */
const staticCat = document.querySelector(".static.cat-container");
const kittyFace = document.querySelector('.cat-face');
const kittyTail = document.querySelector('.cat-tail');
const kittyMessage = document.querySelector(".cat-speech-bubble");


/* manipulating content, styles, classes of elements */
// kittyFace.innerHTML = "o w o";
// kittyMessage.innerText = "I'm a Russian Blue but don't know how to change the eye color so I'm just smiling";
kittyTail.style.backgroundColor = 'gray'; //notice tail remains black
staticCat.classList.add("russianblue");

/* event listeners */
// pet the cat
staticCat.addEventListener("mouseenter", startWaggingTail);
staticCat.addEventListener("mouseleave", stopWaggingTail);
function startWaggingTail() {
  staticCat.classList.add("loaf");
  kittyMessage.innerText = "I'm a cat loaf";
  kittyFace.innerHTML = "= a ="; //why is it not changing?
}
function stopWaggingTail() {
  staticCat.classList.remove("loaf");
  kittyMessage.innerText = "I'm just a cat now"
  kittyFace.innerHTML = "^ 모 ^";
}
// toggle wagging animation on click
staticCat.onclick = () => {
  staticCat.classList.toggle("aggro");
};

// onclick the cat moves elsewhere
staticCat.addEventListener("click", function () {
  //we're being lazy with a static buffer, could make it cat-sized
  const catBuffer = 200;
  // pick a random screen position
  let randomX = rng(catBuffer, window.innerWidth - catBuffer);
  let randomY = rng(catBuffer, window.innerHeight - catBuffer);
  console.log(randomX);
  this.style.left = `${randomX}px`;
  this.style.top = `${randomY}px`;
});


/*** HELPER FUNCTIONS ***/
function rng(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}