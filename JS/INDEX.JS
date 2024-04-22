/*mi primer codigo en javascript*/
window.alert("bienvendo a la pagina :v")

var number_1 = 10;
var number_2 = 12;
var result   = 0;

result = number_1 + number_2;
console.log(result);

result = number_1 / number_2;
console.log(result);

result = number_1 - number_2;
console.log(result);

result = number_1 * number_2;
console.log(result);

document.getElementById("resultado").innerHTML="el resutado es: " +result;
document.write("<h1> Certus Ofical</h1>");

/*
string frase = "mi nombre";
*/

var text ="";
text = "inscripciones abiertas";
document.getElementById("mensaje").innerHTML=text;

var cond1 = true;
var cond2 = false;

/* arrays y arreglos*/

var nombres = ["juan","pedro","maria"];
var edades  = [19,22,21];

var datos1 = nombres [0]+" "+edades[0];
console.log(datos1);

var datos2 = nombres [1]+" "+edades[1]
console.log(datos2);

var datos3 = nombres [2]+" "+edades[2]
console.log(datos3);

function sumar(value1,value2){
    var result1 = value1+value2;
    document.getElementById("function").innerHTML="el resultado de la suma es :" + result1;
}

function sumar2(value1,value2){
    var result1 = value1+value2;
    return result1;
}
document.getElementById("function").innerHTML="el resultado es: "+sumar2(1,3);

sumar(1,2);

var letras1 = document.getElementById("my_name").innerText;
var letras2 = document.getElementById("my_name").innerText;
console.log(nombre);






