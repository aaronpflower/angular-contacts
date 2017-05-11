import angular from 'angular'

const nav = angular.module('nav', [])
    .directive('navComponent', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./nav.component.html'),
            controller: ($scope, $state) => {
                $scope.addContact = () => {
                    $state.go('contacts.add')
                }
                $scope.goToMain = () => {
                    $state.go('contacts')
                }
            }
        }
    })
    .name

export default nav