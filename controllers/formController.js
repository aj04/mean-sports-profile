(function () {
    'use strict';

    angular.module('formApp')
    .controller('FormController', ['$scope', 'SportsServices', function ($scope, SportsServices) {
        var sportService = SportsServices;
        $scope.formParams = {};
        $scope.stage = "";
        $scope.formValidation = false;
        $scope.toggleJSONView = false;
        $scope.toggleFormErrorsView = false;
        $scope.dobError = false;

        $scope.genders = [
            {genderName: 'Male'},
            {genderName: 'Female'},
        ];

        $scope.sports = sportService.getSportsList();

        // Navigation functions
        $scope.next = function (stage) {
            if (stage === 'stage2') {
                if (new Date($scope.formParams.dob) > new Date()) {
                    $scope.dobError = true;
                    return $scope.formValidation = false;
                } else {
                    $scope.dobError = false;
                    $scope.formValidation = true;
                }
            }
            $scope.formValidation = true;

            if ($scope.multiStepForm.$valid) {
                $scope.direction = 1;
                $scope.stage = stage;
                $scope.formValidation = false;
            }
        };

        $scope.back = function (stage) {
            $scope.direction = 0;
            $scope.stage = stage;
        };


        // Post to desired exposed web service.
        $scope.submitForm = function () {
            if($scope.formParams.gender) {
                $scope.formParams.gender = $scope.formParams.gender.genderName;
            }
            var sports = [];
            if($scope.formParams.sports) {
                angular.forEach($scope.formParams.sports, function (sport) {
                    sports.push(sport.sportName);
                });
            }
            $scope.formParams.sports = sports.join();

            // Check form validity and submit data using $http
            if ($scope.multiStepForm.$valid) {
                $scope.formValidation = false;

                SportsServices.createSportsProfile($scope.formParams)
                .then(function successCallback(response) {
                    if (response && response.data && response.status === 200) {
                        $scope.stage = "success";
                    } else  if(response && response.status !== 200) {
                            $scope.stage = "error";
                            $scope.responseError = response.data ? response.data.message : 'Unknown Error';
                    }
                }, function errorCallback(response) {
                    $scope.stage = "error";
                    $scope.responseError = response.data ? response.data.message : 'Unknown Error';
                });
            }
        };

        $scope.reset = function () {
            // Clean up scope before destroying
            $scope.formParams = {};
            $scope.stage = "";
        }
    }]);
})();