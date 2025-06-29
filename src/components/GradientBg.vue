<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const blobs = ref([
  createBlob("bg-gradient-to-br from-pink-500 to-purple-500"),
  createBlob("bg-gradient-to-tr from-yellow-400 to-red-500"),
  createBlob("bg-gradient-to-tl from-blue-400 to-indigo-600"),
  createBlob("bg-gradient-to-bl from-green-400 to-cyan-500"),
]);

function createBlob(tailwindGradient) {
  const size = 600 + Math.random() * 200;
  return {
    x: Math.random() * (screenWidth - size),
    y: Math.random() * (screenHeight - size),
    vx: (Math.random() - 0.5) * 2, // Velocity X
    vy: (Math.random() - 0.5) * 2, // Velocity Y
    size,
    gradient: "",
    borderRadius: randomRadius(),
    class: tailwindGradient,
  };
}

function randomRadius() {
  return `${50 + Math.random() * 25}% ${50 + Math.random() * 25}% ${
    50 + Math.random() * 25
  }% ${50 + Math.random() * 25}% / ${50 + Math.random() * 25}% ${
    50 + Math.random() * 25
  }% ${50 + Math.random() * 25}% ${50 + Math.random() * 25}%`;
}

let animationId;

function animate() {
  blobs.value.forEach((blob) => {
    blob.x += blob.vx * 1.5;
    blob.y += blob.vy * 1.5;

    // Bounce from edges
    if (blob.x <= 0 || blob.x + blob.size >= screenWidth) {
      blob.vx *= -1;
      blob.borderRadius = randomRadius();
    }

    if (blob.y <= 0 || blob.y + blob.size >= screenHeight) {
      blob.vy *= -1;
      blob.borderRadius = randomRadius();
    }
  });

  animationId = requestAnimationFrame(animate);
}

onMounted(() => {
  // Assign gradient background after mounting
  blobs.value.forEach((blob) => {
    const el = document.createElement("div");
    el.className = blob.class;
    document.body.appendChild(el);
    const style = window.getComputedStyle(el);
    blob.gradient = style.backgroundImage;
    el.remove();
  });

  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>



<template>
  <div class="fixed inset-0 z-10 overflow-hidden">
    <div
      v-for="(blob, index) in blobs"
      :key="index"
      class="absolute rounded-[50%] mix-blend-multiply blur-3xl opacity-25 pointer-events-none transition-all duration-75"
      :style="{
        top: blob.y + 'px',
        left: blob.x + 'px',
        width: blob.size + 'px',
        height: blob.size + 'px',
        background: blob.gradient,
        borderRadius: blob.borderRadius,
      }"
    />
  </div>
</template>

<style scoped>
/* Optional: smoother shape changes */
div {
  transition: border-radius 1s ease;
}
</style>
