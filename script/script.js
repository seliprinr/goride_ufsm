// BANNER CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-images img');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalImages = images.length;
    const intervalTime = 2000;

    function showSlide(index) {
        const offset = -index * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    let slideInterval = setInterval(autoSlide, intervalTime);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-slide'));
            currentIndex = index;
            showSlide(currentIndex);

            clearInterval(slideInterval);
            slideInterval = setInterval(autoSlide, intervalTime);
        });
    });
});


// DROPDOWN MOBILE
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// VALIDAÇÃO DE FORMULÁRIO + ALERTA MENSAGEM
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;
    let messages = [];

    function validateTextField(field, fieldName) {
        field.classList.remove('input-error'); 

        if (field.value.trim() === '') {
            messages.push(`${fieldName} é obrigatório.`);
            field.classList.add('input-error'); 
            isValid = false;
        }
    }

    validateTextField(firstName, 'Nome');

    validateTextField(lastName, 'Sobrenome');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        messages.push('Por favor, insira um email válido.');
        email.classList.add('input-error');
        isValid = false;
    } else {
        email.classList.remove('input-error');
    }

    if (!isValid) {
        alert(messages.join('\n'));
    } else {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.classList.add('hide');
        }, 3000);
    }
});
