angular.module("myApp.services", []).factory("formService", function() {
  var STORAGE_ID = 'myApp.form', factory = { };

factory.get = function() {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
};

factory.put = function(input) {
  localStorage.setItem(STORAGE_ID, JSON.stringify(input));
};

return factory;
});
