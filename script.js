const theBG = document.querySelector(".add-bg");
const pink = document.querySelector(".pink");
const green = document.querySelector(".green");
const text = document.querySelector(".text");

text.addEventListener("click", () => {
  pink.classList.add("pink-after"); green.classList.add("green-after"); text.innerHTML='';

  setTimeout(() => {
   theBG.classList.add("bg-img");
  }, 1200);

  ;
 
});

window.addEventListener('click', ()=>{
  setTimeout(() => {
    document.getElementById("bg-music").play();
  }, 1200);
});