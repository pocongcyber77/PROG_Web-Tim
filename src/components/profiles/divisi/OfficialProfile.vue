<template>
  <div class="swiper official-swiper mt-4">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(member, index) in teamMembers" :key="index">
        <ProfilesTeams
          :profilePic="member.profilePic"
          :name="member.name"
          :department="member.department"
          :year="member.year"
          :position="member.position"
          :positionLogo="divisionLogo"
          :socialMedia="member.socialMedia"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import ProfilesTeams from '../ProfileTeams.vue'

export default {
  components: {
    ProfilesTeams,
  },
  props: {
    teamMembers: {
      type: Array,
      required: true,
    },
    divisionLogo: {
      type: String,
      required: true,
    },
  },
  mounted() {
    new Swiper('.official-swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'cards',
      cardsEffect: {
        perSlideOffset: 4,
        perSlideRotate: 2,
        rotate: true,
        slideShadows: false,
      },
      loop: false,
      navigation: {
        nextEl: '.official-swiper .swiper-button-next',
        prevEl: '.official-swiper .swiper-button-prev',
      },
      pagination: {
        el: '.official-swiper .swiper-pagination',
        clickable: true,
      },
    })
  },
}
</script>

<style scoped>
.swiper {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.swiper-wrapper {
  display: flex;
  overflow: hidden;
}

.swiper-slide {
  flex-shrink: 0;
  width: auto;
}
</style>
