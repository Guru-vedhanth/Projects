let cartvalue=document.getElementById("cart-value")

let pricevalue=document.querySelectorAll(".value")

let count = 0

let text=document.getElementsByClassName("bold")

let url="https://wa.me/919487742918?text=Order details:"

let button = document.getElementsByClassName("button")
for (let i=0;i<button.length;i++){
    button[i].addEventListener("click",()=>get(i));
}
var items = new Object
let total=0
let cents=0
let deci=0
let Quantity=0
function get(i){
    count++
    cartvalue.innerText=count
    total+=  +pricevalue[i].innerText
    // console.log("Item-name:"+text[i].innerText+" Quantity:"+items)
    // console.log("The total amount is "+Math.floor(total)+" $"+" cents "+(total-Math.floor(total)))
    if (!items.hasOwnProperty(text[i].textContent)){
        items[text[i].textContent] = 1
    }else{
        items[text[i].textContent] ++
    }
    
    
}
function display(){
    let x = Object.keys(items)
    for (let i = 0; i<x.length; i++){
        console.log("Item name: "+x[i]+" Quantity: "+items[x[i]])
        url+=`${x[i]} ${items[x[i]]}`
    }
    console.log("The total amount is "+Math.floor(total)+" $"+" cents "+(total-Math.floor(total)))
}

