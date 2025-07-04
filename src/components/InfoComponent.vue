<template>
  <div class="info-box">
    <div class="info-text">
      <p class="estado">Hidalgo</p>
      <h1>Real del monte</h1>
      <p class="descripcion">
        Siéntate frente a una de las bellas plazas del Pueblo Mágico, mientras saboreas un delicioso
        paste y luego descubre sus rincones que conservan un dejo británico.
      </p>

      <!-- Clima -->
      <div class="flex items-center gap-6 mt-6">
        <div class="flex items-center gap-2">
          <span class="text-2xl">
            <img
              v-if="weather.icono"
              :src="`https://openweathermap.org/img/wn/${weather.icono}@2x.png`"
              alt="icono clima"
              style="width: 40px; height: 40px"
            />
            <span v-else>☁️</span>
          </span>
          <div class="text-sm">
            <div class="font-semibold">Clima actual</div>
            <span v-if="loading">Cargando...</span>
            <span v-else-if="error">{{ error }}</span>
            <span v-else>{{ weather.descripcion }}</span>
          </div>
        </div>
        <div class="text-3xl font-bold">
          <span v-if="loading">-</span>
          <span v-else>{{ weather.temperatura }}°</span>
        </div>
        <div class="text-3xl">|</div>
        <div class="text-sm">
          <div class="font-semibold">Humedad</div>
          <span v-if="loading">-</span>
          <span v-else>{{ weather.humedad }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getWeatherRealDelMonte } from './weatherService.ts'

const weather = ref<{
  descripcion: string
  temperatura: string | number
  humedad: string | number
  icono: string
}>({ descripcion: '', temperatura: '', humedad: '', icono: '' })
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    weather.value = await getWeatherRealDelMonte()
  } catch {
    error.value = 'No se pudo obtener el clima'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.info-box {
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  justify-content: center;
  max-width: 550px;
  color: white;
}

.info-text .estado {
  font-weight: bold;
  font-size: 1.3rem;
  color: #e0e0e0;
  margin-bottom: 0.3rem;
}

.info-text h1 {
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.info-text .descripcion {
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
  line-height: 1.5;
  max-width: 450px;
}
</style>
