// ACCESSING VALUES


const retry=document.querySelector(".playagain")
const scoreboard= document.querySelector(".score-board")
const nickname=localStorage.getItem("nickname")
const leaderboard=document.querySelector(".leader-board")
const lastpage=document.querySelector(".lastpage")
const popup=document.querySelector(".popup")
const command=document.querySelector(".commands")
let length
const table=document.querySelector("table")
const close=document.querySelector(".close")
retry.addEventListener('click',function(){
    location.href="level.html"
})


// STORING THE VALUE IN LOCAL STORAGE


const score= localStorage.getItem(nickname)
scoreboard.textContent=score


// DISPLAYING COMMANDS ACCORDING TO THE SCORE

if(score==0){
    command.innerText+="Better luck time"
}else if(score<5){
    command.innerText+="Best try"
}else if(score<10){
    command.innerText+="Keep Rocking"
}else if(score<15){
    command.innerText+="Great job"
}else{
    command.innerText+="Awesome"
}


leaderboard.addEventListener('click',function(){
    popup.style.display="flex"
    lastpage.style.filter="blur(10px)"
})

close.addEventListener('click',function(){
    location.href="gameover.html"
})


length=localStorage.length

let topscore={}

for(let i=0;i<length;i++){
    let temp=localStorage.key(i)
    let value=localStorage.getItem(temp)
    if('1234567890'.includes(value)){
        topscore[temp]=localStorage.getItem(temp)
    }
}

// DISPLAYING THE LEADER BOARD

topscore=Object.entries(topscore).sort((a,b)=>b[1]-a[1]) 

console.log(topscore)
for(var i=0; i<topscore.length;i++){
    table.innerHTML+=` <tr>
    <th>${i+1}</th>
    <td>${topscore[i][0]}</td>
    <td>${topscore[i][1]}</td>
</tr>`
}



