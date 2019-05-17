import React, {useState} from 'react';
import axios from 'axios';
import login from './login.scss';

function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const body = {email,password};

        axios.post('http://localhost:8080/users/auth', body).then(res => {
            console.log(res.headers) //compruebo la autorizacion, que me la envie por pantalla
           
            localStorage.setItem('authorization', res.headers.authorization)
        }).catch(console.error)
    }

    return (
        <div className="formulario">
        <div className="contenido">
            <form onSubmit={onSubmit} className="formun">
               <div className="login">LOGIN</div> 
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
                <input type="submit" value="Enviar"/>            
            </form>
        </div>
    </div>
    )
}

export default Login;