<template>
  <div class="container mx-auto px-4 py-16 flex flex-col items-center mt-14">
    <h1
      class="lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text text-red-600"
    >
      PROJECTS
    </h1>

    <div class="flex flex-wrap justify-center gap-4 mt-8 mb-10">
      <NavButtons
        v-for="(category, index) in categories"
        :key="index"
        :isActive="activeCategory === category"
        @click="setActiveCategory(category)"
      >
        {{ category }}
      </NavButtons>
    </div>

    <div class="flex flex-col w-full">
      <div
        v-for="(robot, index) in robots"
        :key="index"
        :id="categories[index]"
        class="flex flex-col md:flex-row items-center md:items-start md:justify-between"
        :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
      >
        <!-- Deskripsi -->
        <div
          class="md:w-[50%] lg:w-[60%] bg-gradient-to-r from-red-900 to-red-500 text-white p-6 rounded-2xl shadow-2xl my-20 xl:mx-20 lg:mx-10 md:mx-6 text-center md:text-left"
        >
          <p class="text-lg leading-relaxed font-semibold text-shadow">
            {{ robot.description }}
          </p>
        </div>

        <!-- Gambar Robot -->
        <div class="md:w-[45%] lg:w-[50%] flex justify-center my-6 md:mt-0">
          <div class="relative p-6 rounded-full flex items-center justify-center">
            <img
              :src="robot.image"
              :alt="robot.alt"
              class="object-contain max-w-sm w-full h-[250px] md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavButtons from '../buttons/NavButtons.vue'
import robots from './data/robots.js'
console.log(robots)

export default {
  components: {
    NavButtons,
  },
  data() {
    return {
      categories: ['Fiametta', 'Phynix', 'Arabot', 'Abibot'],
      activeCategory: 'Fiametta',
      robots,
    }
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category
      const targetElement = document.getElementById(category)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },
  },
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}
</style>
