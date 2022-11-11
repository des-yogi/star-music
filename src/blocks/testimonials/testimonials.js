(function(){
  const testimonCarousel = document.querySelector('#testimonialsCarusel')
  const carousel = new bootstrap.Carousel(testimonCarousel, {
    ride: 'carousel',
    interval: 7000,
    wrap: true
  })

  const avaLazy = new Blazy({
      selector: '.b-lazy'
  });

  testimonCarousel.addEventListener('slid.bs.carousel', function () {
    avaLazy.revalidate();
  })
}());
