const tabs = () => {

    const tabButtons = document.querySelectorAll('.design-list__item')
    const tabItem = document.querySelectorAll('.design__descr')
    const tabImages = document.querySelectorAll('.design-images')
    const designBlock = document.querySelectorAll('.design-block > img')
    const sectionTitle = document.querySelectorAll('.design__title')
    console.log(document.title)

    const changeArray = (array, value) => {
        array.forEach(item => {
            if (item.dataset.tabsField === value) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
        })

    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {

            const datavalue = btn.dataset.tabsHandler  // Лучше использовать data атрибуты, а не index
           
            changeArray(tabItem, datavalue)
            changeArray(tabImages, datavalue)
            changeArray(designBlock, datavalue)
            changeArray(sectionTitle, datavalue)
 

            tabButtons.forEach((btn, index) => {
                
                if (btn === e.target) {
                    btn.classList.add('design-list__item_active')
                    document.title = sectionTitle[index].textContent
                } else {
                    btn.classList.remove('design-list__item_active')
                }
            })
        })
    })








}
tabs()