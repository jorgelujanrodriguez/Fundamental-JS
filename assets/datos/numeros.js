/*let number_1 =20
let number_2 =30.5
let number_3 = 0.45
let number_4 =-30
let resultado;
resultado =number_1 + number_2 
resultado= number_1 -number_2 
resultado = number_2 / number_3
resultado =number_1 * number_4
let pi =Math.PI;
pi = Math.round(pi)
console.log(pi)
document.write(pi)
let raiz=Math.sqrt(144)
console.log(raiz)
resultado =Math.abs(-500)
console.log(resultado)
resultado =Math.pow(5,3)
console.log(resultado)
resultado =Math.min(5,534,234,67,8,67)
console.log(resultado)*/
let prenda1=prompt('Valor de la primer prenda:');
let prenda2=prompt('Valor de la segunda prenda:');
let prenda3=prompt('Valor de la tercer prenda:');
let sum=parseInt(prenda1)+parseInt(prenda2)+parseInt(prenda3);
let subt=(sum*.80)
let iva=sum*.16
let tiva=subt*1.16
document.write("El total es:"+sum)
document.write("<br/>");
document.write("El subtotal:"+subt)
document.write("<br/>");
document.write("El IVA es:"+iva);
document.write("<br/>");
let tiva2=tiva.toFixed(2)
document.write("El total con IVA es:"+tiva2)

