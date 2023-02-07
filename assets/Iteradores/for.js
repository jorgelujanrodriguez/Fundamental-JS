/*let i;
for(i=0;i<=10;i++){
    document.writeln(i)
    document.writeln('<br/>'+'<hr/>')
}*/
/*const enterprises=['TESLA','AMAZON','MICROSOFT','META']
console.warn('FOR TRADICIONAL')
for(let i=0;i<enterprises.length;i++)
{
    console.log(enterprises[i])
}
console.warn('FOR IN')
for(let i in enterprises)
{
console.log(enterprises[i])
}
console.warn('FOR OF')
for(let enterprise of enterprises)
{
    console.log(enterprise)
}*/
let i 
const nombre =['Encabezado de nivel 1','Encabezado de nivel 2','Encabezado de nivel 3','Encabezado de nivel 4','Encabezado de nivel 5','Encabezado de nivel 6']
for(i=1;i<=6;i++)
{
    document.writeln('<h'+[i]+'> '+' '+nombre[i-1]+'</h'+[i]+'>')
}


