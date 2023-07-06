<template>
  <div>
    <h2 class="text-center">Ranking</h2>
    <v-container v-if="local.length <= 0" class="no-data-contenedor">
      <p>{{ sin_datos }}</p>
      <v-img src="@/img/nodata.svg" :alt="sin_datos" />
    </v-container>
    <v-container v-else class="table-container">
      <v-data-table :headers="headers" :items="local" class="custom-table">
        <template #item="{ item, index }">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ item.usuario }}</td>
            <td>{{ item.puntaje }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      local: [],
      sin_datos: "",
      headers: [
        { text: "Posición", value: "position" },
        { text: "Usuario", value: "usuario" },
        { text: "Puntaje", value: "puntaje" },
      ],
    };
  },
  mounted() {
    this.ver_local();
    this.local = this.ordenarPorPuntaje(this.local);
  },
  methods: {
    ver_local() {
      if (localStorage.dato) {
        this.local = JSON.parse(localStorage.getItem("dato"));
      } else {
        this.sin_datos = "No posees datos de partidas anteriores. Tienes que jugar";
      }
      console.log(this.$route.path); // Devuelve la ruta en la que estamos
    },
    ordenarPorPuntaje(local) {
      return local.sort((a, b) => b.puntaje - a.puntaje);
    },
  },
};
</script>

<style scoped>
.no-data-contenedor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #000;
  font-weight: bolder;
}

.table-container {
  max-width: 1200px;
  margin: 0 auto;
}

.custom-table {
  background-color: var(--v-primary-base);
  border-radius: 50px;
}
</style>
