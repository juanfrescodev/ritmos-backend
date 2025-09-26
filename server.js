require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.use('/api/scores', require('./routes/scores'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
