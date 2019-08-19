$('.parallax').paroller();

$( document ).ready(function() {
  var userFeed = new Instafeed({
    get: 'user',
    clientId: 'ae1c425f47744cdba50f2afa1d23d5c8',
    userId: '7977225167',
    target: 'insta',
    limit: 10,
    resolution: 'standard_resolution',
    accessToken: '7977225167.ae1c425.3bce55b4df3f4e409cb51122bc52f4af',
    sortBy: 'most-recent',
    template: '<div><a href="{{link}}"><img class="mx-auto insta-image" width=200 height=200 src="{{image}}"/></a></div>',
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
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false
            }
          }
        ]
      })
    }
  });
  userFeed.run();
});
