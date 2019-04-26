import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'

import Routes from './Routers'

// import Honme from '../componentes/template/Main'
import Logo from '../componentes/template/Logo'
import Footer from '../componentes/template/Footer'
import Nav from '../componentes/template/Nav'
// import Home from '../componentes/home/Home';

export default props => 
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>    
    </HashRouter>
