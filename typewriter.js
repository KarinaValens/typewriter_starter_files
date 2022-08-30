"use strict";
document.addEventListener("DOMContentLoaded", initLoop);


let counter = -1;

const string = document.querySelector("#typewriter").innerHTML;
const lengthOfString = (string.length) - 1;
document.querySelector("#typewriter").innerHTML = " ";




function initLoop() {
    //console.log("func initLoop loaded");
    loop();
}

function loop() {
    //console.log("loop func loaded");
    if (counter < lengthOfString) {
        counter++;
        document.querySelector("#typewriter").innerHTML += string[counter];
        setTimeout(loop, 100);
    } else {
        location.reload();
    }

}



