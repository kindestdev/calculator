
//Variable declarations
let operator = '';
let previousValue = '';
let currentValue = '';
let results = '';
let previousOperator = '';
let currentOperator = '';


//querySelectors
let clear = document.querySelector('#clear');
let equal = document.querySelector('#equal')
let numbers = document.querySelectorAll('.number')
let display = document.querySelector('.screen')
let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')
let operators = document.querySelectorAll('.operator')

//forEach section
numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
}))

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent)
    
}));

//eventListeners
clear.addEventListener('click', function (){
    previousValue = '';
    currentValue = '';
    operator = '';
    results = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
})

equal.addEventListener('click', function(){
    if(currentValue != '' && previousValue != ''){
    calculate()
    previousScreen.textContent = '';
    if(results.length <=5){
    currentScreen.textContent = results;
    }else {
        currentScreen.textContent = results.slice(0,5) + '...'
    }}
    currentValue = results;

})

//function section

function handleNumber(num){
    if(currentValue.length <= 5){
        if(num === '.' && currentValue.includes('.'))return //Esto no entiendo como no deja q uno escriba mas puntos....
    currentValue += num;};
    
}

function handleOperator(op){
    if (currentValue !== '') {
        if (previousValue === '' && operator === '') {
            // No previous value or operator, set current value as previous value
            previousValue = currentValue;
            currentValue = '';
        } else if (previousValue !== '' && operator !== '') {
            // Previous value and operator present, calculate the result
            calculate();
            previousValue = results.toString();
            currentValue = '';
        }
        // Update the operator and display
        operator = op;
        previousScreen.textContent = previousValue + ' ' + operator;
        currentScreen.textContent = currentValue;
    } else if (previousValue !== '' && operator !== '') {
        // If the user clicks an operator without entering a new number
        // Update the operator and display
        operator = op;
        previousScreen.textContent = previousValue + ' ' + operator;
    }
}


function calculate (){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    results = Number(results)
   
    if(operator === '+'){
       results = previousValue + currentValue;
    }else if(operator === '-'){
        results = previousValue - currentValue;
    }else if (operator === 'x'){
        results =  previousValue * currentValue;
    }else {
        results = previousValue / currentValue;
    }
    results = roundNumber(results);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
    results = results.toString()
}


function roundNumber(num){
    return Math.round(num *1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.';
    }
}