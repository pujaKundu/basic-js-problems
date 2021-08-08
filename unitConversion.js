//feet to inch coverter

function feetToInch(feet) {
    //1 foot = 12 inches
    const inches = feet * 12;
    return inches;
}

const inch = feetToInch(12);
console.log(`${inch} inches`);

//centimeter to metre
//1 cm = 1/100 = 0.01 metre
function centimeterToMetre(cm) {
    const meter = cm / 100;
    return meter;
}

const meter = centimeterToMetre(163);
console.log(`${meter} meter`);

//centimeter to feet
//1 feet = 0.394inch
//divide by 30.48

function centimeterToFeet(cm) {
    const feet = cm / 30.48;
    return feet;
}
const feet = centimeterToFeet(164).toFixed(2)
console.log(`${feet} feet`)