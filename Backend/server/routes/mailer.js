const router = require('express').Router();
const Email = require('../config/email');



router.get('/prueba', (req,res)=>{
    res.send('funciona')

    const message = {
        
        to:'pipe473@hotmail.com',
        subject:'Email de prueba',
        template:'prueba',
        context:{
            title:'Hola',
            text:'prueba de correo'
        }


    }
    
    Email.transporter.sendMail(message)
        .then(info => {
            res.send(info)

        })

        .catch(err => {
            res.status(500).send(err);

        });


});


module.exports = router;