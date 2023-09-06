const easy=document.getElementsByClassName("easy")
console.log(easy)
const medium=document.getElementsByClassName("medium")
console.log(medium)
const hard=document.getElementsByClassName("hard")
console.log(hard)






easy[0].addEventListener('click',function(){
    const count=0
    location.href="game.html"
})
medium[0].addEventListener('click',function(){
    const count=1
    location.href="game.html"
})
hard[0].addEventListener('click',function(){
    const count=2
    location.href="game.html"
})


