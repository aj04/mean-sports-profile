(function () {
    'use strict';

    angular.module('formApp')
        .controller('CurrentProfilesController', ['$scope', 'SportsServices',
            function ($scope, SportsServices) {
                var sportsService = SportsServices;
                $scope.currentProfiles = '';
                sportsService.getCurrentProfiles()
                .then(function (response) {

                    $scope.profiles = response.data.docs;
                });
            }]
        );
})();