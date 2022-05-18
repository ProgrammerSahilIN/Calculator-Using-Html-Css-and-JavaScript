var input = document.getElementById('input');
var output = document.getElementById('output');

var clearscr = document.getElementById('AC');
var add = document.getElementById('+');
var subtract = document.getElementById('-');
var multiply = document.getElementById('*');
var division = document.getElementById('/');
var answer = document.getElementById('=');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var zero = document.getElementById('0');

function acceptNum(id){

    if(input.innerText == undefined || input.innerText==""){
        input.innerText = document.getElementById(id).innerText;
        // console.log(document.getElementById(id).innerText)
    }
    else{
        input.innerText = input.innerText+""+document.getElementById(id).innerText;
        // console.log(document.getElementById(id).innerText)
    }
}

answer.addEventListener('click',()=>{
    var result;
    var indexOfsym = 0;
    var c = '';
    var inp =  input.innerText;
    for(let i=0 ; i<inp.length ; i++){
         c = inp.charAt(i);
        if(c=="+" || c=="-" || c=="*" || c=="/")
        {
            indexOfsym = i;
            break;
        }
    }
    var num1 = parseInt(inp.substring(0 , indexOfsym));
    var num2 = parseInt(inp.substring( indexOfsym+1));
    if(c=='+')
        result = num1+num2;
    else if (c=='-')
        result = num1-num2;
    else if(c=='*')
        result = num1*num2;
    else if(c=='/')
        result = num1/num2;
    else
        result = "Syntax Error";

      output.innerText = result;  
});

clearscr.addEventListener('click' , ()=>{
    input.innerText = "";
    output.innerText = "";
})