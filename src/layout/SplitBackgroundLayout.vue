<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen w-full overflow-hidden">

    <Navbar />

    <div class="flex-1 flex flex-col lg:flex-row">
      <div class="hidden lg:block lg:w-[30%]"></div>

      <div
        class="bg-svg-background w-full flex-1 lg:w-[70%] flex justify-center items-center p-4"
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="1500"
      ></div>
      <div class="w-full absolute inset-0">
        <slot />
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.bg-svg-background {
  background-image: url("../assets/images/earth.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* .animated-bg {
  background: linear-gradient(
    -45deg,
    #0000ff99,
    #ff00004d,
    #00000066,
    #ffffff33
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
} */
</style>
