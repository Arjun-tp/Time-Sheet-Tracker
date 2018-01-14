
angular.module('appMain',['appMainCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.home', {
            url: "/home",
            templateUrl: "main/templates/main.html"
        })
});
