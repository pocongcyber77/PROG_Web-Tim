<template>
  <section class="fullscreen">
    <div class="bg-white py-16">
      <div class="mx-auto px-4 lg:ml-10 md:ml-4 ml-2">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Kolom Kiri -->
          <div class="md:w-1/2 mb-8 md:mb-0 md:mt-0 mt-10 lg:ml-10 sm:ml-4">
            <h1
              data-aos="fade-down"
              class="lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 sm:mt-10 mt-30 text-5xl gradient-text"
            >
              ABINARA-1
            </h1>
            <p
              data-aos="fade-up"
              class="mt-6 text-lg font-semibold text-gray-800 leading-relaxed text-shadow"
            >
              Abinara-1 is a team that conducts research and competition for
              <span class="highlight"
                >legged autonomous robots with missions to rescue victims.</span
              >
              The team consists of students of Sepuluh Nopember Institute of Technology. one of the
              competitions that is followed is KRSRI (Kontes Robot SAR Indonesia).
            </p>
          </div>

          <!-- Kolom Kanan: Gambar Hero atau Video -->
          <div class="md:w-1/2 sm:w-1/2 izzul flex items-center justify-center relative" style="min-width:200px;min-height:120px;">
            <transition name="fade-pop" mode="out-in">
              <img
                v-if="!isVideoPermanent"
                key="hero-img"
                data-aos="zoom-in-up"
                src="/src/assets/images/Gambar-Hero.png"
                alt="Anggota Tim Abinara-1"
                class="w-2xl h-auto lg:px-20 md:px-10 transition-pop-img cursor-pointer"
                @mouseenter="showVideo"
                @mouseleave="hideVideo"
                @touchstart.prevent="showVideo"
                @click="showVideo"
              />
              <div
                v-else
                key="hero-video"
                class="video-emboss-wrapper video-emboss-responsive"
                @mouseleave="hideVideo"
              >
                <div class="video-emboss-aspect">
                  <iframe
                    :src="youtubeEmbedUrl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- parallax disini -->
  <div class="parallax-section mt-10 hidden md:block">
    <div class="parallax-background"></div>
  </div>

  <div data-aos="zoom-in-up" class="py-16 items-center self-center mt-20 md:mt-20">
    <h1
      class="lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text"
    >
      PROJECTS
    </h1>
  </div>
  <div data-aos="zoom-in-up" class="flex flex-col md:flex-row items-center justify-between">
    <RobotSlider />
    <p
      data-aos="zoom-in-up"
      class="m-10 mt-6 text-md sm:text-xl font-semibold text-gray-800 leading-relaxed text-shadow"
    >
      Abinara-1 is a student research and competition team from Sepuluh Nopember Institute of
      Technology (ITS) that develops legged autonomous robots for search and rescue missions. The
      team focuses on building agile robots capable of navigating complex terrains to detect and
      assist disaster victims. Through innovation and real-world challenges, Abinara-1 aims to
      advance robotic solutions that can support emergency response and save lives in
      critical situations.
    </p>
  </div>

  <Achievements />
  <Gallery />
  <!-- <Alumni /> -->
</template>

<script>
import { ref, onMounted } from 'vue'
import RobotSlider from './RobotSlider.vue'
import Achievements from './AchievementCard.vue'
import Gallery from '../Gallery.vue'
import Alumni from '../Alumni.vue'

export default {
  components: {
    RobotSlider,
    Achievements,
    Gallery,
    Alumni,
  },
  setup() {
    const isVideoHover = ref(false)
    const isVideoPermanent = ref(false)
    const youtubeEmbedUrl = 'https://www.youtube.com/embed/mr9PO-w45q0?autoplay=1&mute=1'
    let timer = null
    let userInteracted = false

    // Handler untuk hover (desktop) dan tap (mobile)
    const showVideo = () => {
      userInteracted = true
      isVideoPermanent.value = true
      isVideoHover.value = true
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }
    const hideVideo = () => {
      // Tidak melakukan apapun, video tetap tampil jika sudah permanen
      if (!isVideoPermanent.value) isVideoHover.value = false
    }

    onMounted(() => {
      timer = setTimeout(() => {
        if (!userInteracted) {
          isVideoPermanent.value = true
          isVideoHover.value = true
        }
      }, 2000)
    })

    return { isVideoHover, isVideoPermanent, youtubeEmbedUrl, showVideo, hideVideo }
  },
}
</script>

<style scoped>
.fullscreen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-shadow {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

.highlight {
  color: red;
}

.izzul {
  transition: transform 0.3s ease-in-out;
}

.izzul:hover {
  transform: scale(1.1);
}

/* Fade out + pop animation */
.fade-pop-leave-active {
  animation: fadePopOut 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-pop-enter-active {
  animation: fadePopIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes fadePopOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  60% {
    opacity: 0.5;
    transform: scale(1.12);
  }
  100% {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes fadePopIn {
  0% {
    opacity: 0;
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.parallax-section {
  height: 300px;
  overflow: hidden;
  position: relative;
}

.parallax-background {
  background-image: url('/src/assets/images/teams/full-tim.png');
  filter: brightness(50%);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Responsive 16:9 aspect ratio for YouTube video with soft emboss shadow */
.video-emboss-wrapper {
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  background: #fff;
  padding: 0.5rem;
  /* Emboss effect, smooth and elegant */
  box-shadow:
    0 4px 24px 0 rgba(0,0,0,0.10),
    0 1.5px 6px 0 rgba(0,0,0,0.08),
    0 0.5px 1.5px 0 rgba(0,0,0,0.06),
    0 2px 8px 0 rgba(180,180,180,0.10) inset,
    0 -2px 8px 0 rgba(220,220,220,0.10) inset;
}
.video-emboss-responsive {
  min-width: 240px;
  min-height: 135px;
}
@media (max-width: 640px) {
  .fullscreen {
    padding-top: 0.01rem !important;
  }
  .fullscreen > .bg-white {
    padding-top: 0.01rem !important;
  }
  .fullscreen h1 {
    margin-top: 0.02rem !important;
    padding-top: 0 !important;
  }
  .video-emboss-wrapper {
    max-width: 100vw;
    width: 100vw;
    min-width: 0;
    padding: 0.1rem;
    border-radius: 0.6rem;
    margin-left: 4vw;
    margin-right: 4vw;
  }
  .video-emboss-aspect {
    border-radius: 0.4rem;
  }
  .video-emboss-aspect iframe {
    border-radius: 0.4rem;
  }
  .video-emboss-responsive {
    min-width: 0;
    min-height: 101px;
    width: 100vw;
  }
}
.video-emboss-aspect {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #000;
}
.video-emboss-aspect iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0.75rem;
  box-shadow: none;
}
.video-hover-group {
  position: relative;
}
.video-embed-absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}
.transition-pop-img {
  animation: fadePopIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
