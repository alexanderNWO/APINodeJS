require('dotenv').config();
const mongoose = require('mongoose');
const DB = process.env.DB || 'Prueba';
const app = require('./app');
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/' + DB, {useNewUrlParser: true, useUnifiedTopology: true})
                .then(() => {
                    console.log('Conexion a Base de datos ' + DB);

                    //Creacion server
                    app.listen(port, () => {
                        console.log('Conexion de node en puerto: ' + port);
                    })
                })
                .catch(error => console.log(error));