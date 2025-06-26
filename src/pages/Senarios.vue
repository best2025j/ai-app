<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col w-full font-[Share Tech Mono] items-start justify-center mx-auto h-full"
  >
    <div class="flex w-[80%] relative top-10 mx-auto h-full">
      <div class="pl-14">
        <h1 class="text-7xl font-medium leading-[120px] uppercase">
          Scenarios
        </h1>

        <div class="relative py-4 w-full">
          <img src="../assets/images/board.png " alt="" />
          <div class="absolute inset-0 flex flex-col justify-between z-20 p-5">
            <!-- Top Right SVG Button -->
            <div class="flex justify-end pt-8 ">
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

            <div class="pb-8 ">
              <button
                class="text-start z-20 text-[15px] px-6 py-4 hover:scale-105 transition-transform text-white/80 border border-[#66E0F8]"
              >
                Ransomware Response.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
