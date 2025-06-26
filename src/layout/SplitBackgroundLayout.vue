<script setup lang="ts"></script>

<template>
  <div class="relative">
    <div class="flex w-full">
      <div class="w-[30%]" />
      <div class="bg-svg-background w-[70%] flex items-center justify-center" />
    </div>
    <div class="w-full absolute inset-0"><slot /></div>
  </div>
</template>

<style scoped>
.bg-svg-background {
  background-image: url("../assets/images/earth.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
