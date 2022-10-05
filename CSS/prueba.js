
let VIP = 10;

function calculofinal(Boleto,Cantidad){


let PrecioBoletoBase = Boleto * Cantidad;
let PrecioFinal = PrecioBoletoBase * VIP;
return PrecioFinal;
}
function Carrera(){
   
    let  NombreCarrera =prompt(`Que Carrera Quieres Ver? Belgica, Italia o Japon`);
    let Boleto = 250;

    let  Cantidad = parseInt(prompt(`Que cantidad de boletos quieres adquirir?`));
    let  Ubicaciones = prompt(`Que Ubicaciones Desea adquirir, VIP - ESPECIAL - ECONOMICA?`); 

    
    let PrecioFinal = calculofinal(Boleto,Cantidad);


    
    let GranPremio= console.log( `Felicidades tienes ${Cantidad} ${Ubicaciones} para El Gran Premio de ${NombreCarrera} el monto total es de ${PrecioFinal}U$D`);
    return GranPremio;
}
 Carrera()







