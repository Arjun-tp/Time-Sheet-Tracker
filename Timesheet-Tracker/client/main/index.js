
angular.module('appMain',['appMainCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.home', {
            url: "/home",
            controller: 'HelloWordCtrl',
            templateUrl: "main/templates/main.html"
        })
        .state('app.leave', {
            url: "/leave",
            controller: 'leaveController',
            templateUrl: "leave/templates/leave.html"
        })
        .state('app.project', {
            url: "/project",
            controller: 'projectCtrl',
            templateUrl: "project/templates/project.html"
        })
        .state('app.projectTracking', {
            url: "/projectTracking",
            controller: 'projectTrackingCtrl',
            templateUrl: "projectTracking/templates/projectTracking.html"
        })
        
});
	