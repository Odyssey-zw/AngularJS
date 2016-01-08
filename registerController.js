angular.module("reg",[]).controller("regCtrl",function($scope){
	$scope.username = "Brown";
	$scope.password = "pwd";
	$scope.age = 25;
	$scope.message = function(){
		return $scope.username +","+ $scope.password +","+ $scope.age;
	}
})