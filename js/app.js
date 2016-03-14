'use strict';

var app = angular.module('ontelsite', [
    //'ngRoute',
    //'ngAnimate',
    //'ngTouch',
    //'ngSanitize',
    //'ngCookies',
    'ui.router',
    'ngMdIcons',
    //'hmTouchEvents'
    'fox.scrollReveal'
]);

app.config(function($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {

    $uiViewScrollProvider.useAnchorScroll();

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
          url: "/",
          templateUrl: "views/main.html",
          controller: "MainController"
      })
      .state('jobs', {
          url: "/jobs",
          templateUrl: "views/jobs.html",
          controller: "MainController"
      })
      .state('listing', {
          url: "/jobs/:id",
          templateUrl: "views/job-listing.html",
          controller: "JobController"
      })
      .state('about', {
          url: "/about",
          templateUrl: "views/about.html",
          controller: "MainController"
      })
      .state('pricing', {
          url: "/pricing",
          templateUrl: "views/pricing.html",
          controller: "MainController"
      })
      .state('support', {
          url: "/support",
          templateUrl: "views/support.html",
          controller: "MainController"
      })
      .state('solutions', {
          url: "/solutions",
          templateUrl: "views/solutions.html",
          controller: "MainController"
      })
      .state('swift', {
          url: "/solutions/swift",
          templateUrl: "views/swift.html",
          controller: "ProductController"
      })
      .state('closeout', {
          url: "/solutions/closeout",
          templateUrl: "views/closeout.html",
          controller: "ProductController"
      })
      .state('testing', {
          url: "/solutions/testing",
          templateUrl: "views/testing.html",
          controller: "ProductController"
      })
      .state('management', {
          url: "/solutions/management",
          templateUrl: "views/mgmt.html",
          controller: "ProductController"
      })
      .state('gear', {
          url: "/solutions/gear",
          templateUrl: "views/gear.html",
          controller: "ProductController"
      })
      .state('swift-privacy', {
          url: "/legal/privacy",
          templateUrl: "views/privacy-policy.html",
          controller: "ProductController"
      })
      .state('swift-tos', {
          url: "/legal/terms-of-service",
          templateUrl: "views/swift-tos.html",
          controller: "ProductController"
      });
});

app.run(function($rootScope, $state, $location) {
    $rootScope.clickIcon = 'menu';
});

app.controller('MainController', ['$scope','$timeout','$location', '$state', '$rootScope', function($scope, $timeout, $location, $state, $rootScope) {

    $scope.showVideo = false;

    $scope.toggleVideo = function() {
        if(!$scope.showVideo) {
            angular.element(document.querySelector('#ontelbg'))[0].pause();
        } else {
            angular.element(document.querySelector('#ontelbg'))[0].play();
        }
        $scope.showVideo = !$scope.showVideo;
    }

    $scope.sliderNav = function(index) {
        var title;
        var transform;
        var slide = index * -50;
        var progress = (100/3) * (index + 1);
        switch(index) {
            case 0:
                title = "Plan";
                break;
            case 1:
                title = "Run";
                break;
            case 2:
                title = "Close";
                break;
        }
        $scope.sectionTitle = title;
        $scope.currentTransform = slide;
        $scope.currentSlide = index;
        $scope.slideProgress = progress;
    };

    $scope.sliderNav(0);

}]);

app.controller('ProductController', ['$scope','$timeout','$location', function($scope, $timeout, $location) {

    $scope.projects = {
        '0': {
            client: 'MAJOR REGIONAL GC',
            sow: 'Testing and Closeout on over 400 site projects',
            when: '2014 - Present',
            where: 'Mid-Atlantic U.S.',
            description: 'Sweep, PIM, Fiber testing and site closeout. Client completes more and closes faster than market peers, market has grown over 45% during Ontel’s participation.'
        },
        '1': {
            client: 'MAJOR CARRIER VIA OEM',
            sow: 'Construction management and services on over 350+ sites',
            when: '2014 - 2015',
            where: 'Mid-Atlantic U.S.',
            description: 'Major carrier sought to achieve 350+ build-plan from Jan to Dec 2014. Ontel provided lead management on project achieving goal. Introduced new standards to vendor performance analysis and metrics by building ScoreCard, and assisted in improved C.O.P. protocol and documentation by consolidating deliverables and automating forms management.'
        },
        '2': {
            client: 'MAJOR LANDLORD',
            sow: 'Completion of 200+ tower maintenance tickets',
            when: 'Q1-Q3 2015',
            where: 'Southeast U.S.',
            description: 'Ontel’s teams completed and managed the scoping, ordering of materials,  and closed tickets out within 48 hours of CX completion.'
        }
    };

}]);

app.controller('JobController', ['$scope','$location', '$stateParams', function($scope, $location, $stateParams) {
    $scope.jobnum = $stateParams.id;
    $scope.listings = {
        '32098': {
            name: 'Senior Field Technician',
            location: 'Washington, DC',
            posted: 'March 1, 2016',
            type: 'Full time',
            description: 'We are seeking to hire experienced cellular technicians for PIM, Sweep, and Fiber testing, with an imminent opportunity to become team or division lead.',
            requirements: [
                'Multiple years testing cell sites during live cutovers and troubleshooting across all major carriers',
                'A range of knowledge about the most common components used on cellular facilities and their characteristics',
                'Knowledge of microwave link and programming and EF&I integration commissioning',
                'Any military, formal technical training, or education that is helpful to the skills set needed to be a great technician',
                'Ability to transport and phsysically carry testing equipment',
                'Ability to drive for multiple hours',
                'Moderate computer knowledge and skills'
            ],
            travel: 'Occassional to moderate'
        },
        '32099': {
            name: 'Junior Field Technician',
            location: 'Washington, DC',
            posted: 'March 1, 2016',
            type: 'Full time',
            description: 'We are seeking to hire beginner level cellular technicians for PIM, Sweep, and Fiber testing training.',
            requirements: [
                'A strong interest in technology',
                'Being organized and conscientious',
                'Being committed to learning',
                'Ability to work outdoors',
                'Ability to transport and phsysically carry testing equipment',
                'Ability to drive for multiple hours',
                'Moderate computer knowledge and skills'
            ],
            travel: 'Occassional to moderate'
        },
        '32100': {
            name: 'Administrative Lead / Internal Manager',
            location: 'Washington, DC',
            posted: 'March 1, 2016',
            type: 'Full time',
            description: 'We are seeking a candidate that can manage and anticipate the needs of a growing technology company. We would like you to be or become the administrative lead of the company. With this role, you will have the opportunity to deeply affect the success of our business and culture, create systems and processes, and grow a business.',
            requirements: [
                'Being organized and conscientious',
                'Being a strong communicator',
                'Ability to keep peace under pressure',
                'An obsession with detail'
            ],
            travel: 'Seldom'
        },
        '32101': {
            name: 'Partner / Engineer',
            location: 'Washington, DC',
            posted: 'March 1, 2016',
            type: 'Full/Part time',
            description: 'We are seeking software, electrical, mechanical, RF, and professional engineers. This position is a possible equity/partner opportunity and can be initially filled on a part-time basis.',
            requirements: [
                'Strong interest in wireless and IoT technology',
                'Ability to demonstrate knowledge and interest through completed projects and/or relevant training and experience.'
            ],
            travel: 'Seldom'
        }
    };
    $scope.job = $scope.listings[$stateParams.id];
}]);

app.directive('initFp', ['$rootScope', '$state', function($rootScope, $state) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).fullpage({
                //anchors: ['home', 'plan', 'run', 'close'],
                responsiveWidth: 1030,
                verticalCentered: false,
                controlArrows: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',
            });

            $(document).on('click', '.moveRight', function(){
                $.fn.fullpage.moveSlideRight();
            });
            $(document).on('click', '.moveLeft', function(){
                $.fn.fullpage.moveSlideLeft();
            });
            $rootScope.$on("$stateChangeStart", function(event, next, current) {
                if($state.current.name = 'home') {
                    $.fn.fullpage.destroy('all');
                } else return;
            });


        }
    };
}]);

app.directive('swiper', ['$rootScope', '$state', function($rootScope, $state) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 30,
                loop: true
            });

        }
    };
}]);

app.directive('topnav', ['$rootScope', '$timeout', '$state', function($rootScope, $timeout, $state) {
    return {
        restrict: 'E',
        templateUrl: 'nav.html',
        link: function(scope, element, attrs) {

            scope.drop = false;

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                scope.drop = false;
            });

            scope.hoverMenu = function(page) {
                switch(page) {
                    case 'solutions':
                        scope.drop = true;
                        break;
                    default:
                        if (scope.drop) {
                            $timeout(function() {
                                scope.drop = false;
                            }, 4000);
                        }
                        break;
                }
            }

            scope.openSub = function() {
                scope.drop = true;
            }

            scope.closeSub = function() {
                scope.drop = false;
            }

            scope.exitMenu = function() {
                if (scope.drop) {
                    $timeout(function() {
                        scope.drop = false;
                    }, 2000);
                }
            }

            scope.clickIcon = $rootScope.clickIcon = 'menu';
            scope.closeIcon = function() {
                scope.drop = false;
                scope.mDrop = !scope.mDrop;
                if (scope.clickIcon === 'menu') {
                    scope.clickIcon = 'close';
                    $rootScope.clickIcon = 'close';
                }
                else {
                    scope.clickIcon = 'menu';
                    $rootScope.clickIcon = 'menu';
                }
            };

            scope.toggleIcon = function() {
                scope.drop = !scope.drop;
            }

            angular.element(window).bind('scroll', function () {
                scope.scroll = window.pageYOffset;
                try{
                    scope.height = document.querySelector('.product-header').offsetHeight;
                } catch(e){
                    scope.height = 0;
                }
                if(scope.scroll > scope.height) {
                    element.addClass('offset');
                } else {
                    element.removeClass('offset');
                }
            });
            scope.$on('$destroy', function() {
                angular.element(window).unbind('scroll');
            });

        }
    };
}]);

app.directive('siteFooter', ['$rootScope', '$state', function($rootScope, $state) {
    return {
        restrict: 'E',
        templateUrl: 'footer.html',
        link: function(scope, element, attrs) {

        }
    };
}]);