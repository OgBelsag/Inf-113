/*Determinar si un número es primo o no. 
El numero tecleado deberá estar entre 0 y 1000. 
Si es primo lo mostrará en una ventana alert.*/
flag = 0;
n = 0;
do {
n = parseFloat(prompt('Ingrese un numero entre 0 y 1000'));    
} while ((n<0) || (n>1000));
document.write("Esta correcto: "+n);
for(i=2; i<n; i++){
    if ((n%i)==0) {
        flag=1
        break;
    }
}
if (flag == 0) {
    alert(`El número ${n} es primo`);
} else {
    alert(`El número ${n} no es primo`);
}