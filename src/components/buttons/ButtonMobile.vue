<template>
  <div class="relative">
    <div class="device">
      <div class="container">
        <button
          id="burger"
          class="open-main-nav"
          :class="{ 'is-open': isOpen }"
          @click="toggleMenu"
        >
          <span class="burger"></span>
          <span class="burger-text">Menu</span>
        </button>

        <!-- Menu Navigasi -->
        <nav id="main-nav" class="main-nav" :class="{ 'is-open': isOpen }">
          <ul>
            <li v-for="(item, index) in menuItems" :key="index">
              <router-link
                :to="item.path"
                :style="{
                  transition: `all 275ms ${175 + index * 50}ms`,
                }"
                class="text-white hover:text-yellow-400"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
.main-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  transition: all 0.375s ease-in-out;
}

.main-nav.is-open {
  opacity: 1;
  z-index: 100;
  visibility: visible;
}

.main-nav::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -15px;
  background: linear-gradient(to bottom, rgb(219, 5, 5), rgb(93, 12, 12));
  transform-origin: 0 0;
  transform: skew(-14deg) translateX(-120%);
  transition: all 0.275s 0.1s;
}

.main-nav.is-open::before {
  transform: skew(-14deg) translateX(0);
}

.main-nav ul {
  display: inline-flex;
  flex-direction: column;
  height: 93%;
  align-items: flex-end;
  justify-content: center;
  transform: translateX(-10%) skew(-16deg);
}

.main-nav li {
  display: block;
  margin: 0.5rem 0;
  text-align: right;
  transform: skew(16deg);
}

.main-nav a {
  opacity: 0;
  transform: translateY(-10px);
  color: #ffffff;
  font-size: 1.4em;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.main-nav.is-open a {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.2s ease-in-out;
}

.open-main-nav {
  position: absolute;
  top: 4px;
  right: 15px;
  z-index: 1000;
  background: none;
  border: 0;
  cursor: pointer;
}

.burger {
  position: relative;
  display: block;
  width: 28px;
  height: 4px;
  margin: 0 auto;
  background: #311534;
  transform: skew(5deg);
  transition: all 0.275s;
}

.burger:before,
.burger:after {
  content: '';
  display: block;
  height: 100%;
  background: #311534;
  transition: all 0.275s;
}

.burger:before {
  transform: translateY(-16px) skew(-10deg);
}

.burger:after {
  transform: translateY(-12px) translateX(-2px) skew(-20deg);
}

.is-open .burger {
  transform: skew(5deg) translateY(-8px) rotate(-45deg);
}

.is-open .burger:before {
  transform: translateY(0) skew(-10deg) rotate(75deg);
}

.is-open .burger:after {
  transform: translateY(-12px) translateX(10px) skew(-20deg);
  opacity: 0;
}
</style>
