var app= angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$rootScope){
    $scope.firstname='哈哈';
    $scope.lastname='哈哈';
    $scope.comname=function(){
        return `${$scope.firstname} ++ ${$scope.lastname}`
    }
})