//server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ✅ Permitir múltiples orígenes (producción + desarrollo local)
const allowedOrigins = [
  'https://juanfrescodev.github.io',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST']
}));

app.use(express.json());

// 🔔 Endpoint de prueba
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// 🔗 Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

// 📦 Rutas de puntajes
app.use('/api/scores', require('./routes/scores'));
app.use('/api', require('./routes/auth'));

// 🚀 Inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
