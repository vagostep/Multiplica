// Typescript
(function () {
    // Implementación de la simulación del API
    function fetch(url) {
        let promesa;
        if (url.startsWith("placas")) {
            promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ "pais": "Peru", "conductor": "12345678" });
                    //reject("No existe la placa");
                }, 1000);
            });
        }
        else if (url.startsWith("conductores")) {
            promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ "nombre": "Paolo Guerrero", "dni": "12345678", "sexo": "masculino" });
                    //reject("No existe el conductor");
                }, 1000);
            });
        }
        ;
        return promesa;
    }
    ;
    function getPlaca(nroPlaca) {
        return fetch('placas/' + nroPlaca);
    }
    ;
    function getConductor(dniConductor) {
        return fetch('conductores/' + dniConductor);
    }
    ;
    ;
    ;
    // Llamado al Back
    let placa = "PLA123";
    getPlaca(placa)
        .then((response) => getConductor(response.dniConductor))
        .then((response) => {
        console.debug(`Conductor: `, response);
    })
        .catch((error) => {
        console.error(`${new Date().getHours()}: ${error}`);
    });
    return "OK";
})();
