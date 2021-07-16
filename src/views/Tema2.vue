<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Software y herramientas
    p.mb-5 Primero que todo hay que decir que un software se podría definir como un programa o conjunto de programas que contienen una cantidad de herramientas y elementos intangibles, que permiten desarrollar diferentes tipos de acciones y tareas dentro de un sistema informático.
      br
      br
      |De acuerdo con lo anterior, el portal web Significados (2015) lo define de la siguiente manera:
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.color--primario-claro.p-5.mb-4
          p.mb-0 Como interfaz designamos, la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro. En este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una interfaz (s.p.).
    p.mb-5 Si bien es cierto que existe una diversidad de programas para el manejo y el uso de ilustración digital, Adobe es una de las empresas más importantes y especializadas en programas de software de diseño que integra muchas herramientas enfocadas a la ilustración, el video, el arte y la fotografía entre otros.
    #t_2_1.titulo-segundo
      h2 2.1 Software seleccionado
    p.mb-5 La selección del software se realiza a partir de las exigencias requeridas para el proyecto a realizar, también depende de los recursos en cuanto a software se dispongan. A continuación, se podrán identificar los más utilizados:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Adobe Photoshop").ps-5
          .col-md-7.mb-4.mb-md-0
            p Se utiliza especialmente en la edición de imágenes, en retoques de fotografía e ilustración. Este programa permite un sin número de posibilidades como elaborar montajes, retocar, modificar y editar imágenes, pues tiene muchas herramientas que facilitan dicho uso, así como la utilización de capas, ajustar tonos, usar efectos y máscaras, entre otros.
              br
              br
              |Sirve para crear cualquier tipo de imagen, pues trabaja con mapas de bits sin importar el formato de la imagen. Cuenta con opciones personalizadas de pinceles, lápices, rellenos, formas, textos, relieves, que permite importar y exportar otros recursos en archivos de formatos de imagen como JPG, GIF, PNG, PDF, etc.
          .col-md-5
            figure
              img(src='@/assets/curso/img8.jpg', alt='Texto que describa la imagen')
      .row(titulo="Adobe Illustrator").ps-5
          .col-md-6.mb-4.mb-md-0
            p Es un software de gráficos vectoriales que permite crear gráficos para los sitios web, logotipos, ilustraciones para libros y revistas, afiches, iconos, logos para empresas y empaques de productos.
              br
              br
              |Este software tiene herramientas para crear logos, efectos, gráficos, entre otros, y posibilita también la creación de dibujos a mano alzada, contando con una gran variedad de herramientas correspondientes al manejo de la pluma, el color, el texto y los efectos tridimensionales.
          .col-md-6
            figure
              img(src='@/assets/curso/img9.jpg', alt='Texto que describa la imagen')
      .row(titulo="CorelDRAW").ps-5
          .col-md-6.mb-4.mb-md-0
            p Programa de diseño gráfico que se basa en el uso de gráficos vectoriales, también se puede utilizar para retocar fotografías. Ofrece varias herramientas que facilitan la creación de imágenes o su edición. Posibilita la generación del código QR, efectos especiales y diseño de páginas web. Este programa es muy utilizado en las empresas de marketing y publicidad. 
          .col-md-6
            figure
              img(src='@/assets/curso/img10.jpg', alt='Texto que describa la imagen')
    .row.mb-5 
      .col-lg-2.col-md-3.col-sm-4.col-xs-5
        img(src='@/assets/curso/img11.jpg', alt='Texto que describa la imagen')
      .col-lg-6.col-md-6.col-sm-6.col-xs-6
        h3 Interfaz de Photoshop
        p Esta se compone de la pantalla principal que se puede observar al abrir el programa, como la barra de aplicación, además de los íconos, herramientas, comandos y demás componentes y herramientas que conforman el programa. 
    #t_2_2.titulo-segundo
      h2 2.2. Principales herramientas
    figure.mb-5   
      img(src='@/assets/curso/img12.png', alt='Texto que describa la imagen')
      figcaption Nota. Tomada de https://www.fotoaprendizaje.com/las-principales-herramientas-de-photoshop/
    p.mb-5 Antes de explicar de manera detallada algunas de las herramientas más importantes, es necesario decir que todas se encuentran distribuidas dentro de todo el espacio de la interfaz, en la parte izquierda ubicadas dentro del panel de herramientas, en la barra superior denominada MENÚ se encuentran todas las herramientas y componentes disponibles para su utilización. Finalmente, al lado derecho están los paneles flotantes en donde aparecen las diferentes características o cualidades de algunos elementos.
      br
      br
      |Es importante recordar que las herramientas se encuentran agrupadas de acuerdo con el uso y las características, algunas de ellas tienen un panel desplegable, en donde se encuentran todos sus componentes. 
      br
      br
      | En este panel se encuentran características de tamaño, modo, opacidad, flujo, selección entre otros. Para elegir uno de estos elementos en particular, se selecciona el panel que muestra las características y herramientas que se pueden trabajar. A continuación, se podrán conocer las principales herramientas y elementos que componen la interfaz de Photoshop.

    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------
    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta.gradient1.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img13.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video Interfaz de Photoshop
                  p.text-small A manera de ejemplo se presenta el siguiente video, se recomienda su descarga.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    h4.mb-5 Herramientas de color
    .row.mb-5 
      .col-lg-1.col-md-2.col-sm-3.col-xs-4
        img(src='@/assets/curso/img14.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8
        p.mb-5 Las herramientas de color permiten seleccionar, crear, agregar, combinar, diferentes tipos de color, dependiendo del uso que se requiera. Se puede encontrar las herramientas en el panel de la izquierda o en la barra de menú VENTANA. 
          br
          br
          |Las funciones de las herramientas son las siguientes:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Conmutar origen para área de relleno, permite rellenar con un color frontal o de motivo.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Modo de relleno, presenta diversidad de modos. 
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Opacidad para relleno, permite por ejemplo realizar transparencias. 
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Tolerancia, gama de colores de relleno que aceptará principalmente la varita.
    p.mb-5 El panel de herramientas de color de Photoshop se compone de cuatro (4) diferentes paletas que son las que se describen a continuación:
    .tarjeta.color--secundario-claro.p-4.mb-5
      SlyderA
        .row.align-items-end
          .col-md-6
            figure
              img(src='@/assets/curso/img15.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Color
            p Permite crear diferentes tonos combinando diferentes cantidades de color. 
        .row.align-items-end
          .col-md-6
            figure
              img(src='@/assets/curso/img16.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Muestras
            p En la paleta muestras, se encuentran diferentes carpetas con muestras, como por ejemplo lo que se visualiza en esta imagen.
        .row.align-items-end
          .col-md-6
            figure
              img(src='@/assets/curso/img17.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Degradados
            p  En esta paleta se encuentran diversas carpetas divididas por muestras de color, con degradados predeterminados. 
        .row.align-items-end
          .col-md-6
            figure
              img(src='@/assets/curso/img18.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Motivos
            p Muestra diferentes tipos de motivos de árboles, hierba, agua, entre otros. 
    .row.mb-5 
      .col-lg-3
        img.mb-3(src='@/assets/curso/img19.jpg', alt='Texto que describa la imagen')
        .cajon__1.text-center.p-4
          h4 RGB
          p Este modelo de color se crea superponiendo las luces de color Rojo (1), Verde (2) y Azul (3). Representa una amplia gama de matices de color. Cada uno de estos tres colores tiene rango de 0 a 255 que representa su intensidad.
      .col-lg-3
        img.mb-3(src='@/assets/curso/img20.jpg', alt='Texto que describa la imagen')
        .cajon__1.text-center.p-4
          h4 HSB
          p Este modelo de color es más cercano a la percepción humana de los colores. HSB contiene tres elementos base, tono (1) saturación (2) y brillo (3). Este modelo de color puede encontrarse también como HSV que significa Tono, Saturación y Valor y es similar a HSB.
      .col-lg-3
        img.mb-3(src='@/assets/curso/img21.jpg', alt='Texto que describa la imagen')
        .cajon__1.text-center.p-4
          h4 CMYK
          p Este modelo de color se basa en la absorción de la tinta en el papel impreso. Trabaja con Cian (1), Magenta (2), Amarillo (3) y Negro (4), y cualquier color se obtiene a través de valores porcentuales de estos colores. Menor porcentaje equivale a colores más claros y mayor porcentaje equivale a colores más oscuros. 
      .col-lg-3
        img.mb-3(src='@/assets/curso/img22.jpg', alt='Texto que describa la imagen')
        .cajon__1.text-center.p-4
          h4 LAB
          p Este modelo de color se basa en cómo se ve el color, en lugar de su valor en los medios digitales. Representa el valor absoluto de color independientemente de las computadoras. El valor de color se mezcla a través de tres ejes. L (1) que significa claridad y tiene valor de 0 / negro a 100 / blanco, a (2) que representa los ejes del verde al rojo y b (3) que representa los ejes del azul al amarillo.
    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------
    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta.gradient1.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img23.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video Herramientas de color
                  p.text-small A continuación, observe el video Herramientas de color para una mejor comprensión del tema.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download     
    h4.mb-5 Herramientas de pinceles
    .row.mb-5 
      .col-lg-1.col-md-2.col-sm-3.col-xs-4
        img(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8
        p.mb-5 En esta herramienta están todos los pinceles que se comportan como una herramienta de dibujo tradicional, y que funciona de manera similar a un pincel normal. Tiene muchas opciones de uso, aunque se denomine simplemente como una herramienta de pintura. 
          br
          br
          |La herramienta pincel, cuando es seleccionada, genera las opciones pertinentes a trabajar con el pincel, como son:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Selector de pinceles.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Ajustes de pincel.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Modo de pintura.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Opacidad del trazo.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Flujo del trazo.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Suavizar el trazo.
    h4 Ajustes de pincel
    p.mb-5 A continuación, se tendrá en cuenta lo que en este tema presenta Adobe (s.f.):
    .row.justify-content-center.mb-5 
      .col-lg-8 
        .cajon.color-primario.color--primario-claro.p-4.mb-4
          p.mb-0 El panel Ajustes del pincel permite modificar los pinceles existentes y diseñar nuevos pinceles personalizados. El panel Ajustes del pincel contiene las opciones de punta de pincel que determinan la forma en la que se aplica la pintura a la imagen. La previsualización de trazo del pincel en la parte inferior del panel muestra la forma en la que aparecen los trazos con las opciones de pincel actuales.
    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------
    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta.gradient1.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video Pinceles
                  p.text-small A continuación, observe el video Pinceles para una mejor comprensión del tema.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download     
    h4.mb-4 Herramientas de ilustración y dibujo
    p.mb-5 Estas herramientas ofrecen excelentes resultados a la hora de elaborar un dibujo o una ilustración y no deben faltar en la mesa de trabajo; a continuación, se describen así como sus bondades:
    h5.mb-5  Herramienta pluma
    .row.mb-5 
      .col-lg-1.col-md-2.col-sm-3.col-xs-4
        img(src='@/assets/curso/img26.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8
        p.mb-5 De acuerdo con el portal web Desarrolloweb (2019):
          br
          br
          |Esta herramienta es muy útil, pero un tanto compleja de manejar. Sirve para hacer trazados de cualquier tipo, curvos o poligonales. Lo bueno es que nos permite editar los trazados una vez hechos y que pueden ajustarse a cualquier recorrido que necesitemos, por complejo que sea. Junto con la herramienta de Pluma tendrás que aprender a usar otras herramientas complementarias que forman parte del mismo grupo.
          br
          br
          |Las siguientes son herramientas complementarias que hacen parte del grupo de la herramienta Pluma:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Modo de herramienta.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Color de trazo.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Tipo de trazo.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Tipo de trazo forma.
    h5.mb-5 Herramienta rectángulo
    .row.mb-5 
      .col-lg-1.col-md-2.col-sm-3.col-xs-4
        img(src='@/assets/curso/img27.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8
        p.mb-5 Continuando con lo que se menciona en Desarrollo web (2019) el Rectángulo “Sirve para hacer rectángulos, que pueden estar o no rellenos de color”. En el lugar donde está el rectángulo hay otra serie de herramientas para hacer otros tipos de formas, como elipses, líneas o incluso formas personalizadas.
          br
          br
          |Herramientas que se utilizan para los rectángulos y otros tipos de formas:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Tipo de relleno.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Tipo de trazo.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Anchura del trazo.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Tipo de trazo (forma).
    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------
    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta.gradient1.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video Pluma
                  p.text-small A continuación, observe el video Pluma para una mejor comprensión del tema.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download     
    h4 Herramientas de selección y organización de objetos
    p.mb-5 En Photoshop existen varias herramientas de selección que, como su nombre mismo lo indican, permiten seleccionar objetos dentro del área de trabajo, las cuales son útiles dependiendo la función que se busque, según Desarrolloweb (2019) se tiene lo siguiente en cuanto a este tema:

    .col-lg-4.mb-5: img(src='@/assets/curso/img28.jpg', alt='Texto que describa la imagen')
    .row.mb-5 
      .col-lg-6
        h5 Marco rectangular
        img.mb-3(src='@/assets/curso/img29.jpg', alt='Texto que describa la imagen')
        p
          b “Una herramienta para realizar selecciones cuadradas o rectangulares”. 
      .col-lg-6
        h5 Marco elíptico
        img.mb-3(src='@/assets/curso/img30.jpg', alt='Texto que describa la imagen')
        p
          b “Herramienta para crear selecciones circulares o elípticas”.
    h4 Herramienta mover capas
    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-b.color-acento-botones.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Las capas son también fundamentales en Photoshop. Todo se organiza en capas, que puedes tratar de manera independiente. El hecho de trabajar con capas ofrece mucha versatilidad a los diseños, ya que puedes aplicar efectos, retoques y transformaciones a cada capa de manera independiente.
            i.fas.fa-quote-right.d-flex.justify-content-end
    
    .row.mb-5 
      .col-lg-6 
        h4 Herramienta mover
        .d-flex.align-items-center
          img.mb-3(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen' style='width: 80px')
          p.ms-4 “Sirve para mover el contenido de la capa en la que estamos trabajando. La capa se mueve por completo o bien solo el área seleccionada, si es que había una selección creada”. 
        img.mb-3(src='@/assets/curso/img35.jpg', alt='Texto que describa la imagen')
      .col-lg-6 
        h4 Varita mágica
        .d-flex.align-items-center
          img.mb-3(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen' style='width: 80px')
          p.ms-4 "Es para hacer selecciones rápidas de áreas del mismo color. Pulsando en un lugar de la imagen nos selecciona toda el área que tiene el mismo color continuo”.
        img.mb-3(src='@/assets/curso/img36.jpg', alt='Texto que describa la imagen')
    .row.mb-5 
      .col-lg-6 
        h4 Lazo
        .d-flex.align-items-center
          img.mb-3(src='@/assets/curso/img33.svg', alt='Texto que describa la imagen' style='width: 80px')
          p.ms-4 “Sirve para mover el contenido de la capa en la que estamos trabajando. La capa se mueve por completo o bien solo el área seleccionada, si es que había una selección creada”. 
        img.mb-3(src='@/assets/curso/img37.jpg', alt='Texto que describa la imagen')
      .col-lg-6 
        h4 Lazo Poligonal
        .d-flex.align-items-center
          img.mb-3(src='@/assets/curso/img34.svg', alt='Texto que describa la imagen' style='width: 80px')
          p.ms-4 “Sirve para hacer selecciones más complejas, marcando los vértices de un polígono. También es muy útil y sencilla de manejar en tus primeros pasos”.
        img.mb-3(src='@/assets/curso/img38.jpg', alt='Texto que describa la imagen')
    #t_2_3.titulo-segundo
      h2 2.3 Manejo de capas
    .row.justify-content-between.mb-5
      .col-lg-6
        p Las capas en cualquier programa de diseño son muy importantes ya que posibilitan mayores ventajas en el trabajo, dando orden a los elementos compositivos del mismo. Al abrir un archivo en Photoshop que está compuesto por varias capas, cada una de estas se comporta como una imagen independiente, es como si estuvieran superpuestas varias hojas de acetato y en cada una de ellas estuviera impreso un elemento de la imagen. 
          br
          br
          |La capa que se encuentra en la parte superior prevalece sobre las otras. 
          br
          |Tal como se encuentra en la página de Adobe (s.f.) “Las capas sirven para realizar diversas tareas, entre otras, componer varias imágenes, añadir texto a una imagen o añadir formas de gráficos vectoriales”.
      .col-lg-5: img.mb-3(src='@/assets/curso/img39.jpg', alt='Texto que describa la imagen')(data-aos="fade-left")
    h3 Organización de las capas de photoshop
    p.mb-5 De acuerdo con Adobe (s.f.), 
      b “Cada imagen nueva tiene una sola capa. El número de capas, conjuntos de capas y efectos de capa adicionales que puede añadir a la imagen está limitado solo por la memoria de su equipo”.
      br
      br
      |Las operaciones con las capas se llevan a cabo en el panel Capas. Los grupos de capas le ayudan a organizar y gestionar las capas. Puede utilizar grupos para organizar las capas de manera lógica y despejar el panel Capas. Puede anidar grupos en otros grupos. También puede utilizar grupos para aplicar atributos y máscaras a varias capas a la vez (Adobe, s.f.).
    ImagenInfografica.color-acento-botones.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img40.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-secundario.p-3(x="61.4%" y="9%")
        p Menú de capa
      .tarjeta.color-secundario.p-3(x="40.5%" y="38%")
        p Visibilidad de capa
      .tarjeta.color-secundario.p-3(x="43.4%" y="52%")
        p Miniatura de capa
      .tarjeta.color-secundario.p-3(x="46.5%" y="60%")
        p Nombre de capa
    p.mb-5 Se puede aprender más a través del siguiente video:
    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------
    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta.gradient1.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img41.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video Capas
                  p.text-small A continuación, observe el video Capas para una mejor comprensión del tema.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download    
    #t_2_4.titulo-segundo
      h2 2.4 Manejo de textos
    p.mb-5 La herramienta texto es muy fácil de utilizar, se encuentra ubicada en la barra izquierda de herramientas y se encuentra denominada por la letra (T). Al abrir el menú desplegable se pueden observar las herramientas correspondientes como se ve en pantalla. 
      br
      br
      |Para utilizar la herramienta de Texto, debe dirigirse a la barra de herramientas en la parte izquierda denominada así.
    .col-lg-6: img.mb-5(src='@/assets/curso/img42.jpg', alt='Texto que describa la imagen')(data-aos="fade-left")
    .row.mb-5
      .col-lg-6
        h4 Herramienta texto horizontal
        p.mb-0 La herramienta texto permite escribir en cualquier parte de la mesa de trabajo, solo hay que seleccionar la herramienta, hacer clic en la mesa de trabajo y escribir.
        img.mb-3(src='@/assets/curso/img43.jpg', alt='Texto que describa la imagen')
      .col-lg-6
        h4 Herramienta texto vertical
        p.mb-4 Presenta la variación a la dirección vertical. 
        img.mt-4(src='@/assets/curso/img44.jpg', alt='Texto que describa la imagen')
    p.mb-5 La barra de propiedades aparece en la parte superior y contiene las siguientes:
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Orientación del texto.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Carácter de tipografía (fuente).
      li 
        .lista-ol--cuadro__vineta
          span 3
        | Estilo de la tipografía bold, negrita, itálica, etc.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | Puntaje de la tipografía (tamaño).
      li 
        .lista-ol--cuadro__vineta
          span 5
        | Método de suavizado, sirve para suavizar los textos seleccionados*.
      li 
        .lista-ol--cuadro__vineta
          span 6
        | Alineación del texto centrado, izquierda, derecha.
      li 
        .lista-ol--cuadro__vineta
          span 7
        | Color del texto.
      li 
        .lista-ol--cuadro__vineta
          span 8
        | Texto deformado, permite dar efectos deformados al texto como se puede ver en el ejemplo**.
      li 
        .lista-ol--cuadro__vineta
          span 9
        | Conmutar paneles carácter y párrafo.
    .row.mb-5 
      .col-lg-6
        .imagen-numero
          .imagen-numero__imagen: img(src='@/assets/curso/img45.jpg', alt='Texto que describa la imagen')
          .imagen-numero__textos.d-flex
            .numero-recuadro.text-white
              h4.m-auto 5
            p.ms-2 *Ejemplo - Método de suavizado
      .col-lg-6
        .imagen-numero
          .imagen-numero__imagen: img(src='@/assets/curso/img46.jpg', alt='Texto que describa la imagen')
          .imagen-numero__textos.d-flex
            .numero-recuadro.text-white
              h4 8
            p.ms-2 *Ejemplo - Texto deformado
    p.mb-5 En este panel se tienen diversas herramientas para trabajar: el texto, la fuente, el color, el interlineado, kerning, tracking, al igual que el manejo del párrafo en cuanto a su alineación, manejo de sangría, espaciado, entre otros.         
    .row.mb-5 
      .col-lg-3: img(src='@/assets/curso/img47.jpg', alt='Texto que describa la imagen')
      .col-lg-4: img(src='@/assets/curso/img48.jpg', alt='Texto que describa la imagen')
    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    // TODO! añadir video cuando este listo !!! -------------------------------------------------------------------------------------------------------------------------
    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta.gradient1.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1 
              img(src="@/assets/curso/img41.svg") 
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video Texto
                  p.text-small A continuación, observe el video Texto para una mejor comprensión del tema. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    #t_2_5.titulo-segundo
      h2 2.5 Importación y exportación
    p.mb-5 La información que se encuentra sobre este tema tan importante en Onlineprinters Blog (2021), describe lo siguiente: 
    h4 Apertura de un archivo con el comando Abrir
    .row.mb-5.justify-content-between
      .col-lg-6 
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img50.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 Seleccione Archivo > Abrir.
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img51.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 Seleccione el nombre del archivo que desea abrir. Si el archivo no aparece, seleccione la opción de mostrar todos los archivos en el menú emergente Tipo (Windows) o Activar (Mac OS).
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img52.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 Haga clic en Abrir. En algunos casos aparece un cuadro de diálogo que permite configurar opciones específicas del formato.
        hr.mb-1
      .col-lg-5  
        img(src='@/assets/curso/img49.jpg', alt='Texto que describa la imagen')   
    p.mb-5 Importar archivos como imágenes en Photoshop, se puede realizar de múltiples maneras, la manera más fácil es arrastrando una imagen desde el explorador al área de trabajo, por ejemplo:
    .row.mb-5
      .col-lg-6: img(src='@/assets/curso/img53.jpg', alt='Texto que describa la imagen')(data-aos="fade-left")
      .col-lg-6: img(src='@/assets/curso/img54.jpg', alt='Texto que describa la imagen')(data-aos="fade-right")
    p.mb-5 Continuando con la información que sobre este tema presenta Onlineprinters Blog (2021), se encuentra lo siguiente:
      br
      br
      |El documento en el que se encuentra la imagen tiene exactamente las mismas medidas y configuraciones que las que tiene la imagen de por sí. Aquí se incluye, por ejemplo, la resolución, la anchura y la altura, así como el modo de color utilizado.
    h4 Importar un archivo PDF
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.color--primario-claro.p-4.mb-4
          p “Para importar un archivo en PDF a la capa de un documento que ya está abierto, seleccione Archivo - Importar. Si lo hace así, solo se importará una página.
            br
            br
            |Para importar un archivo PDF en un documento nuevo, haga clic en el menú Archivo - Abrir. Puede importar varias páginas de un mismo PDF en documentos distintos.
            br
            br
            |Elija el tipo de 
            b archivo Photoshop PDF
            |, seleccione el documento deseado y haga clic en 
            b Importar 
            |o 
            b Abrir.
            br
            br
            |En el área 
            b Seleccionar
            | , escoja 
            b Página
            | o 
            b Imagen
            | y defina la presentación de las miniaturas en la lista desplegable 
            b Tamaño de miniatura (Pequeña, Grande o Ajustar página). 
            | En el área Seleccionar, haga clic en el elemento que desea colocar”.
    h4 Creación de una imagen
    p.mb-5 En la página Adobe (s.f.) se encuentra, para la creación de una imagen, la siguiente descripción:
    .row.mb-5.justify-content-between
      .col-lg-6 
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img50.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 Seleccione Archivo > Nuevo.
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img51.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 En el cuadro de diálogo Nuevo, escriba el nombre de la imagen.
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img52.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 (Opcional) Seleccione el tamaño del documento desde el menú 
            b   Tipo de documento.
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img55.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 Defina la anchura y la altura. Para ello, seleccione un ajuste preestablecido en el menú Tamaño o escriba los valores oportunos en los cuadros de texto Anchura y Altura.
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img56.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 Defina la resolución, el modo de color y la profundidad de bits.
        hr.mb-1
        .lista-numero.d-flex.align-items-center
          img(src='@/assets/curso/img57.svg', alt='Texto que describa la imagen' style='width:60px')
          p.ms-3.mb-0 Si ha copiado una selección en el Portapapeles, las dimensiones y la resolución de la imagen se basan de forma automática en los datos de dicha imagen.
        hr.mb-1
      .col-lg-5  
        img(src='@/assets/curso/img58.jpg', alt='Texto que describa la imagen')
    h4 Exportar
    p.mb-5 Siguiendo a Adobe (s.f.), se pueden utilizar las opciones 
      b Exportación rápida como y Exportar como 
      | para exportar un documento, mesas de trabajo, capas y grupos de capas de Photoshop en los formatos de archivo PNG, JPG, GIF y SVG.
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.gris1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img59.svg', alt='Texto que describa la imagen')
          
        h3.text-center Exportación rápida como
        p Utilice la opción Exportación rápida como cuando desee exportar rápidamente su trabajo de acuerdo con la configuración que ha especificado en las Preferencias de exportación rápida.
          br
          br
          |Para acceder a la opción Exportación rápida como, realice una de las acciones siguientes:
        ul.lista-ul
          li 
            i.fas.fa-circle
            | Vaya a Archivo > Exportar > Exportación rápida como [formato de imagen].
          li 
            i.fas.fa-circle
            | Vaya al panel Capas. Seleccione las capas, los grupos de capas o las mesas de trabajo que desee exportar. Haga clic con el botón derecho en la selección y seleccione Exportación rápida como [formato de imagen] en el menú contextual (Adobe, s.f.). 

      .col-md.tarjeta.gris2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img60.svg', alt='Texto que describa la imagen')
          
        h3.text-center Exportar como
        p Utilice la opción Exportar como para ajustar la configuración de exportación cada vez que exporte capas, grupos de capas, mesas de trabajo o documentos de Photoshop como imágenes. Cada capa, grupo de capas o mesa de trabajo seleccionado se exporta como recurso de imagen independiente.
          br
          |Para utilizar el cuadro de diálogo Exportar como, realice una de las siguientes acciones:
        ul.lista-ul
          li 
            i.fas.fa-circle
            | Vaya a Archivo > Exportar > Exportar como para exportar el documento actual de Photoshop. Si el documento contiene mesas de trabajo, todas las mesas de trabajo se exportarán desde este cuadro de diálogo.
          li 
            i.fas.fa-circle
            | Vaya al panel Capas. Seleccione las capas, los grupos de capas o las mesas de trabajo que desee exportar. Haga clic con el botón derecho en la selección y seleccione Exportar como en el menú contextual (Adobe, s.f.).













          
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

<style lang="sass" scoped></style>
