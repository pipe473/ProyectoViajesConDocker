import React from 'react';
import './Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = props => {
    return (
        <footer className="footer">
            <div className="row footer-heading">
                <div className="col-lg-4 col-sm-12 ">¿NECESITAS AYUDA?</div> 
                <div className="col-lg-4 col-sm-12">INFORMACIÓN</div>
                <div className="col-lg-4 col-sm-12">SUSCRIBETE A LA NEWSLETTER</div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12 ">
                    <div>
                        0264 123 4567
                        <br/>
                        enquiry@geekshubstravels.com
                    </div>
                    <div className="schedule">
                        Lun-vie. 9:30-19:00 Sab: 10.00-14.00
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <a href="#">Quienes somos</a>
                    <br/>
                    <a href="#">Preguntas frecuentes</a>
                    <br/>
                    <a href="#">Politica de privacidad</a>
                    <br/>
                    <a href="#">Condiciones generales</a>
                    <br/>
                    <a href="#">Aviso legal</a>
                    <br/>
                    <a href="#">Contacto</a>
                    <br/>
                    <a href="#">Programa de puntos</a>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <input type="email" className="email"placeholder="Correo electrónico"/>
                    <br/>
                    <button type="button" class="btn btn-warning">Suscribete</button>
                </div>
            </div>
            <hr/>
            <div className="row-copy">GeeksHubs Travels 2018 Todos los derechos reservados </div>
        </footer>
    );
}
export default Footer;