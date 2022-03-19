
const modal = () => {

    const modalOpen = document.querySelectorAll('.more'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close'),
        overlay = modal.querySelector('.overlay');
        
    
    modalOpen.forEach(btn => {
        btn.addEventListener('click', () => {
             modal.classList.remove('hidden')
        })
    })
    document.addEventListener('click', (e) => {
        e.stopPropagation()
        if (e.target === overlay || e.target === modalClose) {
            modal.classList.add('hidden')
        }
        
    })
    document.addEventListener('keydown', (e) => {
        
        if (e.code === 'Escape') {
            modal.classList.add('hidden')
        }
        
    })
    



}
modal()