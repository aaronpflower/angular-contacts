import angular from 'angular'

const contactsService = angular.module('contactsService', [])
    .factory('Contacts', () => {
        let Contacts = []

        let current

        return {
            add: (contact) => {
                Contacts.push(contact);
                contact.id = Contacts.indexOf(contact)
            },
            edit: (contact) => {
                return Contacts[contact.id] = contact
            },
            delete: (contact) => {
                return Contacts.splice(contact.id, 1)
            },
            get: () => {
                return Contacts
            },
            setCurrent: (contact) => {
                return current = contact
            },
            getCurrent: () => {
                return current
            }
        }
    })
    .name

export default contactsService