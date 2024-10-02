const btn = document.querySelector("#btn");
const clearBtn = document.querySelector("#clearBtn");
btn.addEventListener("click", createPassword);
clearBtn.addEventListener("click", clear)

function createPassword(){
    const outputFieldEl = document.querySelector("#output");
    const lengthEl = document.querySelector("#lengthField");
    if(lengthEl.value === "" || lengthEl.value > 25){
        return;
    }
    
    let passwordLength = Number(lengthEl.value);

    let allUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let allLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let signs = '!@#$%^&*()_+-={}[]|/?.><,';
    let allowedChars = '';
    allowedChars += allUpperCase;
    allowedChars += allLowerCase;
    allowedChars += numbers;
    allowedChars += signs;    

    let result = "";

    for(let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        result += allowedChars[randomIndex];       
    }
    
    outputFieldEl.value = result;
}

function clear(){
    const outputFieldEl = document.querySelector("#output");
    const lengthEl = document.querySelector("#lengthField");
    lengthEl.value = "";
    if(outputFieldEl.value.length > 0){
        outputFieldEl.value = "";
    }
}


