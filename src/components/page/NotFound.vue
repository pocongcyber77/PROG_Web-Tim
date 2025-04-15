<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-300 to-gray-50 text-black"
  >
    <h1 class="text-9xl font-extrabold text-red-500 drop-shadow-lg">404</h1>

    <p class="text-2xl font-semibold mt-4">Oops! Page Not Found</p>
    <p class="text-lg text-gray-600 mt-2 text-center max-w-md">
      The page you're looking for doesn't exist. It might have been removed or the URL might be
      incorrect.
    </p>
    <!-- Back to Home -->
    <router-link
      to="/"
      class="mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-2xl hover:bg-red-600 transition duration-300"
    >
      Go Back Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped></style>
