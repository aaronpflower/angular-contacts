'use strict';

import angular from 'angular'

// Components
import add from './addContact/add.component'
import nav from '../../components/nav/nav.component'
import list from '../../components/list/list.component'
import display from './displayContact/display.component'
import edit from './editContact/edit.component'

const landing = angular.module('landing', [add, nav, list, display, edit])
    .directive('landing', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./main.component.html'),
            controller: ($scope, $state) => {
                
            }
        }
    })
    .name

export default landing