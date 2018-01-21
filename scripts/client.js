const lifeGallery = angular.module('lifeGallery', [] );


lifeGallery.controller('GalleryController', ['$http', function($http) {
    console.log('in GalleryController');
    const self = this;
    
    self.assets_imageArray = [];

self.getImages = function() {
    $http.get('/assets').then(function(response) {
    console.log(response);
    self.asset_imageArray = response.data
})};
self.getImages();

    self.likeCount = function() {
        self.count = 0;
        self.count++;
        console.log(count);
       getImages();
    }

}]);

