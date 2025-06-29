<script setup lang="ts">
const starters = [
  {
    image: new URL("../assets/images/Subt.png", import.meta.url).href,
    text: "select",
    icon: new URL("../assets/svgs/star.svg", import.meta.url).href,
    description: [
      "2 scenarios",
      "1 role per user",
      "Basic decision analytics",
      "Individual progress tracking and reports",
      "Email support",
    ],
    price: "9.99",
    title: "starter",
    header: "For small teams and initial exploration of the platform",
  },
  {
    image: new URL("../assets/images/Subt.png", import.meta.url).href,
    text: "select",
    icon: new URL("../assets/svgs/star.svg", import.meta.url).href,

    description: [
      "Full access to all scenarios",
      "Multiple roles per user",
      "Team mode with impact analysis",
      "Individual progress tracking and reports",
      "Basic decision analytics.",
    ],
    price: "19.99",
    title: "pro",
    header: "Ideal for corporate teams, HR, and cybersecurity departments",
  },
  {
    image: new URL("../assets/images/Subt.png", import.meta.url).href,
    text: "select",
    icon: new URL("../assets/svgs/star.svg", import.meta.url).href,

    description: [
      " Industry-specific custom scenarios",
      "Integration with LMS / Active Directory",
      "Compliance-ready audit reports",
      "Live sessions with facilitator",
      "Dedicated account manager and  support",
    ],
    price: "29.99",
    title: "Enterprise",
    header: "Maximum customization and company-wide training",
  },
];
</script>

<template>
  <div
    class="w-full md::max-w-7xl overflow-y-auto max-h-screen font-[Share Tech Mono] flex flex-col items-center px-4 py-20"
  >
    <!-- Section Heading -->
    <div class="w-full max-w-7xl mx-auto mt-10">
      <h1
        data-aos="fade-in"
        data-aos-delay="800"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        class="text-4xl md:text-6xl lg:text-7xl font-medium uppercase leading-tight"
      >
        Pricing
      </h1>
    </div>

    <!-- Pricing Cards Grid -->
    <div
      class="w-full max-w-7xl z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <div
        v-for="(starter, index) in starters"
        :key="index"
        :data-aos="['fade-right', 'fade-down', 'fade-left'][index % 3]"
        :data-aos-delay="['200', '500', '700'][index % 3]"
        :data-aos-duration="['1000', '1500', '1000'][index % 3]"
        class="relative w-full rounded-md shadow-lg overflow-hidden group"
      >
        <!-- Card Image -->
        <img
          :src="starter.image"
          alt="Starter Pricing Image"
          class="w-full h-full object-cover"
        />

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 bg-black/40 text-white flex flex-col justify-between p-4 z-10"
        >
          <!-- Top Button -->
          <div class="flex justify-end">
            <button
              class="uppercase bg-white text-black text-sm px-4 py-2 w-[140px] hover:scale-105 transition-transform"
            >
              {{ starter.title }}
            </button>
          </div>

          <!-- Center Content -->
          <div class="text-center space-y-4 mx-auto w-full max-w-xs">
            <h2 class="text-lg md:text-xl font-semibold">
              {{ starter.header }}
            </h2>

            <!-- Feature List -->
            <div class="bg-white/10 rounded-md shadow-md p-4">
              <ul class="space-y-3">
                <li
                  v-for="(item, idx) in starter.description"
                  :key="idx"
                  class="flex items-center gap-3 text-sm"
                >
                  <img :src="starter.icon" alt="icon" class="w-6 h-6" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Pricing -->
            <p class="text-3xl font-bold">
              ${{ starter.price }}
              <span class="text-xs font-normal">/ mo</span>
            </p>
          </div>

          <!-- Bottom Button -->
          <div class="flex justify-center mt-6">
            <button
              class="uppercase bg-white text-black text-sm px-4 py-2 w-[140px] hover:scale-105 transition-transform"
            >
              {{ starter.text }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
