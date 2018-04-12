// Typescript

(function() {

    // Clase que almacena un arreglo de cualquier tipo y le aplica las funciones filtro, mapeo y reducir
    class Arreglo<T> {

        private arr:Array<T>;

        constructor(arr:Array<T>) {
            this.arr = arr;
        }

        // Filtra segun una lambda
        public filtro(func: (num:T) => boolean):Arreglo<T> {

            let arrN = new Array<T>();
            for(let x of this.arr) {
                if(func(x)) {
                    arrN.push(x);
                }
            }

            return new Arreglo(arrN);
        }

        // Mapea segun una lambda
        public mapeo(func: (num:T) => T):Arreglo<T> {

            let arrN = new Array<T>();
            for(let x of this.arr) {
                arrN.push(func(x));
            }

            return new Arreglo(arrN);
        }

        // Reduce segun una lambda
        public reduzco(func: (total:number, num:T) => number):number {

            let suma:number = 0;
            for(let x of this.arr) {
                suma = func(suma, x);
            }

            return suma;
        }
    }

    // Crea el arreglo genérico del 1 al 1000
    const arrayN = new Arreglo<number>( Array.from(Array(1000), (e,i)=>i+1) );

    // Obtiene la suma
    const suma = arrayN.filtro( (num) => num % 2 !== 0 ).mapeo( (num) => Math.pow(num, 3) ).reduzco((total, num) => total + num); 

    console.debug('Resultado: ', suma);
    
})();


// resultado de 1^3 + 3^3 + 5^3 + ... + 999^3