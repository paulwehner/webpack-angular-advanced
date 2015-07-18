
require('../templates/artists/show.css');

angular.module('Music').controller('ArtistShowController', function(Lastfm, $scope, $routeParams, $sce){
	$scope.artist = false;
	Lastfm.artistDetail($routeParams.mbid)
		.success(function(data,status){
			if(data && data.artist){
				$scope.artist = data.artist;
				$scope.artistBio = $sce.trustAsHtml(data.artist.bio.content);
			}
			else{
				$scope.artist = false;
			}
		})
		.catch(function(data, status){
			alert('Lastfm artist detail failed. ');
			console.log('artist detail failed...');
			$scope.artist = false;
		});

});