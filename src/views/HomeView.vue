<template>
  <section class="realdelmonte-container">
    <!-- Sección Hero con imagen de fondo -->
    <div class="hero-section">
      <img src="@/assets/real.jpeg" alt="Real del Monte" class="background-image" />
      <div class="gradient-overlay"></div>

      <!-- Contenido del hero -->
      <div class="content">
        <div class="logos logos-top">
          <img class="mr-6" src="@/assets/LogoPM.png" alt="Logo" />
          <img src="@/assets/PueblosM.svg" alt="Pueblos Mágicos" />
        </div>

        <Sidebar />

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

        <div class="mapa">
          <img src="@/assets/Mexico_Map.svg" alt="Mapa de México" />
          <div class="pin">📍</div>
        </div>

        <!-- Botón Conoce más -->
        <button class="conoce-mas conoce-mas-bottom">Conoce más
          <ChevronDown class="chevron-bottom" />
        </button>
      </div>
    </div>

    <!-- Contenido adicional scrollable -->
    <div class="content-below">
<section class="section-content">
        <h2>Atractivos</h2>
        <div class="tours-grid">
          <div class="tour-item">
            <h3>REAL DEL MONTE</h3>
            <p>Descubre los rumbos del centro</p>
          </div>
          <div class="tour-item">
            <h3>REAL DEL MONTE</h3>
            <p>Elabora tu paste</p>
          </div>
          <div class="tour-item">
            <h3>REAL DEL MONTE</h3>
            <p>La Peña del Zumate</p>
          </div>
          <div class="tour-item">
            <h3>REAL DEL MONTE</h3>
            <p>Mina de Acú</p>
          </div>
        </div>
      </section>

      <section class="section-content">
        <h2>Vive su magia</h2>
        <p>
          Muchas historias confluyen en este poblado de legado minero: sus casonas y construcciones de aire inglés se combinan con el olor a pastes y pan de pulque cocinados en sus hornos; mientras el frío y la neblina llegan por la tarde, cubriendo las chimeneas de las viejas minas y los altos pinos del panteón, donde reposan algunos de los mineros ingleses que aquí trabajaron y le dieron parte de la identidad a este poblado en la montaña de Hidalgo.
        </p>
      </section>

      <section class="section-content">
        <h2>El motivo</h2>
        <h3>Su pasado minero de Real del Monte</h3>
        <p>En 1552 se descubrieron las primeras vetas de mineral en este pueblo.</p>
        <p>Las minas son hoy museos históricos.</p>
        <p>Españoles, ingleses, mexicanos y norteamericanos las trabajaron en diferentes épocas.</p>
        <p>El oro y la plata dieron gran riqueza a este lugar.</p>
      </section>

      <section class="section-content">
        <h2>¿Cómo llegar?</h2>
        <div class="transport-option">
          <h3>Autobús:</h3>
          <p>ADO, Flecha Roja y Futura llegan a Pachuca. De ahí, dirígete al Mercado Benito Juárez donde salen los colectivos a Real del Monte.</p>
        </div>
        <div class="transport-option">
          <h3>Avión:</h3>
          <p>ADO conecta a Pachuca con el aeropuerto de CDMX.</p>
        </div>
      </section>

      <section class="section-content">
        <h2>Imprescindibles</h2>
        <ul class="attractions-list">
          <li>Recorrer el Museo de la Mina de la Dificultad.</li>
          <li>Probar pastes.</li>
          <li>Conocer las tumbas del Panteón Inglés.</li>
        </ul>
      </section>

      <section class="section-content">
        <h2>Festividades</h2>
        <div class="festivities-grid">
          <div class="festivity-item">
            <h3>REAL DEL MONTE</h3>
            <p>Descubre los rumbos del centro</p>
          </div>
          <div class="festivity-item">
            <h3>REAL DEL MONTE</h3>
            <p>Elabora tu paste</p>
          </div>
          <div class="festivity-item">
            <h3>REAL DEL MONTE</h3>
            <p>La Peña del Zumate</p>
          </div>
          <div class="festivity-item">
            <h3>REAL DEL MONTE</h3>
            <p>Mina de Acú</p>
          </div>
        </div>
      </section>

      <section class="section-content">
        <h2>Hoteles</h2>
        <div class="attractions-grid">
          <div class="attraction-item">
            <h3>REAL DEL MONTE</h3>
            <p>Descubre los rumbos del centro</p>
          </div>
          <div class="attraction-item">
            <h3>REAL DEL MONTE</h3>
            <p>Elabora tu paste</p>
          </div>
          <div class="attraction-item">
            <h3>REAL DEL MONTE</h3>
            <p>La Peña del Zumate</p>
          </div>
          <div class="attraction-item">
            <h3>REAL DEL MONTE</h3>
            <p>Mina de Acú</p>
          </div>
        </div>
      </section>

      <section class="section-content">
        <h2>Restaurantes</h2>
        <div class="attractions-grid">
          <div class="attraction-item">
            <h3>REAL DEL MONTE</h3>
            <p>Descubre los rumbos del centro</p>
          </div>
          <div class="attraction-item">
            <h3>REAL DEL MONTE</h3>
            <p>Elabora tu paste</p>
          </div>
          <div class="attraction-item">
            <h3>REAL DEL MONTE</h3>
            <p>La Peña del Zumate</p>
          </div>
          <div class="attraction-item">
            <h3>REAL DEL MONTE</h3>
            <p>Mina de Acú</p>
          </div>
        </div>
      </section>

      <section class="section-content">
        <h2>Tours</h2>
        <div class="tours-grid">
          <div class="tour-item">
            <h3>REAL DEL MONTE</h3>
            <p>Descubre los rumbos del centro</p>
          </div>
          <div class="tour-item">
            <h3>REAL DEL MONTE</h3>
            <p>Elabora tu paste</p>
          </div>
          <div class="tour-item">
            <h3>REAL DEL MONTE</h3>
            <p>La Peña del Zumate</p>
          </div>
          <div class="tour-item">
            <h3>REAL DEL MONTE</h3>
            <p>Mina de Acú</p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Sidebar from '@/components/SidebarComponent.vue';
import { ChevronDown } from 'lucide-vue-next';
</script>

<style scoped>
/* Estilos existentes del hero section */
.realdelmonte-container {
  position: relative;
  width: 100%;
  font-family: sans-serif;
  color: white;
  overflow-y: auto;
  height: 100vh;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
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
    linear-gradient(to top left, rgba(0, 0, 0, 1) 0%, transparent 30%),
    linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7) 160%);
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

/* Estilos del contenido adicional */
.content-below {
  background: white;
  color: #333;
  padding: 4rem 5.6rem;
}

.section-content {
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section-content h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #222;
}

.section-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1.2rem 0 0.8rem;
  color: #333;
}

.section-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #555;
}

.attractions-list {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.attractions-list li {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.festivities-grid,
.attractions-grid,
.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.festivity-item,
.attraction-item,
.tour-item {
  background: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.festivity-item h3,
.attraction-item h3,
.tour-item h3 {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 0.5rem;
}

.festivity-item p,
.attraction-item p,
.tour-item p {
  font-size: 1rem;
  color: #666;
}

.transport-option {
  margin-bottom: 1.5rem;
}

/* Mantener los estilos existentes para el hero section */
.mapa {
  position: absolute;
  bottom: 12rem;
  right: 22rem;
  width: 320px;
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