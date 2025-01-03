const textareaEl = document.querySelector("#textarea");
const wordsCountEl = document.querySelector("#words-count");
const charsCountEl = document.querySelector("#chars-count");
const symbolsCountEl = document.querySelector("#symbols-count");

const excludes = [
    '!', '@', '#', '$', '%', '^', 
    '&', '*', '(', ')', '-', '=', 
    '+', '_', '`', ',', "'", '"', 
    ':', ';', '{', '}', '[', ']',
    '?', '/', '<', '>', ',', '.',
    '~', '|', '\\'
];

textareaEl.addEventListener('input', (e) => {
    const tokens = e.target.value.split(" ");

    let symbolsCount = 0;
    let wordsCount = 0;
    
    let charsStr = '';
    let wordsArr = [];
    let symbolsStr = '';

    for(let i = 0; i < tokens.length; i++){
        charsStr += tokens[i];
    } 

    charsStr = charsStr.split('').filter(symbol => !excludes.includes(symbol)).join('');

   
    const charsCount = charsStr.length;

    
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] === '' || excludes.includes(tokens[i])){
            continue;
        }
        wordsArr.push(tokens[i]);
    }


    wordsArr = wordsArr.filter(word => {
        const cleanedWord = word.split('').filter(char => !excludes.includes(char)).join('');
        return cleanedWord;  
    });
    wordsCount = wordsArr.length;

    for(let i = 0; i < tokens.length; i++){
        if(excludes.includes(tokens[i])){
            continue;
        }
        charsStr += tokens[i];
    } 
    
    for(let i = 0; i < tokens.length; i++){
        symbolsStr += tokens[i];
    } 

    symbolsCount = symbolsStr.length;   

    wordsCountEl.textContent = `Words: ${wordsCount}`;
    charsCountEl.textContent = `Chars: ${charsCount}`;
    symbolsCountEl.textContent = `Symbols: ${symbolsCount}`;
});