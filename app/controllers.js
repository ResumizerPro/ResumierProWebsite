angular.module("myApp.controllers", []).controller("resumeCtrl", function ($scope) {
    // Write your code here
    $scope.resumes = [];

    $scope.newResumes = {};

    $scope.addResumes = function (artist, title) {
        $scope.resumes.push({
            artist: artist,
            title: title
        });
        $scope.newResumes.title = "";
        $scope.newResumes.artist = "";
    };
});
