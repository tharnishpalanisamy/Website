let count = 0 

let countEl = document.getElementById("count-el")

function increment(){
    count += 1 
    countEl.innerText = count
}

function decrement(){
    count -= 1 
    countEl.innerText = count
}