// Функция для плавного скролла к элементам
function scrollToElement(element) {
    element.scrollIntoView({behavior: 'smooth'});
}

// Навешиваем обработчики событий на все ссылки навигации
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let target = document.querySelector(this.href.split('#')[1]);
        if (target) {
            scrollToElement(target);
        }
    });
});