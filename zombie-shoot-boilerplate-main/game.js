const gamebody= document.getElementById("game-body")
let shotgunsound= new Audio("./assets/shotgun.wav")
let lives=3
let zombie



gamebody.onclick = ()=>{
    // shotgunsound.pause()
    shotgunsound.currentTime = 0
    shotgunsound.play()
}


let backgroundMusic = new Audio("./assets/bgm.mp3")
backgroundMusic.play()
backgroundMusic.loop = true

let zombieid=0
function generatezombies(){
    let num = generateuniquenumbers(1,7)
    gamebody.innerHTML+=`<img src=./assets/zombie-${num}.png class=zombie-image id=Zombie${zombieid}>`
    
    zombie =document.getElementById(`Zombie${zombieid}`)
    let speed =generateuniquenumbers(2,6)

    zombie.style.animationDuration=`${speed}s`

    let viewwidth=generateuniquenumbers(20,80)
    zombie.style.transform=`translateX(${viewwidth}vw)`
    zombie.onclick=()=>{
        destroyzombie(zombie)

    }
    zombieid++
}
generatezombies()

function generateuniquenumbers(min,max){
    return Math.floor(Math.random()*(max-min))+min

}

function destroyzombie(ghost){
    ghost.style.display = "none"
    generatezombies()
}
let time=60
function escapezombie(zombie){
    // console.log(1)
    if(zombie.getBoundingClientRect().top<=0){
        lives--
        if(lives<=0){
            location.href="game-over.html"
        }else{
            destroyzombie(zombie)
        }  
    }
}

setInterval(timer,1000)

function timer(){
    let timerr =document.getElementById("timer")
    if(time<0){
        location.href="win.html"
    }else{
        time--
        escapezombie(zombie)
        timerr.innerHTML=time
    }
}