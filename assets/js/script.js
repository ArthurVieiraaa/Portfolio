window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 30)
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

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) =>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => content.classList.remove('active'));
        all_content[index].classList.add('active');
    })
})

const form = document.querySelector('form');

function emailSend(e) {
    e.preventDefault();
    const serviceID = 'service_n0bcnct';
    const templateID = 'template_9u2uzik';

    const valor = {
        from_name: document.querySelector('#name').value,
        message: document.querySelector('#message').value,
        email: document.querySelector('#email').value
    };

    emailjs.send(serviceID, templateID, valor)
    .then(() => {
        console.log('SUCCESS!');
        form.reset();
    })
    .catch(err => console.log('FAILED...', err));
};

form.addEventListener('submit', emailSend);