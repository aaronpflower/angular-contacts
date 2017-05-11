'use strict';

import angular from 'angular'

const add = angular.module('add', [])
    .directive('addForm', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./add.component.html'),
            controller: ['$scope', '$state', 'Contacts', ($scope, $state, Contacts) => {
                $scope.addContact = (contact) => {
                    Contacts.add(contact)
                    $state.go('contacts')
                }
            }]
        }
    })
    .name

export default add;