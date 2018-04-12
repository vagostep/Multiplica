// Typescript

(function() {

    // Clases 
    class Modelo {
        name:String;

        constructor(name:String) {
            this.name = name;
        };
    };

    class Marca {
        name:String;
        modelo:Modelo;

        constructor(name:String, modelo:String) {
            this.name = name;

            if(modelo) {
                this.modelo = new Modelo(modelo);
            }
        };
    };

    class Placa {
        marca:Marca;
        pais:String;

        constructor(nombreMarca:String, nombreModelo:String, pais:String) {
            this.pais = pais;

            if(nombreMarca) {
                this.marca = new Marca(nombreMarca, nombreModelo);
            }
        };
    };   

    // Fin de clases
        
    /* Funcion que analiza la placa y retorna el nombre del modelo si existe modelo, o marca
    * Recibe como parámetros una placa y una función lambda
    */
    function analizarPlaca(placa:Placa, func:(placa:Placa) => String): String {
        
        if(!placa.marca || !placa.marca.modelo || !placa.marca.modelo.name) {
            return "No existe modelo";
        }

        return func(placa);
    };

    // Creación de la placa
    const placa:Placa = new Placa("Honda", "CR-V", "Perú"); // -> Eliminar uno de los valores para probar

    // Definición de la función lambda que retorna el nombre del modelo
    const obtenerModelo = (placa:Placa) => placa.marca.modelo.name

    // Se pasa la placa y la función lambda
    const respuesta = analizarPlaca(placa, obtenerModelo);

    console.debug('Respuesta: ', respuesta);

    return "OK";
})();