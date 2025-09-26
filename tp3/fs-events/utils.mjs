import fs from 'fs';

// Clase para representar un superheroe
//  Define un modelo para los superheroes con todas las propiedad necesarias

class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

// Funcion para leer y ordenar los superheroes
// Lee el archivo JSON, lo convierte en un objeto y los ordena por el nombre del superheroe y devuelve la lista ordenada

export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    // Convertir a instancias de Superheroes
    const superheroes = superheroesArray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    // Ordenar por nombre superheroe
    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return superheroes;
}

// Convierte los datos de los nuevos superheroes en instancias de la clase Superheroe
export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    // Lee el archivo de superheroes existente
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');

    // lee el archivo con los nuevos superheroes
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf-8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    // Convertir los nuevos superheroes a instancias de Superheroe
    const instanciasNuevos = nuevosSuperheroes.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    // Combinar listas
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    // Guardar la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2),'utf8');
    console.log('Lista de superheroes actualizada con exito.');
}