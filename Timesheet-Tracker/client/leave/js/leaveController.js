'use strict';


angular.module('appLeaveCtrl',[])
    .controller('leaveController',function ($scope,$http) {
    	$scope.leaveFunc = function(){
    		$http.get("/api/getLeaveDataAll").then(function(data) {
    		$scope.leaveData = data;
		})
    	}
		
	})
    	