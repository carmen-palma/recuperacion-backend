const express = require('express');

const connectDB = require('./config');
 const routes = require('./routes');

const app = express();
app.use(express.json());
connectDB();
app.use('/api', routes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
