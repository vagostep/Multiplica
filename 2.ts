// Typescript

(function() {

    // Implementación de la simulación del API
    function fetch(url:String):Promise<any> {

        let promesa:Promise<any>;

        if(url.startsWith("placas")) {
            promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve({"pais":"Peru", "conductor": "12345678"});
                //reject("No existe la placa");
                }, 1000);
            });
        } else if(url.startsWith("conductores")) {
            promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve({"nombre":"Paolo Guerrero", "dni": "12345678", "sexo":"masculino"});
                //reject("No existe el conductor");
                }, 1000);
            });
        };

        return promesa;
        
    };

    function getPlaca(nroPlaca:String):Promise<any> {
        return fetch('placas/' + nroPlaca);
    };

    function getConductor(dniConductor:String):Promise<any> {
        return fetch('conductores/' + dniConductor);
    };

    // Interfases que definen los objetos que responde el back
    interface Placa {
        pais:String;
        dniConductor:String;
    };

    interface Conductor {
        nombre:String;
        dni:String;
        sexo:String;
    };

    // Llamado al Back
    let placa = "PLA123";
    getPlaca(placa)
    .then( (response:Placa) => getConductor(response.dniConductor) )
    .then( (response:Conductor) => {
        console.debug(`Conductor: `, response);
    })
    .catch( (error) => {
        console.error(`${new Date().getHours()}: ${error}`);
    });

    return "OK";
})();