/*angular.module("myApp.controllers", []).controller("resumeCtrl", function ($scope, resumeService) {
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
});*/

angular.module("myApp.controllers", []).controller("RegisterCtrl", function ($scope, resumeService) {
    // Write your code here
    $scope.login = [];

    $scope.newLogin = {};

    $scope.addResumes = function (username, password) {
        $scope.resumes.push({
            username: username,
            password: password
        });
        $scope.newResumes.username = "";
        $scope.newResumes.password = "";

    };

    $scope.isEmpty = function(str) {
      console.log("testing is empty");
      return String(str).length == 0 || String(str) == '';
    };




});
