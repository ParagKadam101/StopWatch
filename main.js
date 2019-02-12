function StopWatch(){
    let hasStarted = false; 
    let hasStopped = true;
    let duration = 0;
    let interval = null;

    this.start = function(){
        if(hasStopped) {
            hasStarted = true;
            hasStopped = false;
            interval = setInterval(countDuration, 1000);
        } else {
            throw new Error('Already started');
        }
    },

    this.stop = function(){
        if(hasStarted) {
            hasStopped = true;
            hasStarted = false;
            clearInterval(interval);
            console.log(duration);
        } else {
            throw new Error('Already stopped');
        }
    },

    this.reset = function(){
        duration = 0;
        updateUI();
    },

    countDuration = function(){
        duration += 1;
        updateUI();
    }

    updateUI = function(){
        document.getElementById('duration').value = duration;
    }
}

let stopWatch = new StopWatch();

