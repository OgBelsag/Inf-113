/*Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o 
superiores a 1000 € mensuales. 
Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla 
si el usuario tiene que tributar o no.
 */
edad = parseInt(prompt("Ingrese su edad: "));
if (edad>=16) {
    num = parseFloat(prompt("Ingrese sus ingresos mensuales : "));
    if (num >= 1000) {
        alert(`Usted tiene ${edad}  annos y tiene un ingreso de ${num} Usted tiene que TRIBUTAR`);
        document.write('Usted tiene que tributar');
    } else {
        alert(`sus ingresos mensuales son menores a `); 
        document.write('Usted no tiene que tributar');
    }    
}else{
    alert(`Usted tiene ${edad}  no tiene que tributar.`);
    document.write('Usted no tiene que tributar');
}

