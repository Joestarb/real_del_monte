<template>
  <div class="mapa">
    <img
      src="@/assets/Mexico_Map.svg"
      alt="Mapa de México" />
    <div class="pin">📍</div>
  </div>
</template>

<style scoped>
.mapa {
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  width: 230px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mapa img {
  width: 100%;
  opacity: 0.9;
  border-radius: 0.5rem;
}

.pin {
  position: absolute;
  top: 46%;
  left: 43%;
  font-size: 1.6rem;
  color: black;
}
</style>
