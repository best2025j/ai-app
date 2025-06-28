<script setup lang="ts"></script>

<template>
  <div class="flex h-full flex-col">
    <div class="fixed top-0 left-0 bg-transparent w-full h-full -z-10"></div>

    <div div class="flex w-full h-screen items-center justify-center mx-auto">
      <div class="md:w-[650px] w-full font-[Share Tech Mono] p-4">
        <h1
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos="fade-right"
          class="md:text-9xl text-3xl text-center md:text-start font-medium lg:leading-[120px] uppercase"
        >
          Choose your path
        </h1>

        <div class="flex relative my-4 md:w-80 w-full">
          <button
            data-aos-delay="700"
            data-aos-duration="1000"
            data-aos="zoom-in"
            class="uppercase rounded-full text-sm font-[Share Tech Mono] border border-[#66E0F8] cursor-pointer py-5 w-full text-center font-semibold"
          >
            enter
          </button>
        </div>

        <div class="flex pt-40 space-x-2">
          <div
            data-aos-delay="300"
            data-aos-duration="1500"
            data-aos="fade-in"
            class="md:w-20 rounded-2xl h-2 bg-white/20"
          />
          <div
            data-aos-delay="650"
            data-aos-duration="1500"
            data-aos="fade-in"
            class="md:w-20 rounded-2xl h-2 bg-white/20"
          />
          <div
            data-aos-delay="1000"
            data-aos-duration="2000"
            data-aos="fade-in"
            class="md:w-52 rounded-2xl h-2 bg-white"
          />
        </div>
      </div>

      <div
        data-aos-delay="700"
        data-aos-duration="1000"
        data-aos="fade-left"
        class="md:block hidden"
      >
        <img src="../assets/images/hud.png " alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
