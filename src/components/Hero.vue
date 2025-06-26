<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col w-full items-start justify-center mx-auto"
  >
    <div
      class="flex w-full h-full items-start justify-center mx-auto"
    >
      <div class="w-[650px] font-[Share Tech Mono] pt-20 pl-14">
        <h1 class="text-9xl font-medium leading-[120px] uppercase">
          Choose your path
        </h1>

        <button class="flex relative my-4 w-80">
          <span
            class="uppercase text-sm font-[Share Tech Mono] border border-[#66E0F8] cursor-pointer py-5 w-full text-center font-semibold"
            >enter</span
          >
          <div
            class="border-[#66E0F8] border-t bg-black absolute -bottom-[6px] -right-[8px] w-6 h-[17px] -rotate-42"
          />
        </button>
      </div>

      <div class="">
        <img src="../assets/images/hud.png " alt="" />
      </div>
    </div>

    <div class="flex md:hidden space-x-2">
      <div class="w-20 h-2 bg-white/20" />
      <div class="w-20 h-2 bg-white/20" />
      <div class="w-52 h-2 bg-white" />
    </div>
  </div>
</template>

<style scoped></style>
