let invoice ={
    number: '1',
    client: 'LIVINGLAB',
    currency:'USD',
    coords:{
        lat:42.0,
        lon:-108.1
    },
    services:['LAPTOPS','COFFE','GAS','INTERNET'],
    location:{cp:'31100',adress:'AV AMERICAS'},
    subtotal:500,
    IVA:80
}
document.write(invoice.client)
document.write('<br>')
document.write(invoice['client'])
document.write('<br>')
document.write(invoice.coords.lat)
document.write('<br>')
document.write(invoice.services[1])
document.write('<br>')
document.write(invoice.services[invoice.services.length -1 ])

//Bora un objeto
delete invoice.IVA
//Agregar un objeto
invoice.info ='valor'
