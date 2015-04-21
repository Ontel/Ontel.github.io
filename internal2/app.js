/**
 * Created by Brandon on 11/4/14.
 */
angular.module('ontelsite',['ngRoute','ngAnimate','firebase','angular.filter'])

.config(['$routeProvider', '$locationProvider','$logProvider', function($routeProvider,$locationProvider,$logProvider) {
        $logProvider.debugEnabled(true);

    //$routeProvider
    //    .when('/', {
    //        templateUrl: 'home.html',
    //        controller: 'MainSiteController'
    //    })
    //    .when('/software/:product', {
    //        templateUrl: 'software.html',
    //        controller: 'SoftwareController'
    //    })
    //    .when('/sweepanalytics', {
    //        templateUrl: 'sweepanalytics.html',
    //        controller: 'SweepAnalyticsController'
    //    })
    //    .when('/scorecard', {
    //        templateUrl: 'scorecard.html',
    //        controller: 'ScoreCardController'
    //    })
    //    .when('/internal', {
    //        templateUrl: 'portal.html',
    //        controller: 'InternalPortalController'
    //    })
    //    .when('/internal/:linkId', {
    //        templateUrl: 'portal.html',
    //        controller: 'InternalPortalController'
    //    });

}])

.controller('InternalPortalController', ['$scope','$firebaseObject','$sce','$location', function($scope, $firebaseObject, $sce, $location) {
        var ref = new Firebase("https://ontel-intranet.firebaseio.com/links");
        $scope.links = $firebaseObject(ref);

        $scope.currentFrame = "";

        $scope.setFrame = function(url) {
            $scope.currentFrame = $sce.trustAsResourceUrl(url);
        }

        $scope.currentLink = function(index) {
            $scope.activeLink = index;
        }

        $scope.go = function ( path ) {
            $location.path( path );
        };

}]);

