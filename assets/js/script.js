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

let sendButton = document.querySelector('send-button');
const form = document.querySelector('form');

sendButton.addEventListener('click', function(e) {
    e.preventDefault();
    sendButton.value = 'Enviando...';
    const serviceID = 'service_n0bcnct';
    const templateID = 'template_9u2uzik';
    
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            sendButton.value = 'Enviar Email';
            alert('Email enviado com sucesso!');
        }, (err) => {
            sendButton.value = 'Enviar Email';
            alert(JSON.stringify(err));
        });
});