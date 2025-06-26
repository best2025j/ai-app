<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const isActive = (path: string) => route.path === path;

// Navigate to route
const goTo = (path: string) => {
  if (!isActive(path)) router.push(path);
};
</script>

<template>
  <div class="w-full bg-transparent">
    <div
      class="flex w-[80%] mx-auto items-end justify-between shadow-black p-4"
    >
      <div class="flex items-center space-x-3">
        <img src="../assets/svgs/logo.svg " alt="" />
        <h1 class="font-[Antonio] leading-7 text-3xl text-white">
          Cyber War Room
        </h1>
      </div>

      <ul class="flex space-x-4 text-sm">
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

      <div class="flex items-center space-x-4">
        <button class="cursor-pointer">
          <img src="../assets/svgs/mute.svg " alt="" />
        </button>

        <button class="flex relative">
          <div class="bg-black absolute -left-4.5 w-10 h-3 -rotate-45" />

          <span
            class="uppercase text-sm font-[Share Tech Mono] bg-[#66E0F8] cursor-pointer py-2 w-32 text-center font-semibold"
            >login</span
          >
          <div
            class="bg-black absolute -bottom-0 -right-4.5 w-10 h-3 -rotate-45"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
