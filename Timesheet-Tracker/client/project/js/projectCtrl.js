	
angular.module('appMainCtrl',[])
    .controller('projectCtrl',function ($scope,$http) {
		$http.get("/api/getprojectDataAll").then(function(data) {
    		$scope.projectData = data;
		})

	})
    	