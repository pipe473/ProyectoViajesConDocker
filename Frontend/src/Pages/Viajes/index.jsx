import React from 'react';
import './viajes.scss';

function Viajes (props) {

    const estiloViajes = {
        backgroundImage: `url('../../assets/images/${ props.imagesName }')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return(
        <div className="viaje" >
        <div className="info" style={ estiloViajes }>
                <div className="texto">
                    <p>{ props.text }</p>
                </div>  
                <div className="precio">
                    <p>{ props.precio }</p>               
                </div>  
            
            </div>     
        
                <div className="nameViaje">
                    <p>{ props.nameViaje }</p>               
                </div>     
        </div>
    );
}
export default Viajes;