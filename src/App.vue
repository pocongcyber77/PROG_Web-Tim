<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// load CSS Swiper
const loadSwiperCSS = () => {
  if (
    !document.querySelector(
      'link[href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"]',
    )
  ) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
    document.head.appendChild(link)
  }
}

// load Swiper JS pake Promise
const loadSwiperJS = () => {
  return new Promise((resolve, reject) => {
    if (
      !document.querySelector(
        'script[src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"]',
      )
    ) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
      script.async = true
      script.onload = () => {
        console.log('Swiper JS berhasil dimuat')
        resolve()
      }
      script.onerror = () => {
        console.error('Gagal memuat Swiper JS')
        reject(new Error('Gagal memuat Swiper JS'))
      }
      document.body.appendChild(script)
    } else {
      resolve()
    }
  })
}

onMounted(async () => {
  loadSwiperCSS()
  try {
    await loadSwiperJS()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
