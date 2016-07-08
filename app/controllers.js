angular.module("myApp.controllers", []).controller("resumeCtrl", function ($scope) {
    // Write your code here
    $scope.resumes = [];

    $scope.newResumes = {};

    $scope.addResume = function (artist, qualifications) {
        var newResume = new resume();
        newResume.isPublic = true;
        newResume.qualifications = qualifications;
        newResume.$save(function(response) {
            $scope.resumes.push(response);
        });
        $scope.newResumes.isPublic = "";
        $scope.newResumes.qualifications = "";
    };
});
