import { add, subtract } from './calc.js'
import { updateDisplay } from './ui.js'

let current = '';
let firstOp = null;
let operator = null;


function handleButtonClick(e) {
    const target = e.target;
    if (target.dataset.num) {
        current += target.dataset.num;
        updateDisplay(current);
    } else if (target.dataset.op) {
        operator = target.dataset.op;
        firstOp = current;
        current = '';
        updateDisplay(0);
    } else if (target.dataset.eq) {
        const secondOp = current;
        let result = 0;
        console.log("result: " + result);
        if (operator === '+') result = add(firstOp, secondOp);
        if (operator === '-') result = subtract(firstOp, secondOp);
        updateDisplay(result);
        current = '';
        firstOp = null;
        operator = null;
    } else if (target.dataset.clear) {
        updateDisplay(0);
        current = '';
        firstOp = null;
        operator = null;
    }
}

document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', handleButtonClick));