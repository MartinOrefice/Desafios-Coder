
/*const btnComprar = document.querySelector(".buy");

btnComprar.addEventListener("click", ()=>{
    window.location.href = "../pages/calculadora.html";
} )
*/

/*
[
    {
        precio: 5000,
        id: 1,
        title: "Mouse Gamer",
        img: "https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
    },
    {
        precio: 400000,
        id: 2,
        title: "PC Gamer"
    },
    {
        precio: 150000,
        id: 3,
        title: "Play Station 4"
    }
]
*/

/*document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})
*/
/*
const fetchData = async () => {
    try {
        const res = await fetch("../productos.json")
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    };
}
*/
const listaProductos = document.querySelector("#productos")
const url ="../productos.json"
fetch(url)
.then((response)=> response.json())
.then((productos)=>{
    console.log(productos);
    productos.forEach((productos)=>{
        const card = document.createElement("div");
        const {img, title, precio} = productos;
        card.innerHTML = `
        <div class="card">

        <div class="imgBox">
        <img src=${img}  class="mouse">
        </div>
        
        <div class="contentBox">
        <h3>${title}</h3>
        <h2 class="price">$${precio}</h2>
        <button class="buy">COMPRAR</button>
        </div>
        
        </div>`;

        listaProductos.append(card);
    });
})


/*
<div class="card">

<div class="imgBox">
<img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" class="mouse">
</div>

<div class="contentBox">
<h3>MOUSE GAMER</h3>
<h2 class="price">$5.000</h2>
<button class="buy">COMPRAR</button>
</div>

</div>
*/