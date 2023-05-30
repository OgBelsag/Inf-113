/* Diseñar un script que pida un número mayor que cero y devuelva la suma de todos los 
números pares desde cero al número introducido. Mostrará la suma y volverá 
a pedir otro número hasta que el usuario teclee un 0.*/
do {
    var n = parseInt(prompt('Ingrese un número mayor a 0: '));
} while (n != 0){
    for (i = 2; i < n; i++) {
        var suma = suma + i;
    }
}
alert(`Resultado:` +suma);
n = parseInt(prompt("Ingrese o para salir o digite otro numero: "));