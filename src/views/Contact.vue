<template>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isScrolled = ref(false)
  const mobileMenuOpen = ref(false)
  
  const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
  }
</script>

<style scoped>
.font-body {
  font-family: 'Bahnschrift', 'Segoe UI Semibold', system-ui, sans-serif;
}

.font-display {
  font-family: 'Bahnschrift SemiBold SemiCondensed', 'Bahnschrift', 'Segoe UI Semibold', system-ui, sans-serif;
}
</style>