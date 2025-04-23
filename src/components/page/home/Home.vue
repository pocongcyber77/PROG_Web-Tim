<template>
  <section class="fullscreen">
    <div class="bg-white py-16">
      <div class="mx-auto px-4 ml-10">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Kolom Kiri -->
          <div class="md:w-1/2 mb-8 md:mb-0 md:mt-0 mt-10 lg:ml-10 md:ml-4">
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

          <!-- Kolom Kanan: Gambar Faizzul -->
          <div class="md:w-1/2 sm:w-1/2 izzul">
            <img
              data-aos="zoom-in-up"
              src="/src/assets/images/Gambar-Hero.png"
              alt="Anggota Tim Abinara-1"
              class="w-2xl h-auto lg:px-20 md:px-10"
            />
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
</style>
