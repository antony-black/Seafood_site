$(function(){


    $('.header__slider').slick({
      dots: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="img/header/pre.svg" alt="prev"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="img/header/next.svg" alt="next"></button>',
      vertical: true,
      responsive: [
        {
          breakpoint: 386,
          settings:{
            arrows: false,
            dots: false,
            autoplay: true,
          autoplaySpeed: 2000
          }
        }
      ]
    })




    $('.product__name').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      focusOnSelect: true,
      vertical: true,
      asNavFor: '.product__content',
      prevArrow:'<button type="button" class="product-prev"><img src="img/product/product_prev.svg" alt="prev"></button>',
      nextArrow:'<button type="button" class="product-next"><img src="img/product/product_next.svg" alt="next"></button>',
      responsive: [
        {
          breakpoint: 871,
          settings:{
              arrows: false,
              dots: true,
              vertical: false,
              slidesToShow: 3
          }
        },
        {
          breakpoint: 591,
          settings:{
              arrows: false,
              dots: true,
              vertical: false,
              slidesToShow: 1
          }
        }
      ]




    });
    $('.product__content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.product__name',
      centerMode: true,
      arrows: false,
      fade: true
    });





    $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')

    })

});