const mongoose = require('mongoose');

    console.log(process.env.PORT);
    
mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://mongodb:27017/web_viajes',{useNewUrlParser: true}).then(() => {
                
                console.log('BD conectada');// esta promesa la declaro para mirar si me llega info a mi BD
    }) 

    module.exports = mongoose;