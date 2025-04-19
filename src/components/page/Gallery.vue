<template>
  <div class="py-20 items-center self-center mt-10 mb-20 flex flex-col w-full">
    <h1
      data-aos="fade-down"
      class="lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text text-red-600 mb-10"
    >
      Gallery
    </h1>

    <!-- Swiper Container -->
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      class="swiper mySwiper w-full max-w-[1920px] px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="swiper-slide flex justify-center items-center"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-[300px] sm:h-[350px] md:h-[3500px] lg:h-[450px] xl:h-full object-cover lg:rounded-lg rounded-2xl shadow-lg max-h-[500px] transition-transform duration-300 ease-in-out transform px-2 lg:px-0"
          />
        </div>
      </div>
      <!-- Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Nav Buttons -->
      <div
        class="swiper-button-prev lg:hidden bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
      ></div>
      <div
        class="swiper-button-next lg:hidden bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import images from '/src/assets/data/gallery.json'

onMounted(() => {
  let attempts = 0
  const maxAttempts = 50
  const checkSwiper = setInterval(() => {
    if (window.Swiper) {
      clearInterval(checkSwiper)
      new window.Swiper('.mySwiper', {
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 30,
          stretch: -50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      })
    } else if (attempts >= maxAttempts) {
      clearInterval(checkSwiper)
      console.error('Swiper tidak ditemukan.')
    }
    attempts++
  }, 100)
})
</script>

<style scoped>
.mySwiper {
  width: 100%;
  max-width: 1920px;
}

.swiper-slide {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.swiper-slide-active {
  opacity: 1;
}

.swiper-button-prev,
.swiper-button-next {
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  z-index: 10;
  color: #ffffff;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 20px;
  color: #ffffff;
}

.swiper-pagination-bullet {
  background: #d1d5db;
  width: 12px;
  height: 12px;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #dc2626;
}
</style>
