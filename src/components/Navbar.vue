<template>
  <nav class="bg-white shadow-lg fixed w-full z-100 mb-40 lg:mb-0 md:mb-0">
    <div class="max-w-screen mx-auto lg:px-16 md:px-10 sm:px-8 px-4 2xl:py-4 sm:py-3 py-2">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/">
          <img src="../assets/images/LogoAbinara-Merah.png" class="logo h-18" />
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex lg:space-x-6 md:space-x-3">
          <router-link
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            class="menu-item text-gray-700 hover:text-red-600 px-3 py-2 text-md font-medium transition-colors"
            active-class="text-black-600 border-3 border-red-600 rounded-2xl"
          >
            {{ item.title }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <ButtonMobile @toggle="isOpen = !isOpen" />
        </div>
      </div>

      <!-- Dropdown -->
      <div v-show="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            active-class="text-blue-600 bg-blue-50"
            @click="closeMenu"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonMobile from './buttons/ButtonMobile.vue'

export default {
  components: {
    ButtonMobile,
  },
  data() {
    return {
      isOpen: false,
      menuItems: [
        { title: 'Home', path: '/' },
        { title: 'Teams', path: '/teams' },
        { title: 'Robots', path: '/robots' },
        { title: 'Achievement', path: '/achievement' },
        // { title: 'Gallery', path: '/gallery' },
        { title: 'Alumni', path: '/alumni' },
      ],
    }
  },
  methods: {
    closeMenu() {
      this.isOpen = false
    },
  },
}
</script>

<style scoped>
.logo {
  transition: transform 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.2);
}

.menu-item {
  transition: all 0.2s ease-in-out;
}

.menu-item:hover {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  font-weight: bold;
  transform: scale(1.1);
}
</style>
