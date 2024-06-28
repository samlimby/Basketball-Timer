let countLeft = document.getElementById("left-score")
console.log(countLeft)

leftScore = 5

let plus1 = 1
let plus2 = 2
let plus3 = 3

function logLeftScore () {
    console.log("the button was clicked")
    leftScore = leftScore + 1;
    countLeft.innerText = leftScore

}
