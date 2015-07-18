require('./nav.css');

angular.module("Music").directive('nav', function(){
  return {
    replace: true,
    restrict: "E",
    template: require('./nav.html'),
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});