const btn = document.querySelector(".btn");
const inputField = document.querySelector(".text-input");
const resultField = document.querySelector(".result");

const pattern = /^([A-Za-z\d]+)@(gmail\.com|abv\.bg)$/;

btn.addEventListener("click", event =>{
    const inputValue = inputField.value.trim();

    if(!pattern.test(inputValue)){
        if(inputValue === ""){
            resultField.placeholder = "Enter an email!";
        } else{
            resultField.placeholder = "Enter a valid email!";
        }
    } else{
        resultField.placeholder = "Valid email!";
    }
});