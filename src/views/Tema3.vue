<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Ilustración
    figure.mb-5
      img(src='@/assets/curso/img61.jpg', alt='Texto que describa la imagen')
    p.mb-5 La ilustración como se conoce hoy en día, tiene sus orígenes en la Prehistoria, pasando por diversos periodos, que abarcan principalmente dos fases.
    #t_3_1.titulo-segundo
      h2 3.1 Fases
    p.mb-5 En el video que se expone a continuación, se podrá identificar de manera detallada las dos fases que se abarcan:
    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------
    #t_3_2.titulo-segundo
      h2 3.2 Clasificación de ilustraciones
    p.mb-5 Dentro del campo de la ilustración existen una gran variedad de divisiones en cuanto a su clasificación, de las cuales se destacan las que encuentran en la siguiente infografía: 
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5 Conociendo estas variaciones de ilustraciones, es importante destacar lo que menciona García (s.f.), sobre lo que compone la ilustración publicitaria:
    h4 Partes de un anuncio por módulos:
    .row.mb-5 
      .col-lg-4
        .tarjeta.color--primario.p-4.h-100  
          .imagenes-hover.mb-4(@mouseover="mostrarIndicador=false")
            img(src='@/assets/curso/img74.svg', alt='Texto que describa la imagen').imagenes-hover_img1
            img(src='@/assets/curso/img75.png', alt='Texto que describa la imagen').imagenes-hover_img2
            .indicador--hover(v-if="mostrarIndicador" )
          h4.text-center Slogan: 
          p Es una frase breve, concisa e impactante, la cual pretende resumir el anuncio del producto al consumidor. Ejemplo de Coca-Cola: “Destapa la felicidad”. 
      .col-lg-4
        .tarjeta.color--acento-botones.p-4.h-100  
          .imagenes-hover.mb-4
            img(src='@/assets/curso/img76.svg', alt='Texto que describa la imagen').imagenes-hover_img1
            img(src='@/assets/curso/img77.png', alt='Texto que describa la imagen').imagenes-hover_img2
          h4.text-center Subtitulares:
          p Van de la mano del título, aunque tiene una extensión muy corta, incitan a convencer de manera más poderosa al consumidor. Suelen dar información más puntual.
      .col-lg-4
        .tarjeta.color--secundario.p-4.h-100  
          .imagenes-hover.mb-4
            img(src='@/assets/curso/img78.svg', alt='Texto que describa la imagen').imagenes-hover_img1
            img(src='@/assets/curso/img79.png', alt='Texto que describa la imagen').imagenes-hover_img2
          h4.text-center La ilustración:
          p Sobre la ilustración recae la mayor parte de éxito de un anuncio publicitario, ya que somos seres totalmente visuales, el primer contacto que tenemos es con la imagen, el dibujo, la ilustración o la fotografía, posteriormente nos enfocamos en los textos y la información. 
            br
            br
            b "Para atraparnos debe ser: llamativa, impactante, memorable, vendedora, sencilla, única, seductora e intrigante”.
    p.mb-5 Según Dupon (2004), hay al menos nueve tipos de ilustraciones que atraen la atención y venden por encima de la media:
    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Las que hacen referencia al producto.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | A su presentación.
      li 
        .lista-ol--cuadro__vineta
          span 3
        | A una parte específica del producto.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | A la manera como se emplea el producto.
      li 
        .lista-ol--cuadro__vineta
          span 5
        | Las que muestran la satisfacción por haber utilizado el producto.
      li 
        .lista-ol--cuadro__vineta
          span 6
        | Las que comparan el producto de una compañía con productos similares.
      li 
        .lista-ol--cuadro__vineta
          span 7
        | Las que emplean el humor.
      li 
        .lista-ol--cuadro__vineta
          span 8
        | Las que presentan al consumidor leal.
      li 
        .lista-ol--cuadro__vineta
          span 9
        | Las que muestran el 
        b “antes” y el “después” 
        |de haber utilizado el producto.
    p.mb-5 Para elegir una buena ilustración, que consiga cautivar al lector, los creativos suelen aconsejar algunos 
      b “trucos” 
      | publicitarios:
    .row.mb-5
      .col-lg-4: img(src='@/assets/curso/img78.svg', alt='Texto que describa la imagen')
      .col-lg-8
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Es preciso elegir un tema atractivo para la imagen.
          li 
            i.fas.fa-check
            | Nunca se debe mostrar más de un producto en la ilustración.
          li 
            i.fas.fa-check
            | Las composiciones sencillas tienen mayor índice de atención. Se debe simplificar el fondo y limitar el anuncio a siete elementos gráficos.
          li 
            i.fas.fa-check
            | Emplear un personaje principal y descentrarlo.
          li 
            i.fas.fa-check
            | Esmerarse en hacer que el personaje sea visto desde diferentes ángulos.
          li 
            i.fas.fa-check
            | Dar ángulo a las tomas: picado para los objetos pequeños, contrapicado para los grandes.
          li 
            i.fas.fa-check
            | La efectividad de la ilustración en la que aparecen figuras humanas aumenta el doble y es más fácil de retener, especialmente aquellas en las que aparecen personas del mismo sexo.
    #t_3_3.titulo-segundo
      h2 3.3 Técnicas
    p.mb-5 Las técnicas de ilustración como medio de comunicación comprenden diversos campos de acción como el arte, la literatura, el cine y la publicidad; y se dividen en técnicas análogas y digitales.
    h4 Técnicas análogas
    p.mb-5 Las técnicas de ilustración análoga son realizadas sobre un sustrato físico como el papel, la madera, vidrio, tela, entre otros, el producto final depende de la habilidad manual del ilustrador. A continuación se indican cuáles son:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color--primario-claro.p-4(titulo="Técnicas secas")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img81.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h5 Técnicas secas
            p Son aquellas que se aplican sin necesidad de humedecer el pincel o el elemento que se utilice para aplicar la pintura. Por ejemplo, los colores son fáciles de manejar, permiten lograr dibujos muy elaborados y detallados; los pasteles son utilizados por los ilustradores junto con otras técnicas como la acuarela o los rotuladores; se utilizan también grafitos, carboncillos, entre otros más.
      .tarjeta.color--primario-claro.p-4(titulo="Técnicas con rotuladores ")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img82.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h5 Técnicas con rotuladores 
            p Los más utilizados son los solubles en alcohol y los solubles en agua. Tienen un acabado similar al de las acuarelas, pero sus colores son más luminosos e intensos y son más fáciles de difuminar con el rotulador incoloro. Permiten conseguir acabados limpios, pues cuando se secan el color es indeleble y genera la superposición de tonos sin que se mezclen.
      .tarjeta.color--primario-claro.p-4(titulo="Técnicas húmedas")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img83.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h5 Técnicas húmedas
            p Requieren de un líquido como el agua para utilizarlas. Aquí se encuentran las acuarelas líquidas o sólidas que son muy utilizadas en ilustración, debido a que sus acabados son de gran calidad permite detallar bien las formas y sus colores son suaves o sólidos, se utilizan cuando, previamente, se ha realizado un dibujo a lápiz. 
      .tarjeta.color--primario-claro.p-4(titulo="Técnica sanguina")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img84.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h5 Técnica sanguina
            p Debe su nombre a la tonalidad similar a la de la sangre, pues está formada por óxido de hierro y goma arábiga y se presenta en lápices, minas o barras. Se utiliza para claroscuros y para dar volumen. Las tonalidades van desde el rojo o naranja al color chocolate.
      .tarjeta.color--primario-claro.p-4(titulo="El collage")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img85.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h5 El collage
            p Es una técnica parecida al fotomontaje, porque yuxtapone diversos materiales con texturas y estilos diferentes para conseguir mayor profundidad y volumen en las obras dando un aspecto interesante visualmente. Los artistas cubistas de principios del siglo XX, crearon esta nueva técnica que utiliza todas las conocidas.
    h4 Técnicas digitales
    p.mb-5 Las técnicas digitales de ilustración dependen del uso de programas de software especializado que cuentan con herramientas y elementos pertinentes para esta labor. Dentro de las principales técnicas digitales de ilustración se encuentran las siguientes:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Técnica digital en mapa de bits o imágenes rasterizadas")
          p.px-5 Se basa en la edición de gráficos elaborados con base en puntos o pixeles. El programa más utilizado en esta técnica es Adobe Photoshop, que permite trabajar con gráficos y retoque fotográfico, al igual que con la configuración de pinceles, estructura de capas y modos de transparencia
      .row(titulo="Técnica digital con vectores")
          p.px-5 Un vector es una imagen creada mediante fórmulas matemáticas, formada por curvas, esta técnica es muy popular y tiene amplia utilización en los programas Adobe Illustrator y CorelDRAW; se caracteriza por líneas limpias, colores planos y formas simples. Tiene una ventaja ya que se puede aumentar, disminuir o modificar el tamaño de la imagen sin que pierda nitidez ni calidad.
      .row(titulo="Técnica digital en modelado 3D")
          p.px-5 Con esta técnica se crean formas en tercera dimensión, con volumen por medio de programas instalados en la computadora. Es importante tener en cuenta las texturas y tamaños para crear personajes, productos, objetos, etc. El proceso manual para preparar los gráficos 3D, es similar a los de la escultura. Hay una serie de softwares 3D que se utilizan en la construcción de modelos tridimensionales. Los mejores programas son Rhinoceros 3D, Blender cuyas herramientas de modelado son excelentes y Fusión 360 con una capacidad muy reducida.
    .row.mb-5.justify-content-between.d-flex.align-items-center
      .col-lg-5 
        h4 Técnicas mixtas
        p Es la combinación de diferentes técnicas, análogas y digitales mediante el uso de herramientas y softwares o programas en la realización de una obra. Entre más complicado sea el trabajo por realizar, se requerirán equipos más complejos, como la tableta gráfica con pantalla incorporada, un escáner y un monitor amplio.
      .col-lg-6: img(src='@/assets/curso/img86.jpg', alt='Texto que describa la imagen') 
    #t_3_4.titulo-segundo
      h2 3.4 Composición y perspectiva
    p.mb-5 La composición es la relación y organización que existe entre los elementos que forman una imagen como un todo, y que comunican al espectador en qué orden debe mirar y por qué. Esta relación es lo primero que perciben las personas y lo ideal es que sienta que el conjunto de elementos que forman la imagen es equilibrado, que sus colores son los adecuados, el tamaño es proporcionado y que entiende lo que quiso transmitir el ilustrador.
      br
      br
      |Es importante tener en cuenta los siguientes elementos que proporcionan equilibrio en la composición de una imagen.
    .row.mb-5 
      .col-lg-4
        .tarjeta.color--primario.p-4.h-100  
          .imagenes-hover.mb-4.d-flex(@mouseover="mostrarIndicador=false")
            img(src='@/assets/curso/img87.svg', alt='Texto que describa la imagen').imagenes-hover_img1.img-s1
            img(src='@/assets/curso/img88.svg', alt='Texto que describa la imagen').imagenes-hover_img2.img-s1
            .indicador--hover(v-if="mostrarIndicador" )
          h4.text-center Peso
          p Cada objeto dentro de la ilustración tiene un peso, por eso es necesario equilibrar cada elemento en el área de trabajo. A veces el ilustrador utiliza los espacios vacíos.
      .col-lg-4
        .tarjeta.color--acento-botones.p-4.h-100  
          .imagenes-hover.img-s1.mb-4.d-flex
            img(src='@/assets/curso/img89.svg', alt='Texto que describa la imagen').imagenes-hover_img1.img-s1
            img(src='@/assets/curso/img90.svg', alt='Texto que describa la imagen').imagenes-hover_img2.img-s1
          h4.text-center Puntos focales
          p Son aquellos sitios hacia los cuales se dirige nuestra mirada cuando vemos la ilustración. Lo primero que se observa es la figura humana. En ocasiones el ilustrador aísla a propósito un elemento; los elementos deben estar aireados, aunque no en espacios vacíos.
      .col-lg-4
        .tarjeta.color--secundario.p-4.h-100  
          .imagenes-hover.img-s1.mb-4.d-flex
            img(src='@/assets/curso/img91.svg', alt='Texto que describa la imagen').imagenes-hover_img1.img-s1
            img(src='@/assets/curso/img92.svg', alt='Texto que describa la imagen').imagenes-hover_img2.img-s1
          h4.text-center Regla de tres
          p Para añadir más dinamismo a las ilustraciones, es preferible colocar elementos en número impar.
    p.mb-5 La perspectiva tiene elementos comunes para calcular la disminución del tamaño de los objetos debido a la distancia. Estos elementos son: línea de tierra, que es la parte baja del campo de visión; línea de horizonte, es la línea imaginaria en la que se posa la vista, es horizontal y allí se ubican los llamados puntos de fuga; punto de fuga, es el lugar en el que se ubicarían las líneas paralelas, como cuando se dibujan las vías del ferrocarril y se unen en la distancia a pesar de que sabemos que nunca se intersecan; módulos horizontales son los que miden altura y anchura a escala y los módulos verticales permiten ver la profundidad de lo que se aleja; posición aparente del observador, que es un sitio virtual donde se encuentra el espectador y que determina cómo verá los objetos en perspectiva. 
    #t_3_5.titulo-segundo
      h2 3.5 Creación de ambientes, personajes y props
    p.mb-5 La creación de ambientes, personajes y props tienen una gran importancia en la elaboración de una escena de teatro, cine, televisión o videojuegos, ya que complementan ambientes y dan características especiales a situaciones y personajes.
    .row.mb-5.justify-content-between 
      .col-lg-5
        h4 Creación de ambientes:
        p En la ilustración es muy importante la creación de ambientes en los que se desarrolla la idea en general, pues permite que el observador se imagine dónde y cuándo sucede la acción, se logra transportar al espectador a escenarios del pasado, presente o futuro. 
          br
          br
          |El ambiente en el cual se desarrolla la acción complementa los elementos compositivos y las características de los personajes, los cuales deben estar inmersos en una temporalidad y en un espacio, si es de noche o de día, verano o invierno, paisaje rural o urbano, si ocurre en un interior o en un exterior. El ambiente debe guardar relación con el o los personajes, para darle cohesión a la imagen y al mensaje que se quiere comunicar. 
          br
          br
          |Existen tres tipos de ambientes que en muchas ocasiones se complementan, estos son:
      .col-lg-6: img(src='@/assets/curso/img93.jpg', alt='Texto que describa la imagen')(data-aos="fade-right")
    .row.mb-5(data-aos="zoom-in")
      .col-lg-4.mb-5
        .nav-holder2
            img(src="@/assets/curso/img94.png", alt="Atractivos turísticos")
            .text.mt-2
              p.text-center.mb-3.h4 
                strong Ambiente físico 
              p.text-center Es el lugar o sitio donde se desarrolla la historia y confluyen los personajes, pueden ser reales o irreales.
      .col-lg-4.mb-5
        .nav-holder2
            img(src="@/assets/curso/img95.png", alt="Atractivos turísticos")
            .text.mt-2
              p.text-center.mb-3.h4 
                strong Ambiente social
              p.text-center Es la condición o entorno social en el que se desenvuelve la acción de los personajes, por ejemplo, su condición religiosa, clase social, nivel económico o cultural. 
      .col-lg-4.mb-5
        .nav-holder2
            img(src="@/assets/curso/img96.png", alt="Atractivos turísticos")
            .text.mt-2
              p.text-center.mb-3.h4 
                strong Ambiente sicológico
              p.text-center Es el ambiente emocional e íntimo que presentan los personajes, su amor, deseo de venganza, dolor, miedo o ira, entre otros. 
    .row.mb-5.justify-content-between
      .col-lg-5
        h4 El personaje
        p La palabra personaje proviene del etrusco y significa máscara, así que cuando se crea una historia no solo se recrea un ambiente, sino que se piensa en la función que desempeñará, qué características físicas y de personalidad tendrá, para definir cuál es la que más conviene. Es importante conocer el tipo de público para el cual va dirigida la ilustración, cómics, libros infantiles, aficionados a la ficción o a los videojuegos.
          br
          br
          |Existen básicamente cuatro tipos de personajes que son:
      .col-lg-6: img(src="@/assets/curso/img97.svg", alt="Atractivos turísticos")
    SlyderB.mb-5(:datos="datosSlyder2")
    p.mb-5 Para crear un personaje en ilustración se deben tener en cuenta algunos aspectos tales como: 
      b enumerar las características que deba tener, simbolizarlas y sintetizarlas con imágenes una a una, dejar las simbologías de mayor recordación y agruparlas. Las características deben ser físicas, sicológicas, intelectuales, espirituales, etc. 
      | Es importante determinar si vive en familia o solo.
      br
      br
      |Posteriormente se elabora la bocetación del personaje, visto de frente, de vista lateral, de espalda, de tres cuartos. Es necesario conocer cómo se mueve, las poses, los gestos, las actividades que realiza, los contextos o entorno en el que vive o trabaja, entre otras. Igualmente, es importante conocer quiénes son sus acompañantes, personas o animales.
    .row.justify-content-center.mb-5 
      .col-lg-8 
        .cajon.color-primario.color--primario-claro.p-4.mb-4 
          p.mb-0 Los props son objetos o accesorios móviles o portátiles, que son utilizados por los personajes en cine, televisión o videojuegos, pero no forman parte de la ambientación ni del vestuario, pero adquieren relevancia a lo largo de la historia que se pretende contar, 
            b por ejemplo: el martillo de Thor, el cinto de la Mujer Maravilla y su lazo de la verdad, las espadas de El Cid campeador, el sable láser de la Darth Vader, entre otros.
    p.mb-5 Los props hacen reconocible la personalidad de los personajes y hasta lo ubican históricamente, como por ejemplo si utiliza una espada romana. Los props son creados por un artista que tiene como misión crear ideas o aspectos sobre algo que no se conocía y sobre algo conocido, diseñando el objeto desde varios ángulos, en detalle, para que los modeladores puedan crear el objeto, siendo muy importante en el diseño de videojuegos, películas o televisión.




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Ilustración tradicional',
        texto:
          'Es la ilustración clásica que se dibuja a mano, primero se realiza un boceto, se perfecciona y se pinta a mano utilizando diversos insumos como pinceles, plumas, lápices de colores, entre otros insumos.',
        imagen: require('@/assets/curso/img62.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración digital',
        texto:
          'Es una de las más utilizadas en la actualidad, presenta una riqueza infinita en cuanto a herramientas, programas, usos, color y efectos. se basa implícitamente en la  ilustración digital, complementándola con efectos, texturas, colores y elementos propios del software.',
        imagen: require('@/assets/curso/img63.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración publicitaria',
        texto:
          'En esta se utilizan varias técnicas a fin de crear figuras o escenas que acompañan a un producto o marca para diferenciarlo de los demás y hacerlo atractivo, se pueden generar emociones en los espectadores, se llega a la fibra de sus sentimientos, que es como actualmente se venden marcas y productos. ',
        imagen: require('@/assets/curso/img64.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración científica',
        texto:
          'Debe representar con exactitud el objeto, por ejemplo, partes de la anatomía humana, plantas, animales, procesos, entre otros. Se utiliza en ramas como la botánica, la anatomía,  la ingeniería, las especies,  entre otras especialidades.',
        imagen: require('@/assets/curso/img65.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración conceptual',
        texto:
          'Son representaciones no realistas, que corresponden al desarrollo de una idea personal del ilustrador referente al tema, pero en su conjunto tienen un significado diferente a la realidad.',
        imagen: require('@/assets/curso/img66.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración narrativa',
        texto:
          'Es la que refleja una narración o un argumento, el ilustrador debe ceñirse al contenido y detalles del texto. Actualmente, se utiliza en guiones literarios o cinematográficos como cómics, animaciones, entre otros. ',
        imagen: require('@/assets/curso/img67.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración literal',
        texto:
          'Son ilustraciones que representan verdades pictóricas, describiendo la realidad en forma exacta, aunque se puede recurrir a la fantasía, pero haciendo creíble dicha imagen, como en el fotorrealismo y el hiperrealismo.',
        imagen: require('@/assets/curso/img68.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración decorativa',
        texto: 'Acompaña al texto, lo decora y embellece. ',
        imagen: require('@/assets/curso/img69.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración editorial',
        texto:
          'Complementa o enriquece un texto. Es muy utilizada en los periódicos, revistas, libros para adultos, libros para niños, libros interactivos para tabletas, revistas web o portales de noticias entre otros. ',
        imagen: require('@/assets/curso/img70.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Infografía',
        texto:
          'Es una representación gráfica o una imagen informativa, que se traduce en una en algo que las personas entienden a simple vista, aunque a veces tiene textos cortos.',
        imagen: require('@/assets/curso/img71.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración tridimensional',
        texto:
          'Se basa en volúmenes que finalizan en una pieza tridimensional, en este tipo de ilustración, generalmente, se utilizan las curvas o formas circulares, con abundantes colores que agregan profundidad y textura realista, permitiendo también la creación de productos de ficción, entre otros.',
        imagen: require('@/assets/curso/img72.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Otras ilustraciones',
        texto:
          'Ilustración de portadas, ilustración técnica, ilustración de moda, ilustración editorial, ilustración fantástica, ilustración infantil, ilustración para cine, ilustración para videojuegos, ilustración de humor gráfico y cómics.',
        imagen: require('@/assets/curso/img73.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Protagonista',
        texto:
          'Es el personaje principal de cualquier obra, texto o película, por ejemplo, película Enredados, los protagonistas son Rapunzel y Flynn Rider; Harry Potter; Mulan, entre otros. ',
        imagen: require('@/assets/curso/img98.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Antagonista',
        texto:
          'Es el personaje que se opone al protagonista y le da vida a la obra, porque permite la existencia de un conflicto que debe resolverse. Ejemplos de este tipo de personajes son: la reina malvada en Blancanieves, el Guasón en Batman, Rumpelstiltskin, entre muchos otros.',
        imagen: require('@/assets/curso/img99.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Arquetipo',
        texto:
          'Es el personaje símbolo de perfección de algo, sirve para imitarlo o copiarlo. Por ejemplo: el amigo fiel, el consejero, el emotivo o llorón, el rey y el caballero armado, la Mujer Maravilla de los cómics, en Disney existen las princesas arquetipo como la Bella Durmiente, Valiente, entre muchas más. ',
        imagen: require('@/assets/curso/img100.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Estereotipo',
        texto:
          'Tiene una imagen aceptada por la mayoría de las personas y que desempeña un determinado rol social, como el ama de casa, la rubia, el científico loco, el nerd, el héroe, el tonto, entre otros.',
        imagen: require('@/assets/curso/img101.jpg'),
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
