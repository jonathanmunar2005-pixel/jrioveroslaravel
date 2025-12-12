<template>
  <div>
    <nav class="bg-gray-100 p-4 flex gap-4 justify-center mb-8">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/products-services" class="hover:underline">Products & Services</router-link>
      <router-link to="/about" class="hover:underline">About Us</router-link>
      <router-link to="/contact" class="hover:underline">Contact Us</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script setup>
// No logic needed for simple layout
</script>
