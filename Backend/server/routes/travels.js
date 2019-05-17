const router = require('express').Router();
const Travel = require('../models/Travel');
const multer = require('../config/multer');

router.get('/', (req, res) => {         //para obtener la info guardada
    Travel.find(function(error, travels){
        if (!error) {
            res.send(travels);    
        }
        
    });
});

router.post('/', (req, res ) =>{     //
    new Travel(req.body).save().then(travel => {
        res.send(travel);
    }).catch(err =>{
        res.status(400).send(err);
    });
});

// update

router.patch('/:id', async (req, res)=>{  
    try{
           const {id} = req.params  //el id que se genera en la base de datos

           await Travel.update({_id : id}, req.body)
    
           return res.send({message:'cambio exitoso'})
    }catch (err){
           return res.status(400).send('El id no es valido')
    }
    
});


// borrar

router.delete('/:id', async (req, res)=>{
    try{

      const {id} = req.params  // le indicamos params porque nos tiene que reconocer el parametro del id

      await Travel.remove({_id : id});

      return res.send({message: 'elimando satisfactoriamente'})

    }catch (err){
      return res.status(400).send('El id no es valido')
    }  
});

//Enlazar las imagenes con los destinos

 router.post('/upload/:id', multer.single('file'), async (req, res) => { //ponme desde el argumento 
                                                            //de express 'upload' y el id generado,
                                                     // con el metodo multer un unico archivo,llamado 'file'
                                                

    
    // console.log(req.file)
    const viajeId = req.params.id;
    
    const travel = await Travel.findOneAndUpdate({ _id: viajeId }, {imagen: req.file.originalname},{new: true })//compara el id con la variable viajeId
       if (travel === null) {
           res.status(400).send('Ningun viaje encontrado')
           
       }                                                                                                 // y actualiza    
    res.send(travel)
    


//     const fileName = 'Imagen no subida';

   
 })

module.exports = router;