import angular from 'angular'

const edit = angular.module('edit', [])
    .directive('editContact', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./edit.component.html'),
            controller: ['$scope', '$state', 'Contacts', ($scope, $state, Contacts) => {
                console.log('here')
                $scope.contact = Contacts.getCurrent()
            }]
        }
    })
    .name

export default edit