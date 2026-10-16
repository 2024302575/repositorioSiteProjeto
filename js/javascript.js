console.log ("aqui");
document.addEventListener("DOMContentLoaded", ()=>{
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");


    menuResponsivo.addEventListener("click",()=>{
        navMenu.classList.toggle("active")


    });
    //forEach = laço de repetição 
    const navLinks = document.querySelectorAll(".nav-menu a")
    navLinks.forEach((link) => {
        link.addEventListener("click", () =>{
        navMenu.classList.remove("active");
        })
    });

    const slides = document.querySelectorAll(".carousel-slide");
// ponto = class
// sem ponto = id
// var = variavel global
// let = variavel nao global
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;

//showSlide = nome da função
//length = tamanho
// % = resto da divição
//java = evento e ação

    function showSlide(index) {slides.forEach((slide) => slide.classList.remove("active"));

        dots.forEach((dot) => dot.classList.remove("active"));

        slideAtual = (index + slides.length)
            % slides.length;
        slides[slideAtual].classList.add("active");
        dots[slideAtual].classList.add("active");

    }

    function nextSlide(){
        showSlide(slideAtual + 1);
    }

    function prevSlide(){
        showSlide(slideAtual - 1);
    }

    function startSlide(){
        slideIntervalo = setInterval(nextSlide, 5000);
    }
    
    function stopSlide(){
        clearInterval(slideIntervalo);
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopSlide();
        startSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        stopSlide();
        startSlide();
    });

    dots.forEach((dot) => {
        console.log ("mnaus")
        dot.addEventListener("click",  (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            showSlide(index);
            stopSlide();
            startSlide();
        });
    });

    startSlide();
    
    //validação do formulario
    const contatoForm = document.getElementById("contatoForm");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    function isValidEmail(email){
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }


    contatoForm.addEventListener("submit", (event) =>{
        event.preventDefault();

        let isValid = true;

        //validação do campo nome (verificar menimo 3 caracteres)
        if(nome.value.trim().length < 3 )
        {
            showError(nome,"nome teve ter no minimo 3 caracteres");
            isValid = false;
        }

        //validação do campo E-mail
        if(isValidEmail(email.value.trim()))
        {
            showError(email,"Insira um e-mail válido");
            isValid = false;
        }
        //validação do campo mensagem (mínimo 10 caracteres)
        if(mensagem.value.trim().length < 10)
        {
            showError(mensagem,"Ponha uma mensagem com no mínimo 10 caracteres");
            isValid = false;
        }
        //validar se estiver tudo corre
        if(isValid)
        {
            clearError();
            alert("Mensagem enviado com sucesso");
            contatoForm.reset();
        }

    });

    function showError(inputElement, mensagem){
        const fomrGroup = inputElement.parentElement;
        inputElement.classList.add("imput-error");
        const errorMensagem = document.createElement("small");
        errorMensagem.className = "error-text";
        errorMensagem.innerText = mensagem;
        fomrGroup.appendChild(errorMensagem);
    }

    //fecha menu responsivo
});//final função evento carregar todo HTML
