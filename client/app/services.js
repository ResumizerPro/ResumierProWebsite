angular.module("myApp.services", []).factory("formServices", function() {
  var STORAGE_ID = 'myApp.form', factory = { };

factory.get = function() {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
};

factory.put = function(resumes) {
  localStorage.setItem(STORAGE_ID, JSON.stringify(resumes));
};

return factory;
});
