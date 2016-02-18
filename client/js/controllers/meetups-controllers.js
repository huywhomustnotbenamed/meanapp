angular.module('myApp')
  .controller('meetupsCtrl', ['$scope', '$resource', function($scope, $resource) {
    $scope.meetups = [
      {name: 'Ruby Rails'}
    ];

    $scope.createMeetup = function(){
      $scope.meetups.push({name: $scope.meetupName})
      $scope.meetupName = "";
    };
  }]);