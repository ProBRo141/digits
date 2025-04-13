const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelector('.header__navigation');
const body = document.body;
    
burgerMenu.addEventListener('click', function() {
    navigation.classList.toggle('active');
    this.classList.toggle('active');
    body.style.overflow = navigation.classList.contains('active') ? 'hidden' : '';
});
    
const navLinks = document.querySelectorAll('.header__navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
    navigation.classList.remove('active');
    burgerMenu.classList.remove('active');
    body.style.overflow = '';
    });
});