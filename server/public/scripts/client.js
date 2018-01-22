const lifeGallery = angular.module('lifeGallery', [] );


lifeGallery.controller('GalleryController', ['$http', function($http) {
    console.log('in GalleryController');
    const self = this;
    
    self.assets_imageArray = [];

    let image1 = {
        id: 0, 
        like_clicks: 0,
        path: "assets/mom.jpg", 
        text_title: "My mother and I when I was younger.",
        image_description: "My Mother has always been one of my biggest supporters and is part of the reason why I am who I am today."
    }
    let image2 = {
        id: 1, 
        like_clicks: 0,
        path: "assets/dad.jpg", 
        text_title: "My Father and I at my senior prom.",
        image_description: "My father has always been a big supporter in my life and pushes me to be a better version of myself. He introduced me to IT."
    }
    let image3 = {
        id: 3, 
        like_clicks: 0,
        path: "assets/Family Christmas .jpg", 
        text_title: "My Siblings and I",
        image_description: "Family is one of the most important things to me."
    }

    let image4 = {
        id: 4, 
        like_clicks: 0,
        path: "assets/fiance.jpg", 
        text_title: "My fiance and I on our first date",
        image_description: "Tyler has been one of my biggest supporters for 2 1/2 years and continues to help me become the person I want to be."
    }

    let image5 = {
        id: 5, 
        like_clicks: 0,
        path: "assets/ACEN:Tyler.jpg", 
        text_title: "Tyler and I at Anime Central in Chicago",
        image_description: "Cosplaying is one of my favorite hobbies and my favorite activity to do with Tyler."
    }

    let image6 = {
        id: 6, 
        like_clicks: 0,
        path: "assets/nana.jpg", 
        text_title: "My grandma and I in California",
        image_description: "My grandma is someone who has been a part of my life since I was young and I look up to her for adivce in many areas of life."
    }

    let image7 = {
        id: 7, 
        like_clicks: 0,
        path: "assets/papa.jpg", 
        text_title: "My grandpa and I when I was just a young squirt.",
        image_description: "My grandpa was a great role model when it came to work and providing for a family."
    }

    let image8 = {
        id: 8, 
        like_clicks: 0,
        path: "assets/bill.jpg", 
        text_title: "Bill in his wordworking shop",
        image_description: "Bill was a huge infuluence in my life through high-school and taught me a lot about giving and about being a better person."
    }

    let image9 = {
        id: 9, 
        like_clicks: 0,
        path: "assets/Sabaton Concert.jpg", 
        text_title: "Meet and Greet with one of my favorite bands.",
        image_description: "Music is a big part of my life and I love going to concerts."
    }
    

    self.getImages = function (){
        self.assets_imageArray.push(image1, image2, image3, image4, image5, image6, image7, image8, image9);
    }
self.getImages();


    self.likeCount = function(image) {
        image.like_clicks++;
    }

    

}]);

