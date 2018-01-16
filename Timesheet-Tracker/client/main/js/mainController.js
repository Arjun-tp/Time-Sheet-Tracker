'use strict';


angular.module('appMainCtrl',[])
    .controller('HelloWordCtrl',function ($scope,$http) {
		$scope.empFunction = function(){
		$http.get("/api/getEmployeeDataAll").then(function(result) {
   			$scope.empdata = result.data;
		})
	}
})
    	