//Desafio Complementario 01

/*let ingreso=parseInt(prompt("Ingrese la cantidad de Holas"))

for (let i = 0; i <= ingreso ; i++) {
    
    console.log(i);
}
*/
/*let ingreso=parseInt(prompt("Ingresá un número. \n Para salir ingresa ESC"))

while (ingreso != "ESC") {
    alert("El ususario ingreso" + ingreso);
    ingreso=prompt("Ingresá otro número. \n Para salir ingresa ESC")
}*/


//BUCLE DE HOLAS
let entrada = parseInt(prompt("Numero de HOLAS"));

for (let i = 1; i <= entrada; i++) {
  let salida = "HOLA nº";
  console.log(salida + i);
}
