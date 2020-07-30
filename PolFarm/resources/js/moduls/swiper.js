import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

function SwiperSlide() {
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 10,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                  slidesPerView: 1,
                spaceBetween: 20
            },
            620: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: -30
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }
    })
} 

export default SwiperSlide;