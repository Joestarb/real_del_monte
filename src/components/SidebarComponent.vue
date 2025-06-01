<template>
  <div class="sidebar">
    <Home class="w-7.5 h-7.5 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
    <Search class="w-7 h-7 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
    <CreditCard class="w-8 h-8 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
    <Building2 class="w-8 h-8 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
    <Plane class="w-8 h-8 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
    <Building class="w-8 h-8 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
    <Utensils class="w-8 h-8 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
    <Camera class="w-8 h-8 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
    <Menu class="w-8 h-8 text-white cursor-pointer hover:text-yellow-600 transition-colors" />
  </div>
</template>

<script lang="ts" setup>
import {
  Home,
  Search,
  CreditCard,
  Building2,
  Plane,
  Building,
  Utensils,
  Camera,
  Menu
} from 'lucide-vue-next';
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
</style>
