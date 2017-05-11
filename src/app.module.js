'use strict';

import 'materialize-css/dist/css/materialize.min.css';
import './assets/css/main.css'
import angular from 'angular';
import 'angular-ui-router';
import ngAnimate from 'angular-animate';
import routes from './app.routes'

// Containers
import main from './containers/main/main.component'

// Services
import contactsService from './services/contacts.service'

const app = angular.module('app', ['ui.router', ngAnimate, main, contactsService])
	.config(['$stateProvider', '$urlRouterProvider', routes])

export default app;