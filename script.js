let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    if(window.screenY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
window.onload = () =>{
    if(window.screenY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active')
}
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active')
}


var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    },
  });
  //header
let header = document.querySelector('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0)
})
document.addEventListener("DOMContentLoaded", () => {
  const minInput = document.querySelector(".min-input");
  const maxInput = document.querySelector(".max-output");
  const minRange = document.querySelector(".min-range");
  const maxRange = document.querySelector(".max-range");
  const progress = document.querySelector(".progress");

  const setRangeValues = () => {
      const minValue = parseInt(minInput.value);
      const maxValue = parseInt(maxInput.value);

      if (minValue > maxValue) {
          minInput.value = maxValue;
      }

      minRange.value = minValue;
      maxRange.value = maxValue;

      const minPercent = (minValue / minRange.max) * 100;
      const maxPercent = (maxValue / maxRange.max) * 100;

      progress.style.left = `${minPercent}%`;
      progress.style.right = `${100 - maxPercent}%`;
  };

  minInput.addEventListener("input", setRangeValues);
  maxInput.addEventListener("input", setRangeValues);

  minRange.addEventListener("input", () => {
      minInput.value = minRange.value;
      setRangeValues();
  });

  maxRange.addEventListener("input", () => {
      maxInput.value = maxRange.value;
      setRangeValues();
  });

  setRangeValues();
});


