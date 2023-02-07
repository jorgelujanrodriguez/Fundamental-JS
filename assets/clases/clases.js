
class Perro{
    constructor(nombre){
        this.nombre = nombre;
    }
    //Método
    ladrar(){
        document.writeln(this.nombre+' ladra')
}
alimentar(){
    document.writeln('Hola soy '+this.nombre+', gracias por alimentarme!!')
}


}
var mascota_1=new Perro('Duquesa');
mascota_1.ladrar();//Duquesa ladra.
document.writeln('<br/>');
var mascota_2=new Perro('Kira');
mascota_2.ladrar();//Kira ladra.
document.writeln('<hr/>');
document.writeln('<br/>');

var mascota_1=new Perro('Duquesa');
mascota_1.alimentar();//Duquesa ladra.
document.writeln('<br/>');
var mascota_2=new Perro('Kira');
mascota_2.alimentar();//Kira ladra.
//Si Javascript tiene una línea mal, todo esta mal.
