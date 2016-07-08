angular.module("myApp.filters", []).filter("titlesize", function(){
  return function(input) {
    var str = String(input).split();
    str.forEach(function(a){
      a = a[0].toUpperCase() + a.splice(1).toLowerCase;
    });
    return str;
  }
});
