
const listaSweaters = [
    {nombre:"Hoodie Navy - One Collection" , precio:"€ 74,95"},
    {nombre:"Adult #1 World Champion 2021" , precio:"€ 59,95"},
    {nombre:"Essential Hoodie - Night Sky" , precio:"€ 59,95"},
    {nombre:"RBR Dynamic Bull Hoodie - Grey" , precio:"€ 79,95"},
    {nombre:"Essential Hoodie - Grey" , precio:"€ 59,95"},
    {nombre:"Hoodie Orange - One Collection" , precio:"€ 74,95"},
    {nombre:"AOP Hoodie - Grey" , precio:"€ 79,95"},
    {nombre:"Hoodie White - One Collection" , precio:"€ 79,95"},
    {nombre:"Max Verstappen Zip Sweatshirt" , precio:"€ 85,00"},

];

const listaPoloShirt = [
    {nombre:"Mens Polo 2022" , precio:"€ 74,95"},
    {nombre:"Max Verstappen 1 Polo" , precio:"€ 65,00"},
    {nombre:"Adult - Classic Polo Shirt Red Bull Racing" , precio:"€ 55,00"},
    {nombre:"Men Polo Navy Zandvoort" , precio:"€ 36,00"},
    {nombre:"Men Polo Grey Zandvoort" , precio:"€27,00"},
    {nombre:"Men Polo White Zandvoort" , precio:"€ 35,95"},
    {nombre:"MV Polo - Green" , precio:"€ 49,95"},
    {nombre:"MV Polo - Gray" , precio:"€ 49,95"},
    {nombre:"MV Polo - Navy" , precio:"€ 49,95"},

];

const listacaps = [
    {nombre:"Adult Max Verstappen Driver Cap 2022 - Flatbrim" , precio:"€ 39,95"},
    {nombre:"Adult Max Verstappen Driver Cap 2022 - Flatbrim" , precio:"€ 39,95"},
    {nombre:"Red Bull Racing Stripe Cap" , precio:"€ 38,95"},
    {nombre:"Red Bull Racing Trucker cap - Curved - Grey" , precio:"€ 36,00"},
    {nombre:"Red Bull Racing Trucker cap - Curved - black" , precio:"€ 36,00"},
    {nombre:"Cap Unleash the Lion - Dark Blue" , precio:"€ 36,00"},

];

let filtro = prompt("Que Producto te interesa?")
if(filtro =="sweater"){
     console.log(listaSweaters)
}
else if (filtro == "polo shirt"){
     console.log(listaPoloShirt)
}
else if (filtro=="caps"){
     console.log(listacaps)
}
else{
    alert(`Lo sentimos no encontramos ese producto`)
     console.log(`Lo sentimos no encontramos ese producto`)
}
