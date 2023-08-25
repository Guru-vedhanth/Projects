// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1=document.getElementById("number1")
let number2=document.getElementById("number2")
const number3 =document.getElementById("number3")
const buttons = document.getElementById("buttons")
let score=0

function displayRandomnumbers(){
    num4 = Math.floor(Math.random()*5)
    num1=random_nums()
    num2=random_nums()
    number1.innerText=num1
    number2.innerText=num2
    arr=[num1+num2,num1-num2,num1*num2,(Math.floor((num1/num2)*10)/10),num1%num2]
    number3.innerText=arr[num4]
}
var num1 =random_nums()
var num2 =random_nums()

function random_nums(){
 return Math.floor(Math.random() * 100);
}

displayRandomnumbers();
// Iteration 3: Creating variables required to make the game functional

// console.log(`The array is ${arr}`)

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"


buttons.addEventListener("click" , (e)=>{
    comparenumbers(e.target.id)
})

function comparenumbers(operation){
        if((operation==="plus" && arr[0]==number3.textContent) || 
        (operation ==="minus" && arr[1]==number3.textContent) || 
        (operation ==="mul" && arr[2]==number3.textContent)||
        (operation ==="divide" && arr[3]==number3.textContent)|| 
        (operation ==="modulus" && arr[4]==number3.textContent)){
            time=5
            score++
            displayRandomnumbers()
        }else{
            gameover()
        }
    
    
}

let time=5
function stopwatch(){
    time--
    timer.innerText=time
    if(time==0){
        gameover()
    }

}

setInterval(stopwatch, 1000) 


function gameover(){
    location.href="gameover.html"
    localStorage.setItem("score",score)
}
