const loadBtn = document.querySelector("#load-btn");
const loadingBar = document.querySelector("#loading-bar");
const greenLine = document.querySelector("#green-line");
const alert = document.querySelector("#alert");

loadBtn.addEventListener('click', (e) => {
    greenLine.style.width = '0%';
    let greenLineWidth = 0;
    alert.textContent = '';

    const interval = setInterval(() => {
        greenLineWidth += 1;
        greenLine.style.width = `${greenLineWidth}%`;
        if(greenLineWidth === 100){
            clearInterval(interval);
            alert.textContent = 'Ready!';
        }
    }, 25)
});