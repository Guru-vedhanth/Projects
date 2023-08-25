// Iteration 8: Making scoreboard functional
let play_again_button =document.getElementById("play-again-button")
const scoreBoard = document.getElementById("score-board")

play_again_button.onclick = () =>{
    location.href="index.html"
}

const score = localStorage.getItem("score")
scoreBoard.innerText = score