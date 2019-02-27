var number1 = "";
var number2 = "";
var tempnumber = "";
var operator = "";
var result = "";

function inputNumber(num) {
    tempnumber = tempnumber + num;
    displayData(tempnumber);
}

function displayData(data) {
    document.getElementById('displayBox').value = data;
}

function calculate(op) {
    if (op == '=' && number1 == '')
        return;

    if(operator == '') 
    {
        operator = op;
    }

   
    if (number1 == '') {
        number1 = tempnumber;
    } else {
        number2 = tempnumber;
    }

    tempnumber = '';

    if ( operator == '+'){
        result = Number(number1) + Number(number2) ;
    }
    if (operator == '-') {
        result = Number(number1) - Number(number2);
    }
    
    if (operator == '*') {
        result = Number(number1) * Number(number2);
    }
    
    if (operator == '/') {
        result = Number(number1) / Number(number2);
    }

    number1 = result;
    number2 = '';
    if(op == '='){
        operator = '';
    } else {
        operator = op;
    }
    
    displayData(result);
}

function resetAll(){
    number1 = number2 = tempnumber = operator = result = '';
    displayData('');
}

function clearLast() {
    tempnumber = tempnumber.slice(0, -1);
    displayData(tempnumber);
}