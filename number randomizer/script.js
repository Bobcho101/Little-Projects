const display = document.querySelector(".display-result");

function generateRandomNumber(){
    let num1 = +document.querySelector(".first-num").value;
    let num2 = +document.querySelector(".second-num").value;
    const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    
    if(num1 > num2){
        alert("The fist number can't be bigger than the second!");
        display.placeholder = "Error";
    }else if(num1 === 0 && num2 === 0){
        display.placeholder = "";
        alert("Please enter values!");
    } else{
        display.placeholder = randomNumber;
    }
}