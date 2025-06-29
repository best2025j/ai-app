<script setup lang="ts">
import { ref, onMounted } from "vue";
import SplitBackgroundLayout from "./layout/SplitBackgroundLayout.vue";

const loading = ref(true);
const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 1;
    } else {
      clearInterval(interval);
      loading.value = false;
    }
  }, 30); // Controls speed of loading
});
</script>

<template>
  <!-- Loading Screen -->
  <transition name="fade">
    <div
      v-if="loading"
      class="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      <!-- Animated Gradient Blobs -->
      <div class="absolute w-full h-full -z-10">
        <div
          class="absolute w-[400px] h-[400px] bg-gradient-to-br from-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-40 animate-blob1"
        ></div>
        <div
          class="absolute w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400 to-red-500 rounded-full filter blur-3xl opacity-40 animate-blob2 top-[50%] left-[40%]"
        ></div>
        <div
          class="absolute w-[450px] h-[450px] bg-gradient-to-tl from-blue-400 to-indigo-600 rounded-full filter blur-3xl opacity-40 animate-blob3 top-[20%] right-[10%]"
        ></div>
      </div>

      <!-- Loading Text -->
      <div class="text-white text-5xl font-bold animate-pulse">
        {{ progress }}%
      </div>
    </div>
  </transition>

  <!-- Main App -->
  <div v-if="!loading">
    <SplitBackgroundLayout>
      <router-view />
    </SplitBackgroundLayout>
  </div>
</template>

<style scoped>
@keyframes blob1 {
  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
    border-radius: 42% 58% 47% 53% / 60% 40% 60% 40%;
  }
  50% {
    transform: translate(30px, -20px) scale(1.1);
    border-radius: 57% 43% 60% 40% / 47% 61% 39% 53%;
  }
}
@keyframes blob2 {
  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
    border-radius: 50% 50% 60% 40% / 60% 40% 50% 50%;
  }
  50% {
    transform: translate(-20px, 30px) scale(1.2);
    border-radius: 40% 60% 50% 50% / 45% 55% 65% 35%;
  }
}
@keyframes blob3 {
  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
    border-radius: 55% 45% 50% 50% / 50% 60% 40% 50%;
  }
  50% {
    transform: translate(40px, -10px) scale(0.9);
    border-radius: 60% 40% 45% 55% / 55% 45% 50% 50%;
  }
}

.animate-blob1 {
  animation: blob1 20s ease-in-out infinite;
}
.animate-blob2 {
  animation: blob2 25s ease-in-out infinite;
}
.animate-blob3 {
  animation: blob3 22s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
