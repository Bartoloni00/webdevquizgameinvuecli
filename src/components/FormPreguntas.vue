<template>
    <div>
      <div v-for="(pregunta, i) in questions" :key="pregunta.question">
        <fieldset>
          <legend>{{ pregunta.question }}</legend>
          <div v-for="(opcion, j) in pregunta.answers" :key="opcion.text" class="opcion">
            <input
              type="radio"
              :id="i + '-' + j"
              :name="i"
              :value="opcion.text"
              v-model="pregunta.selectedAnswer"
              @change="updateScore(pregunta)"
              :disabled="pregunta.selectedAnswer && pregunta.selectedAnswer !== opcion.text"
            />
            <label
              :for="i + '-' + j"
              :class="{
                correct: pregunta.selectedAnswer === pregunta.answers.find(answer => answer.correct).text && pregunta.selectedAnswer !== null && opcion.text === pregunta.selectedAnswer,
                incorrect: pregunta.selectedAnswer !== pregunta.answers.find(answer => answer.correct).text && pregunta.selectedAnswer !== null && opcion.text === pregunta.selectedAnswer
              }"
            >
              {{ opcion.text }}
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['puntaje'],
    data() {
      return {
        questions: [
          {
            question: '¿Cuál de los siguientes lenguajes se utiliza principalmente en el desarrollo del lado del servidor en la programación web?',
            answers: [
              { text: 'Java', correct: false },
              { text: 'JavaScript', correct: false },
              { text: 'Python', correct: false },
              { text: 'PHP', correct: true }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Cuál de las siguientes opciones NO es un framework de desarrollo web ampliamente utilizado?',
            answers: [
              { text: 'React', correct: false },
              { text: 'Swift', correct: true },
              { text: 'Laravel', correct: false },
              { text: 'Vue', correct: false }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Qué tecnología se utiliza para almacenar y organizar datos en el navegador web?',
            answers: [
              { text: 'HTML', correct: false },
              { text: 'LocalStorage', correct: true },
              { text: 'CSS', correct: false },
              { text: 'XML', correct: false }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Cuál de las siguientes opciones NO es un método HTTP utilizado para enviar datos desde un cliente a un servidor en una solicitud web?',
            answers: [
              { text: 'GET', correct: false },
              { text: 'POST', correct: false },
              { text: 'DELETE', correct: false },
              { text: 'UPDATE', correct: true }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Cuál de las siguientes opciones es un lenguaje de marcado utilizado para estructurar y presentar contenido en la web?',
            answers: [
              { text: 'HTML', correct: true },
              { text: 'CSS', correct: false },
              { text: 'JavaScript', correct: false },
              { text: 'Python', correct: false }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Cuál de las siguientes opciones es un lenguaje de programación utilizado para agregar interactividad a una página web?',
            answers: [
              { text: 'JavaScript', correct: true },
              { text: 'HTML', correct: false },
              { text: 'CSS', correct: false },
              { text: 'Python', correct: false }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Cuál de las siguientes opciones NO es una tecnología utilizada para realizar solicitudes asíncronas al servidor y actualizar el contenido de una página sin recargarla por completo?',
            answers: [
              { text: 'AJAX', correct: false },
              { text: 'XML', correct: false },
              { text: 'Fetch API', correct: false },
              { text: 'jQuery', correct: true }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Cuál de las siguientes opciones NO es un estándar de diseño responsivo en el desarrollo web?',
            answers: [
              { text: 'Media Queries', correct: false },
              { text: 'Flexbox', correct: false },
              { text: 'Grid Layout', correct: false },
              { text: 'MVC', correct: true }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Qué término se utiliza para describir una técnica en la programación web que permite reutilizar y combinar componentes de interfaz de usuario?',
            answers: [
              { text: 'Inheritance', correct: false },
              { text: 'Polymorphism', correct: false },
              { text: 'Composition', correct: true },
              { text: 'Abstraction', correct: false }
            ],
            selectedAnswer: null
          },
          {
            question: '¿Cuál de las siguientes opciones NO es un estándar de seguridad para proteger una aplicación web contra ataques?',
            answers: [
              { text: 'SSL/TLS', correct: false },
              { text: 'JWT', correct: false },
              { text: 'OAuth', correct: false },
              { text: 'SQL', correct: true }
            ],
            selectedAnswer: null
          }
        ]
      };
    },
    methods: {
      updateScore(pregunta) {
        if (
          pregunta.selectedAnswer &&
          pregunta.selectedAnswer === pregunta.answers.find(answer => answer.correct).text
        ) {
          this.$emit('puntaje-actualizado', 1); // Emitimos el evento con el puntaje actualizado
        }
      }
    }
  };
  </script>
  <style scoped>
  fieldset{
    display: flex;
    justify-content: space-evenly;
    padding: 5vh 0;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 0;
    border: 1px solid #000;
    border-radius: 50px;
}
fieldset>legend{
    font-weight: bolder;
    font-size: 1.2rem;
    max-width: 400px;
    background-color: #E3B76E;
    padding: 1em;
    border-radius: 50px;
    margin: auto;
}
.opcion{
    position: relative;
    padding: 1rem;
    width: 40%;
    margin: 0.3rem;
}
.opcion input{
    position: absolute;
    left: -9999px;
}
.opcion label{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: 2rem;
    border: 2px solid #E3B76E;
    border-radius: 50px;
    cursor: pointer;
    transition: all .2s;
    text-align: center;
}
.correct{
  background-color: #4CAF50;
}
.incorrect{
  background-color: #c74d4d;
}

.opcion label:hover{
    background-color: #E3B76E;
    color: #fff;
}
  </style>