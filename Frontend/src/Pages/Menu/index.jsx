import React from 'react';
import './Menu.scss';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom'



const Menu = props => {

    return(

        <div className='Menu'>
            <div className='logo'>

                <img className='imagen' src={logo}  alt="Logo" ></img>

            </div>
            
                <div className="Nav">
                    <NavLink activeClassName="is-active" to="/">Destinos</NavLink>
                    <NavLink href ='#Quién somos'>Quién somos</NavLink>
                    <NavLink href ='#Donde estamos'>Donde estamos</NavLink>
                    <NavLink activeClassName="is-active" to="/register">Register</NavLink>
                    <NavLink activeClassName="is-active" to="/login" exact>Login</NavLink>     
                </div>
                

                <nav className='Social-Media'>
                    <a href='https://twitter.com'target="Twitter"><i className="icons fab fa-twitter"></i></a>
                    <a href='https://web.whatsapp.com'target="whatsapp" ><i className="icons fab fa-whatsapp"></i></a>
                    <a href='https://www.facebook.com' target="facebook"><i className="icons fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com' target="instagram"><i className="icons fab fa-instagram"></i></a>
                    <a href='https://www.linkedin.com' target="linkedin"><i className="icons fab fa-linkedin"></i></a> 
                    <a href='https://www.youtube.com' target="youtube"><i className="icons fab fa-youtube"></i></a>  
                </nav> 

           </div>
    );
}
export default Menu;