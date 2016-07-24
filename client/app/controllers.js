

angular.module("myApp.controllers", []).controller("FormCtrl", function ($scope) {
    // Write your code here
    $scope.login = [];
    $scope.newLogin = {};
    $scope.currentPage = "Contact_Info"
    $scope.checkboxModel = {
       value1 : true,
       value2 : true
     };
    $scope.Pages = [
      'Contact_Info',
      'Education',
      'Skills',
      'Projects',
      'Work_Experience'
    ]
    $scope.ContactInfo = [
      'full_name',
      'email',
      'phone_number',
      'gitHub',
      'linkedIn'
    ]
    $scope.Education = [
      'university',
      'start_Month',
      'end_Month',
      'start_Year',
      'end_Year',
      'degree',
      'city'
    ]
    $scope.Skills = [
      'programming_Languages',
      'iDEs',
      'technologies',
      'databases'
    ]
    $scope.Projects = [
      'project_name',
      'project_link',
      'project_description',
      'project_implementation',
      'project_technologies'
    ]
    $scope.WorkExperience = [
      'job_title',
      'employer',
      'city',
      'start_month',
      'start_year',
      'end_month',
      'end_year',
      'job_description',
    ]

    $scope.isActive = function(str1, str2){
      return str1 == str2;
    };

    $scope.setCurrent = function(str){
      $scope.currentPage = String(str);
    };
    $scope.addUser = function (username, password) {
        console.log("its working?");
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
