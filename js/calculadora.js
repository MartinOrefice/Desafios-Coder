//LLAMADO DE ELEMENTOS
const precioProducto = document.querySelector("#precioProducto");
const cantCuotas = document.querySelector("#cantCuotas");
const btnCalcular = document.querySelector("#btnCalcular");
const parrafo = document.querySelector("#textPrincipal");
const resultado = document.querySelector("#parrafoResultado");

let nombre = localStorage.getItem("Usuario");

parrafo.innerText = "Hola " + nombre + "! " +" Ingrese debajo el precio del producto y la cantidad de cuotas";

btnCalcular.addEventListener("click", ()=>{
    resultado.innerText ="Serian "+ (cantCuotas.value) + " cuotas de " + "$" + Math.floor((precioProducto.value / cantCuotas.value));
});