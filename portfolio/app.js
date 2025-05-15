document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault(); // Отменяем стандартное поведение формы

    alert("Спасибо за ваше сообщение!");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});