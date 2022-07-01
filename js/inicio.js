//LLAMADO DE ELEMENTOS
const inputNombre = document.querySelector("#nombre");
const btnIniciar = document.querySelector("#iniciar");



btnIniciar.addEventListener("click", ()=>{
  localStorage.setItem("Usuario", inputNombre.value);
  window.location.href = "../pages/calculadora.html";
});