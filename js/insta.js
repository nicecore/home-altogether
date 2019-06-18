

$( document ).ready(function() {
  var userFeed = new Instafeed({
    get: 'user',
    clientId: '92c73b784e7b4543a2440cd26b9b9d2b',
    userId: '7977225167',
    target: 'insta',
    limit: 5,
    resolution: 'thumbnail',
    accessToken: '11804221620.1677ed0.7e8a9cd1fb7a4b748d6421a05aa3df57',
    sortBy: 'most-recent',
    template: '<div><a href="{{link}}"><img class="mx-auto insta-image" width=200 src="{{image}}"/></a></div>',
    links: true,
    after: function() {
      $('#insta').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1380,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false
            }
          },
          {
            breakpoint: 715,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      })
    }
  });
  userFeed.run();
});
