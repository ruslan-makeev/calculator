
//Display activate
var dataInput = document.getElementById('dataInput');
function pushBtn(obj) {
    var pushed = obj.innerHTML;
    //Using function constructor to replace see if it works...
    var sum = new Function('a','b','return a + b');
    var min = new Function('a','b','return a - b');
    var mul = new Function('a','b','return a * b');
    var div = new Function('a','b','return a / b');
    if (pushed == '=') {
        // Calculate
        dataInput.innerHTML = FUNCTION CONSTRUCTOR (dataInput.innerHTML);
    } else if (pushed == 'AC') {
        // All Clear
        dataInput.innerHTML = '0';
    } else {
        if (dataInput.innerHTML == '0') {
            dataInput.innerHTML = pushed;
        } else {
            dataInput.innerHTML += pushed;
        }
    }
}