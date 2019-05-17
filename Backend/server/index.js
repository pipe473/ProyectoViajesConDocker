require('./config'); //leo la configuracion de mi servidor y siempre tiene que ser el primero
const cors = require('cors');

const express = require('express'); 
const PORT = process.env.PORT || 4000;
const server = express();


server.use(cors({ exposedHeaders:['authorization']

}));

server.use(express.json());
server.use(require('./routes')); 
server.use('/public', express.static(`${__dirname}/public`));

   

server.listen(PORT, ()=>{

    console.log(`Server listening at http://localhost:${PORT}`); // escucho sobre cual puerto esta enviando
    

});