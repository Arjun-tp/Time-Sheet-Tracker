
angular.module('appMain',['appLeaveCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.leave', {
            url: "/leave",
            controller: 'leaveController',
            templateUrl: "leave/templates/leave.html"
        })
});
	