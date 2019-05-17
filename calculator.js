
var operator;
var firstValue;
var secondValue;
var dataInput = document.getElementById('dataInput');
function pushBtn(obj) {
    var pushed = obj.innerHTML;
    if (pushed == '=') {
        secondValue = dataInput.innerHTML
        dataInput.innerHTML = calculate(firstValue, operator, secondValue);
    }
    else if (pushed == '+' || pushed == '-' || pushed == '*' || pushed == '/') {
        operator = pushed;
        firstValue = dataInput.innerHTML;
        dataInput.innerHTML = '';
    }
    else if (pushed == 'Del') {
        dataInput.innerHTML = '0';
    }
    else {
        if (dataInput.innerHTML == '0') {
            dataInput.innerHTML = pushed;
        }
        else {
            dataInput.innerHTML += pushed;
        }
    }
}
const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === '+') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === '-') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === '*') {
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === '/') {
        result = parseFloat(n1) / parseFloat(n2)
    }
    return result;
}