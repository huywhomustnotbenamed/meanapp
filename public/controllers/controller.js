var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {

  var refresh = function(){
    $http.get('/contactlist').success(function(response){
      $scope.contactList = response;
      $scope.contact     = "";
    });
  };

  refresh();

  $scope.addContact = function(){
    console.log($scope.contact);
    $http.post('/contactlist', $scope.contact)
    .success(function(response){
      console.log(response);
      refresh();
    });
  };

}]);