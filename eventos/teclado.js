/*document.addEventListener("keydown",callback);
function callback(evt){
    if(evt.keyCode ===65){
    alert("You pressed this key: 'a'");
   
}else{
    console.log(evt.keyCode)
    console.log(String.fromCharCode(evt.witch))
}
}*/
document.addEventListener('keydown',listaEventos);
function listaEventos(evt){
    console.log(evt)
    document.getElementById('eventkey').innerHTML=evt.key;
    document.getElementById('eventCode').innerHTML=evt.code;
    document.getElementById('eventkeyCode').innerHTML=evt.keyCode;
    document.getElementById('eventWich').innerHTML=evt.which;
    document.getElementById('fromCharCode').innerHTML=String.fromCharCode(evt.keyCode);
    
}
