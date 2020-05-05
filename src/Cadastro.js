import React, { Component } from 'react';
import './App.css';
import './Css/CadastroUser.css';
import { Link } from 'react-router-dom';
import Logo from './imagens/logo.png';


function CheckUser(email) {
    var response = reqListener(email);
    alert("Funcionando");
    return;
}

function reqListener(url) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://localhost:5000/api/Email/" + url);
    oReq.send();
    return;
}

class Cadastro extends Component {

    /*constructor(props) {
        super(props);
        this.EnviarCadastro = this.EnviarCadastro.bind(this);
        this.CheckUser = this.CheckUser.bind(this);
    }

    EnviarCadastro() {
        alert("Working");
    }
    CheckUser() {
        //var response = reqListener(email);
        alert("Funcionando");
        return;
    }*/

    render() {
        
        return (
            <div className="container-fluid p-0">

                { /* Cabeçalho */}
                <nav className="navbar fixed-top navbar-expand-md navbar-light bg-success">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <img className="navbar-brand" src={Logo} />

                    <section className="collapse navbar-collapse" id="navbarMainToggler">
                        <div className="navbar-nav ml-auto pr-3">
                           
                            <a className="nav-item nav-link mt-md-3" href="#">Lista</a>
                            <a className="nav-item nav-link mt-md-3" href="#">Busca</a>
                            <a className="nav-item nav-link mt-md-3 mb-3 md-md-0" href="#">Lojas</a>
                        </div>

                    </section>
                </nav>

                <div class="" id="teste-ii">
                    <div class="container">
                        <form class="form-col-sm-6">
                            <div class="col">
                                <label>Insira seu primeiro nome: </label>
                                <input type="text" name="firstName" /> <br />
                            </div>
                            <div class="col">
                                <label>Insira seu sobrenome: </label>
                                <input type="text" name="lastName" /> <br />
                            </div>
                            <div class="col">
                                <label>Insira o seu CPF: </label>
                                <input type="text" name="CPF" /> <br />
                            </div>
                            <div class="col">
                                <label>Insira seu Email: </label>
                                <input type="email" id="userEmail" /> <br />
                            </div>
                            <div class="col">
                                <label>Insira uma senha: </label>
                                <input type="password" name="passWord" /*onFocus={this.CheckUser()}*//> <br />
                            </div>
                            <div class="col">
                                <label>Repita a senha: </label>
                                <input type="password" /> <br />
                            </div>
                            <div class="col">
                                <button name="send" /*onClick={this.EnviarCadastro()}*/>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>


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

            </div>
        );
    }

}

export default Cadastro;

