window.addEventListener('load', generateMoneyandUpgrades);

function generateMoneyandUpgrades(){
    const myMoneyEl = document.querySelector("#my-money");
    const collectBtnEl = document.querySelector("#collect-btn");
    const generatedMoneyEl = document.querySelector("#generated-money");
    const upgradeBtn = document.querySelector("#upgrade-btn");
    const upgradeLevelEl = document.querySelector("#my-upgrade");
    const generatorMultyplayerEl = document.querySelector("#generator-multyplayer");

    const moneyPerUpgrade = {
        "upgrade 0": 1,
        "upgrade 1": 2,
        "upgrade 2": 3,
        "upgrade 3": 5,
        "upgrade max": 10
    };

    const upgradePrice = {
        "upgrade 1": 100,
        "upgrade 2": 200,
        "upgrade 3": 500,
    };

    let myMoney = 0;
    let generatedMoney = 0;
    let upgradeLevel = 0;
    let generatorMultyplayer = 1;
    
    collectBtnEl.addEventListener('click', (e) => {
        myMoney += generatedMoney;
        generatedMoney = 0;
        myMoneyEl.textContent = `My money: ${myMoney}$`;
    });
   
    
    upgradeBtn.addEventListener('click', (e) => {
        const upgradeCost = upgradeBtn.textContent.split(": ")[1].replace('$', '');
        if(myMoney >= upgradeCost){
            myMoney -= upgradeCost;
            myMoneyEl.textContent = `My money: ${myMoney}$`;
            
            if(upgradeLevel !== 3 && upgradeLevel !== "max"){
                upgradeBtn.textContent = `Upgrade: ${upgradePrice[`upgrade ${upgradeLevel + 1}`]}$`
                upgradeLevel += 1;
                upgradeLevelEl.textContent = `Upgrade: ${upgradeLevel}`;
                updateMultyplayerEl();
            } else {
                upgradeLevel = "max";
                upgradeBtn.disabled = true;  
                upgradeBtn.textContent = 'MAX';
                upgradeLevelEl.textContent = `Upgrade: ${upgradeLevel}`;
                updateMultyplayerEl();
            }
        } else{
            alert("Not enough money!");
        }
    });
    
    const intervalMS = 400;
    if(upgradeLevel === 0){
        setInterval(() => {
            generatedMoney += moneyPerUpgrade[`upgrade ${upgradeLevel}`];
            generatedMoneyEl.textContent = `Generated money: ${generatedMoney}$`;
        }, intervalMS);
    } else if(upgradeLevel === 1){
        setInterval(() => {
            generatedMoney += moneyPerUpgrade[`upgrade ${upgradeLevel}`];
            generatedMoneyEl.textContent = `Generated money: ${generatedMoney}$`;
        }, intervalMS);
    } else if(upgradeLevel === 2){
        setInterval(() => {
            generatedMoney += moneyPerUpgrade[`upgrade ${upgradeLevel}`];
            generatedMoneyEl.textContent = `Generated money: ${generatedMoney}$`;
        }, intervalMS);
    } else if(upgradeLevel === 3){
        setInterval(() => {
            generatedMoney += moneyPerUpgrade[`upgrade ${upgradeLevel}`];
            generatedMoneyEl.textContent = `Generated money: ${generatedMoney}$`;
        }, intervalMS);
    } else if(upgradeLevel === "max"){ 
        setInterval(() => {
            generatedMoney += moneyPerUpgrade[`upgrade ${upgradeLevel}`];
            generatedMoneyEl.textContent = `Generated money: ${generatedMoney}$`;
        }, intervalMS);
    }
    

    function updateMultyplayerEl(){
        generatorMultyplayer = moneyPerUpgrade[`upgrade ${upgradeLevel}`];
        generatorMultyplayerEl.textContent = `Multyplayer: ${generatorMultyplayer}x`;
    }
}