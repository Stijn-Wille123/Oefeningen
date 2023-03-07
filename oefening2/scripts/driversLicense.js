'use strict';
const speedLimit = 70;
const KmPerPoint = 5;
const huidigeSnelheid = Number(prompt("Wat is de huidige snelheid?"));
let numberofpoints;
let message = "";

if (isNaN(huidigeSnelheid))
    message = "Is not a number";
else if (huidigeSnelheid <= speedLimit)
    message = "Oke";
else{
    numberofpoints = Math.floor((huidigeSnelheid - speedLimit)/KmPerPoint)
    if (numberofpoints > 12)
        message = "drivers license is suspended";

    else message = `points: ${numberofpoints}`;
}
    


console.log(message)




