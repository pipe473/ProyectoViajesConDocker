import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './register.scss';
import { Link } from 'react-router-dom';

import useName from '../../Hooks/useName';


function Register (props) {
    const [username, setName] = useName(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState(''); 

    const onSubmit = (e) => {
        e.preventDefault();

        const body = { username, email, password, setRepassword };

        axios.post('http://localhost:8080/users/',body).then(res=>{
            console.log(res)
            localStorage.setItem('authorization',res.headers.authorization);
        }).catch(console.error)
        
    }

    const comparacion = () => {
        if (password != repassword) {
            alert('el password no coincide')
        }
    }

        return (
            
            <div className="formulari">
        <div className="contenido">
            <div className="registrarse"> REGISTER </div> 
            <form onSubmit={onSubmit} className="formun">
                <input 
                type="text" 
                name="name" 
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={username}
                placeholder="Name"
                />
                <input 
                type="email" 
                name="email" 
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                />
                <input 
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password"
                />

                <input 
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Repetir password"
                />

                <input type="checkbox" required name="box" />
                <label className="box">Acepto terminos y condiciones</label>

                <input type="submit" value="Enviar"/>  
                <div className="registrado">         
            <Link to = "/login"><p className="registrado">¿Ya estas registrado?</p></Link>
                </div> 
            </form>
        </div>
    </div>
    
    )
}

export default Register;

