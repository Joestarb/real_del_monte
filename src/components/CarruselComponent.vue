<template>
  <div class="carousel-wrapper">
    <div class="carousel-track">
      <div class="carousel-slide" v-for="(image, index) in duplicatedImages" :key="index">
        <div class="image-container">
          <img :src="image.src" :alt="'Imagen ' + index" />
          <div class="text-overlay">
            <h3>{{ image.title }}</h3>
            <p>{{ image.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const images = [
    { src: new URL('@/assets/carrusel/CENTRO.jpg', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'Descubre los rumbos del centro' },
    { src: new URL('@/assets/carrusel/PASTES.jpg', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'Elabora tu paste' },
    { src: new URL('@/assets/carrusel/PENA.jpeg', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'La Peña del Zumate' },
    { src: new URL('@/assets/carrusel/MINA.jpg', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'Mina de Acosta' },
    { src: new URL('@/assets/carrusel/RUEDA.jpg', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'Mina La Dificultad' },
    { src: new URL('@/assets/carrusel/MUSEO.jpg', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'Museo Casa Grande' },
    { src: new URL('@/assets/carrusel/CALLEJON.jpg', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'Callejón de los artistas' },
    { src: new URL('@/assets/carrusel/CASCADA.png', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'Cascada de Bandola' },
    { src: new URL('@/assets/carrusel/DULCES.jpg', import.meta.url).href, title: 'REAL DEL MONTE', subtitle: 'Compra artesanía y productos regionales' },
  ]

  const duplicatedImages = [...images, ...images]
</script>

<style scoped>
  .carousel-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  .carousel-track {
    display: flex;
    width: max-content;
    animation: scroll-carousel 20s linear infinite;
  }

  .carousel-slide {
    flex: 0 0 auto;
    width: 220px;
    margin-right: 10px;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 180px;
    border: 5px solid white;
    border-radius: 10px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    width: 100%;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    font-family: sans-serif;
  }

  .text-overlay h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
  }

  .text-overlay p {
    margin: 0;
    font-size: 0.85rem;
  }

  @keyframes scroll-carousel {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>
