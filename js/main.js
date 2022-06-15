//Desafio Complementario 01


//BUCLE DE HOLAS
/*
let entrada = parseInt(prompt("Numero de HOLAS"));

for (let i = 1; i <= entrada; i++) {
  let salida = "HOLA nº";
  console.log(salida + i);
}
*/





//SIMULADOR INTERACTIVO
//AGREGANDO ARRAYS

const productos = ["PlayStation","X-BOX","PC Gamer","Nintendo Switch"];
productos.join("-");

const carrito=[];

let usuario= prompt("Ingrese su nombre");

function saludo(){
  return alert("Hola "+ usuario +". Bienvenido al simulador de compra de produtos");
};

saludo();

function productoElegido(){
  
  let elegirProducto = prompt("Eliga alguno de los siguietes productos y coloque su numero correspondiente debajo: \n 1- PlayStation\n 2- X-BOX \n 3- PC Gamer \n 4- Nintendo Switch");
  
  switch (elegirProducto) {
    case "1":
        alert("El valor de su producto es de $100.000");
        break;
    case "2":
        alert("El valor de su producto es de $120.000");
        break;
    case "3":
        alert("El valor de su producto es de $200.000");
        break;
    case "4":
        alert("El valor de su producto es de $80.000");
        break;
    default:
        alert("Producto inexistente, vuelva a ingresar el numero");
        break;
  }
  
};

productoElegido();

function finalizarCompra(){
  return alert("Gracias por la compra, que lo disfrutes");
}

finalizarCompra();

console.log(carrito);






/*
function valorCuotas(){
  
  let monto= Number(prompt("Bienvenido al simulador de cuotas \nIngrese su monto final"));

  let cantidadCoutas= prompt("Ingrese debajo el numero de cuotas que prefiera. \nLas opciones son \n4 cuotas \n6 cuotas \n8 cuotas \n12 cuotas \nPara salir del simulador ingrese 'SALIR'");

  while (cantidadCoutas != "SALIR") {
    switch (cantidadCoutas) {
      case "4":
        alert("El valor de sus cuotas seria de $"+ monto / 4);
        break;
      case "6":
        alert("El valor de sus cuotas seria de $"+ monto / 6)
        break;
      case "8":
        alert("El valor de sus cuotas seria de $"+ monto / 8)
        break;
      case "12":
        alert("El valor de sus cuotas seria de $"+ monto / 12)
        break;
      default:
        alert("Opción inexistente, vuelva a ingresar el monto")
        break;
    };

    monto= prompt("Ingrese su monto final \nPara salir del simulador ingrese 'SALIR'");
    if (monto == "SALIR") {
      break;
    };

    cantidadCoutas= prompt("Ingrese debajo el numero de cuotas que prefiera. \nLas opciones son \n4 cuotas \n6 cuotas \n8 cuotas \n12 cuotas \nPara salir del simulador ingrese 'SALIR'");
  };

};

saludo();
productoElegido()
valorCuotas();
agradecer()

console.log(usuarioIngresado);














//Desafio complementario Arrays

/*const alimentos = ["Pollo","Fideos","Carne"];


let nuevoArray = alimentos.join("-");

console.log(nuevoArray)
*/













