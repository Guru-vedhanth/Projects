let button = document.getElementById("button") 
let input = document.getElementById("input")
let list = document.getElementById("todolist")
let arr =[]

button.onclick = function(){
    arr.push(input.value)
    input.value=""
    appendlist()
    
}

// Appending the data inside list

function appendlist(){
list.innerHTML=null
    for (i=0; i<arr.length ;i++){
        // let li =document.createElement('li')
        // li.innerText=`${arr[i]}`
        // list.append(li)

        // list.innerHTML += "<li>" + arr[i] + "</li>" 

        list.innerHTML += `<li> ${arr[i]} <a onclick="Editlist(${i})">Edit</a><br><a onclick="Delete(${i})">Delete</a> </li>`
    }

}


// edit function


function Editlist(index){
    let text= prompt("Enter new task")
    if (text.length>0){
        arr[index]=text
    }
    appendlist()
}


// Deleting the elements in a array 

function Delete(index){
    arr.splice(index,1)
    appendlist()
}


