import React from 'react';
import Menu from './Pages/Menu/index';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/index';
// import useScroll from './Hooks/useScroll';



function Error404 () {
    return (
        <div>
            Error 404.
        </div>
    );
}


function Layout (props) {
    return (
        <div>
            <Menu />
            {props.children}
            

            <Footer />
        </div> 
    );
}

function AppRouter () {
    return (  
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" component={ Home } exact/>        
                    <Route path="/register" component={Register} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="*" component= {Error404} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}


export default AppRouter;