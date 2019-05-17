//Evitar errores de escritura.
const environments = {

    "development":"development",
    "production":"production"
}

//Entorno por defecto
const ENV = process.env.NODE_ENV || enviroments.development;

//Escribimos un objeto de configuracion para cada entorno.

const config = {
    [environments.production]:{
        
        PORT: 4000,
        JWT_SECRET:`Ultrasecret` // esta va a ser la contraseña de mi entorn para el token 
    },

    [environments.development]:{
        PORT:8080, 
        JWT_SECRET:`Ultrasecret` // esta va a ser la contraseña de mi entorn para el token               
    }
}

const CONFIG = config[ENV];

//console.log(CONFIG);

if (!CONFIG) throw new Error(`Invalid NODE_ENV=${ENV}`); 
process.env = {

    ...process.env,
    ...CONFIG

};