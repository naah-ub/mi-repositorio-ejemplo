import express from 'express';

const app = express();
const PORT = 3000;

// Ruta home
app.get('/', (req, res)=>{
    res.send(`FUNCIONA!`);
});

// Ruta GET con parametro de ruta
// Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil del usuario con ID: ${userId}`);
    console.log(`ID del usuario recibido: ${userId}`);
});

// Ruta GET con parametro de consulta
// Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});