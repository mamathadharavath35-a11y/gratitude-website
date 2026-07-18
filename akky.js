// ==============================
// REVEAL ON SCROLL
// ==============================

const revealItems = document.querySelectorAll(
".memory-card, .letter-box, .apology-box, .thought-card, .ending, .thank-you"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealItems.forEach((item)=>{

    revealObserver.observe(item);

});




// ==============================
// SMOOTH BUTTON RIPPLE
// ==============================

const button = document.querySelector(".journey-btn");

if(button){

button.addEventListener("mouseenter",()=>{

    button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

    button.style.transform="translateY(0) scale(1)";

});

}




// ==============================
// FINAL SURPRISE
// ==============================

const scrollDown=document.querySelector(".scroll-down");
const blackScreen=document.querySelector(".black-screen");

let endingPlayed=false;

window.addEventListener("scroll",()=>{

    if(endingPlayed) return;

    const rect=scrollDown.getBoundingClientRect();

    if(rect.top < window.innerHeight){

        endingPlayed=true;

        setTimeout(()=>{

            blackScreen.classList.add("show");

        },2500);

    }

});
