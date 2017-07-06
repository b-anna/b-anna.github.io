(function(){
    function StopWatch(){
        this.startTime = 0;
        this.dataTime = new Date();
        this.idWatch = 0;
        this.pauseWatch = true;
        this.qtPause = 0;
        this.qt = 0;
        var my = this;
        this.init = function (){
            var blockTimer = document.querySelector('.blockTimer');
        };
        this.showeTimeOnDisplay = function (time_qt){
            var displaySec = document.getElementById('seconds');
            var displayMiliSec = document.getElementById('milisec');
            var displayMinuts = document.getElementById('minuts');

            var ms_str, sec_str, min_str;
            this.dataTime.setTime(time_qt);

            if(this.dataTime.getMilliseconds()<100) {
                ms_str = '0' + this.dataTime.getMilliseconds();
                if (this.dataTime.getMilliseconds() < 10) {
                    ms_str = '00' + this.dataTime.getMilliseconds();
                }
            }else{
                ms_str = '' + this.dataTime.getMilliseconds();
            }
            if(this.dataTime.getSeconds()<10){
                sec_str= '0'+this.dataTime.getSeconds();
            }else{
                sec_str= ''+this.dataTime.getSeconds();
            }
            if(this.dataTime.getMinutes()<10){
                min_str= '0'+this.dataTime.getMinutes();
            }else{
                min_str= ''+this.dataTime.getMinutes();
            }

            displayMiliSec.innerHTML = ms_str ;

            displaySec.innerHTML = sec_str;

            displayMinuts.innerHTML = min_str;
        };

        this.countTime = function(){
            my.qt = Date.now()-my.startTime;
            my.showeTimeOnDisplay(my.qt+my.qtPause);
        };
        this.run = function(){
            if(my.pauseWatch){
                my.startTime = Date.now();
                my.idWatch = setInterval(my.countTime, 1);
                my.pauseWatch = false;
                return "Running";
            }else{

                return "Run";
            }
        };
        this.pause = function(){
           if(!this.pauseWatch){
               clearInterval(my.idWatch);
               my.qtPause += my.qt;
               my.idWatch=0;
               my.pauseWatch = true;
               my.timePause = true;
               return "Run";
           }else{
               return "Run";
           }
        };
        this.clear = function (){
            if(my.timePause){
                my.startTime = 0;
                my.qtPause = 0;
                my.showeTimeOnDisplay(0);
                my.timePause = false;
                my.pauseWatch = true;
                return "Start";
            }
        };
    }
    var stopWatch2 = new StopWatch();
    var btnStartStop = document.querySelector('#btnStartStop');
    var btnReset = document.querySelector('#btnReset');
    var recWatch = 'Run';
    btnStartStop.addEventListener('click', function(){
        if(recWatch === 'Run'){
            btnStartStop.setAttribute('value','Pause' );
            recWatch = stopWatch2.run();
        }else{
            recWatch = stopWatch2.pause();
            btnStartStop.setAttribute('value', 'Run');
        }
    });

    btnReset.addEventListener('click', function(){
        recWatch = stopWatch2.pause();

        if(recWatch!=='Running'){
            stopWatch2.clear();
            recWatch = 'Run';
        }
        btnStartStop.setAttribute('value', 'Start');
    });
})();
