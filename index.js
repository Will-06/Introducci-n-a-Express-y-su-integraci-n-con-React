const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
// Middleware para JSON
app.use(express.json());

// Importar rutas
const usuariosRoutes = require('./api/routes/usuarios');

// Usar rutas
app.use('/usuarios', usuariosRoutes);

// Ruta raíz opcional
app.get('/', (req, res) => {
  res.send('API Express con controladores y rutas');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
