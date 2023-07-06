<template>
    <div class="contenedor">
      <form v-on:submit.prevent="guardar" novalidate v-if="!enviado">
        <div class="contenedorNombre-img">
          <div>
            <label for="usuario">{{ titulo }}:</label>
            <input type="text" v-model="usuario" :placeholder="titulo" name="usuario" class="insertar_nombre"/>
            <span>Este campo es obligatorio si desea aparecer en el ranking</span>
          </div>
          <img src="@/img/home-img-min.png" alt="dibujo de un chico en la pc" />
        </div>
        <form-preguntas @puntaje-actualizado="actualizarPuntaje" :puntaje="puntaje" />
        <div class="text-center">
          <v-btn color="secondary" type="submit" class="button">Enviar</v-btn>
        </div>
      </form>
      <div v-else>
        <div v-if="puntaje >= 6" class="div-resultado">
          <p class="resultado text-center">Felicidades, {{ usuario }}! Has respondido correctamente {{ puntaje }} preguntas.</p>
          <img src="@/img/ganaste.svg" alt="Ganaste el QuizDev Game" class="resultado-img" />
        </div>
        <div v-else class="div-resultado">
          <p class="resultado text-center">Deberias avergonzarte {{ usuario }}! Has respondido mal {{ 10 - puntaje }} preguntas.</p>
          <img src="@/img/jajaperdiste.svg" alt="Perdiste el QuizDev Game" class="resultado-img" />
        </div>
        <div class="text-center">
          <v-btn color="secondary" type="submit" class="reiniciar" @click="reiniciar">Volver a jugar</v-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FormPreguntas from './FormPreguntas.vue';
  export default {
    data() {
      return {
        titulo: 'Ingrese su nombre',
        usuario: null,
        puntaje: 0,
        enviado: false,
      };
    },
    components: {
    FormPreguntas // Registra el componente
  },
    methods: {
      guardar() {
        this.errores = []; //vaciamos el array de errores
  
        if (!this.usuario) {
          this.errores.push('El usuario es obligatorio.');
        }
  
        if (this.usuario && this.usuario.length < 3) {
          this.errores.push('Debe tener más de 3 caracteres.');
        }
  
        if (this.errores.length === 0) {
          this.enviado = true;
          const nuevoObj = {
            usuario: this.usuario,
            puntaje: this.puntaje,
          };
  
          let arr = [];
          if (localStorage.dato) {
            arr = JSON.parse(localStorage.getItem('dato'));
          }
  
          arr.push(nuevoObj);
          localStorage.setItem('dato', JSON.stringify(arr));
        }
      },
      actualizarPuntaje(puntos) {
        this.puntaje += puntos; // Actualizamos el puntaje en el componente padre
      },
      reiniciar() {
        this.puntaje = 0;
        this.enviado = false;
      },
    },
  };
  </script>
  <style scoped>
.insertar_nombre{
  background-color: white;
  border: 1px solid black;
}
.contenedorNombre-img {
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5vw;
  flex-wrap: wrap-reverse;
}
.contenedorNombre-img div{
  width: 200px;
  margin-right: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.contenedorNombre-img div input[type="text"]{
    padding: 0.4em;
    font-size: 1em;
    border-radius: 50px;
    text-align: center;
    border: none;
}
.contenedorNombre-img div span{
  color: #E3B76E;
}
.contenedorNombre-img img{
  width: 200px;
}
.resultado{
  font-size: 2em;
  font-weight: bolder;
}
.resultado-img{
  height: 40vh;
}
.reiniciar{
  margin: 2em;
}
form .button, .reiniciar{
    background-color: #E3B76E;
    font-size: 1em;
    font-weight: bolder;
    padding: 1em 1.5em !important;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
}
form .button:hover, .reiniciar:hover{
  border-radius: 50px 0 50px 0;
}
form{
  padding-bottom: 5vh;
}
.div-resultado{
  display: flex;
  flex-direction: column;
}
  </style>