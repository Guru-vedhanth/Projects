const randommealname=document.getElementById("randommealname")
const randommeal=document.getElementById("randommeal")


const searchvalue=document.getElementById("category")
let category

const table=document.getElementById("modaltable")
const modal=document.getElementById("modal")


fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    console.log()
    randommealname.innerText=`${data.meals[0].strMeal}`
    randommeal.src=`${data.meals[0].strMealThumb}`
    for(let i=0;i<21;i++){
        if (data.meals[0][`strIngredient${i}`]!=null){
            table.innerHTML+=`<tr>
            <td>${data.meals[0][`strIngredient${i}`]}</td>
            <td>${data.meals[0][`strMeasure${i}`]}</td>
            </tr>`
        }
        else{

        }
        
    }
})


function search(){
    category=searchvalue.value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        data.meals.forEach((item) => {
            document.getElementById("yourchoice").innerHTML+=`<div class="meals"><img class="dish" id="searchmeal" src="${item.strMealThumb}">
            <p class="food-name">${item.strMeal}</p></div>`
        })
    })

}

function details(){
    // console.log(modal.innerHTML)
    modal.showModal()
}

function detailsclose(){
    modal.close()
}

