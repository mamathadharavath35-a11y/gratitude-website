// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
  ".memory-card, .thought-card, .letter-box, .apology-box, .ending, .thank-you"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

},{
  threshold:0.15
});


revealElements.forEach((el)=>{

  el.style.opacity="0";
  el.style.transform="translateY(40px)";
  el.style.transition="0.8s ease";

  observer.observe(el);

});




// ==============================
// LETTER TYPEWRITER
// ==============================

const letter = document.querySelector(".letter-content p");


if(letter){

const originalText = letter.innerHTML;

letter.innerHTML="";

let i=0;

function typeLetter(){

  if(i < originalText.length){

    letter.innerHTML += originalText.charAt(i);

    i++;

    setTimeout(typeLetter,10);

  }

}


window.addEventListener("load",()=>{

  setTimeout(typeLetter,1000);

});

}




// ==============================
// CINEMATIC ENDING
// ==============================

const blackScreen = document.querySelector(".black-screen");
const thankSection = document.querySelector(".thank-you");


window.addEventListener("scroll", function(){

    const sectionTop = thankSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;


    if(scrollPosition > sectionTop + 100){

        blackScreen.classList.add("show");

    },6000);

});