/*function sum (num1,num2){
    var result = num1 + num2;
    return result;
}
function calcAvg(sumNumbers){
    console.log(sumNumbers/2);
}
var number1 = Number(window.prompt("enter number 1"))
var number2 = Number(window.prompt("enter number 2"))
 var sumResult = sum (number1 , number2);
 calcAvg(sumResult);*/

 
 function sayhello(){
    let firstNme = document.getElementById("firstName").value
    let sectionPrint= document.getElementById("print")
    if(!firstNme==""){

sectionPrint.classList.remove('d-none')
sectionPrint.classList.add('d-block')
        document.getElementById("demo").innerHTML=("Hello "+ firstNme)
        document.getElementById("printname").innerHTML=firstNme
    }else{
        alert('plez enter your name ')
    }
}
