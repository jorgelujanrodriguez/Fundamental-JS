/*function square(number){
    return number * number 
}*/

/*function saludar(){
    document.writeln('Saludar')
}
saludar()
function saludar_nombre(nombre,paterno){
    console.log(arguments)
    document.writeln('Hola '+nombre+',como estas?')
}*/


/*let saludar_flecha =(nombre,paterno)=> {
    document.writeln('<br/>')
    document.writeln('Saludar desde la función flecha,'+nombre+' '+paterno)
}
//saludar_nombre('Jorge','Luján',123)
saludar_flecha('Jorge','Luján',123)*/

let fecha = new Date();
let hora =fecha.getHours();

function valida_hora(hora){
    if(hora<=5){
        document.writeln('Buenas madrugadas!!')
    }else if(hora >5 && hora <12){
      document.writeln('Buenos días!!')
    } else{
    document.writeln('Buenas noches!!')
     }
}
valida_hora();
