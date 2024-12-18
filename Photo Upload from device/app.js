const imageInput = document.querySelector("#image-input");
const imageDisplay = document.querySelector("#img-display-box");

const clearButton = document.querySelector("#clear-btn");

clearButton.addEventListener('click', () => {
    imageInput.value = "";
    imageDisplay.style.backgroundImage = "none";
});

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const type = file.type;
    const typeToken = type.split("/");
    
    if(typeToken[0] === "image"){
        if(typeToken[1] === "png" || typeToken[1] === "jpeg" || typeToken[1] === "webp"){
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                imageDisplay.style.backgroundImage = `url(${reader.result})`;
            });
            reader.readAsDataURL(file);

        } else return alert('Only images(.jpg .jpeg .png .webp)!');
        
    } else return alert('Only images(.jpg .jpeg .png .webp)!');
});