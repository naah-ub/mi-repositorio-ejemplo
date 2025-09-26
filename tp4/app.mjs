import express from 'express';
import {obtenerSuperheroesPorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller} from './controllers/superheroesController.mjs';

// Levantar un servidor express en el puerto 3005
const app = express();
const PORT = 3005;

// Rutas
app.get('/', (req, res)=>{res.send(`FUNCIONA!`);});
app.get('/superheroes/id/:id', obtenerSuperheroesPorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

// Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
