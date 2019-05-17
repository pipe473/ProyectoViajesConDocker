const router = require('express').Router();

router.get('/prueba', (req, res) => {
    res.render('prueba.hbs', {
        users: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Juan'},
            {id: 3, name: 'Xavi'}
        ],
        admin: {
            nombre: 'Ivan',
            apellidos: 'Ruiz'
        },
        title: 'Pagina de pruebas',
        layout: 'template'
    });
});

module.exports = router;