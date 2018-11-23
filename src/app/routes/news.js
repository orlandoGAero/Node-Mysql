const dbConn = require('../../config/dbConn');

module.exports = app => {

    const connection = dbConn();

    app.get('/', (req,res) => {
        connection.query('SELECT * FROM noticias', (error, result) => {
            // console.log(result);
            res.render('news/news', {
                noticias: result
            });
        })

    });

    app.post('/noticia', (req, res) => {
        let {titulo, noticia} = req.body;
        
        connection.query('INSERT INTO noticias SET?', {
            titulo,
            noticia
        }, (err, result) => {
            res.redirect('/');
        })
    })
}