/**
 * Created by Brandon on 11/4/14.
 */
var ontelsite = angular.module('ontelsite',['ngRoute', 'ngAnimate']);

ontelsite.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'MainSiteController'
        })
        .when('/scorecard', {
            templateUrl: 'uplink.html',
            controller: 'UplinkController'
        })
        .when('/sweepanalytics', {
            templateUrl: 'sweepanalytics.html',
            controller: 'SweepAnalyticsController'
        })
        .when('/scorecard', {
            templateUrl: 'scorecard.html',
            controller: 'ScoreCardController'
        });

}]);

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

    $(function() {

        var slrAnimation = function($el) {
            $el.removeClass('preanimate');
            $el.addClass('animated fadeInRight');
        };
        var sllAnimation = function($el) {
            $el.removeClass('preanimate');
            $el.addClass('animated fadeInLeft');
        };

        $('.sl-l li').each(function(i, el) {
            setTimeout(function() {sllAnimation($(el))}, i++ * 200);
        });

        $('.sl-r li').each(function(i, el) {
            setTimeout(function() {slrAnimation($(el))}, i++ * 200);
        });

        setTimeout(function() {
            $('.servicelist .servicedesc').addClass('showservicedesc');
//    $('.servicelist .servicedesc').addClass('animated rotateInUpLeft');
        }, 1800);
        setTimeout(function() {
            $('.servicelist .servicedesc span').addClass('animated fadeIn');
            $('.servicelist .servicedesc span').removeClass('preanimate');
        }, 2200);

        $('#software').waypoint(function() {
            $('.navactive').removeClass('navactive');
            $('.homeli').addClass('navactive');
        },{ offset: '100%' });
        $('#software').waypoint(function() {
            $('.navactive').removeClass('navactive');
            $('.softwareli').addClass('navactive');
        },{ offset: '25%' });
        $('#services').waypoint(function() {
            $('.navactive').removeClass('navactive');
            $('.servicesli').addClass('navactive');
        },{ offset: '25%' });
        $('#about').waypoint(function() {
            $('.navactive').removeClass('navactive');
            $('.aboutli').addClass('navactive');
        },{ offset: '25%' });
        $('#contact').waypoint(function() {
            $('.navactive').removeClass('navactive');
            $('.contactli').addClass('navactive');
        },{ offset: '50%' });

        var headerHeight = $("#menu").height();
        $(".homeli").click(function() {
            $('html, body').animate({
                scrollTop: $("#landing").offset().top
            }, 1000);
        });
        $(".softwareli").click(function() {
            $('html, body').animate({
                scrollTop: $("#software").offset().top - headerHeight
            }, 1000);
        });
        $(".softwaredown").click(function() {
            $('html, body').animate({
                scrollTop: $("#software").offset().top - headerHeight
            }, 1000);
        });
        $(".servicesli").click(function() {
            $('html, body').animate({
                scrollTop: $("#services").offset().top - headerHeight
            }, 1000);
        });
        $(".aboutli").click(function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top - headerHeight
            }, 1000);
        });
        $(".contactli").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top - headerHeight
            }, 1000);
        });
    });

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