// getting the html elemnt
const decrementBtn = document.getElementById("decrementBtn")
const incrementBtn = document.getElementById("incrementBtn")
const resetBtn = document.getElementById("resetBtn")
const displayvalue = document.getElementById("displayvalue")


// for decrment btn click
decrementBtn.addEventListener("click", ()=> {
    const value = displayvalue.innerText
    if (value > 0) {
        displayvalue.innerText = value - 1
    }
else {
    alert ("negative value not allowed")
}
})

// for incerment btn click
incrementBtn.addEventListener("click", ()=> {
const value = displayvalue.innerText
if(value <= 10) {
     displayvalue.innerText = value + 1
}
else {
    alert("10+ values are not allowed") 
}
})

// for reset btn click
resetBtn.addEventListener("click", ()=> {
    displayvalue.innerText = 0
}
)