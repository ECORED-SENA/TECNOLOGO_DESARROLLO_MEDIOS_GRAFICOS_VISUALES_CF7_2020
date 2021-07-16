<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Del boceto a la ilustración
    p.mb-5 El boceto es un bosquejo o dibujo, generalmente, realizado a lápiz en un medio digital o en papel, en donde inicialmente se forman las primeras ideas del diseño en general.
      br
      br
      |La ilustración es el componente gráfico en los textos o libros; se invita a observar a continuación estas imágenes con el fin de tener una mayor comprensión del tema del boceto a la ilustración.
    SlyderD.mb-5(:datos="datosSlyder")(data-aos="zoom-in")
    p.mb-5 Actualmente la ilustración es muy utilizada en la publicidad y comercialización de productos y marcas, ya que es un arma efectiva que produce resultados económicos, puesto que genera en quien la observa, recordación, emoción, sensaciones o curiosidad que, finalmente, llevan a la persona a comprar. Los estudios han demostrado que las personas ven primero la imagen y la interpretan, antes que leer el texto que usualmente las acompaña.
      br
      br
      |A lo largo de la historia del ser humano se ha utilizado la ilustración, desde las primeras obras rupestres que fueron el inicio incipiente, pasando por las miniaturas que adornaban y decoraban los libros escritos a mano en la Edad Media y que muchos autores consideran que fue el verdadero inicio de la ilustración. Posteriormente, con la invención de la imprenta se facilitó el trabajo de reproducción, hasta llegar a la actualidad en que la utilización de los avances tecnológicos ha traído la ilustración digital y la ilustración tridimensional.
    .row.mb-5.justify-content-between
      .col-lg-6
        p Así mismo, el texto y la tipografía que usualmente la acompañan deben tener un hilo conductor, deben contar una historia, complementarse y tener plena armonía. Lo fundamental es que la ilustración atraiga la atención del espectador y transmita un mensaje fácilmente comprensible.
          br
          br
          |La ilustración juega un papel importante en la sociedad y el diseño, potencia un mensaje con mayor rapidez y eficacia que un texto, generalmente se utiliza en libros, carteles, revistas y medios digitales, empaques, creación de logotipos, marcas, diseño textil, diseño de moda y va de la mano con artículos decorativos para el hogar, se usa en áreas del mercadeo y la publicidad.
      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/img5.jpg', alt='Texto que describa la imagen')(data-aos="fade-left")
    #t_1_1.titulo-segundo
      h2 1.1 Definición del proyecto
    .row.justify-content-between
      .col-lg-6
        p Consiste en concebir y visualizar la idea de lo que se quiere hacer, imaginando la forma concreta que podrá tener el proyecto y la finalidad de la ilustración. Aquí juega un papel muy importante, lo que se pretende comunicar al cliente o usuario, más allá de la imagen. 
          br
          br
          |Esa imagen o idea se plasma en un dibujo incipiente, esquemático, a veces burdo, que es un esbozo llamado boceto, por medio del cual se pretende iniciar un acercamiento a la realidad, para satisfacer las necesidades del público o del cliente. A medida que avanza el proyecto, los bocetos son más elaborados y detallados, permitiendo explorar ideas y formas. El boceto concluye con la ilustración y se debe planear, crear, inventar y elaborar o hacer, mediante la utilización del lenguaje y la comunicación visual.
        .cajon.color-primario.color--primario-claro.p-4.mb-4
          p 
            b El boceto tiene las siguientes características: 
            |tiene que ser a escala, debe ser rápido, representativo en su esencia, preferiblemente debe tener notas que ayuden a recordar elementos que en el futuro y durante el desarrollo del proyecto, serán aplicadas a la ilustración final.
        p.mb-5 El esquema o boceto incipiente pasa por varias etapas, se detalla y perfecciona hasta llegar a la ilustración y se utilizan diversos elementos para crear un producto final, tales como color, textura, posición, equilibrio, iluminación, contraste, entre otros.
      .col-lg-5 
        figure.mb-5
          img(src='@/assets/curso/img6.jpg', alt='Texto que describa la imagen')(data-aos="fade-left")
    #t_1_2.titulo-segundo
      h2 1.2 Correcciones y aprobación
    .row.justify-content-between
      .col-lg-6
        p Debido a los cambios que puede sufrir el proyecto, por depender del producto que se está creando y de la aprobación que satisfaga las expectativas de los clientes, entre otros aspectos, se hace necesario bocetar. El boceto cada vez se hará más detallado y completo, así se contará con la aprobación del cliente, respecto a cada una de las correcciones que se requieran hasta llegar al producto final.
          br
          br
          |Es claro que a los clientes se les debe presentar periódicamente miniaturas de bocetos, entre más detallado sea el boceto más fácilmente se obtendrá la aprobación de este. Usualmente se deben entregar una serie de bocetos en bruto, para que el cliente los revise y proponga sus modificaciones o cambios, luego se realizarán bocetos más completos que también deben ser aprobados antes de ser realizados en medio digital, entonces el cliente debe estar de acuerdo con el arte antes de continuar con las etapas posteriores; siempre es importante la aprobación completa por parte del cliente, antes de pasar a la etapa final de ilustración.
      .col-lg-5 
        figure.mb-5
          img(src='@/assets/curso/img7.jpg', alt='Texto que describa la imagen')(data-aos="fade-up")











</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'El boceto',
        texto:
          'Es en realidad el primer paso hacia la ilustración, la cual es una expresión visual o componente gráfico, que contiene un mensaje que se plasma en un dibujo, mapa, plano, imagen, grabado o estampa, realizado por algún medio artístico o digital, que usualmente se acompaña de un texto, realzando o complementando para hacerlo más explicativo.',
        imagen: require('@/assets/curso/img2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'La ilustración',
        texto:
          'Esta es cambiante y se expresa a través de la utilización de diferentes técnicas, materiales y estilos encaminados a crear e innovar en las propuestas gráficas para generar un mayor impacto en el mensaje.',
        imagen: require('@/assets/curso/img3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'El diseñador debe realizar una interpretación del contexto cultural y social, por cuanto las imágenes son más contundentes que las palabras, siendo el color, la línea y las formas elementos fundamentales en la ilustración para aportar fuerza visual a la misma.',
        imagen: require('@/assets/curso/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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

<style lang="sass" scoped></style>
