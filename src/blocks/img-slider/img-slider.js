(function(){
  const imgCarousel = document.querySelector('#imgCarusel');
  if (!imgCarousel) return;
  const simpleCarousel = new bootstrap.Carousel(imgCarousel, {
    ride: 'carousel',
    interval: 7000,
    wrap: true
  });

  const imgLazy = new Blazy({
      selector: '.b-lazy'
  });

  imgCarousel.addEventListener('slid.bs.carousel', function () {
    imgLazy.revalidate();
  })
}());
