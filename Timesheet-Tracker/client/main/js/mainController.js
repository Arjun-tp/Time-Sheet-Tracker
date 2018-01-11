
angular.module('appMainCtrl',[])
    .controller('HelloWordCtrl',function ($scope) {
        $scope.msg ='';
        $scope.msg = 'Welcome to Mattrcks.in!!';
        console.log('welcome to mattrcks.in')
})