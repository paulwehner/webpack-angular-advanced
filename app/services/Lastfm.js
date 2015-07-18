
//!!! YOU NEED TO REPLACE THIS WITH YOUR OWN LAST.FM API KEY !!!
var api_key='0f73674b7010325e7dd64f1989e1e807';

angular.module('Music').factory('Lastfm', ['$http', function LastfmFactory($http) {
  return {
    searchArtists: function(artist) {
      if(artist.length > 1){
        return $http({
          method: 'GET', 
          url: 'https://ws.audioscrobbler.com/2.0/?method=artist.search',
          params: {
            api_key: api_key,
            format: 'json',
            limit: '10',
            artist: artist,
          }
        });        
      }
      else{
        return false;
      }
    },
    artistDetail: function(mbid){
      if(mbid.length > 1){
        return $http({
          method: 'GET', 
          url: 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo',
          params: {
            api_key: api_key,
            format: 'json',
            mbid: mbid
          }
        });        
      }
      else{
        return false;
      }
    }
  };
}]);
