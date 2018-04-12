// Typescript

(function() {

    class Jugador {
        private nombre:String;
        private posicion:String;
        private numero:String;
    };

    function obtener11Ideal(tecnico:String, jugadores:Array<Jugador>, fecha:Date) {
        
        if(!tecnico || !jugadores || jugadores.length === 0 || !fecha) {
            throw new Error("No puede enviar parámetros vacíos");
        } 

        console.debug(`No hay valores nulos`);
    };

    return "OK";
})();