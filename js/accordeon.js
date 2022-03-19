
const accordeon = () => {

    const accordeon = document.querySelector('.feature-list'),
        accordeonBtns = accordeon.querySelectorAll('.feature__link');
    
    


    accordeonBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            accordeonBtns.forEach(button => {
                button.classList.remove('feature__link_active')
                button.nextElementSibling.classList.add('hidden')
            })
            btn.classList.toggle('feature__link_active')
            btn.nextElementSibling.classList.toggle('hidden')
        })
    })





}
accordeon()