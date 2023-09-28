<script>
import Card from 'primevue/card';
export default {
  components: {
    Card,
  },
  data() {
    return {
      drawer: false,
      items: [
        { label: "Inicio", to: "/home" },
        { label: "Registro", to: "/car-registration-owner" },
        { label: "Notificaciones", to: "/notifications" },
        { label: "Alquiler", to: "/rent-tenant" },
        {label:"Mantenimiento", to:"/Maintenance"},
      ],
    };
  },
};
</script>

<template>
  <pv-toast />
  <header>
    <pv-toolbar class="custom-bg custom-toolbar">
      <template #start>
        <img
            src="https://i.postimg.cc/vmZh3LGv/logotransparent-26-06.png"
            alt="Logo"
            style="height: 40px; margin-right: 20px;"
        />
      </template>
      <template #end>
        <div class="flex-column">
          <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
          >
            <pv-button
                class="custom-button"
                :href="href"
                @click="navigate"
            >
              {{ item.label }}
            </pv-button>
          </router-link>
          <router-link to="/profile-owner">
            <!-- Agrega la imagen a la derecha -->
            <img
                src="https://i.postimg.cc/Fs9Z3g3V/usuario-1.png"
                alt="Usuario"
                style="height: 30px; margin-left: 20px; cursor: pointer;"
            />
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>

  <div class="container">
    <div class="half-width-card">
      <Card>
        <template #title>
        </template>
        <template #content>
          <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">REGISTRO DE VEHÍCULO</h1>
          <div class="input-grid">
            <div class="input-column">
              <p style="font-family: 'Poppins',sans-serif"><strong>Marca</strong></p>
              <pv-input placeholder="Marca" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Velocidad Max</strong></p>
              <pv-input placeholder="Velocidad Max" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Largo/Ancho/Alto</strong></p>
              <pv-input placeholder="Largo/Ancho/Alto" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Clase</strong></p>
              <pv-input placeholder="Clase" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Tiempo de Alquiler</strong></p>
              <pv-input placeholder="Tiempo de Alquiler" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Lugar de recojo del vehículo</strong></p>
              <pv-input placeholder="Lugar de recojo del vehículo" style="font-family: 'Poppins',sans-serif"></pv-input>
            </div>
            <div class="input-column">
              <p style="font-family: 'Poppins',sans-serif"><strong>Modelo</strong></p>
              <pv-input placeholder="Modelo" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Consumo</strong></p>
              <pv-input placeholder="Consumo" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Peso</strong></p>
              <pv-input placeholder="Peso" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Transmisión</strong></p>
              <pv-input placeholder="Transmisión" style="font-family: 'Poppins',sans-serif"></pv-input>
              <p style="font-family: 'Poppins',sans-serif"><strong>Costo de alquielr al mes</strong></p>
              <pv-input placeholder="Costo de alquiler al mes" style="font-family: 'Poppins',sans-serif"></pv-input>
            </div>
          </div>
          <div class="input-column">
            <Button label="REGISTRAR" class="custom-button2" @click="">REGISTRAR</Button>
          </div>
        </template>
      </Card>
    </div>
    <div class="half-width-card">
      <Card>
        <template #title></template>
        <template #content>
          <div class="button-container">
            <Button label="SUBIR FOTOS" class="custom-button2">SUBIR FOTOS</button>
            <div class="button-space"></div>
            <Button label="CREAR CONTRATO DE ALQUILER" class="custom-button3">CREAR CONTRATO DE ALQUILER</Button>
          </div>
        </template>
      </Card>
    </div>
  </div>

</template>

<style>
.custom-bg {
  background-color: white;
}

.custom-button {
  background-color: white;
  color: #14131B;
}

.custom-button:hover,
.custom-button:focus {
  background-color: #FF7A00 !important;
  color: white !important;
}

.custom-toolbar {
  border-bottom: 2px solid #ddd;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.half-width-card {
  flex: 1;
  width: calc(50% - 1rem);
  margin: 0.5rem;
  box-sizing: border-box;
  max-width: 50%;
}

.half-width-card p,
.half-width-card pv-input,
.half-width-card Button {
  font-size: 1rem;
}

.input-grid {
  display: flex;
  justify-content: space-between;
}

.input-column {
  flex: 1;
  padding: 0 1rem;
  box-sizing: border-box;
}

.custom-button2 {
  width: 30%;
  height: 30px;
  margin: 20px;
  background-color: #FF7A00;
  color: white;
  font-family: 'Poppins', sans-serif;
  border: none;
}

.custom-button3 {
  height: 30px;
  margin: 20px;
  background-color: black;
  color: white;
  font-family: 'Poppins', sans-serif;
  border: none;
  min-width: auto;
}

.custom-button2:hover {
  background-color: rgba(255, 122, 0, 0.9);
}

.custom-button3:hover {
  background-color: #CCCCCC;
  color: black
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-space {
  height: 20px;
}

@media (max-width: 50vmin) {
  .half-width-card {
    max-width: 100%;
  }

  .input-grid {
    flex-direction: column;
  }
}
</style>