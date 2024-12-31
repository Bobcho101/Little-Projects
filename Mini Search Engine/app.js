const searchInput = document.querySelector("#search-inputField");
const list = document.querySelector("#list");

const interval = setInterval(() => {
    clearSelected();
    const listChildren = [...list.children];
    const searchInputValue = searchInput.value.toLowerCase();
    if(searchInputValue.trim() === "") return;
    listChildren.forEach(el => {
        const aTextContent = el.children[0].textContent.toLowerCase();
        const li = el.children[0].parentNode;
    
        for(let i = 0; i < searchInputValue.length; i++){
            if(aTextContent.includes(searchInputValue)){
                li.classList.add('selected');
            } 
        }
    });
    hideNotSelected();
}, 50)


function clearSelected(){
    const listChildren = [...list.children];
    listChildren.forEach(el => {
        if(!el.classList.contains('selected')){
            el.style.display = 'flex';
        }
        el.classList.remove('selected');
    });
}

function hideNotSelected(){
    const listChildren = [...list.children];
    listChildren.forEach(el => {
        if(!el.classList.contains('selected')){
            el.style.display = 'none';
        }
    });
}
