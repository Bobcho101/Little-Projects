window.addEventListener('load', stopWatch);

function stopWatch(){
    let stopwatchStarted = false;
    let intervalID;
    const startBtn = document.querySelector('#start-btn');
    const stopBtn = document.querySelector('#stop-btn');
    const pauseBtn = document.querySelector('#pause-btn');

    const secondsEl = document.querySelector('#seconds');
    const minutesEl = document.querySelector('#minutes');
    const hoursEl = document.querySelector('#hours');
    pauseBtn.disabled = true;
    pauseBtn.style.cursor = 'not-allowed';

    let secondsG = 0;
    let minutesG = 0;
    let hoursG = 0;

    startBtn.addEventListener('click', startStopwatch);
    stopBtn.addEventListener('click', stopStopwatch);
    pauseBtn.addEventListener('click', pauseStopwatch);


    function startStopwatch(){
        stopwatchStarted = true;  
        startBtn.disabled = true;
        startBtn.style.cursor = 'not-allowed';
        pauseBtn.disabled = false;
        pauseBtn.style.cursor = 'pointer';
        stopBtn.disabled = false;
        stopBtn.style.cursor = 'pointer';

        let secondsL = 0;
        let minutesL = 0;
        let hoursL = 0;

        intervalID = setInterval(() => {
            secondsL++;

            if(secondsL === 60){
                minutesL++;
                secondsL = 0;
            }

            if(minutesL === 60){
                hoursL++;
                minutesL = 0;
            }

            secondsEl.textContent = secondsL < 10 ? `0${secondsL}` : secondsL;
            minutesEl.textContent = minutesL < 10 ? `0${minutesL}` : minutesL;
            hoursEl.textContent = hoursL < 10 ? `0${hoursL}` : hoursL;
        }, 1000);
    }



    function stopStopwatch(){
        stopwatchStarted = false;
        startBtn.disabled = false;
        startBtn.style.cursor = 'pointer';
        pauseBtn.removeEventListener('click', resumeStopwatch);
        pauseBtn.addEventListener('click', pauseStopwatch);
        pauseBtn.textContent = 'Pause';
        pauseBtn.style.backgroundColor = 'Yellow';
        pauseBtn.disabled = true;
        pauseBtn.style.cursor = 'not-allowed';
        stopBtn.disabled = true;
        stopBtn.style.cursor = 'not-allowed';
        clearInterval(intervalID);
        const secondsEl = document.querySelector('#seconds');
        const minutesEl = document.querySelector('#minutes');
        const hoursEl = document.querySelector('#hours');


        secondsEl.textContent = '00';
        minutesEl.textContent = '00';
        hoursEl.textContent = '00';
    }


    function pauseStopwatch(){
        clearInterval(intervalID);
        pauseBtn.textContent = 'Resume';
        pauseBtn.style.backgroundColor = 'lightgreen';
        stopBtn.disabled = false;
        stopBtn.style.cursor = 'pointer';
        const secondsEl = document.querySelector('#seconds');
        const minutesEl = document.querySelector('#minutes');
        const hoursEl = document.querySelector('#hours');  

        secondsG = parseInt(secondsEl.textContent);
        minutesG = parseInt(minutesEl.textContent);
        hoursG = parseInt(hoursEl.textContent);
        
        pauseBtn.addEventListener('click', resumeStopwatch);
        
        startBtn.disabled = true;
        startBtn.style.cursor = 'not-allowed';
    }

    function resumeStopwatch(){
        const secondsEl = document.querySelector('#seconds');
        const minutesEl = document.querySelector('#minutes');
        const hoursEl = document.querySelector('#hours');
        pauseBtn.removeEventListener('click', resumeStopwatch);
        pauseBtn.textContent = 'Pause';
        pauseBtn.style.backgroundColor = 'yellow';
        intervalID = setInterval(() => {
            secondsG++;

            if(secondsG === 60){
                minutesG++;
                secondsG = 0;
            }

            if(minutesG === 60){
                hoursG++;
                minutesG = 0;
            }

            secondsEl.textContent = secondsG < 10 ? `0${secondsG}` : secondsG;
            minutesEl.textContent = minutesG < 10 ? `0${minutesG}` : minutesG;
            hoursEl.textContent = hoursG < 10 ? `0${hoursG}` : hoursG;

            
        }, 1000)
    }
}


