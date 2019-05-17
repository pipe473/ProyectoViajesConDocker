const router = require ('express').Router();
const User = require ('../models/User');

router.get('/', (req, res)=> {
    res.send(process.env.NODE_ENV);
});

router.post('/',(req,res) => {
    new User(req.body).save().then(user =>{
        res.send(user);
    }).catch(err => {
           res.status(400).send(err); 

    });

    }); //con esto obtenemos un nuevo usuario y lo guardamos

    

router.post('/auth', async (req,res) => {
    
    
    try {
        
        const { email, password } = req.body;

        if (!email || ! password){
        return res.status(400).send('Invalid data.'); //si el email y password no son validos...
        // console.log('Estoy dentro');
        }
        const user = await User.findByCredentials(req.body) // buscame un user con estas credenciales de mi usuario 
        
        
        // console.log(user);
        
        if(!user){                          // si no encuentras ni email ni password...
            return res.status(401).send({  
                message: 'Invalid credentials.'
                    });
                }
                           
               
                const token = await user.createAuthToken();

                    // console.log(token, 'hola');
                    
                res.header('Authorization', token).status(200).send(user); //si en la base de datos me encuentra 
                                                                // el email y el password me lo envia
                
            } catch (err) {
                res.status(500).send(err);  

            }          

        });
    


//router.use('/users', require('./users'));
module.exports = router;