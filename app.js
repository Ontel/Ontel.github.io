/**
 * Created by Brandon on 11/4/14.
 */
angular.module('ontelsite',['ngRoute','ngAnimate'])

.config(['$routeProvider', '$locationProvider','$logProvider', function($routeProvider,$locationProvider,$logProvider) {
        $logProvider.debugEnabled(true);

    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'MainSiteController'
        })
        .when('/software/:product', {
            templateUrl: 'software.html',
            controller: 'SoftwareController'
        })
        .when('/sweepanalytics', {
            templateUrl: 'sweepanalytics.html',
            controller: 'SweepAnalyticsController'
        })
        .when('/scorecard', {
            templateUrl: 'scorecard.html',
            controller: 'ScoreCardController'
        });

}])

.run(['$rootScope','$timeout', function($rootScope, $timeout) {
    $timeout(function() {
        //$rootScope.pageInit = true;
    }, 2000)
}])

.controller('MainSiteController', ['$scope','$timeout','$location','$rootScope', '$routeParams', '$sce', function($scope, $timeout, $location, $rootScope, $routeParams, $sce) {
    $rootScope.$watch('pageInit', function() {
        if ($rootScope.pageInit) {
            //$scope.pageClass = 'page-home';
        }
    });

    $scope.ultext = $sce.trustAsHtml("Uplink&#8482; streamlines the deployment and implementation process throughout all stages of the project's workflow from Survey, BOM Creation, Scoping, Check-in/out, Construction, Quality Assurance, and Closeout. Built for mobile teams and remote-management resources, Uplink&#8482; helps to move your team away from Excel and into specialized and user friendly applications that fit your exact needs.");
    $scope.sctext = $sce.trustAsHtml("ScoreCard&#8482; allows project-management teams to quickly compile project data and KPI frameworks into a single, customizable tool. With ScoreCard&#8482;, managers can drill into the performance of projects and contractors to instantly understand trends from real-time performance data. GC's and markets can know their relative ranking and begin to understand how they fit in the pack.");
    $scope.satext = $sce.trustAsHtml("SweepAnalytics&#8482; automates the labelling, marker positioning, and processing of Sweep results. It then validates the test results to ensure they are complete and meet your performance requirements. Sweep processing and validation time is cut down to minutes instead of hours.");

    $scope.go = function ( path ) {
        $scope.pageClass = 'page-home';
        $location.path( path );
    };

    $scope.toggleMenu = function() {
        console.log("yes");
        $scope.mobilenav = !$scope.mobilenav;
        if ($scope.mobilenav) {
            document.getElementById('#bodywrapper').addClass("active");
            document.getElementById('#navhead').removeClass("navfixed");
            document.getElementById('#navhead').addClass("navactive");
        } else {
            document.getElementById('#bodywrapper').removeClass("active");
            document.getElementById('#navhead').removeClass("navactive");
            $timeout(function () {
                document.getElementById('#navhead').addClass("navfixed");
            }, 200);
        }
        ;
    }

    $(function() {

//        var slrAnimation = function($el) {
//            $el.removeClass('preanimate');
//            $el.addClass('animated fadeInRight');
//        };
//        var sllAnimation = function($el) {
//            $el.removeClass('preanimate');
//            $el.addClass('animated fadeInLeft');
//        };
//
//        $('.sl-l li').each(function(i, el) {
//            setTimeout(function() {sllAnimation($(el))}, i++ * 200);
//        });
//
//        $('.sl-r li').each(function(i, el) {
//            setTimeout(function() {slrAnimation($(el))}, i++ * 200);
//        });
//
//        setTimeout(function() {
//            $('.servicelist .servicedesc').addClass('showservicedesc');
////    $('.servicelist .servicedesc').addClass('animated rotateInUpLeft');
//        }, 1800);
//        setTimeout(function() {
//            $('.servicelist .servicedesc span').addClass('animated fadeIn');
//            $('.servicelist .servicedesc span').removeClass('preanimate');
//        }, 2200);

        if($routeParams.product !== 'uplink' || $routeParams.product !== 'scorecard' || $routeParams.product !== 'sweepanalytics') {

            $('#software').waypoint(function () {
                $('.navactive').removeClass('navactive');
                $('.topnav .homeli').addClass('navactive');
            }, {offset: '40%'});
            $('#software').waypoint(function () {
                $('.navactive').removeClass('navactive');
                $('.topnav .softwareli').addClass('navactive');
            }, {offset: '25%'});
            $('#services').waypoint(function () {
                $('.navactive').removeClass('navactive');
                $('.topnav .servicesli').addClass('navactive');
            }, {offset: '25%'});
            $('#about').waypoint(function () {
                $('.navactive').removeClass('navactive');
                $('.topnav .aboutli').addClass('navactive');
            }, {offset: '25%'});
            $('#contact').waypoint(function () {
                $('.navactive').removeClass('navactive');
                $('.topnav .contactli').addClass('navactive');
            }, {offset: '50%'});

            var headerHeight = $(".navhead").height();

            $(".homeli").click(function () {
                $('html, body').animate({
                    scrollTop: $("#landing").offset().top
                }, 1000);
            });
            $(".softwareli").click(function () {
                $('html, body').animate({
                    scrollTop: $("#software").offset().top - headerHeight
                }, 1000);
            });
            $(".softwaredown").click(function () {
                $('html, body').animate({
                    scrollTop: $("#software").offset().top - headerHeight
                }, 1000);
            });
            $(".servicesli").click(function () {
                $('html, body').animate({
                    scrollTop: $("#services").offset().top - headerHeight
                }, 1000);
            });
            $(".aboutli").click(function () {
                $('html, body').animate({
                    scrollTop: $("#about").offset().top - headerHeight
                }, 1000);
            });
            $(".contactli").click(function () {
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top - headerHeight
                }, 1000);
            });
        }
    });

}])

.controller('SoftwareController', ['$scope','$timeout', '$rootScope', '$routeParams', '$route', function($scope, $timeout, $rootScope, $routeParams, $route) {
    $scope.pageClass = 'page-ul';
        if($routeParams.product == 'uplink') {
            $scope.product = "Uplink";
        }
        if($routeParams.product == 'scorecard') {
            $scope.product = "Scorecard";
        }
        if($routeParams.product == 'sweepanalytics') {
            $scope.product = "Sweep Analytics";
        }

}])

.controller('SweepAnalyticsController', ['$scope','$timeout', function($scope, $timeout) {
    $scope.pageClass = 'page-sa';
}])

.controller('ScoreCardController', ['$scope','$timeout', function($scope, $timeout) {
    $scope.pageClass = 'page-sc';
}])

.controller('TopController', ['$scope','$timeout','$location', function($scope, $timeout, $location) {
        $scope.go = function ( path ) {
            $location.path( path );
        };
}])


.directive('togglesubnav', ['$timeout', '$compile', '$routeParams', '$route','$rootScope', function($timeout, $compile, $routeParams, $route, $rootScope) {

        function link(scope, element, attrs) {
            $rootScope.$on('$routeChangeSuccess', function(next, current) {

            if($routeParams.product) {
                $('.softwareli').addClass('navactive');
                element.addClass('softwarenavshow');
                $('.subnav').removeClass('fadeOutDown');
                $timeout(function(){$('.subnav').removeClass('hidenav').addClass('animatedfaster fadeInUp')},1700);
                $('.selectedproduct').removeClass('selectedproduct');
                if($routeParams.product == 'uplink') {
                $timeout(function(){$('.ul .productoption').addClass('selectedproduct')},2200);
                }
                if($routeParams.product == 'scorecard') {
                    $timeout(function(){$('.sc .productoption').addClass('selectedproduct')},2200);
                }
                if($routeParams.product == 'sweepanalytics') {
                    $timeout(function(){$('.sa .productoption').addClass('selectedproduct')},2200);
                }
                $compile(element)(scope);
            } else {
                $('.productoption').removeClass('selectedproduct');
                $('.subnav').addClass('animatedfaster fadeOutDown');
                element.removeClass('softwarenavshow');
                $timeout(function(){$('.subnav').removeClass('fadeOutDown fadeInUp').addClass('hidenav')},2200);
                $compile(element)(scope);
            }
            });
        }

        return {
            link: link,
            restrict: 'A',
            scope: {
                //className: '&'
                //customerInfo: '=info'
            }
        };
}])

.directive('map', ['$window', function ($window) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {

            var ontelLatLong = new google.maps.LatLng(38.884541,-76.979334);

            var mapStyles = [{
                "stylers": [
                    { "saturation": -100 },
                    { "gamma": 0.9 },
                    { "lightness": 64 }
                ]
            }];

            var mapOptions = {
                center: ontelLatLong,
                zoom: 13,
                styles: mapStyles,
                icon: 'mappin.png'
            };
            var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);

            var marker = new google.maps.Marker({
                position: ontelLatLong,
                map: map,
                title:"Ontel",
                styles: mapStyles,
                icon: 'mappin.png'
            });

            angular.element($window).on('resize', function () {
                if(map) {
                    var center = map.getCenter();
                    google.maps.event.trigger(map, "resize");
                    map.setCenter(center);
                }
            });

        }
    };
}])

//.directive('equalize', ['$window', function ($window) {
//    return {
//        restrict: 'A',
//        replace: true,
//        //template: '<div></div>',
//        link: function(scope, element, attrs) {
//
//            equalheight = function(container){
//
//                var currentTallest = 0,
//                    currentRowStart = 0,
//                    rowDivs = new Array(),
//                    $el,
//                    topPosition = 0;
//                $(container).each(function() {
//                    $el = $(this);
//                    $($el).height('auto');
////            console.log("element has loaded and its height is " + $el.height());
//                    if (currentTallest < $el.height() && currentTallest !== 0 || currentTallest == 0){
////                console.log("setting CT to " + $el.height());
//                        currentTallest = $el.height();
//                    }
//
//                    rowDivs.push($el);
//                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
//
//                    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//                        rowDivs[currentDiv].height(currentTallest);
//                    }
//                });
//            }
//
//            angular.element($window).on('load', function () {
//                equalheight('.servicedesc');
//            });
//
//
//            angular.element($window).on('resize', function () {
//                equalheight('.servicedesc');
//            });
//
//
//        }
//    };
//}]);