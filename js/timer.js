
const timer = (deadline) => {

    const timerBlock = document.querySelector('.timer__time')
    let interval

    const updateClock = () => {
        

        const date = new Date().getTime()
        const dateDeadline = new Date(deadline).getTime()
        const timeRemaining = (dateDeadline - date) / 1000
    
        const day = Math.floor(timeRemaining / 60 / 60 / 24)
        const hours = Math.floor(timeRemaining / (60 * 60)  % 24)
        const minutes = Math.floor((timeRemaining / 60) % 60)
        const seconds = Math.floor(timeRemaining % 60)
        
        const fDay = day < 10 ? `0${day}` : day,
            fHours = hours < 10 ? `0${hours}` : hours,
            fMinutes = minutes < 10 ? `0${minutes}` : minutes,
            fSeconds = seconds < 10 ? `0${seconds}` : seconds;
        
    
        timerBlock.textContent = `${fDay}:${fHours}:${fMinutes}:${fSeconds}`

        if (timeRemaining <= 0) {
            clearInterval(interval)
            // timerBlock.textContent = `00:00:00:00`
            timerBlock.textContent = 'Акция закончилась'
        }
    }

    updateClock()

    interval = setInterval(updateClock, 500)
    


   

    


}
timer('31 march 2022')