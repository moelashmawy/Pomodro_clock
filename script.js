//  make the default session minutes 25 and the break minutes 5 and the user have the control to change them
let sessionMinutes = 25;
let breakMinutes = 5;
// variable to save the interal ID to be able to stop it whenever i want by clicking something
let interval;

//i will declare 2 variables minutes and seconds to amnupilate them separetly
//and assign the html values to them which are 25 and 00
let minutes = document.getElementById('minutes').innerHTML;
let seconds = document.getElementById('seconds').innerHTML;

//link the arrows from the HTML to control our session and break period
let sessionUp = document.getElementById('session-up');
let sessionDown = document.getElementById('session-down');
let breakUp = document.getElementById('break-up');
let breakDown = document.getElementById('break-down');

//link the session and break sections from HTML 
//so the user will be able to choose if he wanna start a session or a break
let startSession = document.getElementById('session');
let startBreak = document.getElementById('break');

//when the user click on the break section the values will change to the default break time
//and the user can manipulate it with the up and down arrows
//if it's counting and the user click it again it doesn't affect the counting
startBreak.addEventListener('click', function(){
    if(interval) return;
    document.getElementById("minutes").innerHTML = breakMinutes;
    minutes = breakMinutes;
})

//when the user click on the session section the values will change to the default break time
//and the user can manipulate it with the up and down arrows
//if it's counting and the user click it again it doesn't affect the counting
startSession.addEventListener('click', function(){
    if(interval) return;
    document.getElementById("minutes").innerHTML = sessionMinutes;
    minutes = sessionMinutes;
})

//when the user clicks up or down arrow it wll change the counter value and target time
sessionUp.addEventListener('click', function(){
    document.getElementById("session-minutes").innerHTML = ++sessionMinutes;
    document.getElementById('minutes').innerHTML = sessionMinutes;
    minutes = sessionMinutes;
});

//when the user clicks up or down arrow it wll change the counter value and target time
sessionDown.addEventListener('click',function(){
    if(sessionMinutes !== 1){
        document.getElementById("session-minutes").innerHTML = --sessionMinutes;
        document.getElementById('minutes').innerHTML = sessionMinutes;
        minutes = sessionMinutes;
    }
});

//when the user clicks up or down arrow it wll change the counter value and target time
breakUp.addEventListener('click', function(){
    document.getElementById("rest-minutes").innerHTML = ++breakMinutes;
    document.getElementById('minutes').innerHTML = breakMinutes
    minutes = breakMinutes;
}); 

//when the user clicks up or down arrow it wll change the counter value and target time
breakDown.addEventListener('click',function(){
    if(breakMinutes !== 1){
        document.getElementById("rest-minutes").innerHTML = --breakMinutes;
        document.getElementById('minutes').innerHTML = breakMinutes;
        minutes = breakMinutes;
    }
});


/**
 ** here we link the play arrow and assign it to play variable
 ** once the user click play we hide all the arrows so the user doesn't play with the values
 ** we assgin interval setInterval function that does something every 1 second
 * that way we make the count down function manipulating minutesa and seconds values
 ** when the timer gets to 00:00 the alarm sound starts
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
            playAlarm();
            clearInterval(interval);
            document.getElementById('minutes').innerHTML = "00";
            document.getElementById('seconds').innerHTML = "00";
        }
    }, 1000);
})

/**
 * we get the pause link from HTML and asign it to pause variable
 * when the user hits pause the play arrow appears
 * and we stop the count down using the fundtion clearInterval with the interval ID
 */
let pause = document.getElementById('pause');
pause.addEventListener('click', function(){
    play.style.visibility = "visible";
    pause.style.visibility = "hidden";
    clearInterval(interval);
    document.getElementById('minutes').innerHTML = minutes - 1;
    document.getElementById('seconds').innerHTML = seconds + 1;
   
})

/**
 * we get the reset link from HTML and asign it to reset variable
 * when the user hits reset everything gets its default values
 * we make everything visible and assign the count timer it's default value
 */
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
    minutes = document.getElementById('minutes').innerHTML;
    seconds = document.getElementById('seconds').innerHTML;
})

/**
 * this function adds 0 next to any number less then 10 so it appears like
 * 09 08 07 06 05 etc
 * @param {number} n 
 */
function twoDigits(n){
    return n > 9 ? "" + n: "0" + n;
}

/**
 * this function will play sound and call it whenever the timer is 00:00
 */
function playAlarm(){
    let audio = document.getElementById('alarm');
    audio.play();
}
