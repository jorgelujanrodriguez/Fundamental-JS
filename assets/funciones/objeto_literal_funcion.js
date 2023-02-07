/*
let Auto={
    marca:"FORD",
    modelo:"F-150",
    anio:2023,
    encender:function(){
        console.log("El auto está encendido");
    },
    apagar:function(){
        console.log("El auto está apagado");
}
};
console.log(Auto.modelo);//F-150
Auto.apagar(); //El auto esta apagado  */

let Jugador={
    
    namee: "Michael Jordan",
    team: "Chicago",
    number:23,
    shoot_2:function(){
        document.writeln("Anotaste 2 puntos")
    },
    shoot_3:function(){
        document.writeln("Anotaste 3 puntos")
    }
}
console.log(Jugador.namee)
Jugador.shoot_2()
document.writeln("<br/>")
Jugador.shoot_3()