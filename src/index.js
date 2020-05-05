import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cadastro from './Cadastro';
import Inicial from './Inicial';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Cadastro" component={Cadastro} />
            <Route path="/Inicial" component={Inicial} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();

