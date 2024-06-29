let countLeft = document.getElementById("left-score")
let resetLeft = document.getElementById("reset-left")
let countRight = document.getElementById("right-score")
let resetRight = document.getElementById("reset-right")

leftScore = 0
rightScore = 0

let leftPlus1 = 1
let leftPlus2 = 2
let leftPlus3 = 3
let rightPlus1 = 1
let rightPlus2 = 2
let rightPlus3 = 3

function logLeftScore1 () {
    console.log("the button was clicked")
    leftScore = leftScore + 1;
    countLeft.innerText = leftScore

}

function logLeftScore2 () {
    console.log("the button was clicked")
    leftScore = leftScore + 2;
    countLeft.innerText = leftScore

}

function logLeftScore3 () {
    console.log("the button was clicked")
    leftScore = leftScore + 3;
    countLeft.innerText = leftScore

}

function resetLeftScore () {
    console.log("the button was clicked")
    leftScore = 0
    countLeft.innerText = leftScore
}

function logRightScore1 () {
    console.log("the button was clicked")
    rightScore = rightScore + 1;
    countRight.innerText = rightScore

}

function logRightScore2 () {
    console.log("the button was clicked")
    rightScore = rightScore + 2;
    countRight.innerText = rightScore

}

function logRightScore3 () {
    console.log("the button was clicked")
    rightScore = rightScore + 3;
    countRight.innerText = rightScore

}


function resetRightScore () {
    console.log("the button was clicked")
    rightScore = 0
    countRight.innerText = rightScore
}
