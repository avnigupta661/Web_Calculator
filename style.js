function add(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    x=Number(x);
    y=Number(y);
    let z = x + y;
    document.getElementById("result").innerHTML= "= "+z;
}
function sub(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    x=Number(x);
    y=Number(y);
    let z = x - y;
    document.getElementById("result").innerHTML= "= "+z;
}
function mul(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    x=Number(x);
    y=Number(y);
    let z = x * y;
    document.getElementById("result").innerHTML= "= "+z;
}
function div(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    x=Number(x);
    y=Number(y);
    let z = x / y;
    document.getElementById("result").innerHTML= "= "+z;
}
function sqrt(){
    let x = document.getElementById("num1").value;
    x=Number(x);
    let z = x**0.5;
    document.getElementById("result").innerHTML= "= "+z;
}
function mod(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    x=Number(x);
    y=Number(y);
    let z = x % y;
    document.getElementById("result").innerHTML= "= "+z;
}
function x2(){
    let x = document.getElementById("num1").value;
    x=Number(x);
    let z = x**2;
    document.getElementById("result").innerHTML= "= "+z;
}
function x3(){
    let x = document.getElementById("num1").value;
    x=Number(x);
    let z = x**3;
    document.getElementById("result").innerHTML= "= "+z;
}
function x4(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    x=Number(x);
    y=Number(y);
    let z = x**y;
    document.getElementById("result").innerHTML= "= "+z;
}
