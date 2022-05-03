const { request } = require('express');
const express = require('express');
const cors = require('cors')

const PORT = 4000;

// Crearing server
const app = express();

// CORS
app.use(cors());

// Listening 
app.listen(PORT, () =>{
  console.log(`Servidor corriendo en: ${PORT}`)
})


// Routes

// Get all items
app.use('/api/', require('./routes/items'));

// Get only one item
app.use('/api/items', require('./routes/item'));
