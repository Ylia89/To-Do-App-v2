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
    div.textContent = input.value
    li.appendChild(div)
    conteiner.appendChild(li) 
}

document.conteiner(li)
li.remove()
div.className = 'icon'
let label = document.createElement('label')
li.append(label) 
label.textContent = input.value







