const express = require('express');
const path = require('path');
const app = express();

//Configuro el directorio de recursos estáticos
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.listen(3000, () => console.log('El servidor está corriendo en el puerto 3000'));

