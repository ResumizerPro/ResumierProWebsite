angular.module("myApp.controllers", []).controller("resumeCtrl", function ($scope, resumeService) {
    // Write your code here
    $scope.resumes = resumeService.get();

    $scope.newResumes = {};

    $scope.isEmpty = function(str) {
      return String(str).length == 0;
    };

    $scope.addResumes = function (artist, title) {
        $scope.resumes.push({
            artist: artist,
            title: title
        });
        $scope.newResumes.title = "";
        $scope.newResumes.artist = "";

    };

  $scope.$watch("resumes", function (newValue, oldValue) {
    console.log('newValue: ' + newValue + ' OldValue: ' + oldValue)
    if (newValue !== oldValue) {
    console.log('change');
  }
  });
});
