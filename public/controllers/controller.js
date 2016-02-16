var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('/contactlist').success(function(response){
      $scope.contactList = response;
    });

    $scope.addContact = function(){
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact)
      .success(function(response){
        console.log(response);
      });
    };

}]);