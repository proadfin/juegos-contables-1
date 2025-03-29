// Crear el vervidor para contabilidad en la nube mar-21-25
// Se crean ususrios

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer datos en JSON
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para verificar código de acceso
app.post('/login', (req, res) => {
    const { usuario, codigo } = req.body;

    // Cargar los usuarios desde el archivo JSON
    const data = fs.readFileSync('usuarios.json');
    const usuarios = JSON.parse(data).usuarios;

    // Verificar si el usuario y código existen
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.codigo === codigo);

    if (usuarioValido) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

