let currencies=['MXN', 'EUR','USD','CAD']
console.log(currencies);

//conocer el tamaño de un arreglo lenght
let size=currencies.length;
//Ultima posicion de un arreglo
let last=currencies[currencies.length-1]
console.log(last);

//Crear un nuevo valor en el arreglo al ultimo
let new_length=currencies.push('JPY')
console.log({new_length,currencies});

//Agregar valores al principio
let add_init=currencies.unshift('NZD')
console.log(add_init);

//Remover el ultimo elemento del arreglo
let delate_last_pos= currencies.pop()

//Remover el valor de una posicion especifica
let delate_esp_pos=currencies.splice(1,2)
console.log(delate_esp_pos);

//Posicion indice de una moneda
let currency_pos=currencies.indexOf('EUR');
console.log(currency_pos,currencies);
