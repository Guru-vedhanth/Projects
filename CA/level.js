const easy=document.getElementsByClassName("easy")
const medium=document.getElementsByClassName("medium")
const hard=document.getElementsByClassName("hard")

let level


// THE SPEED CHOOSED BASED ON THE LEVELS


easy[0].addEventListener('click',function(){
    level=4
    levels()
})
medium[0].addEventListener('click',function(){
    level=3
    levels()
})
hard[0].addEventListener('click',function(){
    level=2
    levels()
})

// DIRECTING TO THE GAME PAGE 


function levels(){
    sessionStorage.setItem("level",level)
    location.href="game.html"
}

