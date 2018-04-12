// Typescript
(function () {
    // Clase que almacena un arreglo de cualquier tipo y le aplica las funciones filtro, mapeo y reducir
    class Arreglo {
        constructor(arr) {
            this.arr = arr;
        }
        // Filtra segun una lambda
        filtro(func) {
            let arrN = new Array();
            for (let x of this.arr) {
                if (func(x)) {
                    arrN.push(x);
                }
            }
            return new Arreglo(arrN);
        }
        // Mapea segun una lambda
        mapeo(func) {
            let arrN = new Array();
            for (let x of this.arr) {
                arrN.push(func(x));
            }
            return new Arreglo(arrN);
        }
        // Reduce segun una lambda
        reduzco(func) {
            let suma = 0;
            for (let x of this.arr) {
                suma = func(suma, x);
            }
            return suma;
        }
    }
    // Crea el arreglo genérico del 1 al 1000
    const arrayN = new Arreglo(Array.from(Array(1000), (e, i) => i + 1));
    // Obtiene la suma
    const suma = arrayN.filtro((num) => num % 2 !== 0).mapeo((num) => Math.pow(num, 3)).reduzco((total, num) => total + num);
    console.debug('Resultado: ', suma);
})();
// resultado de 1^3 + 3^3 + 5^3 + ... + 999^3 
