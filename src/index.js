import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './componentes/Login';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function verificaAutenticacao(nextState, replace) {

    if (localStorage.getItem('auth-token') == null) {
        return <Redirect to='/' />;
    } 
}

ReactDOM.render(
	<Router>
        <Switch>        
            <Route exact path="/" component={Login}/>
            <Route path="/timeline" component={App} />
        </Switch>            		
	</Router>,	
	document.getElementById('root')
);
