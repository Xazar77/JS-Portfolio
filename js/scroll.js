

const scroll = () => {

    const links = document.querySelectorAll('.menu-list__link'),
        btn = document.querySelector('.main__button'),
        mainScroll = document.querySelector('.main__scroll')
    
    const allLinks = [...links, btn, mainScroll]

    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()

            const id = link.getAttribute('href').substring(1),
                section = document.getElementById(id)
            
            if (section) {
                // section.scrollIntoView({
                //     block: 'start',
                //     behavior: 'smooth'

                // })
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        })
    })




}
scroll()