

const menu = () => {

    const burger = document.querySelector('.humburger-menu'),
        menu = document.querySelector('.menu');
    
    document.addEventListener('click', (e) => {
        e.stopPropagation()
        if (e.target === burger) {
            menu.classList.toggle('menu-active')
        }
        
        if (!(e.target === menu || e.target === burger)) {
            menu.classList.remove('menu-active')
        }
        
    })

}
menu()