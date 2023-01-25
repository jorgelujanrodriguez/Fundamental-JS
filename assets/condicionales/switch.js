/*const type_payment = "cash";

switch (type_payment) {
  case 'cash':
    document.writeln("Tipo de pago con efectivo");
    break;
  case 'cc':
    document.writeln('Tipo de pago con tarjeta')
    break;
  default:
    document.writeln("Sin tipo de pago");
    break;
}*/
let edad = prompt("Ingrese su edad");
switch (edad) {
  case '0':
    document.writeln("Acabas de nacer");
    break;
  case '18':
    document.writeln("Ya eres mayor de edad");
    break;
  case '65':
    document.writeln("Edad de jubilación");
    break;
  default:
    document.writeln("Edad incorrecta");
    break;
}
