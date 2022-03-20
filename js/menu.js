

const menu = () => {

    const burger = document.querySelector('.humburger-menu'),
        menu = document.querySelector('.menu');
    
    document.addEventListener('click', (e) => {
        e.stopPropagation()
        if (e.target === burger ) {
            menu.classList.toggle('menu-active')
        }
        
        if (!(e.target.closest('.menu') || e.target.closest('.humburger-menu')) || e.target.closest('.menu-list__link')) {
            menu.classList.remove('menu-active')
        }
        
    })

}
menu()