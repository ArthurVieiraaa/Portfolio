window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 250)
})

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-End Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Back-End Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);