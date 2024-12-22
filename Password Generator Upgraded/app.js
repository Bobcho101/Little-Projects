const form = document.querySelector("#control-form");
const passwordFieldEl = document.querySelector("#password-output-field");
const copyBtn = document.querySelector("#copy-password-btn");

form.addEventListener('submit', formSubmitHandler);
copyBtn.addEventListener('click', copyPassword);

function formSubmitHandler(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const length = formData.get('length');
    const uppecaseCheck = formData.get('uppercase');
    const lowercaseCheck = formData.get('lowercase');
    const numbersCheck = formData.get('numbers');
    const symbolsCheck = formData.get('symbols');


    if(length === ""){
        return alert('Password length field cannot be empty!');
    }
    if(length <= 3){
        return alert('Password length must be at least 3 characters!')
    }
    if(length === "0"){
        return alert('Password length cannot be 0!');
    } 
    if(length < 0){
        return alert("Password's length cannot be less than 0!");
    }
    if(length > 15){
        return alert("Password's max length is 15!");
    }

    if(uppecaseCheck === null && lowercaseCheck === null && numbersCheck === null && symbolsCheck === null) return alert('You need to select at least 1 criteria!');

    let myStr = '';
    const uppercaseSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';    
    const lowercaseSymbols = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = "~!@#$%^&*()-_=+[{]};:,<.>/?";


    if(uppecaseCheck === "on"){
        myStr += uppercaseSymbols;
    }
    if(lowercaseCheck === "on"){
        myStr += lowercaseSymbols;
    }
    if(numbersCheck === "on"){
        myStr += numbers;
    }
    if(symbolsCheck === "on"){
        myStr += symbols;
    }

    const myStrLength = myStr.length;


    const password = generatePassword(myStrLength, length);

    passwordFieldEl.placeholder = password;
   
    function generatePassword(myStrLength, passwordLength){
        let password = '';
        for(let i = 0; i < passwordLength; i++){
            const randomIndex = Math.floor(Math.random() * myStrLength);
            const randomSymbol = myStr[randomIndex];
            password += randomSymbol;
        }
        return password;
    }
}

function copyPassword(){
    const password = passwordFieldEl.placeholder;
    

    const textArea = document.createElement("textarea");
    textArea.value = password;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}