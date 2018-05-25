var app = angular.module("demoApp", ['ui.router','ngDialog']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/contactList');

    $stateProvider
        .state('contactList', {
            url: '/contactList',
            controller:"contactListController",
            templateUrl: 'Views/contact-list.html'
        })

        .state('contact-add-update', {
            url: '/contactAddUpdate',
            controller:"contactAmendController",
            templateUrl: 'Views/contact-add-update.html',
            params: {
                contact: null
            }

        })

});
app.controller("mainController", function ($scope, contactService) {
    $scope.contactList = contactService.getContacts();
});