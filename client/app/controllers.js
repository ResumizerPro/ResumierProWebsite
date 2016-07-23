

angular.module("myApp.controllers", []).controller("FormCtrl", function ($scope) {
    // Write your code here
    $scope.login = [];
    $scope.newLogin = {};
    $scope.currentPage = "Contact_Info"
    $scope.Pages = [
      'Contact_Info',
      'Education',
      'Skills',
      'Projects',
      'Work_Experience'
    ]
    $scope.ContactInfo = [
      'Full_name',
      'Email',
      'Phone_Number',
      'GitHub',
      'LinkedIn'
    ]
    $scope.Eduction = [
      'University',
      'Start_Month',
      'End_Month',
      'Start_Year',
      'End_Year',
      'Degree',
      'City'
    ]
    $scope.Skills = [
      'Programming Languages',
      'IDE(s)',
      'Technologies',
      'Databases'
    ]
    $scope.Projects = [
      'Project_Name',
      'Project_Link',
      'Project_Description',
      'Project_Implementation',
      'Project_Technologies'
    ]
    $scope.WorkExperience = [
      'Job Title',
      'Employer',
      'City',
      'Start_Month',
      'Start_Year',
      'End_Month',
      'End_Year',
      'Job_Description1',
      'Job_Description2',
      'Job_Description3',
      'Job_Description4'
    ]

    $scope.isAction = function(str1, str2){
      return str1 == str2;
    }

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
