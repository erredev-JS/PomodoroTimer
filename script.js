timerText = document.getElementById('timerText')
startBtn = document.getElementById('startBtn')
restartBtn = document.getElementById('restartBtn')
let timerSound = new Audio('./mp3/timer.mp3')
let min = 25
let sec = 0
let intervalStatus = false
let myInterval 
let pause = true
let rest = false
let click = 0
let contadorPomodoros = 0
let workTime = 0
let restTime = 0  

startBtn.addEventListener('click', () => {
    click++
    if(click % 2 == 0){
        startBtn.innerHTML = '<img src="./svg/bx-play.svg" alt="start icon"></i> Reanudar'

        pause = true   
        intervalStatus = false
        console.log(intervalStatus)
        clearInterval(myInterval)

    }
    if(click % 2 == 1){
        pause = false
        startBtn.innerHTML = '<img src="./svg/bx-pause.svg" alt="start icon"></i> Pausar'
    }
    if(pause == false){
        intervalStatus = true
        myInterval = setInterval(() => {
            sec--
            if(sec < 0){
                min--
                sec = 59

            }
            if((sec == 0 & min == 0) & rest == false){
                rest = true
                min = 5
                sec = 0
                timerSound.play()
            }
            if((sec == 0 & min == 0) & rest == true){
                contadorPomodoros++
                workTime +=  25
                restTime +=  5
                timerSound.play()
                alert(`Pomodoro realizado llevas, ${contadorPomodoros} pomodoros terminados en la sesion actual.
                 Tiempo de trabajo total: ${workTime} minutos
                 Tiempo de descanso total: ${restTime} minutos`)
                 restart()
            }
            if(sec < 10 || min < 10){
                if(sec < 10){
                    timerText.textContent = `${min}:0${sec}`
                }
                if(min < 10){
                    timerText.textContent = `0${min}:${sec}`
                }
                if(min < 10 & sec < 10){
                    timerText.textContent = `0${min}:0${sec}`

                }
            }else{
                timerText.textContent = `${min}:${sec}`

            }
        },1000)
    
    }
})

restartBtn.addEventListener('click', restart)

function restart() {
    pause = true
    min = 25
    sec = 0
    click = 0
    clearInterval(myInterval)
    timerText.textContent = `${min}:0${sec}`
    startBtn.innerHTML = '<img src="./svg/bx-play.svg" alt="start icon"></i> Empezar'
}
