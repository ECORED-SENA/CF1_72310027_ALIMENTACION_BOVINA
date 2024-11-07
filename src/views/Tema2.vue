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
    
    .cont_2_1.mt-5
      .row
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/6.png")
        .col-lg-8(data-aos="fade-up")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/7.svg")
            .col(style="place-self:center;")
              p.mb-0 Sin embargo, una dieta basada exclusivamente en pasto o forraje puede no ser suficiente para satisfacer completamente los requerimientos nutricionales del animal. Esto puede afectar negativamente la producción de carne o leche, especialmente cuando las condiciones alimenticias de los potreros son deficientes.
          p.mt-4 Las deficiencias nutricionales comunes son:
          .row.justify-content-center.mt-4
            .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
              .text-center.h-100.p-4(style="background-color:#FBE9CC;border-radius:15px;")
                figure.mb-3
                  img(src="@/assets/curso/tema2/8.svg" style="max-width:90px;display:inline;")
                p.fw-bold Energía
                p.mb-0 Las pasturas de baja calidad o poca disponibilidad afectan la energía del animal.
            .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
              .text-center.h-100.p-4(style="background-color:#FBE9CC;border-radius:15px;")
                figure.mb-3
                  img(src="@/assets/curso/tema2/9.svg" style="max-width:90px;display:inline;")
                p.fw-bold Proteínas
                p.mb-0 Un bajo contenido proteico en los alimentos puede reducir la productividad.
      
      p.mt-4(data-aos="fade-right") Para mejorar la producción de carne o leche, es necesario proporcionar suplementos alimenticios que equilibren la dieta del bovino. Estos suplementos ayudan a garantizar que el sistema corporal del animal tenga los nutrientes necesarios para cumplir con la demanda de producción.

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Ingesta
      
      p(data-aos="fade-up") La ingesta es el consumo de alimentos por parte del animal y es crucial, ya que incluye los nutrientes que ayudarán al desarrollo del rumiante en todas las etapas de crecimiento. Al suministrar alimentos a los bovinos, deben considerarse los siguientes factores:

    .cont_2_2.pt-4  
      .row
        .col-lg-8(data-aos="fade-up")
          .p-4(style="background-color:#FFE5D6;")
            .row
              .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
                figure.m-auto.col-10.col-md-8.col-lg-12
                  img(src="@/assets/curso/tema2/11.svg")
              .col-lg-6(style="place-self:center;")
                .bg-white.mb-2.p-2(style="border-radius:5px;")
                  p.mb-0 Características nutricionales del alimento.
                .bg-white.mb-2.p-2(style="border-radius:5px;")
                  p.mb-0 Disponibilidad y cantidad de forraje a suministrar.
                .bg-white.mb-2.p-2(style="border-radius:5px;")
                  p.mb-0 Contenido energético y de fibra del alimento.
                .bg-white.mb-2.p-2(style="border-radius:5px;")
                  p.mb-0 Estado fisiológico del bovino.
                .bg-white.p-2(style="border-radius:5px;")
                  p.mb-0 Palatabilidad.
          .row.mt-4
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/12.svg")
            .col(style="place-self:center;")
              p.mb-0 Es importante que los alimentos proporcionados al ganado tengan sabores agradables, ya que los animales evitan sabores amargos y prefieren los dulces. Una ingesta adecuada garantiza una buena nutrición para el rumiante, lo que se refleja en una alta producción de leche o carne. Para asegurar un alto consumo de forraje, es recomendable:
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/13.png")
      
      .col-xl-10.m-auto.mt-4
        .row.justify-content-center.mt-4
          .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
            .text-center.h-100.p-4(style="background-color:#B4C0B4;border-radius:15px;")
              figure.mb-3
                img(src="@/assets/curso/tema2/14.svg" style="max-width:90px;display:inline;")
              p.mb-0 Mantener el forraje en estado vegetativo mediante pastoreo.
          .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
            .text-center.h-100.p-4(style="background-color:#B4C0B4;border-radius:15px;")
              figure.mb-3
                img(src="@/assets/curso/tema2/15.svg" style="max-width:90px;display:inline;")
              p.mb-0 Diversificar la pradera con diferentes especies de pastos y un 30 % de leguminosas.
          .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
            .text-center.h-100.p-4(style="background-color:#B4C0B4;border-radius:15px;")
              figure.mb-3
                img(src="@/assets/curso/tema2/16.svg" style="max-width:90px;display:inline;")
              p.mb-0 Mantener una pradera densa para garantizar mayor disponibilidad de alimento.


    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Materia seca
    
    .row(data-aos="fade-in")
      .col-lg-auto.d-none.d-lg-block.pe-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png")
      .col-lg.ps-lg-0
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FBE9CC;margin-left:-1px;")
          p.mb-0 Los bovinos deben consumir materia seca equivalente al 2 % o 3 % de su peso vivo, de los cuales dos tercios deben ser proporcionados en forma de forraje.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Agua
      
    p(data-aos="fade-up") A continuación, se presenta la importancia del agua en la vida de los bovinos, destacando cómo sus requerimientos hídricos varían según factores como la edad, el tamaño corporal, el clima y el estado fisiológico del animal. Además, se subraya la relación directa entre el acceso a agua limpia y fresca con la salud, productividad y bienestar general del ganado.

    figure.mt-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gqjMJqunp80?si=eeLfpU-evxSvxGbz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Energía
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La energía es esencial en la nutrición de los bovinos, ya que facilita el desarrollo y crecimiento del animal. Esta proviene de carbohidratos, proteínas y grasas. Es importante que la ración suministrada sea la adecuada, ya que una deficiencia impedirá que las bacterias del rumen asimilen correctamente las proteínas, lo que resultará en una disminución de la producción de leche y carne.
    
    .cont_1_2.pt-4.pb-4
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Proteínas
      
      .row
        .col-lg(data-aos="fade-right" style="place-self:center;")
          p.mb-0 Las proteínas son indispensables para los bovinos en crecimiento y producción, ya que aportan los aminoácidos esenciales tanto para el animal como para los microorganismos del rumen. La cantidad de proteína suministrada se calcula en función del contenido de nitrógeno en los forrajes, conocido como proteína cruda, la cual es fundamental en la nutrición del animal. Los bovinos necesitan dos tipos de proteínas en su dieta: una es utilizada por la población microbiana y la otra cubre sus requerimientos nutricionales.
        .col-lg.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/19.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Fibra
    
    .row(data-aos="fade-in")
      .col-lg-auto.d-none.d-lg-block.pe-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png")
      .col-lg.ps-lg-0
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FBE9CC;margin-left:-1px;")
          p.mb-0 La fibra aporta celulosa, hemicelulosa y lignina, compuestos esenciales para el buen funcionamiento ruminal. Por ello, los bovinos deben consumir una cantidad mínima diaria de fibra para estimular la producción de saliva y la rumia. El nivel adecuado de fibra en vacas lecheras debe estar entre el 17 % y el 22 % de la materia seca. Si la fibra suministrada supera el 22 %, se compromete la capacidad de asimilación; si es inferior al 17 %, se reduce la producción de leche y grasa.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Vitaminas
      
    p(data-aos="fade-up") Las vitaminas son importantes en la dieta de los bovinos, ya que contribuyen a la formación de catalizadores biológicos que intervienen en el crecimiento y desarrollo corporal. Las vitaminas más importantes para los rumiantes son la A, D y E. Las vitaminas B y K son sintetizadas por las bacterias del rumen, por lo que no es necesario suplementarlas.

    .cont_2_3.mt-4
      .row.justify-content-center.mt-4
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .text-center.h-100.p-4.cont_2_4(style="background-color:#DAE0DA;border-radius:23px;")
            figure.mb-4
              img(src="@/assets/curso/tema2/22.svg" style="max-width:90px;display:inline;")
            span.h5.text-white.p-1.ps-3.pe-3(style="background-color:#456345;") Vitamina A
            p.mb-0.mt-3 Es esencial en vacas preñadas para que las crías nazcan en buen estado. La deficiencia de esta vitamina reduce el apetito del rumiante. Los forrajes ricos en caroteno son precursores de la vitamina A.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .text-center.h-100.p-4.cont_2_4(style="background-color:#DAE0DA;border-radius:23px;")
            figure.mb-4
              img(src="@/assets/curso/tema2/23.svg" style="max-width:90px;display:inline;")
            span.h5.text-white.p-1.ps-3.pe-3(style="background-color:#456345;") Vitamina D
            p.mb-0.mt-3 La deficiencia de esta vitamina en bovinos en crecimiento puede producir raquitismo. Puede sintetizarse en la piel del animal cuando este es expuesto al sol. Las vacas lecheras criadas en condiciones de poca luz solar deben recibir entre 5000 y 6000 UI (unidades internacionales).
        .col-lg.d-none.d-lg-block(data-aos="fade-left")
          figure 
            img(src="@/assets/curso/tema2/24.png")

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Minerales
      
      p(data-aos="fade-up") Los minerales que los bovinos requieren principalmente son: fósforo, calcio, magnesio, potasio, azufre, hierro, manganeso, cobre, zinc y cobalto. Los minerales presentes en el cuerpo del animal representan entre el 4 % y el 6 %. Estos compuestos son esenciales para los bovinos, ya que desempeñan diversas funciones en el organismo, incluyendo procesos metabólicos y estructurales, como la formación de huesos y tejidos. Además, son indispensables en el rumen para que las bacterias se desarrollen y puedan degradar el alimento correctamente.
    
    .cont_2_5.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Calcio (Ca) 
              p Ayuda a la formación de huesos y dientes. Contribuye a la producción de leche. Interviene en la permeabilidad de la pared celular. Deficiencias: bajo crecimiento, baja producción, retraso de la pubertad. 
              h4.mt-4 Fósforo (P) 
              p Participa en la obtención de energía. Ayuda en la formación de dientes y huesos. Deficiencias: bajo crecimiento, baja producción, quistes foliculares, bajo libido. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/26.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Magnesio (Mg)
              p Favorece el desarrollo esquelético. Actúa como activador enzimático. Deficiencias: tetania hipomagnesémica, baja producción láctea, retención de placenta. 
              h4.mt-4 Azufre (S) 
              p Forma parte de aminoácidos azufrados. Ayuda a la síntesis de proteínas microbiales. Interviene en la respiración y los tejidos. Deficiencias: acumulación de ácido láctico, baja producción láctea.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/27.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Zinc (Zn) 
              p Funciona en el sistema inmune (producción de linfocitos). Es cofactor enzimático. Deficiencias: alopecia, dermatitis, bajo crecimiento, problemas podales, bajo porcentaje de gestación. 
              h4.mt-4 Cobre (Cu) 
              p Cofactor enzimático. Síntesis de hemoglobina. Deficiencias: bajo porcentaje de gestación, abortos, mortalidad embrionaria, anemia, pérdida de color del pelo.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/28.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Yodo (I) 
              p Esencial para la tiroides. Deficiencias: coto, abortos, reabsorción fetal, bajo libido, baja calidad seminal, mortalidad embrionaria, retención de placenta. 
              h4.mt-4 Fósforo (P) 
              p Participa en la obtención de energía. Ayuda en la formación de dientes y huesos. Deficiencias: bajo crecimiento, baja producción, quistes foliculares, bajo libido. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/29.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Cobalto (Co) 
              p Participa en la síntesis de vitamina B12. Favorece el crecimiento de bacterias en el rumen. Deficiencias: anemia, pérdida de apetito, baja producción de leche, involución uterina. 
              h4.mt-4 Selenio (Se) 
              p Asociado a la vitamina E. Protección de tejidos contra procesos oxidativos. Deficiencias: enfermedad de músculos blandos, retención de placenta, abortos, mortalidad embrionaria. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/30.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Hierro (Fe) 
              p Participa en la respiración celular. Forma parte de la hemoglobina y mioglobina. Deficiencias: anemia, quistes foliculares, alteraciones estrales, diarrea, acidosis metabólica. 
              h4.mt-4 Potasio (K) 
              p Regula el balance ácido-base. Equilibra el agua corporal. Interviene en la transmisión de impulsos nerviosos. Deficiencias: pérdida de peso, crecimiento retardado, desorden nervioso.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/31.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Manganeso (Mn) 
              p Participa en el metabolismo de carbohidratos. Deficiencias: quistes, bajo porcentaje de gestación, abortos, descendencia defectuosa. 
              h4.mt-4 Sodio (Na) 
              p Principal catión extracelular. Regula el balance ácido-base y la permeabilidad celular. Deficiencias: apetito insaciable por sal, retención de líquidos, baja calidad del semen. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/32.png')







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
