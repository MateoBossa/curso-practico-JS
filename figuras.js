// Codigo del cuadrado
// var elevado = 2 ** 2;
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + elevado);

// //Codigo del triangulo
// const ladotriangulo1 = 6;
// const ladotriangulo2 = 6;
// const basetriangulo = 4;


// console.log("Los lados del triangulo miden:  " 
// + ladotriangulo1 
// + "cm, " 
// + ladotriangulo2 
// + "cm, " 
// + basetriangulo 
// + elevado);

// const alturatriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturatriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
     return (base * altura) / 2;  
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm");

// Codigo del circulo

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
     return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = 3.1415;
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
} 

// console.log("El area del circulo es: " + areaCirculo + "cm");

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(value){
   const input = document.getElementById("InputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado();
   alert(perimetro);
}

function calcularAreaCuadrado(value){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
 
    const area = AreaCuadrado(value);
    alert(area);
 }

//TrianguloIsosceles
const lado1 = 7;
const lado2 = 7;
const base = 5;
const altura = 9;

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}




