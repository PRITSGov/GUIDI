export function viewUtil(){
    console.log('this is UTILS')
}

export async function exportSplide(){
  if(document.getElementById('splide1')){
    await new Splide( '#splide1',{
      type:'loop'
    } ).mount();
  }
  if(document.getElementById('splide2')){
    await new Splide( '#splide2', {
      type   : 'loop',
      perPage: 3,
      gap: '2em',
      fixedWidth: '35rem',
      perMove: 1,
      padding:100
    } ).mount();
    
  }
  if(document.getElementById('splide3')){
    await new Splide( '#splide3', {
      type   : 'loop',
      perPage: 1,
      gap: '2em',
      fixedWidth: '50rem'
    } ).mount();
  }
  if(document.getElementById('splide4')){
    await new Splide( '#splide4', {
      type: 'loop',
      gap:'2em',
      fixedWidth: '50%'
    }).mount();
  }
}

export async function exportSwiper(){
  var carouselSlider = new Swiper('.swiper', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 1000,
    spaceBetween : 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination-1',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        1499:{
            slidesPerView : 1
        },
        1200:{
            slidesPerView : 2
        },

        991:{
            slidesPerView : 1
        },

        767:{
            slidesPerView : 1

        },

        575:{
            slidesPerView : 1
        }
    }
});
  var carouselSlider2 = new Swiper('.swiper2', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 1000,
    spaceBetween : 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination-2',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        1499:{
            slidesPerView : 1
        },
        1200:{
            slidesPerView : 1
        },

        991:{
            slidesPerView : 1
        },

        767:{
            slidesPerView : 1

        },

        575:{
            slidesPerView : 1
        }
    }
});
  var carouselSlider3 = new Swiper('.swiper3', {
    slidesPerView : 2,
    slidesPerGroup: 1,
    loop: true,
    speed: 750,
    spaceBetween : 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination-3',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        1499:{
            slidesPerView : 2
        },
        1200:{
            slidesPerView : 2
        },

        991:{
            slidesPerView : 2
        },

        767:{
            slidesPerView : 1

        },

        575:{
            slidesPerView : 1
        }
    }
});
  var carouselSlider4 = new Swiper('.swiper-display', {
    slidesPerView : 2,
    slidesPerGroup: 1,
    loop: true,
    speed: 750,
    spaceBetween : 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination-display',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        1499:{
            slidesPerView : 2
        },
        1200:{
            slidesPerView : 2
        },

        991:{
            slidesPerView : 2
        },

        767:{
            slidesPerView : 1

        },

        575:{
            slidesPerView : 1
        }
    }
});
}

  

