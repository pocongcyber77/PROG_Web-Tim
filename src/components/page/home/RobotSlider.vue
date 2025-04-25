<template>
  <div class="relative w-full max-w-md lg:max-w-2xl 2xl:max-w-3xl mx-auto 3xl:max-w-2xl 3xl:mx-20">
    <!-- Swiper Container -->
    <div class="swiper robotSwiper">
      <div class="swiper-wrapper">
        <div
          v-for="(robot, index) in robots"
          :key="index"
          class="swiper-slide flex flex-col items-center justify-center p-4"
        >
          <img :src="robot.image" :alt="robot.alt" class="w-64 h-64 object-cover" />
          <p class="mt-4 mb-4 text-center font-bold text-gray-700">{{ robot.id }}</p>
        </div>
      </div>
      <!-- Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Nav Button -->
      <div
        class="swiper-button-prev bg-red-600 text-white p-2 rounded-full hover:bg-gray-600 md:ml-4"
      ></div>
      <div
        class="swiper-button-next bg-red-600 text-white p-2 rounded-full hover:bg-gray-600"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import robotsData from '/src/assets/data/robots.json'

const robots = ref(robotsData)

onMounted(() => {
  let attempts = 0
  const maxAttempts = 50
  const checkSwiper = setInterval(() => {
    if (window.Swiper) {
      clearInterval(checkSwiper)
      new window.Swiper('.robotSwiper', {
        effect: 'cube',
        cubeEffect: {
          shadow: false,
          shadowOffset: 20,
          shadowScale: 0.94,
          slideShadows: true,
        },
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: true,
        // },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      })
    } else if (attempts >= maxAttempts) {
      clearInterval(checkSwiper)
      console.error('Swiper error cak.')
    }
    attempts++
  }, 100)
})
</script>

<style scoped>
.robotSwiper {
  width: 100%;
  position: relative;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.swiper-button-prev,
.swiper-button-next {
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 20px;
}

.swiper-pagination-bullet {
  background: #d1d5db;
  width: 12px;
  height: 12px;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #d81d1d;
}

.swiper-button-prev,
.swiper-button-next {
  color: #ffffff;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  color: #ffffff;
}

.swiper-button-prev,
.swiper-button-next {
  visibility: visible;
}
</style>
