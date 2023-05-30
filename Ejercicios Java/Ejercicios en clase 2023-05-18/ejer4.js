/*Factorial de un número. */
n = parseInt(prompt('Introduzca un número: '));
var fac=1;
for (i=1; i<=n; i++) {
    fac = fac * i;
}
alert(`El numero factorial es ${fac}`);