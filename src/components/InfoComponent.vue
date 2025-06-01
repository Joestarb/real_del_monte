<template>
  <div class="info-box">
    <div class="info-text">
      <p class="estado">Hidalgo</p>
      <h1>Real del monte</h1>
      <p class="descripcion">
        Siéntate frente a una de las bellas plazas del Pueblo Mágico, mientras saboreas un delicioso paste y luego
        descubre sus rincones que conservan un dejo británico.
      </p>

      <!-- Clima -->
      <div class="flex items-center gap-6 mt-6">
        <div class="flex items-center gap-2">
          <span class="text-2xl">☁️</span>
          <div class="text-sm">
            <div class="font-semibold">Clima actual</div>
            Lluvia ligera
          </div>
        </div>
        <div class="text-3xl font-bold">11°</div>
        <div class="text-3xl">|</div>
        <div class="text-sm">
          <div class="font-semibold">Humedad</div>
          95%
        </div>
      </div>
    </div>
  </div>
</template>

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
