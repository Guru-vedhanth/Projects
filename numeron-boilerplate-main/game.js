let number1=document.getElementById("number1")

let number2=document.getElementById("number2")

let buttons = document.getElementById("buttons")

let timer = document.getElementById("timer")

let score=0
// Iteration 2: Generate 2 random number and display it on the screen
function displayRandomnumbers(){
    num1=random_nums()
    num2=random_nums()
    number1.innerText=num1
    number2.innerText=num2
}
var num1 =random_nums()
var num2 =random_nums()

function random_nums(){
 return Math.floor(Math.random() * 100) + 1 ;
}
// Iteration 3: Make the options button functional


// console.log(number1,number2)

buttons.addEventListener("click" , (e)=>{
    comparenumbers(e.target.id)
})

displayRandomnumbers()

// Comparing two numbers
function comparenumbers(operation){
    // console.log(operation)
    if((operation==="greater-than" && num1>num2) || (operation ==="equal-to" && num1==num2) || (operation ==="lesser-than" && num1<num2) ){
        time=5
        score++
        displayRandomnumbers()
    }else{
        gameover()
    }
}
// console.log(buttons)

let time=5
function stopwatch(){
    if(time<0){
        gameover()
    }
    time--
    timer.innerText=time

}

setInterval(stopwatch, 1000)

function gameover(){
    location.href="gameover.html"
    localStorage.setItem("score",score)
}

// Iteration 4: Build a timer for the game

