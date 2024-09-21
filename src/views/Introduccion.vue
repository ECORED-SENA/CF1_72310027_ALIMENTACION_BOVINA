<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-9(data-aos="fade-up")
        .row
          .col-lg-5.mb-4.mb-lg-0.pe-lg-0
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/intro1.svg")
          .col-lg-7.ps-lg-0
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FDF4E5;")
              p.mb-0 #[strong El sistema digestivo] de los bovinos es complejo y está diseñado para descomponer eficientemente los carbohidratos presentes en el forraje. A través de un proceso de fermentación en los cuatro compartimientos del estómago (rumen, retículo, omaso y abomaso), los bovinos pueden digerir grandes cantidades de vegetales y obtener los nutrientes necesarios para su desarrollo y crecimiento.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro2.png")
    
    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-up")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#DAE0DA;border-radius:15px;")
          p.mb-0 Los requerimientos nutricionales de los bovinos incluyen agua, energía, proteínas, fibra, vitaminas y minerales. En ocasiones, la dieta basada en pastos y forrajes no es suficiente para cubrir sus necesidades, por lo que es necesario suplementar con aditivos que mejoren la productividad, especialmente en bovinos destinados a la producción de leche o carne. 
      .col-lg-7
        .row
          .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/intro3.svg") 
          .col-lg(data-aos="fade-left")
            figure
              img(src="@/assets/curso/intro4.svg" style="max-width:60px;")
            p.mt-3.mb-0 Para asegurar una adecuada alimentación del ganado, se implementan diferentes sistemas de pastoreo, como el continuo, rotacional y estabulado. Cada uno de estos métodos tiene sus ventajas y desventajas, dependiendo del tipo de terreno y los objetivos de producción, permitiendo optimizar el uso del forraje y mejorar la productividad del ganado. 

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
