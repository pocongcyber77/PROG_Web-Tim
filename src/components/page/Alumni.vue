<template>
  <div class="container mx-auto flex flex-col items-center px-4 py-16 mt-16 mb-10">
    <h1
      class="lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text text-red-600 mb-10"
    >
      Alumni Network
    </h1>
    <!-- Swiper Container -->
    <div class="w-full mb-6">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(alumnus, index) in alumni" :key="index">
            <ProfileAlumni
              :profilePic="alumnus.profilePic"
              :name="alumnus.name"
              :company="alumnus.company"
              :year="alumnus.year"
              :backgroundPattern="backgroundPattern"
              :socialMedia="alumnus.socialMedia"
            />
          </div>
        </div>
        <!-- Swiper Nav -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <!-- Swiper Pag -->
        <div class="swiper-pagination"></div>
        <!-- Scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <!-- Quotes -->
    <div class="text-center text-gray-700 px-6 py-4 shadow-quotes">
      <p class="text-xl font-bold italic">
        "Grateful for the past team members who gave their all and helped us achieve great things.
        <br />
        Your contributions were priceless and will never be forgotten. Thank you for being a part of
        our team's success!"
      </p>
    </div>
  </div>
</template>

<script>
import ProfileAlumni from '../profiles/ProfileAlumni.vue'
import alumni from '../../data/alumni.js'

export default {
  name: 'Alumni',
  components: {
    ProfileAlumni,
  },
  data() {
    return {
      backgroundPattern: '/src/assets/images/teams/frame-foto.png',
      alumni,
    }
  },
  mounted() {
    new Swiper('.swiper', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
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
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },
    })
  },
}
</script>

<style scoped>
.shadow-quotes {
  text-shadow: 2px 2px 8px rgba(19, 6, 6, 0.8);
}

/* .swiper-button-prev,
.swiper-button-next {
  color: #d81d1d;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  color: #d81d1d;
} */

.swiper-pagination-bullet-active {
  background: #d81d1d;
}
</style>
