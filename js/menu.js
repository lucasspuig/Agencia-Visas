(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const menuLinks = document.querySelectorAll('.nav__link a'); // Selecciona todos los enlaces dentro del menú

    openButton.addEventListener('click', ()=> {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=> {
        menu.classList.remove('nav__link--show');
    });

    // Cierra el menú cuando se hace clic en un enlace normal, pero NO en un dropdown
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) { 
                menu.classList.remove('nav__link--show');
            }
        });
    });

})();
