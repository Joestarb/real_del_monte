<template>
  <div class="w-16 bg-black text-white flex flex-col items-center py-6 space-y-6">
    <template v-for="icon in icons" :key="icon">
      <component :is="icon" class="w-6 h-6" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { HomeIcon, SearchIcon, MapIcon, LandmarkIcon, PlaneIcon, HotelIcon, UtensilsIcon, CameraIcon, MenuIcon } from 'lucide-vue-next'

const icons = [
  HomeIcon, SearchIcon, MapIcon, LandmarkIcon,
  PlaneIcon, HotelIcon, UtensilsIcon, CameraIcon, MenuIcon
]
</script>
