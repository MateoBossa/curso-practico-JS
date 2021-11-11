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

     const inputDiscount = document.getElementById("inputDiscount");
     const discountValue = inputDiscount.value;

     const precioConDescuento = calcularPrecioConDescuento(priceValue);

     const resultP = document.getElementById("resultP");
     resultP.innerText = "EL precio con descuento son: $" + precioConDescuento;
}

