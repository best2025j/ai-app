<script setup lang="ts">
const topCards = [
  {
    image: new URL("../assets/images/board.png", import.meta.url).href,
    text: "Ransomware Response",
  },

  {
    image: new URL("../assets/images/blancks.png", import.meta.url).href,
    text: "Cybersecurity Audit",
  },
  {
    image: new URL("../assets/images/blanck.png", import.meta.url).href,
    text: "Phishing Simulation",
  },
  {
    image: new URL("../assets/images/blanck.png", import.meta.url).href,
    text: "Data Breach Plan",
  },
];

const bottomCards = [
  {
    image: new URL("../assets/images/blancks.png", import.meta.url).href,
    text: "Ransomware Response",
  },

  {
    image: new URL("../assets/images/board.png", import.meta.url).href,
    text: "Cybersecurity Audit",
  },
  {
    image: new URL("../assets/images/blanck.png", import.meta.url).href,
    text: "Phishing Simulation",
  },
  {
    image: new URL("../assets/images/blancks.png", import.meta.url).href,
    text: "Data Breach Plan",
  },
];
</script>

<template>
  <div
    class="flex flex-col w-full font-[Share Tech Mono] items-start justify- mx-auto h-full"
  >
    <div class="flex w-full relative pt-22 mx-auto h-full">
      <div class="flex flex-col z-10 md:w-[80%] overflow-hidden px-4 relative mx-auto h-full">
        <h1
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-right"
          class="md:text-7xl font-medium md:leading-[120px] text-3xl uppercase"
        >
          Scenarios
        </h1>

        <!-- CONTAINER THAT DOES NOT SCROLL THE BODY -->

        <div
          data-aos-delay="500"
          data-aos-duration="2000"
          data-aos="fade-left"
          class="w-full overflow-hidden md:pl-40 pl-4"
        >
          <div
            class="flex overflow-x-auto no-scrollbar gap-4 py-4"
          >
            <div
              v-for="(topCard, index) in topCards"
              :key="index"
              class="min-w-[287px] flex-shrink-0"
            >
              <div class="relative py-4 h-full w-full">
                <img
                  :src="topCard.image"
                  class="w-full h-auto"
                  alt="Card Image"
                />

                <!--  -->
                <div
                  class="absolute inset-0 flex flex-col justify-between z-20 p-5"
                >
                  <!-- Top Right SVG Button -->
                  <div class="flex justify-end pt-8">
                    <button
                      class="cursor-pointer hover:scale-105 transition-transform"
                    >
                      <svg
                        width="80"
                        height="40"
                        viewBox="0 0 80 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M80 18.4053L58.4062 40H0V21.9326L21.9326 0H80V18.4053Z"
                          fill="#66E0F8"
                        />
                        <path
                          d="M55.7071 20.7071C56.0976 20.3166 56.0976 19.6834 55.7071 19.2929L49.3431 12.9289C48.9526 12.5384 48.3195 12.5384 47.9289 12.9289C47.5384 13.3195 47.5384 13.9526 47.9289 14.3431L53.5858 20L47.9289 25.6569C47.5384 26.0474 47.5384 26.6805 47.9289 27.0711C48.3195 27.4616 48.9526 27.4616 49.3431 27.0711L55.7071 20.7071ZM25 20V21H55V20V19H25V20Z"
                          fill="#070708"
                          fill-opacity="0.9"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="pb-8">
                    <button
                      class="text-start z-20 text-[15px] px-6 py-4 hover:scale-105 transition-transform rounded-full text-white/80 border border-[#66E0F8]"
                    >
                      {{ topCard.text }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos="fade-right"
          class="w-full overflow-hidden"
        >
          <div
            class="flex overflow-x-auto no-scrollbar carousel-track gap-4 py-4 px-4 md:px-0"
          >
            <div
              v-for="(bottomCard, index) in bottomCards"
              :key="index"
              class="min-w-[287px] flex-shrink-0"
            >
              <div class="relative py-4 h-full w-full">
                <img
                  :src="bottomCard.image"
                  class="w-full h-auto"
                  alt="Card Image"
                />

                <!--  -->
                <div
                  class="absolute inset-0 flex flex-col justify-between z-20 p-5"
                >
                  <!-- Top Right SVG Button -->
                  <div class="flex justify-end pt-8">
                    <button
                      class="cursor-pointer hover:scale-105 transition-transform"
                    >
                      <svg
                        width="80"
                        height="40"
                        viewBox="0 0 80 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M80 18.4053L58.4062 40H0V21.9326L21.9326 0H80V18.4053Z"
                          fill="#66E0F8"
                        />
                        <path
                          d="M55.7071 20.7071C56.0976 20.3166 56.0976 19.6834 55.7071 19.2929L49.3431 12.9289C48.9526 12.5384 48.3195 12.5384 47.9289 12.9289C47.5384 13.3195 47.5384 13.9526 47.9289 14.3431L53.5858 20L47.9289 25.6569C47.5384 26.0474 47.5384 26.6805 47.9289 27.0711C48.3195 27.4616 48.9526 27.4616 49.3431 27.0711L55.7071 20.7071ZM25 20V21H55V20V19H25V20Z"
                          fill="#070708"
                          fill-opacity="0.9"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="pb-8">
                    <button
                      class="text-start z-20 text-[15px] px-6 py-4 hover:scale-105 transition-transform rounded-full text-white/80 border border-[#66E0F8]"
                    >
                      {{ bottomCard.text }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.carousel-track {
  display: flex;
  animation: scroll-x 3s linear infinite;
  width: max-content;
}

@keyframes scroll-x {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
