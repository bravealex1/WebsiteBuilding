document.getElementById('demo2').innerHTML = 'new text';
// document.getElementById('demo2').id='demo2';
document.getElementById('demo2').style.color = "red";
document.getElementById('demo2').innerHTML ="<button id='demo2'> SOMETHING TO PRESS</button>";
    
function myFun() {
    alert("warning alert omg!!!");
}
myFun();

function updateStyleSheet(){
    document.getElementById("pagestyle").setAttribute("href", "./style-dark.css");
}

var a = 10;
let b = 20;
const c = 30;

a += 10;
b += 20;

console.log(a + b + c);