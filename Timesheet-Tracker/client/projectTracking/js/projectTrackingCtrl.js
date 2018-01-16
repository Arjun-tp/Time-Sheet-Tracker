	
angular.module('appMainCtrl',[])
    .controller('projectTrackingCtrl',function ($scope,$http) {
		$http.get("/api/getprojectTrackingDataAll").then(function(data) {
    		$scope.projectTrackingData = data;
		})

	})