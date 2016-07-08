angular.module("myApp.controllers", []).controller("resumeCtrl", function ($scope) {
    // Write your code here
    $scope.resumes = [];

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
});
