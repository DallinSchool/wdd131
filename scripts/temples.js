document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');


    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.innerHTML = hamburger.classList.contains('active') ? 'X' : '&#9776;';
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1000) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.innerHTML = '&#9776;';
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.innerHTML = '&#9776;'; 
        }
    });
});
