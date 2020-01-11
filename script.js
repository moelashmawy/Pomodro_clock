let sessionMinutes = 25;
let breakMinutes = 5;
let interval;

let minutes = document.getElementById('minutes').innerHTML;
let seconds = document.getElementById('seconds').innerHTML;

let sessionUp = document.getElementById('session-up');
let sessionDown = document.getElementById('session-down');

let breakUp = document.getElementById('break-up');
let breakDown = document.getElementById('break-down');


sessionUp.addEventListener('click', function(){
    document.getElementById("session-minutes").innerHTML = ++sessionMinutes;
    document.getElementById('minutes').innerHTML = ++minutes;
});

sessionDown.addEventListener('click',function(){
    if(sessionMinutes !== 1){
        document.getElementById("session-minutes").innerHTML = --sessionMinutes;
        document.getElementById('minutes').innerHTML = --minutes;
    }
    
});

/**
breakUp.addEventListener('click', function(){
    document.getElementById("rest-minutes").innerHTML = ++breakMinutes;
    document.getElementById('minutes').innerHTML = ++minutes;
}); 

breakDown.addEventListener('click',function(){
    document.getElementById("rest-minutes").innerHTML = --breakMinutes;
    document.getElementById('minutes').innerHTML = --minutes;
});
*/


let play = document.getElementById('play');
play.addEventListener('click', function countDown(){
    sessionUp.style.visibility = "hidden";
    breakUp.style.visibility = "hidden";
    sessionDown.style.visibility = "hidden";
    breakDown.style.visibility = "hidden";
    
    pause.style.visibility = "visible";
    play.style.visibility = "hidden";
    if(seconds == 00) seconds = 59;
    interval = setInterval(function(){
        document.getElementById('minutes').innerHTML = minutes - 1;
        document.getElementById('seconds').innerHTML = twoDigits(seconds);
        seconds--;
        if(seconds == "00") {
            minutes--;
            seconds = 60;
        }
        if(minutes == "00"){
            clearInterval(interval);
            document.getElementById('minutes').innerHTML = "00";
            document.getElementById('seconds').innerHTML = "00";
            
        }
    }, 1000);
})

let pause = document.getElementById('pause');
pause.addEventListener('click', function(){
    play.style.visibility = "visible";
    pause.style.visibility = "hidden";
    clearInterval(interval);
    document.getElementById('minutes').innerHTML = minutes - 1;
    document.getElementById('seconds').innerHTML = seconds + 1;
   
})

let reset = document.getElementById('reset');
reset.addEventListener('click', function reset(){
    sessionUp.style.visibility = "visible";
    breakUp.style.visibility = "visible";
    sessionDown.style.visibility = "visible";
    breakDown.style.visibility = "visible";

    play.style.visibility = "visible";
    pause.style.visibility = "hidden";

    clearInterval(interval);
    sessionMinutes = 25;
    breakMinutes = 5;
    document.getElementById("rest-minutes").innerHTML = breakMinutes;
    document.getElementById("session-minutes").innerHTML = sessionMinutes;
    document.getElementById('minutes').innerHTML = 25;
    document.getElementById('seconds').innerHTML = "00";
})


function twoDigits(n){
    return n > 9 ? "" + n: "0" + n;
}
