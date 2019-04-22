import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './componentes/Login';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
        <Switch>        
            <Route exact path="/" component={Login}/>
            <Route path="/timeline" component={App}/>
        </Switch>            		
	</Router>,	
	document.getElementById('root')
);

