const holes=document.querySelectorAll(".hole")
const graves=document.querySelector("#graves")
const nickname =localStorage.getItem("nickname")
const points=document.querySelector(".score-board")


// DECLARING THE VALUE

let score=0
let count
let position 
let nums
let stage
stage=sessionStorage.getItem("level")
// console.log(stage)
let time=stage
let values
let values2
let place



generatemembers()

// GENERATING RANDOM NUMBERS

function generaterandomnumbers(){
    position=Math.floor(Math.random()*9)
    nums=Math.floor(Math.random()*2)
}



// GENERATING THE DEVIL AND ANGEL


function generatemembers(){
    generaterandomnumbers()
    arr=[
        `<img src="assets/devil.png" alt="" class="da">`,`<img src="assets/angel.png" alt="" class="da">`
    ]
    holes[position].innerHTML=arr[nums]
    place=holes[position]
    if (nums==0){
        count=0
    }else{
        count=1
    }
}


// ADDING FUNCTIONS AFTER CLICKING DEVIL OR ANGEL 

graves.addEventListener('click',function(e){
    values=e.target.src
    values2=e.target
    if(values!= undefined){
        destroy(count,values2)}
})

// DESTROYING THE DEVIL AFTER CLICKING IF ANGEL CLICKED EXITS THE GAME 


function destroy(count,values2){
    if (count==0){
        values2.style.display = "none"
        time=stage
        score++
        points.textContent=score
        generatemembers()
    }
    else if(count==1){
        values2.style.display="none"
        gameover()
    }
}


// ADDING TIMER TO THE GAME USING SETINTERVAL 


setInterval(timer,1000)

function timer(){
    // TO CHECK WHETHER THE IMAGE IS DEVIL OR ANGEL
    if(count==0){
        time--
        if(time == 0){
            gameover()
        }
    }
    else if(count ==1){
        time--
        if(time==1){
            holes[position].innerHTML=""
            time=stage
            generatemembers()
        }
    }
    else if(values == undefined){
        time--
        if(time==0){
            alert("Choose the correct option")
        }
    }
}


// DIRECTING TO THE GAMEOVER PAGE

function gameover(){
    location.href="gameover.html"
    localStorage.setItem(nickname,score)
    // localStorage.clear();
}








