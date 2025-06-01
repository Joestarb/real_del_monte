<template>
  <div class="sidebar">
    <div
      class="sidebar__icon-wrapper"
      v-for="icon in icons"
      :key="icon.alt"
      @mouseenter="hoveredAlt = icon.alt"
      @mouseleave="hoveredAlt = ''"
    >
      <img :src="icon.src" :alt="icon.alt" :class="icon.class" />
      <span v-if="hoveredAlt === icon.alt" class="sidebar__label">{{ icon.alt }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoveredAlt = ref('')
const icons = [
  { src: '/src/assets/icons/home.png', alt: 'Inicio', class: 'icon__home' },
  { src: '/src/assets/icons/lupa.png', alt: 'Buscar', class: 'icon__home' },
  { src: '/src/assets/icons/directions.png', alt: 'Vive su magia', class: 'icon__home' },

  { src: '/src/assets/icons/temple.png', alt: 'Atractivos', class: 'icon' },
  { src: '/src/assets/icons/papalote.png', alt: 'Festividades', class: 'icon' },
  { src: '/src/assets/icons/hotel.png', alt: 'Hoteles', class: 'icon' },
  { src: '/src/assets/icons/cubiertos.png', alt: 'Restaurantes', class: 'icon' },

  { src: '/src/assets/icons/camera.png', alt: 'Tours', class: 'icon' },
  { src: '/src/assets/icons/menu.png', alt: 'Menú', class: 'icon' },
]
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.2rem;
  font-size: 1.9rem;
  padding: 1.5rem 1.5rem;
  border-radius: 1rem;
  margin-right: 14.5rem;
  height: fit-content;
}
.sidebar__icon-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar__label {
  margin-left: 2.5rem;
  color: #ffd600;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
  pointer-events: none;
  animation: fadeIn 0.15s;
  position: absolute;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.icon__home {
  width: 20rem;
  height: 20rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  max-width: 3rem;
  max-height: 3.5rem;
  object-fit: contain;
  cursor: pointer;
  filter: brightness(0) invert(1);
  transition: filter 0.2s;
}
.icon {
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  max-width: 2.5rem;
  max-height: 2.5rem;
  object-fit: contain;
  cursor: pointer;
  filter: brightness(0) invert(1);
  transition: filter 0.2s;
}
.icon:hover,
.icon__home:hover {
  filter: brightness(0) saturate(100%) invert(80%) sepia(40%) saturate(2500%) hue-rotate(1deg)
    brightness(90%);
}
</style>
