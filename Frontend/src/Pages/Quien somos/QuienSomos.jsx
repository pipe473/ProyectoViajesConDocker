import React from 'react';
import './QuienSomos.scss';

const QuienSomos = props => {
    return (
        <section className="quien-somos">
            <div>   
                <div className="container">
                        <div className="parrafo">
                            <div className="titulo">

                                <h1>Quien somos</h1>
                                <p>
                                GeeksHubs Travels es una agencia de 
                                viajes online creada en 2009 por un equipo de viajeros
                                entusiastas que deciden hacer de su pasión por conocer el mundo
                                de un modo de vida. Desde nuestros inicios hemos diseñado mas de 
                                500 viajes organizados a diferentes destinos de Europa, Norteamérica
                                y Asia. Nuestro objetivo ahora es ir ampliando horizontes poco a poco.
                                </p>

                        </div> 
                            
                                <button className="button">Descubrir</button>
                            
                    </div>
                </div> 
            </div>
        </section>

    );

}

export default QuienSomos;