<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <div class="relative w-full h-screen overflow-hidden">
      <img
        src="@/assets/RDM.jpg"
        alt="Hidalgo"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 text-white p-10 flex flex-col items-center justify-center z-10">
        <div class="w-full flex flex-col items-center">
          <HeroInfo />
          <WeatherInfo />
        </div>
        <LocationMap class="my-6" />
        <div class="text-sm font-semibold mt-4">Conoce más ↓</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from '@/components/SidebarComponent.vue'
import HeroInfo from '@/components/HeroInfo.vue'
import WeatherInfo from '@/components/WeatherInfo.vue'
import LocationMap from '@/components/LocationMap.vue'
</script>
