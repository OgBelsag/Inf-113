/*Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par o impar.*/ 
num = 0;
num = parseInt(prompt("Ingresa un número entero:"))
if((num%2)==0){
alert(`El número ${num} es par.`);
document.write("Esta correcto: "+num+ "Es par" )}

else{
    alert(`El número ${num}  es impar.`);
}