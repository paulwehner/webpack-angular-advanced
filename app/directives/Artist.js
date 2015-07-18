
require('./artist.css');

var Artist = angular.module("Music").directive('artist', function(){
  return {
    replace: true,
    restrict: "E",
    scope: {
      img: "@",
      title: "@",
      mbid: "@"
    },
    template: require('./artist.html'),
    link: function(scope, element, attrs){
    	scope.$watch('img', function(value) {
            element.css({
            	'display': 'inline-block',
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    }
  };
});

module.exports = Artist;