const Number1 = document.getElementById('number1');
const Number2 = document.getElementById('number2');

var num1 = 0,num2 = 0;
function chooseNumbers()
{
    const numberRange = document.getElementById("numberRange");
    var numbers = Number(numberRange.value);
    if(numbers == 1)
    {
        num1 = Math.floor(Math.random() * 50);
        //console.log(num1);
        num2 = Math.floor(Math.random() * num1);
        //console.log(num2);
    }
    else if(numbers == 2)
    {
        num1 = Math.floor(Math.random() * (200 - 51) + 51);
        num2 = Math.floor(Math.random() * (num1 - 51) + 51);
    }
    else if(numbers == 3)
    {
        num1= Math.floor(Math.random() * (1000 - 500) + 500);
        num2 = Math.floor(Math.random() * (num1 - 500) + 500);
    }
    else
    {
        return;
    }    
    Number1.innerText = num1;
    Number2.innerText = num2;    
}

var result = 0;

function add()
{
   result = num1 + num2;
}
function sub()
{
    result = num1 - num2;
}

function mul()
{
    result = num1 * num2;
}

function divide()
{
    result = num1 / num2;
}

function chooseOperation()
{
    //chooseNumbers();
    const operation = document.getElementById("operation");
    var operate = document.getElementById("op");
    var operationValue = Number(operation.value);
    if(operationValue == 1)
    {
        operate.innerText = '+';
        add();
    }
    else if(operationValue == 2)
    {
        operate.innerText = '-';
        sub();
    }
    else if(operationValue == 4)
    {
        operate.innerText = '*';
        mul();
    }
    else if(operationValue == 3)
    {
        operate.innerText = "/";
        divide();
    }
    else
    {
        return;
    }
}

var x = document.getElementById('correctAudio');
var y = document.getElementById('wrongAudio');

const numberRange = document.getElementById('numberRange');
numberRange.addEventListener('change', chooseNumbers);

const operation = document.getElementById('operation');
operation.addEventListener('change', chooseOperation);

const checkButton = document.getElementById('checkBtn');
checkButton.addEventListener('click',() => {
    chooseOperation();
    var inputText = Number(document.getElementById('answer').value);
    if(inputText == result)
    {
        x.play();
        alert("Correct Answer");
        result = 0;
        setTimeout(chooseNumbers, 10000);
    }
    else
    {
        y.play();
        alert(`Wrong Answer, Correct Answer is ${result}`);
        result = 0;
        setTimeout(chooseNumbers, 4000);
    }
});

const MyAnswer = document.getElementById('answer');
MyAnswer.addEventListener("keypress", (e) => {
    if(e.which === 13)
    {
       chooseOperation();
       var inputText = Number(document.getElementById('answer').value);
       if(inputText == result)
       {
         x.play();
         alert("Correct Answer");
         result = 0;
         setTimeout(chooseNumbers, 10000);
       }
       else
       {
           y.play();
          alert(`Wrong Answer, Correct Answer is ${result}`);
          result = 0;
         setTimeout(chooseNumbers, 4000);
       }
    }
});
