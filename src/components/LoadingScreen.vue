<template>
  <div class="loading-screen" :class="{ 'fade-out': loadingComplete }">
    <div class="loading-content">
      <div class="logo-loader">
        <img src="@/assets/LogoPM.png" alt="Logo" class="logo-spinner" />
        <div class="loader-shadow"></div>
      </div>
      <div class="loading-message">
        <span class="letter" v-for="(letter, index) in 'Hidalgo'" :key="index"
              :style="{ animationDelay: `${index * 0.1}s` }">
          {{ letter }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const loadingComplete = ref(false)

onMounted(() => {
  setTimeout(() => {
    loadingComplete.value = true
  }, 1500)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
}

.loading-screen.fade-out {
  opacity: 0;
  pointer-events: none;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.logo-loader {
  width: 120px;
  height: 120px;
  position: relative;
  margin-bottom: 40px;
}

.logo-spinner {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 2;
  animation: spin 1.3s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


.loader-shadow {
  width: 120px;
  height: 10px;
  background: rgba(58, 123, 213, 0.2);
  position: absolute;
  top: 130px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.8s linear infinite;
  z-index: 1;
}

.loading-message {
  font-size: 1.5rem;
  color: #3a7bd5;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.letter {
  display: inline-block;
  opacity: 0;
  animation: letterFade 0.5s forwards;
}

@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow324 {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}

@keyframes letterFade {
  to {
    opacity: 1;
  }
}

.letter:nth-child(1) { animation-delay: 0.1s; }
.letter:nth-child(2) { animation-delay: 0.2s; }
.letter:nth-child(3) { animation-delay: 0.3s; }
.letter:nth-child(4) { animation-delay: 0.4s; }
.letter:nth-child(5) { animation-delay: 0.5s; }
.letter:nth-child(6) { animation-delay: 0.6s; }
.letter:nth-child(7) { animation-delay: 0.7s; }
</style>
