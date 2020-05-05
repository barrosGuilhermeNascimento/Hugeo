import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getHttp from './RequestHtml.js';
import './App.css';
import { Link } from 'react-router-dom';
import Logo from './imagens/logo.png';


class App extends Component {
    render() {
        return (
            <div className="container-fluid p-0">

                { /* Cabeçalho */}
                <nav className="navbar fixed-top navbar-expand-md navbar-light bg-success">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <section className="collapse navbar-collapse" id="navbarMainToggler">
                        <div className="navbar-nav ml-auto pr-3">
                            <Link className="nav-item nav-link mt-md-3" to="Cadastro">Cadastro</Link>
                            <Link className="nav-item nav-link mt-md-3">Lista</Link>
                            <a className="nav-item nav-link mt-md-3" href="#">Busca</a>
                            <a className="nav-item nav-link mt-md-3 mb-3 md-md-0" href="#">Lojas</a>
                        </div>
      
                    </section>
                </nav>


                <img id="teste" src={Logo} class="img-responsive" />

                { /* Rodapé */}
                <footer className="footer fixed-bottom col-12 pt-3 bg-success text-light text-center">
                    <container className="container col-6 col-md-2 d-flex justify-content-around">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-google-plus-square"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter-square"></i>
                    </container>
                </footer>
            </div >


        );
    }
}
export default App;


