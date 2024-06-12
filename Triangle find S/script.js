
function calcFunction(){
    const aSide = +document.querySelector(".a-side").value;
    const bSide = +document.querySelector(".b-side").value;
    const resultBox = document.querySelector(".result"); 
    const result = (aSide * bSide) / 2;

    resultBox.placeholder = result;
}