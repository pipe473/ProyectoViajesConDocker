const nodemailer = require('nodemailer');
const Email = {};

Email.transporter = nodemailer.createTransport({ //la constante Email como objeto vacio, utiliza
                                        //como  metodo transporter, con la libreria nodemailer
                                    //para que por el metodo de la libreria createTransport, que se cumplan 
                                   //los parametros que necesitaria
            service:'gmail',
            auth: {

                user:'ghnodemailer@gmail.com', //email que envia el correo
                pass:'nodemailer' //contraseña del correo para poder enviar el correo a otro
            },

    tls:{
        rejectUnauthoritzed: false

        }
},{

    from:'ghnodemailer@gmail.com',
     headers:{}


});





module.exports = Email;