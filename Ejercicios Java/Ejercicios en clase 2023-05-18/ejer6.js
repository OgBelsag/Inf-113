/*Sumar los digitos de un número e imprimir en la consola */
var n = parseInt(prompt("Ingrese un numero "));    
var m = n;
var c;
var p=0;
while (m!=0){
    c=m%10;
    p=p+c;
    m= Math.trunc (m/10);
}
    alert(`La suma de los digitos de ${n} Es: ${p}`)