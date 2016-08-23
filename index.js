/**
* @Author: Hosarsiph Valle Hernández <hosar>
* @Date:   2016-08-16T08:57:12-05:00
* @Email:  hosarsiph.valle@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-22T21:54:03-05:00
* @License: copyright be-p technology
*/



import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppSignUpContainer from './components/AppSignUp/AppSignUp.Container';
//import Login from "./components/Login/Login.js";
//import Landing from "./components/Landing/Landing.js";
import LandingError from "./components/LandingError";
import { Router, Route, Link, browserHistory } from 'react-router';
import appHistory from "./components/App_History";
import UserSignUpContainer from './components/UserSignUp/UserSignUp.Container'

ReactDOM.render((
	<Router history={appHistory}>
	    <Route path="/" component={AppSignUpContainer} />
			<Route path="/userSignUp" component={UserSignUpContainer} />

			<Route path="/error" component={LandingError} />
	</Router>
), document.getElementById('root'));
