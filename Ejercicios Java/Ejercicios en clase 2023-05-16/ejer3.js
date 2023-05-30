/*Los tramos impositivos para la declaración de la renta en un determinado país son los siguientes:
Renta 	Tipo impositivo
1.Menos de 10,000€ 	5%
2.Entre 10,000€ y 20,000€ 	15%
3.Entre 20,000€ y 35,000€ 	20%
4.Entre 35,000€ y 60,000€ 	30%
5.Más de 60,000€ 	45%*/
num = parseFloat(prompt('Ingrese el monto de su renta '));
var n=0;
if (num <= 10000) {
    n = num*(5/100)
    alert(`Su renta es ${num} la declaración tiene un monto de ${n}` );    
    document.write('el monto que tiene que pagar es '+n);
} else {
  if (num>10000 && num<= 20000) {
    n = num*(15/100)
    alert(`Su renta es ${num} la declaración tiene un monto de ${n}` );
    document.write('el monto que tiene que pagar es '+n);
  } else {
    if (num>20000 && num<= 35000) {
        n = num*(20/100)
        alert(`Su renta es ${num} la declaración tiene un monto de ${n}` );    
        document.write('el monto que tiene que pagar es '+n);
    } else {
        if (num>35000 && num <= 60000) {
            n = num*(30/100)
            alert(`Su renta es ${num} la declaración tiene un monto de ${n}` );
            document.write('el monto que tiene que pagar es '+n);
        } else {
            if (num>60000) {
                n = num*(45/100)
                alert(`Su renta es ${num} la declaración tiene un monto de ${n}` );
                document.write('el monto que tiene que pagar es '+n);
            } else {
                
            }
        }
    }
  }  
}