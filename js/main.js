//Elementos del HTML
const nombreYapellido = document.querySelector("#nombreYapellido");
const agregar = document.querySelector("#agregar");
const nombre = document.querySelector(".nombre");


//Evento

agregar.addEventListener("click", ()=>{
    nombre.innerText = "1. "+ nombreYapellido.value;
});










































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

  valorCuotas();
  */














