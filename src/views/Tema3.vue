<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistemas de pastoreo 
    
    .cont_3_1
      .row
        .col-lg-9(data-aos="fade-up")
          .row
            .col-lg-5.pe-lg-0.mb-4.mb-lg-0
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7.ps-lg-0
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#456345;")
                p.mb-0.text-white Un sistema de pastoreo es una estrategia diseñada para gestionar el ganado bovino en fincas o potreros, con el objetivo de optimizar el uso del forraje y mejorar los índices de producción. Este sistema incluye la elaboración de un plan que determina las fechas y el tiempo que el ganado debe permanecer en cada potrero, así como el momento en que debe ser trasladado a otro. El propósito es mantener el potrero en condiciones óptimas y asegurar una adecuada distribución del ganado.
        .col-lg-3.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/3.png")
      
      p.mt-4(data-aos="fade-right") Los objetivos del sistema de pastoreo son:

      .row.mt-4
        .col-lg-6.mb-lg-0.mb-4
          .row(data-aos="zoom-in")
            .col-md-6.col-lg-5.pe-0.d-none.d-md-block
              figure.m-auto.col-10.col-md-12.col-lg-12
                img(src="@/assets/curso/tema3/4.png")
            .col-md-6.col-lg-7.ps-0
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#F5C87F;")
                p.mb-0.fw-bold.w-100 Mantener alta producción de forraje
                p.mb-0 Se busca obtener la mejor calidad durante el mayor tiempo posible.
        .col-lg-6.mb-lg-0.mb-4
          .row(data-aos="zoom-in")
            .col-md-6.col-lg-5.pe-0.d-none.d-md-block
              figure.m-auto.col-10.col-md-12.col-lg-12
                img(src="@/assets/curso/tema3/5.png")
            .col-md-6.col-lg-7.ps-0
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#F5C87F;")
                p.mb-0.fw-bold.w-100 Optimización del terreno
                p.mb-0 La rotación del ganado permite un uso eficiente del forraje y evita el sobrepastoreo.
      
      p.mt-4(data-aos="fade-right") Los efectos del ganado en el terreno son:

      .row.justify-content-center.mt-4
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .text-center.h-100.p-4.cont_2_4(style="background-color:#DAE0DA;border-radius:23px;")
            figure.mb-4
              img(src="@/assets/curso/tema3/6.svg" style="max-width:90px;display:inline;")
            span.h5.text-white.p-1.ps-3.pe-3(style="background-color:#456345;") Compactación del suelo
            p.mb-0.mt-3 El peso del ganado reduce la aireación y la capacidad del terreno para filtrar líquidos.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .text-center.h-100.p-4.cont_2_4(style="background-color:#DAE0DA;border-radius:23px;")
            figure.mb-4
              img(src="@/assets/curso/tema3/7.svg" style="max-width:90px;display:inline;")
            span.h5.text-white.p-1.ps-3.pe-3(style="background-color:#456345;") Daños físicos a las plantas
            p.mb-0.mt-3 El pisoteo, junto con el contacto con la orina y heces, genera desperdicio de material vegetal.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .text-center.h-100.p-4.cont_2_4(style="background-color:#DAE0DA;border-radius:23px;")
            figure.mb-4
              img(src="@/assets/curso/tema3/8.svg" style="max-width:90px;display:inline;")
            span.h5.text-white.p-1.ps-3.pe-3(style="background-color:#456345;") Alteración del equilibrio natural
            p.mb-0.mt-3 El pisoteo y la pérdida de hojas provocan cambios en la composición de las especies forrajeras.
    
    p.mt-4(data-aos="fade-up") Dado los efectos negativos del ganado en el terreno, se han desarrollado distintos sistemas de pastoreo, cada uno adaptado a diferentes condiciones de terreno y ganado, buscando siempre el mejor aprovechamiento del forraje y minimizando los impactos negativos en el suelo.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Continuo
    
    .cont_3_2
      .row
        .col-lg-4.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src="@/assets/curso/tema3/10.png")
        .col-lg-8(data-aos="fade-up")
          .p-4(style="background-color:#FFCAAD;border-radius:4px;")
            p.mb-0 El sistema continuo hace referencia a una modalidad extensiva de pastoreo, en la que el ganado permanece durante largos periodos en un mismo potrero. Este método suele utilizarse en pastos naturales, que tienen una escasa producción y bajos índices de crecimiento, lo que no justifica subdividir el potrero.
          .row.mt-4
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/11.svg")
            .col(style="place-self:center;")
              p.mb-0 La capacidad de soportar grandes cantidades de animales en este sistema es baja. Además, los animales no consumen el pasto de manera uniforme, concentrándose en zonas específicas, agotando rápidamente el forraje de algunas áreas y dejando otras sin pastorear. También se produce una distribución inadecuada de las heces. A pesar de estos problemas, el sistema continuo es el más común.

      p.mt-4(data-aos="fade-right") Las ventajas de este modelo son que requiere poca inversión económica, ya que basta con disponer del terreno, sin necesidad de cercados o divisiones adicionales. Además, el modelo permite que todo el ganado permanezca junto, lo que facilita su vigilancia y supervisión. Finalmente, el sistema permite que el animal seleccione el pasto que desea ingerir.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Rotacional
    
    p(data-aos="fade-up") Este sistema implica trasladar el ganado de un potrero a otro para aprovechar la pastura de manera eficiente. El pastoreo rotacional es un sistema intensivo que implica subdividir cada potrero y permitir que el ganado utilice una sección a la vez, rotando periódicamente. Los periodos de permanencia en cada sección son cortos, y se permite que el potrero descanse para garantizar su recuperación y la calidad del forraje.

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0
        .p-4(style="background-color:#374F37;")
          .titulo-sexto.color-acento-contenido.text-white(data-aos="zoom-in-down")
            h5 Figura 2.
            span Pastoreo rotacional  
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema3/12.svg" alt="Esquema de un sistema de pastoreo con divisiones en el terreno numeradas del 1 al 6. Se observan flechas que indican el movimiento del ganado a través de las diferentes secciones del campo para aprovechar de manera rotativa el pasto disponible.")
      .col-lg-5(style="place-self:end;" data-aos="fade-left")
        .p-4(style="background-color:#FFE5D6;")
          figure.mb-4
            img(src="@/assets/curso/tema3/13.svg" style="max-width:90px;")
          p.mb-0 Este sistema solo es viable con forraje de alto rendimiento, mejorado con aditivos como abonos. Se utiliza en ganado de alta producción y gran carga animal. El objetivo es maximizar el uso de los pastos durante su etapa de crecimiento óptimo, evitando que los animales consuman rebrotes o maleza.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Rotacional alterno
    
    p(data-aos="fade-up") En este sistema, el potrero se divide en dos partes, y los animales pastorean en una mientras la otra permanece en descanso. Esto permite un mejor ajuste de la carga animal en comparación con el pastoreo continuo. Además, se puede optimizar el uso de fertilizantes y controlar mejor la aparición de maleza, ya que los animales se manejan con mayor facilidad. Este modelo no requiere grandes inversiones, solo un cerco para dividir el potrero.

    .col-xl-8.m-auto.mt-4.col-lg-10
      .p-4(style="background-color:#374F37;")
        .titulo-sexto.color-acento-contenido.text-white(data-aos="zoom-in-down")
          h5 Figura 3.
          span Pastoreo rotacional alterno
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema3/14.svg" alt="Sistema de pastoreo en dos grandes secciones de terreno con ganado moviéndose en sentido circular dentro de cada sección, lo que permite la regeneración del pasto en la otra parte.")
    
    .cont_3_3.pt-5
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Rotacional por franjas
      
      p(data-aos="fade-up") Este sistema divide el potrero en varias secciones, utilizando una por día. La rotación diaria es ideal para mantener las condiciones de pastoreo estables, como en el caso del ganado lechero. La ventaja principal es que el forraje se aprovecha de manera eficiente, manteniendo su disponibilidad y calidad. Sin embargo, este sistema implica altos costos de inversión, ya que requiere cercados, bebederos y comederos en cada sección.

      .col-xl-8.m-auto.mt-4.col-lg-10
        .p-4(style="background-color:#374F37;")
          .titulo-sexto.color-acento-contenido.text-white(data-aos="zoom-in-down")
            h5 Figura 4.
            span Pastoreo rotacional por franjas
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema3/15.svg" alt="Sistema de pastoreo rotativo con varias secciones divididas de manera rectangular. Se observa el movimiento del ganado de una sección a la siguiente para aprovechar el pasto disponible mientras las otras secciones se regeneran.")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Rotacional diferido
    
    p(data-aos="fade-right") En este sistema, el terreno para pastoreo se divide en varias partes, pero la rotación entre ellas se realiza a intervalos largos, lo que significa que el ganado permanece en un potrero durante varios meses, mientras los otros desarrollan su forraje. La desventaja es que el valor nutricional del pasto disminuye debido a su maduración excesiva.

    .col-xl-8.m-auto.mt-4.col-lg-10
      .p-4(style="background-color:#374F37;")
        .titulo-sexto.color-acento-contenido.text-white(data-aos="zoom-in-down")
          h5 Figura 5.
          span Pastoreo rotacional diferido 
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema3/16.svg" alt="Diagrama de pastoreo diferido con parcelas en las que se retrasa la entrada del ganado. Flechas indican el desplazamiento del ganado a través de diferentes secciones del campo en un ciclo de rotación.")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Estabulado
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El pastoreo estabulado, o pastoreo cero, consiste en que el ganado no pastorea, sino que el alimento se le suministra directamente bajo control del personal de la finca. Los animales permanecen en establos, lo que evita el deterioro de los prados y permite obtener pasto de alta calidad. No obstante, este sistema requiere una alta inversión en mano de obra para cortar y recolectar el forraje, además del mantenimiento de los establos.





</template>

<script>
export default {
  name: 'Tema3',
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
