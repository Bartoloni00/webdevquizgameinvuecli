<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="nav-links">
        <router-link
        to="/"
        tag="button"
        exact
        class="v-btn v-btn--flat v-btn--text nav-link router-link"
      >
        Home
      </router-link>
      <router-link
        to="/about"
        tag="button"
        exact
        class="v-btn v-btn--flat v-btn--text nav-link router-link"
      >
        Ranking
      </router-link>
      </div>
    </v-app-bar>

    <v-main class="primary-bg">
      <h1 class="text-center">WebDev Quiz Game</h1>
      <p class="text-center">Pon a prueba tus conocimientos de programación web</p>
      <router-view/>
    </v-main>
    <v-footer color="secondary" class="footer">
      <div>
        <p>&copy; 2023 Abraham Bartoloni | Segundo Parcial | 'Apps para Dispositivos Móviles' | Diseño y Programación Web | Profesora: Mabel García </p>
        <p>App realizada con HTML5, CSS3, VueJS , Vuetifyjs y VueRouter</p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.primary-bg {
  background-color: #F88D65;
}
h1{
  margin-top: 5vh;
  font-size: 4em;
}
.nav-links {
  margin:auto;
}
.router-link{
  padding:.8em 2em; 
  color: #000;
  transition: all 0.5s;
  font-weight: bolder;
}
.router-link:hover{
  background:#F88D65;
  border-radius: 50px 0 50px 0;
}
.router-link-exact-active {
  transition: all 0.5s;
  background-color: #F88D65;
}
.footer>div{
  margin: auto;
  max-width: 1200px;
  text-align: center;
  padding: 3vh 0;
}
</style>