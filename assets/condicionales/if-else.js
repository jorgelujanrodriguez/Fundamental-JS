/*let score=7
if(score>8){
   document.write('Alumno aprobado con: '+score);
} else {
    document.write('Alumno reprobado con: '+score);
}
//=== manera estricta de comparar, compara por tipo de dato y valor

let val=100
if(val=='100'){
    document.write('Son Iguales')
}
if(val==='100'){
    document.write('No son Iguales')
}*/
/*
let cash= prompt('Ingrese la cantidad deseada');
if(cash>=1000){
    let conf= confirm('Seguro que desea retirar esta cantidad: '+cash+' pesos');
    let ret= alert('Usted ha retirado:'+cash+' pesos')
}
else{
    let neg= alert('Su saldo es insuficiente')
}*/

//let cash=prompt('Ingrese la candidad deseada:')>=1000? alert('Usted ha retirado:'+cash+' pesos'): alert('Su saldo es insuficiente');
/*const dinero=1000
let retirar=prompt('Ingrese la cantidad que desea retirar')
if(dinero>=retirar){
document.writeln('No cuentas con dinero suficiente para realizar')
}else if(retirar>2000 && retirar<=5000){
document.writeln('Se puede realizar el retiro')
}else if(retirar >=5000){
    
document.writeln('No se permite retirar mas de 5k diarios')
}*/
let calif=prompt('Ingrese la calificación deseada')

if (calif>=0 && calif<=6){
    document.writeln('Su calificación es reprobatoria')
}

else if(calif>6 && calif<8){
    document.writeln('Su calificación es aprobatoria, necesita practicar')
}

else if(calif>=8 && calif <=10){
    document.writeln('Su calificación es aprobatoria')
}

if(calif>10){
    document.writeln('Solo se permiten calificaciones de 0 a 10')
}

if(typeof(calif)===String){
    document.writeln('No se permiten letras o símbolos')
}