// const preciOriginal = 280;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// console.log("El precio original es: " + precioConDescuento);
// console.log({
//     preciOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function onClickButton(){
     const inputPrice = document.getElementById("inputPrice");
     const priceValue = inputPrice.value;

     const inputCupon = document.getElementById("inputCupon");
     const cuponValue = inputCupon.value;

     let descuento;

     switch (cuponValue){
         case cupones[0]: "Este cupon es de 50"
         descuento = 15;
         break;
         case cupones[1]: "Este cupon es de 25"
         descuento = 30;
         break;
         case cupones[2]: "Este cupon es de 15"
         descuento = 25;
         break;
     }  
    
     const precioConDescuento = calcularPrecioConDescuento(priceValue);

     const resultP = document.getElementById("resultP");
     resultP.innerText = "EL precio con descuento son: $" + precioConDescuento;

}

const cupones = [
   "Este cupon es de 50",
   "Este cupon es de 25",
   "Este cupon es de 15"
];