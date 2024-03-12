const numeros = [3, 1, 1, 10, 5, 7, 2];
let numMayor = numeros[0];
let numMenor = numeros[0];
let suma = 0;
for (numeroPosicion of numeros){
    suma = suma + numeroPosicion;
    if (numeroPosicion > numMayor) {
        numMayor = numeroPosicion;
    } 
    if (numeroPosicion < numMenor) {
        numMenor = numeroPosicion;
    }
}
// console.log(suma, numMayor, numMenor);

const parrafo = document.querySelector("#parrafo");
// console.log (parrafo);
parrafo.innerHTML = "La suma total es " + suma + ", el número menor es " + numMenor + " y el número mayor es " + numMayor + ".";
parrafo.classList.add("parrafo--azul");

