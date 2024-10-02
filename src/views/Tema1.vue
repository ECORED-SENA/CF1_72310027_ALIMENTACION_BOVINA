<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ganado bovino 
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[strong Los bovinos] corresponden a un grupo de mamíferos rumiantes, lo que significa que son herbívoros que se alimentan de pasto. Poseen un sistema digestivo de dos etapas y cuatro cavidades estomacales. El alimento se ingiere, comienza la digestión, luego se regurgita y se mastica nuevamente, para finalmente completar la digestión, un proceso conocido como rumia.
    
    .row.mt-4(data-aos="fade-in")
      .col-auto.d-none.d-md-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg")
      .col(style="place-self:center;")
        p.mb-0 Físicamente, los bovinos se caracterizan por sus cuernos, hocico desnudo, cola larga y su estructura corporal alta. Dentro de esta clasificación se incluyen diversas especies animales, como vacas, bisontes, búfalos, y yak, entre otros. Sin duda, la especie más utilizada en la producción animal es la vaca.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1	Sistema digestivo de los bovinos
    
    .row
      .col-lg-9(data-aos="fade-up")
        .row
          .col-lg-5.pe-lg-0.mb-4.mb-lg-0
            figure.m-auto.col-10.col-md-7.col-lg-12
              img(src="@/assets/curso/tema1/3.svg")
          .col-lg-7.ps-lg-0
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#DAE0DA;")
              p.mb-0 El sistema digestivo de todos los animales tiene siempre las mismas funciones: #[strong en primer lugar, realizar la absorción de los nutrientes presentes en los alimentos que se ingieren; y en segundo lugar, excretar los residuos de estos alimentos.] Está compuesto por un conjunto de órganos que se encargan de descomponer los alimentos mediante procesos mecánicos y bioquímicos, convirtiéndolos en sustancias más simples y fáciles de asimilar por el organismo.
        .row.mt-4(data-aos="fade-in")
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/4.svg")
          .col(style="place-self:center;")
            p.mb-0 El aparato digestivo de los bovinos tiene la función de transformar los alimentos y extraer los elementos necesarios para el funcionamiento y la conservación del organismo. Comprende todos los órganos con los cuales el alimento ingerido tiene contacto, desde el momento en que ingresa al cuerpo hasta el punto en que es expulsado. 
      .col-lg-3.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/5.png")
    
    .col-xl-10.m-auto.mt-5
      .p-4(style="background-color:#456345;border-radius:12px;" data-aos="zoom-in")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col(style="place-self:center;")
            p.mb-0.text-white El aparato digestivo del bovino es un largo conducto que va desde la boca del animal y recorre todo el cuerpo, presentando dilataciones entre una zona y otra, replegándose sobre sí mismo en algunas partes, y tiene contacto con órganos anexos. Finalmente, termina en un orificio por el cual se expulsan los residuos.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Rumia
    
    p(data-aos="fade-up") Los bovinos son rumiantes, lo que significa que realizan la digestión en dos etapas separadas. Este proceso es característico de su sistema digestivo, permitiéndoles descomponer los alimentos de manera más eficiente.

    .row.mt-4
      .col-lg-8(data-aos="fade-right")
        .p-4(style="background-color:#FBE9CC;")
          p Las etapas del proceso digestivo en rumiantes son:
          .p-3.bg-white.mb-3
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/8.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold Consumo inicial
                ul.lista-ul.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-hat-cowboy(style="color:#FF7C32;")
                    span Los bovinos ingieren pastos y hierbas rápidamente.
                  li.d-flex.mb-0
                    i.fas.fa-hat-cowboy(style="color:#FF7C32;")
                    span Tragan el alimento casi sin masticar, principalmente por instinto de protección frente a posibles depredadores.
          .p-3.bg-white
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/9.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold Rumia
                ul.lista-ul.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-hat-cowboy(style="color:#FF7C32;")
                    span Posteriormente, los animales regurgitan el alimento ingerido para volver a masticarlo.
                  li.d-flex.mb-0
                    i.fas.fa-hat-cowboy(style="color:#FF7C32;")
                    span En esta fase, el alimento es desmenuzado y mezclado con saliva para facilitar su digestión.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/10.png")
    
    p.mt-4(data-aos="fade-up") Después de ingerir los alimentos, los bovinos suelen acostarse tranquilamente y comenzar la fase de rumia. Esto les permite procesar el material vegetal con mayor eficacia.

    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-down")
        figure
          img(src="@/assets/curso/tema1/11.svg")
      .col-lg-9(data-aos="fade-up")
        .p-4(style="background-color:#B4C0B4;")
          .p-3.bg-white.mb-3
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/12.svg")
              .col(style="place-self:center;")
                p.mb-0 Los bovinos tienen un sistema digestivo compuesto por varios compartimientos, lo que les permite almacenar y digerir grandes cantidades de material vegetal.
          .p-3.bg-white
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/13.svg")
              .col(style="place-self:center;")
                p.mb-0 Debido a esta característica, también se les denomina #[strong animales poligástricos], ya que poseen un estómago dividido en varias cámaras para procesar el alimento de manera eficiente.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Anatomía
    
    .row
      .col-lg-8(data-aos="fade-right")
        p Una de las principales características de los rumiantes es que se alimentan de pasto o hierba, lo cual es posible gracias a su capacidad para degradar los carbohidratos estructurales presentes en el forraje, como la celulosa, hemicelulosa y pectina. Estos carbohidratos son difíciles de digerir para animales monogástricos, que tienen sistemas digestivos más simples y de un solo compartimiento. La capacidad de los bovinos para degradar estos compuestos se debe a las particularidades fisiológicas de los rumiantes poligástricos.
        p El aparato digestivo de los bovinos está dividido en cuatro compartimientos:
        .row.mt-4.mb-0.mb-lg-4
          .col-lg.mb-4.mb-lg-0.col-md-6
            .h-100.p-3.text-center(style="background-color:#F3F0EA;border-radius:7px;")
              figure
                img(src="@/assets/curso/tema1/14.svg" style="max-width:90px;display:inline;")
              h5.mb-0.fw-bold.mt-3 Rumen
          .col-lg.mb-4.mb-lg-0.col-md-6
            .h-100.p-3.text-center(style="background-color:#F3F0EA;border-radius:7px;")
              figure
                img(src="@/assets/curso/tema1/15.svg" style="max-width:90px;display:inline;")
              h5.mb-0.fw-bold.mt-3 Retículo
          .col-lg.mb-4.mb-lg-0.col-md-6
            .h-100.p-3.text-center(style="background-color:#F3F0EA;border-radius:7px;")
              figure
                img(src="@/assets/curso/tema1/16.svg" style="max-width:90px;display:inline;")
              h5.mb-0.fw-bold.mt-3 Omaso
          .col-lg.mb-4.mb-lg-0.col-md-6
            .h-100.p-3.text-center(style="background-color:#F3F0EA;border-radius:7px;")
              figure
                img(src="@/assets/curso/tema1/17.svg" style="max-width:90px;display:inline;")
              h5.mb-0.fw-bold.mt-3 Abomaso
        p.mb-0(style="position:relative;z-index:2;") La siguiente figura presenta detalladamente la morfología del sistema digestivo de los bovinos rumiantes. En ella se observa el esófago, que se conecta con el rumen, y este, a su vez, con los demás compartimientos hasta llegar al intestino delgado.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/18.png")
    
    .cont_1_1.pt-4.pb-4
      .col-xl-8.col-lg-11.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Figura 1.
          span Sistema digestivo de los bovinos
        .p-3.p-lg-4(style="background-color:#FBE9CC;border-radius:10px;")
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/20.svg" alt="Diagrama anatómico del sistema digestivo de una vaca, que muestra las diferentes partes del aparato digestivo, incluyendo el rumen, el retículo, el omaso, el abomaso, los intestinos, la faringe, el esófago, y la boca con dientes. ")
      p.mt-4(data-aos="fade-right") A continuación, se presentan las principales estructuras del sistema digestivo de los bovinos, explicando la función de cada órgano en el proceso de digestión y absorción de nutrientes.

    .row
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/21.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Boca y dientes")
            p La boca de los bovinos está compuesta por 32 dientes, de los cuales 24 son molares. Poseen una almohadilla dental en la parte superior y una lengua fuerte para arrancar la hierba. Un bovino adulto produce entre 20 y 35 litros de saliva al día, que ayuda en la digestión y equilibrio del pH.
          .row.col-xl-11.m-auto(titulo="Faringe y esófago")
            p La faringe conecta la boca con las vías respiratorias y el esófago. El esófago es el conducto por el que los alimentos transitan hacia el estómago. La deglución y la regurgitación son procesos asociados con estos órganos.
          .row.col-xl-11.m-auto(titulo="Rumen")
            p El rumen es el primer y mayor compartimiento del estómago. Puede contener entre 100 y 120 kg de materia en digestión. Aquí, microorganismos descomponen la fibra, liberando ácidos grasos que se utilizan como energía, representando hasta el 80 % de la energía total del animal.
          .row.col-xl-11.m-auto(titulo="Retículo")
            p El retículo es el segundo compartimiento del estómago. Es el más pequeño y comparte su contenido con el rumen. Filtra partículas pequeñas y permite el paso solo a las menores de 2 mm. Junto con el rumen, forman el retículo-rumen.
    
    .row.mt-4
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Omaso")
            p El omaso es el tercer compartimiento del estómago. Permite el paso solo a partículas pequeñas. Absorbe agua y minerales, y funciona como transición entre el rumen y el abomaso.
          .row.col-xl-11.m-auto(titulo="Abomaso")
            p El abomaso es el compartimiento final del estómago, similar al de animales monogástricos. Secreta ácidos y enzimas digestivas que preparan el alimento para su paso al intestino delgado.
          .row.col-xl-11.m-auto(titulo="Intestino delgado")
            p El intestino delgado, conectado al abomaso, recibe fibras, azúcares, proteínas, grasas y carbohidratos. Enzimas del páncreas y bilis descomponen estos nutrientes, que luego son absorbidos.
          .row.col-xl-11.m-auto(titulo="Intestino grueso")
            p El intestino grueso convierte la materia no absorbida por el intestino delgado en materia fecal, que se expulsa y puede utilizarse como abono.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema1/22.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Contenido ruminal
    
    p(data-aos="fade-up") Es el producto de la fermentación del alimento en el compartimiento retículo-rumen y se organiza en las siguientes capas:

    .cont_1_2.mt-4.pb-4
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .text-center.h-100.p-4(style="background-color:#DAE0DA;border-radius:23px;")
            figure.mb-3
              img(src="@/assets/curso/tema1/23.svg" style="max-width:90px;display:inline;")
            span.h5.mb-4.text-white.ps-2.pe-2.p-1(style="background-color:#456345;") Capa sólida
            p.mt-3.mb-0 Compuesta por el alimento consumido recientemente y microorganismos.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .text-center.h-100.p-4(style="background-color:#DAE0DA;border-radius:23px;")
            figure.mb-3
              img(src="@/assets/curso/tema1/24.svg" style="max-width:90px;display:inline;")
            span.h5.mb-4.text-white.ps-2.pe-2.p-1(style="background-color:#456345;") Capa líquida
            p.mt-3.mb-0 Contenido líquido con pequeñas partículas de alimento y microorganismos, ubicado en la parte ventral.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .text-center.h-100.p-4(style="background-color:#DAE0DA;border-radius:23px;")
            figure.mb-3
              img(src="@/assets/curso/tema1/25.svg" style="max-width:90px;display:inline;")
            span.h5.mb-4.text-white.ps-2.pe-2.p-1(style="background-color:#456345;") Capa gaseosa
            p.mt-3.mb-0 Gases producidos durante la fermentación del alimento, ubicados en la parte superior.
        .col-lg.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/26.png")
    
      .row.mt-5
        .col-lg-3.d-none.d-lg-block(data-aos="fade-down")
          figure 
            img(src="@/assets/curso/tema1/27.png")
        .col-lg-9(data-aos="fade-up")
          p #[strong Contracciones ruminales:] las contracciones en el retículo-rumen son cruciales para la fermentación del alimento. Sus funciones incluyen:
          .row.justify-content-center
            .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
              .text-center.h-100.p-4(style="background-color:#FFE5D6;border-radius:7px;")
                figure.mb-3
                  img(src="@/assets/curso/tema1/28.svg" style="max-width:90px;display:inline;")
                p.mb-0.fw-bold Mezclar el alimento
            .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
              .text-center.h-100.p-4(style="background-color:#FFE5D6;border-radius:7px;")
                figure.mb-3
                  img(src="@/assets/curso/tema1/29.svg" style="max-width:90px;display:inline;")
                p.mb-0.fw-bold Eliminar los gases producidos mediante el eructo
            .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
              .text-center.h-100.p-4(style="background-color:#FFE5D6;border-radius:7px;")
                figure.mb-3
                  img(src="@/assets/curso/tema1/30.svg" style="max-width:90px;display:inline;")
                p.mb-0.fw-bold Mover el contenido ruminal
          
          .row.mt-lg-4
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/31.svg")
            .col(style="place-self:center;")
              p.mb-0 Las contracciones pueden ser primarias y secundarias. Las primarias comienzan en el retículo y se extienden por el rumen, siendo responsables de mezclar e impulsar el contenido. Las secundarias ocurren solo en el rumen y están asociadas con el eructo. Estas contracciones forman un ciclo que se repite tres veces por minuto y son controladas por el sistema nervioso central, aunque la motilidad del rumen puede verse afectada por el pH.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
