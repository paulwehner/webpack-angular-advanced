
require('../templates/artists/index.css');

angular.module('Music').controller('ArtistsIndexController', function(Lastfm, $scope){
	$scope.searchValue = '';
	$scope.artists = [];

	$scope.mbidFilter = function(artist) {
	    return ( artist.mbid.length > 1);
	};

	var _this = this;
	_this.stopSearch = function(){
		if(_this.timeout){
			window.clearTimeout(_this.timeout);  			
		}		
	};

	$scope.$watch('searchValue', function(newValue, oldValue){
		_this.stopSearch();
		if(newValue.length > 1){
			_this.timeout = window.setTimeout(function(){
				console.log(newValue);
				Lastfm.searchArtists(newValue)
					.success(function(data,status){
						if(data && data.results.artistmatches.artist){
							var artists = data.results.artistmatches.artist;
							console.log(artists);
							$scope.artists = artists;					
						}
						else{
							$scope.artists = [];
						}
					})
					.catch(function(data, status){
						alert('Lastfm search failed. ');
						console.log('search failed...');
						$scope.artists = [];
					});
			}, 1000);
		}
	});

});