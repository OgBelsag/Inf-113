/*Escribir un script para determinar si el numero 
introducido por el usuario es un palíndromo, es decir, un número que se 
lee igual del derecho que del revés. Si es palíndromo lo mostraá en una ventana alert.*/ 
var n = parseInt(prompt("Ingrese un numero "));    
var m = n;
var c;
var p=0;
while (m!=0){
    c=m%10;
    p=p*10+c;
    m= Math.trunc (m/10);
}
if (n == p) {
    alert(`El número introducido ${n} es capicua`)
} else {
    alert(`numero descompuesto ${p} numero introducido ${n} numero c ${c} numero m ${m}`)
    
}