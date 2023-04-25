class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        
      if (this.integrantes.every(i => i.instrumento !== 'Bateria')) {
        this.integrantes.push(integranteNuevo);
      } else { 
        console.log("Nel Prro");
      }
  
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    constructor(
      {
        nombre,
        instrumento
      }
    ) {
      this.nombre = nombre;
      this.instrumento = instrumento;
    }
  
  
  }
  
  
  
  
  export {
    Banda,
    Integrante,
  }
  



  class Banda {
    constructor({ nombre, generos = [], integrantes = [] }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = integrantes;
    }
    agregarIntegrante(integranteNuevo) {
      // Tu código aquí 👈
      const isBassPlayer = this.integrantes.some(
        (integrante) => integrante.instrument == "Bateria"
      );
  
      if (!isBassPlayer) {
        this.integrantes.push(integranteNuevo);
      } else if (isBassPlayer && integranteNuevo.instrument !== "Bateria") {
        this.integrantes.push(integranteNuevo);
      } else {
        return;
      }
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    // Tu código aquí 👈
    constructor({ name, instrument }) {
      this.name = name;
      this.instrument = instrument;
    }
  }
  
  const banda = new Banda({
    nombre: "Caracas Jazz",
    generos: ["Jazz", "Blues", "Funk"],
    integrantes: [
      new Integrante({
        name: "Oscar",
        instrument: "Bajo",
      }),
      new Integrante({
        name: "Natali",
        instrument: "Guitarra",
      }),
      new Integrante({
        name: "Abelardo",
        instrument: "Bateria",
      }),
    ],
  });
  
  banda.agregarIntegrante(
    new Integrante({
      name: "Heriberto",
      instrument: "Banjo",
    })
  );
  
  banda.agregarIntegrante(
    new Integrante({
      name: "Paul",
      instrument: "Bateria",
    })
  );
  
// ====================

class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
      // Tu código aquí 👈
  
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    // Tu código aquí 👈
  
  }
  
  
  export {
    Banda,
    Integrante,
  }

  