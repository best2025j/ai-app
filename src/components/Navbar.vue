<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import soundonIcon from "../assets/svgs/soundons.svg";
import muteIcon from "../assets/svgs/mute.svg";

const router = useRouter();
const route = useRoute();

const isActive = (path: string) => route.path === path;

// Navigate to route
const goTo = (path: string) => {
  if (!isActive(path)) router.push(path);
};

const isSoundOn = ref(true);
let bgMusic: HTMLAudioElement;

onMounted(() => {
  bgMusic = new Audio("/sound.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.4;

  bgMusic.play().catch((error) => {
    console.error("Autoplay was prevented:", error);
  });
});

const toggleSound = () => {
  isSoundOn.value = !isSoundOn.value;

  if (isSoundOn.value) {
    bgMusic.play().catch((error) => {
      console.error("Error playing background music:", error);
    });
  } else {
    bgMusic.pause();
  }
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Navigation
const navigateTo = (path: string): void => {
  isMenuOpen.value = false;
  window.location.href = path; // or use router.push(path): void if you're using Vue Router
};
</script>

<template>
  <div
    class="w-full bg-gradient-to-r from-black via-black to-black z-20 relative top-0"
  >
    <div
      class="flex w-full xl:w-[80%] mx-auto items-end justify-between shadow-black p-4"
    >
      <div class="flex items-center space-x-3">
        <img src="../assets/svgs/logo.svg " alt="" />
        <h1 class="font-[Antonio] md:leading-7 text-sm md:text-3xl text-white">
          Cyber War Room
        </h1>
      </div>

      <ul class="hidden lg:flex space-x-4 text-sm">
        <div class="flex relative">
          <div class="bg-black absolute -left-4.5 w-10 h-3 -rotate-45" />
          <li
            @click="goTo('/')"
            :class="isActive('/') ? 'text-black bg-white' : 'bg-white/30'"
            class="uppercase font-[Share Tech Mono] cursor-pointer py-2 w-32 text-center font-semibold"
          >
            home
          </li>
          <div
            class="bg-black absolute -bottom-0 -right-4.5 w-10 h-3 -rotate-45"
          />
        </div>

        <div class="flex relative">
          <div class="bg-black absolute -left-4.5 w-10 h-3 -rotate-45" />
          <li
            @click="goTo('/about')"
            :class="isActive('/about') ? 'text-black bg-white' : 'bg-white/30'"
            class="uppercase font-[Share Tech Mono] cursor-pointer py-2 w-32 text-center font-semibold"
          >
            about
          </li>
          <div
            class="bg-black absolute -bottom-0 -right-4.5 w-10 h-3 -rotate-45"
          />
        </div>
        <div class="flex relative">
          <div class="bg-black absolute -left-4.5 w-10 h-3 -rotate-45" />
          <li
            @click="goTo('/senarios')"
            :class="
              isActive('/senarios') ? 'text-black bg-white' : 'bg-white/30'
            "
            class="uppercase font-[Share Tech Mono] cursor-pointer py-2 w-32 text-center font-semibold"
          >
            senarios
          </li>
          <div
            class="bg-black absolute -bottom-0 -right-4.5 w-10 h-3 -rotate-45"
          />
        </div>
        <div class="flex relative">
          <div class="bg-black absolute -left-4.5 w-10 h-3 -rotate-45" />
          <li
            @click="goTo('/pricing')"
            :class="
              isActive('/pricing') ? 'text-black bg-white' : 'bg-white/30'
            "
            class="uppercase font-[Share Tech Mono] cursor-pointer py-2 w-32 text-center font-semibold"
          >
            pricing
          </li>
          <div
            class="bg-black absolute -bottom-0 -right-4.5 w-10 h-3 -rotate-45"
          />
        </div>
      </ul>

      <div class="hidden lg:flex items-center space-x-4">
        <button @click="toggleSound" class="p-2 cursor-pointer">
          <img
            :src="isSoundOn ? soundonIcon : muteIcon"
            alt="Sound Toggle"
            class="w-[24px] h-[24px] opacity-60"
          />
        </button>

        <!-- 
        <button class="cursor-pointer">
          <img src="../assets/svgs/mute.svg " alt="" />
        </button> -->

        <button class="flex relative">
          <div class="bg-black absolute -left-4.5 w-10 h-3 -rotate-45" />

          <span
            class="uppercase text-sm text-black font-[Share Tech Mono] bg-[#66E0F8] cursor-pointer py-2 w-32 text-center font-semibold"
            >login</span
          >
          <div
            class="bg-black absolute -bottom-0 -right-4.5 w-10 h-3 -rotate-45"
          />
        </button>
      </div>

      <!-- menu -->
      <button @click="toggleMenu" class="lg:hidden p-2">
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <!-- Mobile Menu -->

    <!-- Backdrop -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-50 h-full">
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/50 bg-opacity-50 z-50"
        @click="isMenuOpen = false"
      ></div>

      <!-- Mobile Drawer -->
      <div
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        class="absolute top-0 left-0 w-[80%] border-r rounded-tr-3xl h-full bg-black lg:hidden z-50"
      >
        <ul
          class="flex-col flex justify-start items-center pt-16 space-y-4 text-sm"
        >
          <li
            @click="navigateTo('/')"
            :class="isActive('/') ? 'text-white' : 'text-white/30'"
            class="uppercase font-[Share Tech Mono] cursor-pointer py-2 w-32 text-center font-semibold"
          >
            home
          </li>

          <li
            @click="navigateTo('/about')"
            :class="isActive('/about') ? 'text-white' : 'text-white/30'"
            class="uppercase font-[Share Tech Mono] cursor-pointer py-2 w-32 text-center font-semibold"
          >
            about
          </li>

          <li
            @click="navigateTo('/senarios')"
            :class="isActive('/senarios') ? 'text-white' : 'text-white/30'"
            class="uppercase font-[Share Tech Mono] cursor-pointer py-2 w-32 text-center font-semibold"
          >
            senarios
          </li>

          <li
            @click="navigateTo('/pricing')"
            :class="isActive('/pricing') ? 'text-white' : 'text-white/30'"
            class="uppercase font-[Share Tech Mono] cursor-pointer py-2 w-32 text-center font-semibold"
          >
            pricing
          </li>
        </ul>

        <div
          class="flex-col absolute bottom-0 w-full flex items-center space-y-4 p-4"
        >
          <button @click="toggleSound" class="p-2 cursor-pointer">
            <img
              :src="isSoundOn ? soundonIcon : muteIcon"
              alt="Sound Toggle"
              class="w-[24px] h-[24px] opacity-60"
            />
          </button>

          <div class="w-full">
            <button
              class="uppercase text-sm text-black font-[Share Tech Mono] bg-[#66E0F8] cursor-pointer py-3 rounded-full w-full text-center font-semibold"
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
