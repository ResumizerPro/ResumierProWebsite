angular.module("myApp.services", []).factory("formService", function() {
  var STORAGE_ID = "myApp.form", factory = { };

factory.get = function(type) {
  var empty = `{}`
  switch(type){
    case "CI":
      empty = `{
          "full_name" : "",
          "email" : "",
          "phone_number" : "",
          "gitHub" : "",
          "linkedIn" : ""
      }`;
    break;
    case "edu":
      empty = `{
        "university" : "",
        "start_Month" : "",
        "end_Month" : "",
        "start_Year": "",
        "end_Year": "",
        "degree": "",
        "city": ""
      }`;
    break;
    case "s":
      empty = `{
        "programming_languages": "",
        "iDEs": "",
        "technologies": "",
        "databases": ""
      }`;
    break;
    case "p":
      empty = `{
        "project_name": "",
        "project_link": "",
        "project_description": "",
        "project_implementation": "",
        "project_technologies": ""
      }`;
    break;
    case "work":
      empty = `{
        "job_title": "",
        "employer": "",
        "city": "",
        "start_month": "",
        "start_year": "",
        "end_month": "",
        "end_year": "",
        "job_description": ""
      }`;
    break;
  }
  
  return JSON.parse(localStorage.getItem(STORAGE_ID + type) || empty);
};

factory.put = function(type, Value) {
  localStorage.setItem(STORAGE_ID + type, JSON.stringify(Value));
};

return factory;
});
