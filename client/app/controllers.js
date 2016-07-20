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

    $scope.deleteSong = function(idx) {
      $scope.resumes.splice(idx, 1);
  };

  $scope.$watch("resumes", function (newValue, oldValue) {
    if (newValue !== oldValue) {
      $scope.resumes.map(function(a){
        console.log(a);
      });
      resumeService.put($scope.resumes);
    }
}, true);
});

angular.module("myApp.controllers", []).controller("RegisterCtrl", function ($scope, resumeService) {
    // Write your code here
    $scope.resumes = [];

    $scope.newResumes = {};

    $scope.isEmpty = function(str) {
      return String(str).length == 0;
    };



  $scope.$watch("resumes", function (newValue, oldValue) {
    if (newValue !== oldValue) {
      $scope.resumes.map(function(a){
        console.log(a);
      });
      resumeService.put($scope.resumes);
    }
}, true);
});
