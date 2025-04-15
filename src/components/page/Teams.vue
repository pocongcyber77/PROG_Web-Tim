<template>
  <div class="py-16 items-center self-center mt-14 flex flex-col">
    <h1
      data-aos="fade-down"
      class="lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text text-red-600"
    >
      OUR TEAMS
    </h1>

    <div data-aos="zoom-in" class="flex flex-wrap justify-center gap-4 mt-8">
      <NavButtons
        v-for="(category, index) in categories"
        :key="index"
        :isActive="activeCategory === category"
        @click="setActiveCategory(category)"
      >
        {{ category }}
      </NavButtons>
    </div>
  </div>

  <div class="mb-40">
    <img
      data-aos="fade-right"
      src="/src/assets/images/teams/logo/head-gm.png"
      alt="General Manager"
      class="w-76 sm:w-100 md:w-110 h-auto ml-4 sm:ml-6 md:ml-10 lg:ml-20"
    />
    <div id="general-manager" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div data-aos="fade-right" class="px-4 md:px-10 lg:px-20">
        <p class="sm:text-2xl xl:text-3xl text-xl font-bold text-gray-800 ml-6">
          The General Manager or Head of the Abinara-1 Robotics Research Team oversees projects,
          coordinates the team, manages resources, and ensures innovation, compliance, and
          successful execution of research initiatives.
        </p>
      </div>
      <div data-aos="fade-left">
        <GenManagerProfile
          :teamMembers="teamMembers['General Manager']"
          :divisionLogo="divisionLogos['General Manager']"
        />
      </div>
    </div>
  </div>

  <div class="mb-40">
    <img
      data-aos="fade-right"
      src="/src/assets/images/teams/logo/head-offc.png"
      alt="Official"
      class="w-60 sm:w-70 md:w-80 h-auto mt-4 ml-4 sm:ml-6 md:ml-10 lg:ml-20"
    />
    <div id="official" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div data-aos="fade-right" class="px-4 md:px-10 lg:px-20">
        <p class="sm:text-2xl xl:text-3xl text-xl font-bold text-gray-800 ml-6">
          The official division at Abinara-1 responsible for non-technical needs manages
          administration, sponsorship, finance, design, and branding. This division ensures smooth
          operations, secures funding, maintains financial records, and handles the team's visual
          identity and public presence.
        </p>
      </div>
      <div data-aos="fade-left">
        <OfficialProfile
          :teamMembers="teamMembers['Official']"
          :divisionLogo="divisionLogos['Official']"
        />
      </div>
    </div>
  </div>

  <div class="mb-40">
    <img
      data-aos="fade-right"
      src="/src/assets/images/teams/logo/head-prog.png"
      alt="Programming"
      class="w-70 sm:w-90 md:w-100 h-auto mt-4 ml-4 sm:ml-6 md:ml-10 lg:ml-20"
    />
    <div id="programming" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="px-4 md:px-10 lg:px-20">
        <p
          data-aos="fade-right"
          class="sm:text-2xl xl:text-3xl text-xl font-bold text-gray-800 ml-6"
        >
          The Programming Division at Abinara-1 develops the robot’s algorithms, focusing on
          autonomous navigation, decision-making, and task execution. This division ensures the
          robot operates efficiently through precise coding and system optimization.
        </p>
      </div>
      <div data-aos="fade-left">
        <ProgProfile
          :teamMembers="teamMembers['Programming']"
          :divisionLogo="divisionLogos['Programming']"
        />
      </div>
    </div>
  </div>

  <div class="mb-40">
    <img
      data-aos="fade-right"
      src="/src/assets/images/teams/logo/head-elec.png"
      alt="Electrical"
      class="w-70 sm:w-90 md:w-100 h-auto mt-4 ml-4 sm:ml-6 md:ml-10 lg:ml-20"
    />
    <div id="electrical" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div data-aos="fade-right" class="px-4 md:px-10 lg:px-20">
        <p class="sm:text-2xl xl:text-3xl text-xl font-bold text-gray-800 ml-6">
          The Electrical Division at Abinara-1 is responsible for the robot’s hardware, including
          circuitry, sensors, and power systems. They ensure seamless integration of components and
          work on future developments to enhance the robot’s performance and reliability.
        </p>
      </div>
      <div data-aos="fade-left">
        <ElecProfile
          :teamMembers="teamMembers['Electrical']"
          :divisionLogo="divisionLogos['Electrical']"
        />
      </div>
    </div>
  </div>

  <div class="mb-40">
    <img
      data-aos="fade-right"
      src="/src/assets/images/teams/logo/head-mech.png"
      alt="Mechanical"
      class="w-70 sm:w-90 md:w-100 h-auto mt-4 ml-4 sm:ml-6 md:ml-10 lg:ml-20"
    />
    <div id="mechanical" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div data-aos="fade-right" class="px-4 md:px-10 lg:px-20">
        <p class="sm:text-2xl xl:text-3xl text-xl font-bold text-gray-800 ml-6">
          The Mechanical Division at Abinara-1 is responsible for the physical manufacturing of the
          robot, from 3D design to material and equipment selection. This division ensures the
          structural integrity, functionality, and durability of the robot for optimal performance.
        </p>
      </div>
      <div data-aos="fade-left">
        <MechProfile
          :teamMembers="teamMembers['Mechanical']"
          :divisionLogo="divisionLogos['Mechanical']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavButtons from '../buttons/NavButtons.vue'
import ProgProfile from '../profiles/divisi/ProgProfile.vue'
import ElecProfile from '../profiles/divisi/ElecProfile.vue'
import GenManagerProfile from '../profiles/divisi/GenManagerProfile.vue'
import OfficialProfile from '../profiles/divisi/OfficialProfile.vue'
import MechProfile from '../profiles/divisi/MechProfile.vue'
import teamData from './dataMember.vue'
console.log(teamData)

export default {
  components: {
    NavButtons,
    ProgProfile,
    ElecProfile,
    GenManagerProfile,
    OfficialProfile,
    MechProfile,
  },
  data() {
    return {
      categories: ['General Manager', 'Official', 'Programming', 'Electrical', 'Mechanical'],
      activeCategory: 'General Manager',
      divisionLogos: teamData.divisionLogos,
      teamMembers: teamData.teamMembers,
    }
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category
      const targetElement = document.getElementById(category.toLowerCase().replace(' ', '-'))
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },
  },
}
</script>
