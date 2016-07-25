

angular.module("myApp.controllers", []).controller("FormCtrl", function ($scope) {
    // Write your code here
    $scope.login = [];
    $scope.newLogin = {};
    $scope.currentPage = "Contact_Info"
    $scope.value1 = false;
    $scope.value2 = false;
    $scope.resfeshIframe = function() {
      var iFrame = $document.find("iframe");
      iFrame.attr("src",iFrame.attr("src"));
    };

    $scope.ContactInput = {
        full_name : 'Jonathan Beltran',
        email : 'jbelt021@fiu.edu',
        phone_number : '',
        gitHub : '',
        linkedIn : ''
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
      'programming_languages',
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
    $scope.ChangeValue1 = function(){
      $scope.value1 = !scope.value1;
    };
    $scope.ChangeValue2 = function(){
      $scope.value2 = !scope.value2;
    };
    $scope.isActive = function(str1, str2){
      return str1 == str2;
    };

    $scope.setCurrent = function(str){
      $scope.currentPage = String(str);
    };
    $scope.submitForm = function(input){
      console.log(input);
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
    $scope.requiredFields = function(e){
      return false;
    };



});
