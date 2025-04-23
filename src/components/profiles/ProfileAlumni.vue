<template>
  <div
    class="bg-gray-900 rounded-3xl shadow-md w-80 h-120 relative border-2 border-black overflow-hidden mb-10 mx-auto"
  >
    <!-- Jabatan Box -->
    <div
      class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 flex items-center justify-center gap-2 shadow-xl z-15 max-w-full"
    >
      <span class="text-gray-900 font-semibold text-sm text-center w-full truncate">
        {{ department || 'Unknown Department' }}
      </span>
    </div>

    <!-- Inner Box -->
    <div
      class="absolute top-4 left-4 right-4 bottom-20 rounded-xl shadow-lg shadow-black overflow-hidden"
      :style="{
        backgroundImage: `url(${backgroundPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
      }"
    >
      <div
        class="absolute top-23 left-4 text-white text-3xl font-bold z-20 shadow-text font-custom"
      >
        {{ year }}
      </div>

      <!-- Photo -->
      <div class="flex justify-center items-center h-4/5 photo-style z-0 mt-6">
        <img :src="profilePic" alt="Profile" class="w-60 h-full object-cover" />
      </div>

      <!-- Sosmed -->
      <div class="flex justify-center items-center">
        <div class="bg-white w-full py-4 flex justify-center gap-14 z-10">
          <a :href="socialMedia.instagram" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/icons/merah/instagram.svg" alt="Instagram" class="w-6 h-6 logo" />
          </a>
          <a :href="socialMedia.github" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/icons/merah/github.svg" alt="GitHub" class="w-6 h-6 logo" />
          </a>
          <a :href="socialMedia.linkedin" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/icons/merah/linkedin.svg" alt="LinkedIn" class="w-6 h-6 logo" />
          </a>
        </div>
      </div>
    </div>

    <!-- Informasi Nama dan keterangan -->
    <div class="absolute bottom-0 w-full bg-gray-900 p-4">
      <p class="text-white font-bold text-lg text-center">{{ name }}</p>
      <p class="text-gray-300 text-sm text-center">{{ position || 'Unknown Position' }}</p>
    </div>
  </div>
</template>

<script>
import alumni from '../../assets/data/alumni.json'

export default {
  props: {
    profilePic: String,
    name: String,
    department: String,
    company: String,
    year: String,
    position: String,
    socialMedia: {
      type: Object,
      default: () => ({
        instagram: '#',
        github: '#',
        linkedin: '#',
      }),
    },
    backgroundPattern: {
      type: String,
      default: '/src/assets/images/teams/frame-foto.png',
    },
  },
  data() {
    return {
      alumni,
    }
  },
}
</script>

<style scoped>
img {
  filter: drop-shadow(0 0 3px rgba(53, 225, 200, 0.8));
}

.logo {
  transition: transform 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.3);
}

.alumni {
  transition: transform 0.3s ease-in-out;
}

.alumni:hover {
  /* transform: scale(1.1); */
  cursor: pointer;
}

.shadow-text {
  text-shadow: 2px 2px 2px rgba(4, 17, 15, 0.8);
  font-family: 'popins', sans-serif;
}
</style>
