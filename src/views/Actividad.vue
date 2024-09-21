<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Sistemas digestivos y prácticas de pastoreo ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar la fisiología digestiva de los bovinos, sus requerimientos nutricionales, y los diferentes sistemas de pastoreo. ',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuántos compartimientos tiene el sistema digestivo de los bovinos? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cuatro. ', esCorrecta: true },
            { id: 'b', texto: 'Tres. ', esCorrecta: false },
            { id: 'c', texto: 'Dos. ', esCorrecta: false },
            { id: 'd', texto: 'Cinco. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el primer compartimiento del estómago de los bovinos? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Abomaso. ', esCorrecta: false },
            { id: 'b', texto: 'Retículo.', esCorrecta: false },
            { id: 'c', texto: 'Rumen. ', esCorrecta: true },
            { id: 'd', texto: 'Omaso. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué función cumple el retículo en el sistema digestivo de los bovinos? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Produce enzimas digestivas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Filtra partículas de alimento. ',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Absorbe nutrientes. ', esCorrecta: false },
            { id: 'd', texto: 'Descompone proteínas. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué porcentaje del peso del animal representan los minerales en el cuerpo de los bovinos? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '2 % a 4 %. ', esCorrecta: false },
            { id: 'b', texto: '4 % a 6 %. ', esCorrecta: true },
            { id: 'c', texto: '6 % a 8 %. ', esCorrecta: false },
            { id: 'd', texto: '1 % a 3 %. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué vitamina es importante para las vacas preñadas? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Vitamina D. ', esCorrecta: false },
            { id: 'b', texto: 'Vitamina K. ', esCorrecta: false },
            { id: 'c', texto: 'Vitamina A. ', esCorrecta: true },
            { id: 'd', texto: 'Vitamina E. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el sistema de pastoreo más común? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Rotacional por franjas. ', esCorrecta: false },
            { id: 'b', texto: 'Estabulado. ', esCorrecta: false },
            { id: 'c', texto: 'Continuo. ', esCorrecta: true },
            { id: 'd', texto: 'Rotacional alterno. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué mineral es esencial para la tiroides en los bovinos? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hierro. ', esCorrecta: false },
            { id: 'b', texto: 'Yodo. ', esCorrecta: true },
            { id: 'c', texto: 'Cobalto. ', esCorrecta: false },
            { id: 'd', texto: 'Selenio. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué sistema de pastoreo implica mover al ganado de un potrero a otro de manera intensiva? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Rotacional. ', esCorrecta: true },
            { id: 'b', texto: 'Estabulado. ', esCorrecta: false },
            { id: 'c', texto: 'Continuo. ', esCorrecta: false },
            { id: 'd', texto: 'Diferido. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el principal inconveniente del sistema de pastoreo rotacional diferido? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayor costo de inversión. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Disminución del valor nutricional del pasto. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mayor cantidad de animales por área. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso excesivo de fertilizantes. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué compuesto en la saliva de los bovinos ayuda a mantener el balance de pH en el estómago? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ácido sulfúrico. ', esCorrecta: false },
            { id: 'b', texto: 'Carbonato de sodio. ', esCorrecta: true },
            { id: 'c', texto: 'Calcio. ', esCorrecta: false },
            { id: 'd', texto: 'Magnesio. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
