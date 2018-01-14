
angular.module('appMainCtrl',[])
    .controller('HelloWordCtrl',function ($scope,Restangular) {
        $scope.msg ='';
        $scope.msg = 'Welcome to timesheetTracker.in!!';
        console.log('welcome to timeSheetTracker.in')
        Restangular.all('getLeaveDataAll').get().then(function(data){
        	$scope.abc = data;
        })
})