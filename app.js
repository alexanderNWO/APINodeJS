const express = require('express');


const app = express();

const UserRoutes = require('./routes/UserRoutes');
const AuthRoutes = require('./routes/AuthRoutes');
const PlatformRoutes = require('./routes/PlatformRoutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api/users', UserRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/platforms', PlatformRoutes);

module.exports = app;