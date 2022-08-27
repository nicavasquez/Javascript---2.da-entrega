
let nombre = ""

solicitarNombre(nombre);

function solicitarNombre(nombre) {
    nombre = prompt("Buenas tardes, por favor ingrese su nombre: ");
    saludar(nombre);
}

function saludar(nombre) {
    console.log(`Bienvenido ${nombre}, juntos vamos a seleccionar tu pedido.`);
}

class Producto {
    constructor (nombre, precio, descripcion, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = 0;

    }


    ValorFinal(){
        return this.precio * this.cantidad;
    }

}

const producto1 = new Producto ("Pizza", 1200, "Pizza especial");
const producto2 = new Producto ("Hamburguesa", 800, "Hamburguesa simple con fritas");
const producto3 = new Producto ("Lomito", 1500, "Lomo especial con fritas");
const producto4 = new Producto ("Sand. Milanesa", 900, "Sand. Completo con fritas");

console.log("Las opciones que podemos elegir son las siguientes: ");
console.log(`1) ${producto1.nombre}`);
console.log(`2) ${producto2.nombre}`);
console.log(`3) ${producto3.nombre}`);
console.log(`4) ${producto4.nombre}`);

let option = prompt(`Elija una opcion:
1: Pizza
2: Hamburguesa
3: Lomito
4: Sand. Milanesa
5: No quiero nada.`);
switch (option) {
    case "1":
        console.log("Has seleccionado Pizza");     
        break;
    case "2":
        console.log("Has seleccionado Hamburguesa");        
        break;
    case "3":
        console.log("Has seleccionado Lomito");        
        break;
    case "4":
        console.log("Has seleccionado Sand. Milanesa");        
        break;
    case "5":
        console.log("Has seleccionado No quiero nada.");        
        break;    

    default:
        console.log("No has iniciado una opción válida.");
        let option = prompt(`Elija otra vez una opcion: 
        1: Pizza
        2: Hamburguesa
        3: Lomito
        4: Sand. Milanesa
        5: No quiero nada.`);
        break;
}
console.log(`Esta es la opción ${option}`);



if (option == "1") {
    producto1.cantidad = Number(prompt("Dime cuantas unidades quieres: "));
    console.log(`Has pedido ${producto1.cantidad} de ${producto1.nombre} que tiene un precio de ${producto1.precio}.`);
    console.log(`Entonces debes pagar ${producto1.ValorFinal()}`);
}
else if (option == "2") {
    producto2.cantidad = Number(prompt("Dime cuantas unidades quieres: "));
    console.log(`Has pedido ${producto2.cantidad} de ${producto2.nombre} que tiene un precio de ${producto2.precio}.`);
    console.log(`Entonces debes pagar ${producto2.ValorFinal()}`);
}
else if (option == "3") {
    producto3.cantidad = Number(prompt("Dime cuantas unidades quieres: "));
    console.log(`Has pedido ${producto3.cantidad} de ${producto3.nombre} que tiene un precio de ${producto3.precio}.`);
    console.log(`Entonces debes pagar ${producto3.ValorFinal()}`);
}
else if (option == "4") {
    producto4.cantidad = Number(prompt("Dime cuantas unidades quieres: "));
    console.log(`Has pedido ${producto4.cantidad} de ${producto4.nombre} que tiene un precio de ${producto4.precio}.`);
    console.log(`Entonces debes pagar ${producto4.ValorFinal()}`);
}
else {
    console.log("No tienes que pagar nada.")
}