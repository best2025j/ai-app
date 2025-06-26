<script setup lang="ts">
import SplitBackgroundLayout from "./layout/SplitBackgroundLayout.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <SplitBackgroundLayout>
      <router-view />
    </SplitBackgroundLayout>
    <Footer />
  </div>
</template>

<style scoped></style>




