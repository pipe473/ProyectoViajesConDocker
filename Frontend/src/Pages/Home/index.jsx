import React from 'react';
import Viajes from '../Viajes/index';
import './index.scss';
import QuienSomos from '../Quien somos/QuienSomos';


function Home (props) {

    return (
      <div className="Home-container" id="Home">
        <div className="Home-parrafo">
          
          <h1>Viaja!</h1>
          <p>Descubre lugares maravillosos!</p>

        <div>
          <button className="Home-button">ver destinos</button>
        </div>
        </div>

        <div className="Home-listadoViajes">
          <div className="row1">
            <Viajes
              text="save 30€ pay only"
              precio="500€"
              nameViaje="Madrid"
              imagesName="madrid.jpg"
            />
            <Viajes
              text="save 100€ pay only"
              precio="1000€"
              nameViaje="Tokyo"
              imagesName="tokyo.jpg"
            />
            <Viajes
              text="save 80€ pay only"
              precio="800€"
              nameViaje="Buenos Aires"
              imagesName="buenos_aires.jpg"
            />
            </div>
             <div className="row2">
             <Viajes
              text="save 50€ pay only"
              precio="600€"
              nameViaje="New York"
              imagesName="new_york.jpg"
            />
             <Viajes
              text="save 20€ pay only"
              precio="1100€"
              nameViaje="Ciudad de Mexico"
              imagesName="ciudad_mexico.jpg"
            /> 
            <Viajes
              text="save 100€ pay only"
              precio="990€"
              nameViaje="Beijing"
              imagesName="beijing.jpg"
            />          
             
              </div>         
            </div>
            <div>
              
              <QuienSomos />
            
            </div>
      </div>
    );
}

export default Home;




