var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('/contactlist').success(function(response){
      $scope.contactList = response;
    });
}]);