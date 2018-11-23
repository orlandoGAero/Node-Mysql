const app = require('./config/server');
require('./app/routes/news')(app);

// iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto: ', app.get('port'));
})