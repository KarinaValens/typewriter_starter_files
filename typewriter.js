"use strict";
document.addEventListener("DOMContentLoaded", initLoop);


let counter = -1;

const string = document.querySelector("#typewriter").innerHTML;
const lengthOfString = (string.length) - 1;
document.querySelector("#typewriter").innerHTML = " ";
//audios
let spaces;
const audioletter = new Audio('typekey1.mp3');
const audiospace = new Audio('typespace.mp3');


function initLoop() {
    //console.log("func initLoop loaded");
    loop();
}

function loop() {
    //console.log("loop func loaded");
    spaces = string.indexOf(" ");
    if (counter < lengthOfString) {
        counter++;
        document.querySelector("#typewriter").innerHTML += string[counter];
        audioletter.play();
        setTimeout(loop, 100);
    } else if (string == spaces) {
        audiospace.play();
    } else {

        location.reload();
    }

}