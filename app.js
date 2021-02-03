const next = document.querySelector(".next");
const nextt = document.querySelector(".nextt");
const prew = document.querySelector(".prew");
const slides = document.querySelectorAll(".slide");

let index = 0;
function nextSlide(){
    index++;
    if(index > slides.length-1){
        index = 0;
    }
    slides.forEach((slide)=>{
        slide.style.display = "none";
    });
    slides[index].style.display = "flex";
 }
function prewSlide(){
    index--;
    if(index<0){
        index = slides.length-1;
    }
    slides.forEach((slide)=>{
        slide.style.display = "none";
    });
    slides[index].style.display = "flex";
}
next.addEventListener("click", nextSlide);
nextt.addEventListener("click", nextSlide);
prew.addEventListener("click", prewSlide);

const hamburgers = document.getElementById("hamburger");
const navUl = document.getElementById("nav-lu");
hamburgers.addEventListener("click", ()=>{
      navUl.classList.toggle("show");
});

function myFunction(x) {
  x.classList.toggle("change");
}function myFunction(x) {
  x.classList.toggle("change");
}

const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector(".header");

hamburger.addEventListener("click", ()=> {
navLinks.classList.toggle("open");
});