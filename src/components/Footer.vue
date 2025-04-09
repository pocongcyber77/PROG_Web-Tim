<template>
  <footer class="mt-auto gradient-box text-white p-8">
    <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 lg:justify-between">
      <div
        class="flex flex-col items-center md:items-start md:border-r md:border-white md:pr-4 lg:pr-14"
      >
        <!-- Logo -->
        <div class="flex space-x-8 mb-4">
          <img src="../assets/icons/Logo_ITS-Putih.png" alt="Logo ITS" class="h-28" />
          <!-- <img src="../assets/icons/logo-ukm.png" alt="Logo ITS Robotika" class="h-24" /> -->
        </div>
        <!-- Paragraf -->
        <p class="text-sm mb-4 text-center md:text-left">
          With professionalism and integrity, we innovate and create impactful <br />
          solutions. Let's collaborate to build a smarter and more resilient future.
        </p>
        <!-- Medsos -->
        <div class="flex space-x-4">
          <a href="#" class="p-1">
            <img src="../assets/icons/github.png" alt="GitHub" class="h-6 icons" />
          </a>
          <a href="#" class="p-1">
            <img src="../assets/icons/linkedin.png" alt="LinkedIn" class="h-6 icons" />
          </a>
          <a href="#" class="p-1">
            <img src="../assets/icons/instagram.png" alt="Instagram" class="h-6 icons" />
          </a>
          <a href="#" class="p-1">
            <img src="../assets/icons/tiktok.png" alt="TikTok" class="h-6 icons" />
          </a>
        </div>
      </div>

      <!-- Kolom Tengah -->
      <div class="flex flex-col mt-8 md:mt-0 md:pl-8 md:pr-8 text-center font-bold">
        <h2 class="text-xl font-bold mb-2">Menu</h2>
        <ul class="text-sm">
          <li class="menu-item"><router-link to="/">Home</router-link></li>
          <li class="menu-item"><router-link to="/teams">Teams</router-link></li>
          <li class="menu-item"><router-link to="/robots">Robots</router-link></li>
          <li class="menu-item"><router-link to="/achievement">Achievement</router-link></li>
          <!-- <li class="menu-item"><router-link to="/gallery">Gallery</router-link></li> -->
          <li class="menu-item"><router-link to="/alumni">Alumni</router-link></li>
        </ul>
      </div>

      <!-- Kolom Kanan: Get in Touch -->
      <div
        class="flex flex-col md:items-start mt-8 md:mt-0 md:border-l md:border-white lg:space-x-10 xl:pl-18 lg:pl-14 md:pl-6 items-center"
      >
        <h2 class="text-xl font-bold mb-4">Get in Touch</h2>
        <div class="flex items-center mb-2">
          <img src="../assets/icons/maps.png" alt="Location" class="h-6 mr-2" />
          <a
            href="https://g.co/kgs/q67G4Js"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline"
          >
            Sekretariat Robotika ITS, Pusat Robotika ITS
          </a>
        </div>
        <div class="flex items-center mb-2">
          <img src="../assets/icons/phone.png" alt="Phone" class="h-6 mr-2" />
          <span>911</span>
        </div>
        <div class="flex items-center">
          <img src="../assets/icons/email.png" alt="Email" class="h-6 mr-2" />
          <a href="mailto:abinara.its@gmail.com" class="hover:underline">abinara.its1@gmail.com</a>
        </div>
      </div>
    </div>

    <!-- Bagian Bawah -->
    <div class="mt-8 md:mt-4 text-center text-sm">
      ©2025, All Rights Reserved by Abinara-1 ITS Robotics.
    </div>
  </footer>
</template>

<style>
footer {
  margin-top: auto;
}

.icons {
  transition: transform 0.3s ease-in-out;
}

.icons:hover {
  transform: scale(1.3);
}

.menu-item {
  transition: all 0.2s ease-in-out;
  align-items: center;
}

.menu-item:hover {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  /* font-weight: bold; */
  transform: scale(1.1);
}
</style>
