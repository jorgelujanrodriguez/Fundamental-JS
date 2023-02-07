let serie_1 = document.getElementById('serie_1')

serie_1.innerHTML ="ESTO ES UNA CAJA SERIE DEDSDE JS"
 serie_1.style.backgroud='red'
 serie_1.style.color='green'

 let serie_2;
 serie_2 =document.getElementsByClassName('card')

 let color=['red','blue','green','yellow']
 for(let i=0; i<serie_2.length; i++){
    console.log(serie_2[i])
    serie_2[i].style.background =color[i];

 }