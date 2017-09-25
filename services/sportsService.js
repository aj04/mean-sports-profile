(function () {
    'use strict';

    angular.module('formApp')
    .service('SportsServices',['$http', function ($http) {
        var service = this;

        var apiPath = "https://ajay-sports-profile.herokuapp.com/sportprofile";
        // todo fetch this from Database table
        var sportsList = [
            {sportName: 'Golf'},
            {sportName: 'Tennis'},
            {sportName: 'Cricket'},
            {sportName: 'Basketball'},
            {sportName: 'Baseball'},
            {sportName: 'American Football'},
            {sportName: 'Aquatics'},
            {sportName: 'Archery'},
            {sportName: 'Automobile Racing'},
            {sportName: 'Badminton'},
            {sportName: 'Beach Volleyball'},
            {sportName: 'Bobsleigh'},
            {sportName: 'Body Building'},
            {sportName: 'Boxing'},
            {sportName: 'Cross Country Running'},
            {sportName: 'Cross Country Skiing'},
            {sportName: 'Curling'},
            {sportName: 'Cycling'},
            {sportName: 'Darts'},
            {sportName: 'Decathlon'},
            {sportName: 'Down Hill Skiing'},
            {sportName: 'Equestrianism'},
            {sportName: 'eSports'},
            {sportName: 'Fencing'},
            {sportName: 'Field Hockey'},
            {sportName: 'Figure Skating'},
            {sportName: 'Gymnastics'},
            {sportName: 'Ice Hockey'},
            {sportName: 'Martial Arts'},
            {sportName: 'Mixed Martial Arts'},
            {sportName: 'Modern Pentathlon'},
            {sportName: 'Motorcycle Racing'},
            {sportName: 'Netball'},
            {sportName: 'Polo'},
            {sportName: 'Racquetball'},
            {sportName: 'Rowing'},
            {sportName: 'Rugby'},
            {sportName: 'Sailing'},
            {sportName: 'Softball'},
            {sportName: 'Shooting'},
            {sportName: 'Skateboarding'},
            {sportName: 'Skeet Shooting'},
            {sportName: 'Skeleton'},
            {sportName: 'Snow Boarding'},
            {sportName: 'Soccer (Football)'},
            {sportName: 'Squash'},
            {sportName: 'Surfing'},
            {sportName: 'Swimming'},
            {sportName: 'Track and Field'}
        ];

        service.getSportsList = function () {
            return sportsList;
        };

        service.createSportsProfile = function (postParams) {
            return $http({
                method: 'POST',
                url: apiPath,
                data: JSON.stringify(postParams)
            });
        };
        service.getCurrentProfiles = function () {
          return $http.get(apiPath);
        }
    }]);
})();