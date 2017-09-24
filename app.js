/*globals angular,console */
(function () {

    'use strict';

    angular.module('formApp', [
        'ngAnimate', 'ui.router'
    ]);
    angular.module('formApp')
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        // route to show our basic form (/form)
            .state('/', {
                url: '/form',
                templateUrl: './partials/form.html',
                controller: 'FormController'
            })

            // url will be /profiles
            .state('/profiles', {
                url: '/profiles',
                templateUrl: './partials/current-profiles.html',
                controller: 'CurrentProfilesController'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form');
    });
})();