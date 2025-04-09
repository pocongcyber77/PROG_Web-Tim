<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return this.isActive
        ? 'px-6 py-2 bg-black text-white rounded-full text-lg font-medium style-button'
        : 'px-6 py-2 bg-white text-gray-600 border border-gray-600 rounded-full text-lg font-medium style-button'
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.style-button {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
</style>
