// Using DOM to get details

let Username=document.querySelector(".name")
const Nickname=document.querySelector(".nickname")
const submitButton=document.querySelector(".submit")
const information=document.querySelector(".information")
let name
let secondname


// After clicking the start button the name stored in the local storage

submitButton.addEventListener('click', function() {
    name=Username.value
    secondname=Nickname.value


// Storing the username and nickname
    localStorage.setItem('username', name);
    localStorage.setItem('nickname', secondname);


// Moving to the next interface
    if ((name!="") && (secondname!="")){
        location.href="level.html"
    }else{
        alert("Type the names...")
    }
    
})

// DIRECTING TO INSTRUCTION PAGE

information.addEventListener('click',function(){
    location.href="instructions.html"
})