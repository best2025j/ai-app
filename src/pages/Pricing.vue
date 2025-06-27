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
    class="w-full h-full font-[Share Tech Mono] flex flex-col items-center justify-center"
  >
    <!-- Heading -->
    <div class="w-[80%] mx-auto">
      <h1
        class="text-5xl md:text-7xl font-medium uppercase leading-tight"
      >
        Pricing
      </h1>
    </div>

    <div
      class="w-[80%] pt-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <div
        v-for="(starter, index) in starters"
        :key="index"
        class="relative w-full h-full overflow-hidden rounded-md shadow-lg group"
      >
        <!-- Background Image -->
        <img
          :src="starter.image"
          class="w-full h-full z-0"
          alt="Starter Pricing Image"
        />

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 z-10 flex flex-col h-full justify-between bg-black/40 text-white"
        >
          <!-- Top Right Button -->
          <div class="flex justify-end ">
            <button
              class="uppercase bg-white text-black text-sm px-4 py-3 w-[162px] hover:scale-105 transition-transform"
            >
              {{ starter.title }}
            </button>
          </div>

          <!-- Centered Content -->
          <div
            class="text-center space-y-4 w-[340px] justify-center flex flex-col items-center mx-auto"
          >
            <h2 class="text-xl font-semibold">
              {{ starter.header }}
            </h2>

            <div
              class="bg-white/10 h-[400px] flex space-x-4 text-sm rounded-md p-4 shadow-md"
            >
              <!-- Feature List with Icon -->
              <ul class="space-y-3">
                <li
                  v-for="(item, index) in starter.description"
                  :key="index"
                  class="flex items-center gap-2 text-white text-sm"
                >
                  <img :src="starter.icon" alt="icon" class="w-8 h-8 mt-1" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <p class="text-3xl font-bold">
              ${{ starter.price }} <span class="text-xs font-normal">/ mo</span>
            </p>
          </div>

          <!-- Bottom Button -->
          <div class="flex pl-44">
            <button
              class="uppercase bg-white text-black text-sm px-4 py-3 w-[162px] hover:scale-105 transition-transform"
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
