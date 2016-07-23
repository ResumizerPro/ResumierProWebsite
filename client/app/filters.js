angular.module("myApp.filters", []).filter("titlesize", function(){
  return function(input) {
    var str = String(input).split(' ');
    str = str.map(function(a){
      a = a[0].toUpperCase() + a.slice(1).toLowerCase();
      return a;
    }).join(' ');
	return str;
  }
}).filter("NoUnderScore", function(){
  return function(input){
    var str = String(input).split('_');
    return str.join(' ');
  }
});
