const text = `Dear Executive Akky,

Thank you for being such an important part of my life.

This website is something I built while learning web development.

Every section here carries a memory, and every line carries gratitude.

❤️`;

const typingText = document.getElementById("typing-text");

let index = 0;

function typeLetter(){

    typingText.innerHTML += text.charAt(index);

    let delay = Math.random()*60 + 60;

    if(text.charAt(index) === " "){
        delay = 100;
    }

    if(text.charAt(index) === "," || text.charAt(index) === "."){
        delay = 250;
    }

    index++;

    if(index < text.length){

        setTimeout(typeLetter, delay);

    }

}



const letterSection = document.querySelector(".letter");

const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        typeLetter();
    }
});

observer.observe(letterSection);

const hiddenElements =  document.querySelectorAll(".hidden");

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
})

hiddenElements.forEach((element)=>{
    observer2.observe(element);
});

const journeyBtn = document.getElementById("journeyBtn");

journeyBtn.addEventListener("click",function(){
    journeyBtn.style.transform = "scale(0.95)";

    setTimeout(function(){

    journeyBtn.style.transform = "scale(1)";
    },150);
});

const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click",function(){

    alert("There's still one more surprise waiting... ❤️");

});
