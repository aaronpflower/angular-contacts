'use strict';

const routes = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('contacts', {
            url: '/',
            template: '<landing></landing>',
        })

        .state('contacts.add', {
            url: 'add',
            template: '<add-form></add-form>'
        })

        .state('contacts.display', {
            url: 'display/:firstName',
            template: '<display-contact></display-contact>'
        })

        .state('contacts.edit', {
            url: 'edit/:firstName',
            template: '<edit-contact></edit-contact>'
        })
}

export default routes