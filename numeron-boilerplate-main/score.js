// Iteration 5: Store the player score and display it on the game over screen
// console.log()



let play_again_button =document.getElementById("play-again-button")
const scoreBoard = document.getElementById("score-board")

play_again_button.onclick = () =>{
    location.href="index.html"
}

const score = localStorage.getItem("score")
scoreBoard.innerText = score