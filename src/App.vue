<script setup lang="ts">
import SplitBackgroundLayout from "./layout/SplitBackgroundLayout.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <SplitBackgroundLayout>
      <router-view />
    </SplitBackgroundLayout>
  </div>
</template>

<style scoped></style>




