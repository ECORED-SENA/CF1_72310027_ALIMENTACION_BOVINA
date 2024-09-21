<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.  

    .row.justify-content-center.p-4(style="background-color:#FFF2EB;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis  sobre los aspectos nutricionales de la producción bovina. Se divide en dos secciones principales: el sistema digestivo y los requerimientos nutricionales. En el sistema digestivo, se destacan los aspectos anatómicos y fisiológicos, que incluyen las partes del aparato digestivo del bovino y su funcionalidad. En cuanto a los requerimientos nutricionales, se muestra la dependencia de la disposición y los aportes nutricionales del alimento, así como la importancia de los sistemas de pastoreo, que procuran una alta producción de forraje y garantizan la disponibilidad del alimento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
