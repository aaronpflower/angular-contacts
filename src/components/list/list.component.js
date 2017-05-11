import angular from 'angular'

const list = angular.module('list', [])
    .directive('contactList', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./list.component.html'),
            controller: ['$scope', '$state', 'Contacts', ($scope, $state, Contacts) => {
                $scope.contacts = Contacts.get()
                $scope.deleteContact = (contact) => {
                    return Contacts.delete(contact)
                }

                $scope.showContactInfo = (contact) => {
                    $state.go('contacts.display', {'firstName': contact.firstName})
                    Contacts.setCurrent(contact)
                }
            }]
        }
    })
    .name

export default list