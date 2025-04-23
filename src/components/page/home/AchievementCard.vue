<template>
  <div data-aos="fade-up" class="py-0 mt-16 bg-white">
    <div class="container mx-auto px-4 mt-20 md:mt-20">
      <h2
        class="place-self-center mb-10 lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-4xl gradient-text"
      >
        ACHIEVEMENT
      </h2>
    </div>
    <div class="bg-white py-12">
      <div class="mx-auto px-4">
        <!-- Ubah menjadi grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="(achievement, index) in achievements"
            :key="index"
            class="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border-l-4 border-red-500"
            @click="openModal(achievement)"
          >
            <div class="flex items-center">
              <div
                class="flex-shrink-0 gradient-box text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <span class="text-2xl font-bold">#</span>
              </div>
              <div class="ml-4">
                <h3 class="text-xl font-bold">{{ achievement.year }}</h3>
                <p class="text-gray-600">{{ achievement.title }}</p>
                <p class="text-gray-600">{{ achievement.title2 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pop up -->
    <transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-10 h-screen flex items-center justify-center z-50"
        @click="closeModal"
      >
        <transition name="scale">
          <div
            class="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden relative"
            @click.stop
          >
            <!-- Gambar -->
            <div class="relative">
              <img
                :src="selectedAchievement.image"
                alt="Achievement Image"
                class="w-full h-90 object-cover"
              />
              <!-- Tombol Close -->
              <button
                @click="closeModal"
                class="absolute top-2 right-2 text-red-600 hover:text-red-400 bg-white rounded-full p-1 shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Konten -->
            <div class="p-4">
              <h3 class="text-xl font-bold">{{ selectedAchievement.year }}</h3>
              <p class="text-gray-600 font-semibold">{{ selectedAchievement.title }}</p>
              <p class="text-gray-600 font-semibold">{{ selectedAchievement.title2 }}</p>
              <p class="text-gray-500 mt-4">{{ selectedAchievement.details }}</p>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import achievements from '@/assets/data/achievements.json'

export default {
  name: 'AchievementCard',
  data() {
    return {
      isModalOpen: false,
      selectedAchievement: null,
      achievements,
    }
  },
  methods: {
    openModal(achievement) {
      this.selectedAchievement = achievement
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.selectedAchievement = null
    },
  },
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(to top, red, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hover\:shadow-lg:hover {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.cursor-pointer {
  cursor: pointer;
}

/* Transition effects */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
</style>
