let firstnumber = document.getElementById("firstNumber");
let secondnumber = document.getElementById("secondNumber");
let resultnumber = document.getElementById("userInput");
let gameresult = document.getElementById("gameResult");

function restarting() {
    firstnumber.textContent = Math.ceil(Math.random() * 100);
    secondnumber.textContent = Math.ceil(Math.random() * 100);
    resultnumber.value = "";
    gameresult.textContent = "";
}

restarting();


function checking() {
    let first = parseInt(firstnumber.textContent);
    let second = parseInt(secondnumber.textContent);
    let result = parseInt(resultnumber.value)

    let sum = first + second;

    if (result === sum) {
        gameresult.style.backgroundColor = "#028a0f";
        gameresult.textContent = "Congratulation! You got it right.";
    } else {
        gameresult.style.backgroundColor = "#1e217c";
        gameresult.textContent = "Please Try Again!";
    }
}