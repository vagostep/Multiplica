// Typescript
(function () {
    let array = [
        {
            name: 'Pepe',
            donacion: true,
            esposas: ['Rosangela', 'Mayte']
        },
        {
            name: 'Juan',
            donacion: false,
            esposas: ['Yahaira']
        },
        {
            name: 'Lalo',
            donacion: true,
            esposas: []
        }
    ].filter((persona) => persona.donacion && persona.esposas.length > 0).map((persona) => persona.name);
    console.debug('Arreglo: ', array);
    return "OK";
})();
