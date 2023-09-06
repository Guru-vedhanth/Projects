const holes=document.querySelectorAll(".hole")
const graves=document.querySelector("#graves")
let count
let position 
let nums
let speed1
let speed2
let speed3

generatemembers()

function generaterandomnumbers(){
    position=Math.floor(Math.random()*9)
    nums=Math.floor(Math.random()*2)
}


function generatemembers(){
    generaterandomnumbers()
    arr=[
        `<img src="assets/devil.png" alt="" class="da">`,`<img src="assets/angel.png" alt="" class="da">`
    ]
    holes[position].innerHTML=arr[nums]
    if (nums==0){
        count=0
    }else{
        count=1
    }
}




graves.addEventListener('click',function(e){
    let value=e.target
    if(value!=""){
        destroydevilorangel(count,value)
    }
})



function destroydevilorangel(count,value){
    if (count==0){
        value.style.display = "none"
        generatemembers()
    }else{
        location.href="gameover.html"
    }
}

speed1=1
spped2=2
spped3=3



time=speed3

setInterval(timer,1000)



function timer(){
    if(time<0){
        location.href="gameover.html"
    }
}