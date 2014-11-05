/**
 * Created by Brandon on 11/4/14.
 */
var ontelsite = angular.module('ontelsite',['ngRoute', 'ngAnimate']);

//ontelsite.config(['$routeProvider', function($routeProvider) {
//    $routeProvider
//        .when('/', {
//            templateUrl: 'home.html',
//            controller: 'MainSiteController'
//        })
//        .when('/scorecard', {
//            templateUrl: 'uplink.html',
//            controller: 'UplinkController'
//        })
//        .when('/sweepanalytics', {
//            templateUrl: 'sweepanalytics.html',
//            controller: 'SweepAnalyticsController'
//        })
//        .when('/scorecard', {
//            templateUrl: 'scorecard.html',
//            controller: 'ScoreCardController'
//        });
//
//}]);

//ontelsite.directive('scrollOnClick', function() {
//    return {
//        restrict: 'A',
//        link: function(this) {
//            event.preventDefault();
//            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//                var target = $(this.hash);
//                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//                var scrollToPosition = $(target).offset().top - headerHeight;
//                if (target.length) {
//                    $('html,body').animate({
//                        scrollTop: scrollToPosition
//                    }, 1000);
//                    //return false;
//                }
//            }
//        }
//    }
//});

ontelsite.controller('MainSiteController', ['$scope','$timeout', function($scope, $timeout) {
    $scope.pageClass = 'page-home';
    $scope.toggleMenu = function() {
        console.log("yes");
        $scope.mobilenav = !$scope.mobilenav;
        if ($scope.mobilenav) {
            console.log('asd');
            document.getElementById('#bodywrapper').addClass("active");
            document.getElementById('#navhead').removeClass("navfixed");
            document.getElementById('#navhead').addClass("navactive");
        } else {
            console.log('xxx')
            document.getElementById('#bodywrapper').removeClass("active");
            document.getElementById('#navhead').removeClass("navactive");
            $timeout(function () {
                document.getElementById('#navhead').addClass("navfixed");
            }, 200);
        }
        ;
    }





}]);

ontelsite.controller('UplinkController', ['$scope','$timeout', function($scope, $timeout) {
    $scope.pageClass = 'page-ul';
}]);

ontelsite.controller('SweepAnalyticsController', ['$scope','$timeout', function($scope, $timeout) {
    $scope.pageClass = 'page-sa';
}]);

ontelsite.controller('ScoreCardController', ['$scope','$timeout', function($scope, $timeout) {
    $scope.pageClass = 'page-sc';
}]);