import angular from 'angular'

const display = angular.module('display', [])
    .directive('displayContact', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./display.component.html'),
            controller: ['$scope', '$state', 'Contacts', ($scope, $state, Contacts) => {
                $scope.contact = Contacts.getCurrent()

                $scope.editContact = () => {
                    $state.go('contacts.edit', {'firstName': $scope.contact.firstName})
                }
            }]
        }
    })
    .name

export default display