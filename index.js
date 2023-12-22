let conteiner = document.querySelector(".toDoApp")

console.log(conteiner)
let input = document.getElementById("input")
let button = document.getElementById("add")
button.addEventListener("click", addItem)
function addItem(event){
    console.log(event.target.value)
    let li = document.createElement("li")
    li.className = 'App' 
    let div = document.createElement('div')
    div.className = 'icon'
    let label = document.createElement('label')
    label.textContent = input.value
    let img = document.createElement('img')
    img.src = "./assets/cloze.svg"
    img.alt = "cloze"
    img.id = Math.random()+''
    img.addEventListener("click", remove)
    div.appendChild(img)
    li.appendChild(div)
    li.appendChild(label)
    conteiner.appendChild(li) 
}

function remove(event){
    console.log(event.target)
}

let arr = []













