const elem = (elemName) => document.querySelector(elemName);
const weight = elem('.weight-slider');
const height = elem('.height-slider');
weight.addEventListener('input', getValue);
height.addEventListener('input', getValue);
let heightPlace = elem('#inputHeight');
let weightPlace = elem('#inputWeight');
const calButton = elem('.gumb')
let formula;
const bmiPlace = elem('#yourbmi');
function getValue(e) {
    let inptId = e.target.id;
    if(inptId === 'myHeight'){
        heightPlace.value = e.target.value;
    }else{
        weightPlace.value = e.target.value;
    }
}

calButton.addEventListener('click', calculate);
function calculate(e) {
    formula = weightPlace.value / Math.pow(heightPlace.value / 100, 2);
    bmiPlace.innerText = formula.toFixed(2);
}