<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col w-full font-[Share Tech Mono] items-start justify-center px-4"
  >
    <!-- Content Wrapper -->
    <div
      class="w-full max-w-7xl mx-auto h-full flex flex-col items-start z-10 justify-center top-20 relative space-y-4"
    >
      <!-- About Heading -->
      <h1
        data-aos="fade-right"
        class="md:text-7xl text-xl font-medium md:leading-[120px] uppercase"
      >
        About
      </h1>

      <div class="space-y-4">
        <!-- Block 1 -->
        <div
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos="fade-down"
          class="relative group hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="../assets/images/Subtract.png"
            alt="What is a War Room"
            class="w-full md:h-auto h-40"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center items-center px-4 text-center"
          >
            <h2 class="text-lg md:text-2xl py-4">What is a War Room?</h2>
            <p class="text-sm md:text-base text-white/80 max-w-md">
              Cyber War Room is like you're in a war room, ground zero, trying
              to defend against cyber attacks. Through simulated training,
              you'll become stronger and more prepared.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <!-- Block 1 -->
        <div
          data-aos-delay="150"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos="fade-down"
          class="relative group hover:scale-[1.02] lg:left-72 md:-top-8 transition-transform duration-300"
        >
          <img
            src="../assets/images/Subtract.png"
            alt="What is a War Room"
            class="w-full md:h-auto h-40"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center items-center px-4 text-center"
          >
            <h2 class="text-lg md:text-2xl py-4">Our vision</h2>
            <p class="text-sm md:text-base text-white/80 max-w-md">
              To become the leading gamified cybersecurity training platform,
              shaping a future where every professional is prepared to make
              smart, timely decisions in the face of digital crises.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <!-- Block 1 -->
        <div
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos="fade-down"
          class="relative group hover:scale-[1.02] lg:left-[600px] md:-top-14 transition-transform duration-300"
        >
          <img
            src="../assets/images/Subtract.png"
            alt="What is a War Room"
            class="w-full md:h-auto h-40"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center items-center px-4 text-center"
          >
            <h2 class="text-lg md:text-2xl py-4">Our mission</h2>
            <p class="text-sm md:text-base text-white/80 max-w-md">
              Empower individuals and organizations to better understand,
              prevent, and respond to cyber threats through immersive,
              role-based simulations that turn learning into action.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      data-aos-delay="150"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos="fade-left"
      class="md:-top-50 relative hidden lg:block"
    >
      <img src="../assets/images/start.png " alt="" />
    </div>
  </div>
</template>

<style scoped></style>
