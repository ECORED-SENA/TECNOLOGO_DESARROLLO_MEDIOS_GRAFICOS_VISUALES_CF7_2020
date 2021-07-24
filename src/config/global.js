export default {
  global: {
    componenteFormativo: 'Bocetación e ilustración',
    descripcionCurso:
      'La ilustración juega un papel muy importante en el diseño que presenta un alto valor en contenido gráfico y visual. Se caracteriza por su versatilidad de componentes, técnicas, formas, manejo de recursos, entre otros. Por medio de ella se transmiten mensajes claros y concisos que llegan al espectador de una manera directa que permite una comprensión total de cualquier tema. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Del boceto a la ilustración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición del proyecto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Correcciones y aprobación ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Software y herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Software seleccionado',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principales herramientas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: ' Manejo de capas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Manejo de textos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Importación y exportación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ilustración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fases',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación de ilustraciones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Composición y perspectiva',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Creación de ambientes, personajes y props',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Adobe. (s.f.). Conceptos básicos de las capas.',
      link: 'https://helpx.adobe.com/es/photoshop/using/layer-basics.html',
    },
    {
      referencia: 'Adobe. (s.f.). Creación y modificación de pinceles.',
      link:
        'https://helpx.adobe.com/es/photoshop/using/creating-modifying-brushes.html#:~:text=El%20panel%20Ajustes%20del%20pincel,la%20pintura%20a%20la%20imagen',
    },
    {
      referencia: 'Adobe. (s.f.). Exportación de archivos en Photoshop.',
      link:
        'https://helpx.adobe.com/la/photoshop/using/export-artboards-layers.html',
    },
    {
      referencia:
        'Desarrolloweb.com (2019). Herramientas Principales de Photoshop.',
      link:
        'https://desarrolloweb.com/articulos/herrameintas-principales-photoshop.html',
    },
    {
      referencia: 'Dupon L. (2004). 1.001 trucos publicitarios. Redbook.',
      link: '',
    },
    {
      referencia: 'EcuRed. (s.f). Indígenas Guane.',
      link: 'https://www.ecured.cu/Ind%C3%ADgenas_Guane',
    },
    {
      referencia: 'García, H. (s.f.). Ilustración publicitaria. ',
      link:
        'http://ilustrandoenlaescueladearte.blogspot.com/2014/10/ilustracion-publicitaria.html',
    },
    {
      referencia: 'Izquierdo, T. (2019). Diseño gráfico y web.',
      link: 'https://taniaizquierdo.com/diccionario-diseno-grafico/#TRACKING',
    },
    {
      referencia:
        'Kalous, P. (2010). Una introducción a las herramientas de color Illustrator. ',
      link:
        'https://design.tutsplus.com/es/tutorials/an-introduction-to-illustrators-color-tools--vector-3549',
    },
    {
      referencia: 'Mora, J (2020). Fotoaprendizaje. ',
      link:
        'https://www.fotoaprendizaje.com/las-principales-herramientas-de-photoshop/',
    },
    {
      referencia: 'Onlineprinters Blog. (2021). Insertar imagen en Photoshop. ',
      link: 'https://www.onlineprinters.es/blog/insertar-imagen-photoshop/',
    },
    {
      referencia: 'Photoshop CS6. (s.f). Administrar las importaciones.',
      link:
        'https://www.ediciones-eni.com/open/mediabook.aspx?idR=0a4640d38bbb887a4614fb8486747d43',
    },
    {
      referencia: 'Significados. (2015). Significado de interfaz.',
      link: 'https://www.significados.com/interfaz/',
    },
  ],
  glosario: [
    {
      termino: 'Análoga',
      significado: 'Que tiene analogía con algo (RAE). ',
    },
    {
      termino: 'Incipiente',
      significado: 'que empieza (RAE). ',
    },
    {
      termino: 'Kerning',
      significado:
        'corrección visual del tracking (espacio entre letras), en dos caracteres consecutivos que no armonizan bien entre ellos, quedando demasiado separados y perdiendo legibilidad (Izquierdo, 2019).',
    },
    {
      termino: 'Pantone',
      significado:
        'sistema de identificación de colores de impresión creados por la empresa Pantone (Izquierdo, 2019).',
    },
    {
      termino: 'Tracking ',
      significado:
        'nombre para denominar la interletra, que no es otra cosa que el espacio entre letras (Izquierdo, 2019).',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González Tarazona',
        cargo: 'Instructor Experto Temático',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial ',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Zuleidy María Ruiz Torres'],
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Wilson Andrés Arenales Cáceres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Gilberto Junior Rodriguez Rodriguez'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Ludwyng Corzo García'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Ángela María Maldonado Jaime'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Lina Marcela Perez Manchego'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Lady Adriana Ariza Luque'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Arnulfo Beltrán Mojica'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
