<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Requerimientos nutricionales
    
    .row
      .col-lg-9(data-aos="fade-up")
        .row
          .col-lg-5.pe-lg-0.mb-4.mb-lg-0
            figure.m-auto.col-10.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/1.svg")
          .col-lg-7.ps-lg-0
            .h-100.p-4.p-xl-5.d-flex.align-content-center.flex-wrap(style="background-color:#FDF4E5;")
              p.mb-0 Los bovinos son animales con necesidades alimenticias específicas que deben cubrirse a través de su dieta diaria. Aunque su principal fuente de alimento es el pasto o forraje, también pueden consumir ramas de árboles, hojas secas y otros vegetales. Estos alimentos proporcionan los nutrientes necesarios para el correcto funcionamiento de su sistema, tales como energía, proteínas y minerales.
      .col-lg-3.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/2.png")
    
    p.mt-4(data-aos="fade-right") Las fuentes de alimento para los bovinos son:

    .row.mt-4
      .col-lg-6.mb-lg-0.mb-4
        .row(data-aos="zoom-in")
          .col-md-6.col-lg-5.pe-0.d-none.d-md-block
            figure.m-auto.col-10.col-md-12.col-lg-12
              img(src="@/assets/curso/tema2/3.png")
          .col-md-6.col-lg-7.ps-0
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#EDF0ED;")
              p.mb-0.fw-bold.w-100 Pasto o forraje
              p.mb-0 Es la fuente principal de nutrición.
      .col-lg-6.mb-lg-0.mb-4
        .row(data-aos="zoom-in")
          .col-md-6.col-lg-5.pe-0.d-none.d-md-block
            figure.m-auto.col-10.col-md-12.col-lg-12
              img(src="@/assets/curso/tema2/4.png")
          .col-md-6.col-lg-7.ps-0
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#EDF0ED;")
              p.mb-0.fw-bold.w-100 Ramas de árboles y hojas secas
              p.mb-0 Complementan su dieta en ciertas circunstancias.
    
    .cont_2_1.mt-4







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
