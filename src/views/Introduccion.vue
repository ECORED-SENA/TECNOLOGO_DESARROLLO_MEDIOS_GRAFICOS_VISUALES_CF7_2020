<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ymSqw_W2vzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Bocetación e ilustración: introducción
    .row.mb-5 
      .col-lg-6
        p La ilustración es una creación que se realiza con un fin o propósito, va acompañada generalmente por un texto que resalta el mensaje, ya sea como ejercicio creativo o como medio de comunicación visual de una marca, empresa o proyecto, que busca concebir una idea en particular, haciendo que los espectadores generen recordación, empatía, apropiación, entre otras ideas más.
          br
          br
          |Generalmente, se subestima el trabajo y la tarea de ilustrar, sin embargo, detrás de esta actividad se encuentran inmersos muchos conocimientos no solo técnicos, sino también artísticos en dibujo, en el manejo y aplicación de diversas técnicas, historia del arte, diseño, comunicación, publicidad y también en el mundo de la ilustración tradicional y digital que es muy usada en la actualidad, con la utilización de diversos programas como Illustrator, Photoshop, CorelDRAW, entre otros, que facilitan el trabajo y creación de piezas maravillosas, relevantes e impactantes para la sociedad. 
      .col-lg-6
        figure.mb-5
          img(src='@/assets/curso/img1.svg', alt='Texto que describa la imagen')
      .color--acento-botones-claro.p-4.mb-5  
        p La ilustración nace como una idea plasmada, casi siempre, en una hoja de papel, y que va creciendo a tal punto hasta llegar a muchas culturas y pueblos del mundo, especialmente en esta era digital, en la cual se vive inmerso. Ha sido utilizada en diversos ámbitos como el diseño, el cómic, la publicidad y el marketing, entre otros, con la realización de piezas relevantes como afiches, carteles, personajes, marcas icónicas de empresas, ferias, festivales, incluso en la historia se conoce el uso de la ilustración como medio de propaganda gráfica para convocar, convencer e incitar a incrédulos ciudadanos a participar en la guerra mediante del uso de carteles políticos. 
      p Y es que en el ámbito de la ilustración cabe decir que 
        b “una imagen vale más que mil palabras”
        |, pues el ser humano es totalmente visual, se tiene un primer contacto con el mundo exterior por medio del sentido de la visión, las imágenes de la naturaleza, el arte, la fotografía o la ilustración; todo el tiempo se toman decisiones a partir de las imágenes que rodean al ser humano, en cuanto a los colores que gustan, las formas, las imágenes que más agradan, los ilustradores, diseñadores y fotógrafos que se admiran, los personajes de cómics e historietas, las revistas y libros, incluso la escogencia de pareja en un primer ámbito es de carácter visual.
        br
        br
        |Existen diversos tipos de ilustración e infinidad de técnicas, las cuales se pueden concebir de manera análoga o digital, en programas como Photoshop, el cual ofrece la posibilidad de contar con múltiples herramientas que permiten el uso, creación, manipulación y creación de diversidad de elementos útiles para la ilustración, algunos de los cuales serán vistos en el desarrollo de este componente formativo.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
