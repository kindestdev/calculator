
//Variable declarations
let operator = '';
let previousValue = '';
let currentValue = '';
let results = '';

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
    previousScreen.textContent = previousValue + ' ' + operator;
    currentScreen.textContent = currentValue;
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

})

//function section

function handleNumber(num){
    if(currentValue.length <= 5){
    currentValue += num;}
}

function handleOperator(op){
    operator = op;
    if( results === ''){
        previousValue = currentValue;
        currentValue = '';
    }else previousValue = results;
    currentValue = '';
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
