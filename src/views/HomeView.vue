<template>
  <section class="realdelmonte-container">
    <!-- Fondo -->
    <img src="@/assets/real.jpeg" alt="Real del Monte" class="background-image" />

    <!-- Capa de degradado -->
    <div class="gradient-overlay"></div>

    <!-- Contenido principal -->
    <div class="content">
      <div class="logos logos-top">
        <img class="mr-6" src="@/assets/LogoPM.png" alt="Logo" />
        <img src="@/assets/PueblosM.svg" alt="Pueblos Mágicos" />
      </div>

      <Sidebar />

      <InfoComponent />

      <!-- Botón Conoce más -->
      <button class="conoce-mas conoce-mas-bottom">Conoce más
        <ChevronDown class="chevron-bottom" />
      </button>

      <MapComponent />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Sidebar from '@/components/SidebarComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import MapComponent from '@/components/MapaComponent.vue';
import { ChevronDown } from 'lucide-vue-next';
</script>

<style scoped>
.realdelmonte-container {
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: sans-serif;
  color: white;
  overflow: hidden;
}

.background-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.3) 80%, transparent 100%),
    linear-gradient(to top left, rgba(0, 0, 0, 1) 0%, transparent 30%);
  z-index: 1;
}

.content {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 2;
  padding-left: 5.6rem;
  padding-top: 2rem;
}
.logos {
  display: flex;
  margin-bottom: 1rem;
}

.logos img {
  height: 60px;
  object-fit: contain;
}

.logos-top {
  position: absolute;
  top: 4.3rem;
  left: 56%;
  transform: translateX(-50%);
  margin-top: 0;
  margin-bottom: 0;
  z-index: 10;
  background: none;
}

.conoce-mas-bottom {
  position: absolute;
  left: 57%;
  bottom: 6.9rem;
  transform: translateX(-50%);
  margin-bottom: 0;
  z-index: 10;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chevron-bottom {
  width: 1.2rem;
  height: 1.2rem;
  display: block;
}
</style>
