angular.module('myApp', [])
  .controller('meetupsCtrl', function($scope) {
    $scope.meetups = [
      {name: 'Ruby Rails'}
    ];

    $scope.createMeetup = function(){
      $scope.meetups.push({name: $scope.meetupName})
      $scope.meetupName = "";
    };
  });