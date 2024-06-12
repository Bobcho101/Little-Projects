const display = document.querySelector(".display-result");
const displayYourPick = document.querySelector(".display-your-pick");
const displayCompPick = document.querySelector(".display-computer-pick");

let result = document.querySelector(".result");
let count1 = 0;
let count2 = 0;



function rockFunction(){
    const randomNumber = Math.random();
    let computerMove = "";
    displayYourPick.placeholder = "You picked rock";
    
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = "rock";
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = "paper";
    } else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = "scissors";
    }
    displayCompPick.placeholder = `Computer picked ${computerMove}`;
    if(computerMove === "rock"){
        display.placeholder = "Tie";
    } else if(computerMove === "paper"){
        display.placeholder = "You lose";
        count2 += 1;
    } else if(computerMove === "scissors"){
        display.placeholder = "You win";
        count1 += 1;
    }
    result.textContent = `${count1} : ${count2}`;
    if(count1 === 10){
        alert(`You win. ${count1} : ${count2}`);
        count1 = 0;
        count2 = 0;
    } else if(count2 === 10){
        alert(`You lost. ${count1} : ${count2}`);
        count1 = 0;
        count2 = 0;
    }
}
function paperFunction(){
    const randomNumber = Math.random();
    let computerMove = "";
    displayYourPick.placeholder = "You picked paper";
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = "rock";
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = "paper";
    } else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = "scissors";
    }
    displayCompPick.placeholder = `Computer picked ${computerMove}`;
    if(computerMove === "rock"){
        display.placeholder = "You win";
        count1 += 1;
    } else if(computerMove === "paper"){
        display.placeholder = "Tie";
    } else if(computerMove === "scissors"){
        display.placeholder = "You lose";
        count2 += 1;
    }
    result.textContent = `${count1} : ${count2}`;
    if(count1 === 10){
        alert(`You win. ${count1} : ${count2}`);
        count1 = 0;
        count2 = 0;
    } else if(count2 === 10){
        alert(`You lost. ${count1} : ${count2}`);
        count1 = 0;
        count2 = 0;
    }
}
function scissorsFunction(){
    const randomNumber = Math.random();
    let computerMove = "";
    displayYourPick.placeholder = "You picked scissors";
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = "rock";
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = "paper";
    } else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = "scissors";
    }
    displayCompPick.placeholder = `Computer picked ${computerMove}`;
    if(computerMove === "rock"){
        display.placeholder = "You lose";
        count2 += 1;
    } else if(computerMove === "paper"){
        display.placeholder = "You win";
        count1 += 1;
    } else if(computerMove === "scissors"){
        display.placeholder = "Tie";
    }
    result.textContent = `${count1} : ${count2}`;
    if(count1 === 10){
        alert(`You win. ${count1} : ${count2}`);
        count1 = 0;
        count2 = 0;
    } else if(count2 === 10){
        alert(`You lost. ${count1} : ${count2}`);
        count1 = 0;
        count2 = 0;
    }
}
function resetFunction(){
    count1 = 0;
    count2 = 0;
    result.textContent = `${count1} : ${count2}`;
    display.placeholder = "";
    displayYourPick.placeholder = "";
    displayCompPick.placeholder = ``;
}
