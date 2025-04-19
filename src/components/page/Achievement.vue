<template>
  <div class="bg-white py-20">
    <div class="container mx-auto px-4 mt-20 md:mt-10 mb-20">
      <h2
        data-aos="fade-down"
        class="place-self-center mb-20 lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text"
      >
        ACHIEVEMENT
      </h2>

      <div class="relative max-w-5xl mx-auto">
        <!-- Garis Timeline -->
        <div
          class="absolute h-full w-1 bg-red-600 left-1/2 top-0 transform -translate-x-1/2 z-0"
        ></div>

        <!-- Achievement Items -->
        <div class="relative space-y-16">
          <div
            v-for="(achievement, index) in achievements"
            :key="index"
            class="group relative flex flex-col md:flex-row items-center"
          >
            <!-- Item Kiri -->
            <div
              data-aos="fade-up"
              class="w-full md:w-1/2 pr-0 md:pr-8 order-2 md:order-1"
              :class="{ 'md:text-right': index % 2 === 0 }"
            >
              <div
                class="lg:h-70 md:h-50 h-70 w-full bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden"
              >
                <img
                  v-if="achievement.image"
                  :src="achievement.image"
                  :alt="achievement.title"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span v-else class="text-gray-500">Image {{ index + 1 }}</span>
              </div>
            </div>

            <!-- Titik Tengah -->
            <div
              data-aos="fade-down"
              class="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full z-10 top-1/2 md:top-[initial] md:relative md:left-[initial] md:translate-x-0 md:flex-shrink-0 md:mx-4 md:order-2"
            ></div>

            <!-- Item Kanan -->
            <div
              data-aos="fade-up"
              class="w-full md:w-1/2 pl-0 md:pl-8 order-3"
              :class="{ 'md:text-left': index % 2 === 0 }"
            >
              <div class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 class="text-2xl font-bold text-red-600 mb-2">{{ achievement.year }}</h3>
                <p class="text-gray-800 font-medium mb-1">{{ achievement.title }}</p>
                <p v-if="achievement.title2" class="text-gray-800 font-medium">
                  {{ achievement.title2 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import achievements from '/src/assets/data/achievements.json'

export default {
  name: 'Achievement',
  data() {
    return {
      achievements,
    }
  },
}
</script>

<style scoped></style>
