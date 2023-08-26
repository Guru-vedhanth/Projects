let playagain=document.getElementsByClassName(".playagain")
const playerscore = document.querySelector(".you")
const computerscore = document.querySelector(".com")
const button = document.getElementById("buttons")
const result = document.querySelector(".result")
const final = document.getElementsByClassName("gameover")

function run(){
    location.href="game.html"
}

buttons.addEventListener("click" , (e)=>{
    display(e.target.id);
    value = Math.floor(Math.random()*3)
    execute(value); 
    repeat();

})

var count = 3

function display(operation){
    if (operation=="paper-button" ){
        document.querySelector(".prs").innerHTML = `<img class="paper-hand" src="assets/paper-hand.png" alt=""></img>`
        count=0
    }else if(operation== "rock-button"){
        document.querySelector(".prs").innerHTML = `<img class="rock-hand"src="assets/rock-hand.png" alt=""></img>`
        count=1
    }else if(operation== "scissors-button"){
        document.querySelector(".prs").innerHTML = `<img class="scissors-hand"src="assets/scissors-hand.png" alt=""> `
        count=2
    }
}



function execute(value){
    if (value==0 ){
        document.querySelector(".prs1").innerHTML = `<img class="paper-hand" src="assets/paper-hand.png" alt=""></img>`
    }else if(value==1){
        document.querySelector(".prs1").innerHTML = `<img class="rock-hand"src="assets/rock-hand.png" alt=""></img>`
    }else if(value==2){
        document.querySelector(".prs1").innerHTML = `<img class="scissors-hand"src="assets/scissors-hand.png" alt=""> `
    }
}
let score1 =0
let  score2=1
function repeat(){
    if (count==0 && value==1 || count==1 &&value==2 || count==2 &&value==0 ){
        score1++
        playerscore.innerText = score1
    }else if (count==0 && value==2 || count ==1 &&value==0|| count==2 &&value==1){
        score2++
        computerscore.innerText = score2
    }
    if (score1 == 5 ||score2==5){
        end();
    }
}
function end(){
    console.log(1)
    final[0].style.visibility="visible";
    if (score1>score2){
        result.textContent= "YOU WON" 
    }else if (score2>score1){
        result.textContent = "YOU LOST"
    }else{
        result.textContent= "DRAW"
    }
}

// console.log(result.textContent)