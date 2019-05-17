import React from 'react';
import '../css/Header.scss'


const Header = props => {

    return(
       <header>
            
        <div>   
            <div className='parrafo'>

                <h1>Viaja!</h1>
                <p>Descubre lugares maravillosos!</p>
            
            </div>

            <div>             

                <button className='button'>ver destinos</button>

            </div>

        </div>  

           
       </header>
    );

}

export default Header;