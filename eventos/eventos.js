
function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email=="Auto1" && password=="Auto2"){
        alert("Usuario y contraseña correctas :)")
        let boton = document.getElementById("btnLogin")
        boton.className = "btn btn-success"
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("login"))
        modal.hide()
        boton.innerHTML = "Bienvenido"
    }else{
        alert("Usuario y contraseña incorrectos")
    }
}
function cambiarUbicacion(){
alert("Cambiamos de ubicación")
}
document.getElementById("btn_ubica").onclick=cambiarUbicacion; 