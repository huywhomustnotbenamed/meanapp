angular.module('myApp')
  .controller('meetupsCtrl', ['$scope', '$resource', function($scope, $resource) {
    var Meetup = $resource('/api/meetups');

    $scope.meetups = [
      {name: 'Ruby Rails'}
    ];

    $scope.createMeetup = function(){
      var meetup  = new Meetup();
      meetup.name = $scope.meetupName;
      meetup.$save();
    };
  }]);