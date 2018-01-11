
angular.module('appMainCtrl',[])
    .controller('HelloWordCtrl',function ($scope) {
        $scope.msg ='';
        $scope.msg = 'Welcome to timesheetTracker.in!!';
        console.log('welcome to timeSheetTracker.in')
})