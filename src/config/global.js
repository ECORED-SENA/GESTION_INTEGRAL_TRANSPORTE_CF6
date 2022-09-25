export default {
  global: {
    componenteFormativo: 'Programación de operación',
    descripcionCurso:
      'A través de este contenido, el aprendiz podrá identificar y conocer los procedimientos, normas, modelos, rutas y demás conceptos que intervienen en la programación de operación en el transporte de carga.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
    ],
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
        titulo: 'Canales de distribución',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelos de distribución',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Redes logísticas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Selección de rutas de transporte con puntos de origen y destinos diferentes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Selección de servicios de transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Ciclo de pedido',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Administración de cadena de suministro SCM',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Entrega y recibo de mercancías',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Calidad de la gestión y desempeño de la operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: '<em>Cross docking</em>',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Logística inversa',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Configuración de pedidos',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
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
      referencia:
        'Alvarado, F. (2018). ¿Qué es el cross docking y para qué sirve? Esan Business.',
      link:
        'https://esan.edu.pe/conexion-esan/que-es-el-cross-docking-y-para-que-sirve',
    },
    {
      referencia:
        'Bedoya, L. (2019). Curso intensivo especializado en operaciones y logística. Escuela Empresarial del Perú.',
      link: 'https://www.slideshare.net/DiplomadosESEP/logo020319p',
    },
    {
      referencia:
        'Borrero, N., Patarroyo, E., Salgado, K. y Gelves, M. (2019) Análisis de ruta alimentadora 9-10 Transmilenio por medio de TPS (agente viajero). Universidad Santo Tomás. ',
      link:
        'https://repository.usta.edu.co/bitstream/handle/11634/22318/Articulo-.pdf?sequence=1&isAllowed=y#:~:text=El%20m%C3%A9todo%20m%C3%A1s%20b%C3%A1sico%20es,en%20redes%20de%20gran%20tama%C3%B1o',
    },
    {
      referencia:
        'Gaither, N. (2000). Administración de operaciones. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Gómez, J. (2011) Gestión logística y comercial. McGraw-Hill Education.',
      link:
        'http://190.116.26.93:2171/mdv-biblioteca-virtual/libro/documento/8zdvWxHm4ut8z7BGJQqtLK_GESTION_LOGISTICA_Y_COMERCIAL.pdf',
    },
    {
      referencia:
        'Instituto Europeo de Posgrado [IEP]. (s. f.). Qué es la gestión logística. ',
      link: 'https://www.iep-edu.com.co/que-es-la-gestion-logistica/',
    },
    {
      referencia:
        'Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Julio 6 de 2002. DO. Nº 44.932. ',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      referencia:
        'Ministerio de Transporte, Fondo de Prevención Vial, Universidad del Cauca [Unicauca]. (2010). Método para establecer límites de velocidad en carreteras colombianas. ',
      link:
        'http://artemisa.unicauca.edu.co/~carboled/Libros/CARTILLA%20abril%2015%202010.pdf ',
    },
    {
      referencia:
        'Rodríguez, J. (2017). Manual de transporte de carga. Editorial Utadeo. ',
      link:
        'https://www.utadeo.edu.co/sites/tadeo/files/node/publication/field_attached_file/pdf-_manual_de_transporte_de_carga_-_web.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Delegación comercial',
      significado:
        'Consiste en una oficina de ventas que actúa como extensión de la empresa en un mercado exterior, pero sin personalidad jurídica ni capacidad para realizar operaciones en nombre propio. Las instalaciones son muy reducidas –en ocasiones se dispone de una sala de exposiciones (<em>showroom</em>) o de almacén- y el personal se limita a muy pocas personas.',
    },
    {
      termino: '<em>E-commerce</em>',
      significado:
        'El <em>e-commerce</em> consiste en el <em>marketing</em> y venta de productos o servicios a través de <em>Internet</em>.',
    },
    {
      termino: 'KPI',
      significado:
        'Acrónimo de <em>Key Performance Indicator</em>, son indicadores que miden el desempeño de un determinado proceso en comparación con datos históricos de la misma compañía o cualquier otra métrica de referencia, como la información de la competencia.',
    },
    {
      termino: '<em>Picking</em>',
      significado:
        'El <em>picking</em> es la actividad de preparación de pedidos que consiste en la recogida y combinación de cargas no unitarias para conformar el pedido de un cliente.',
    },
    {
      termino: 'TIC',
      significado:
        'Las Tecnologías de la Información y las Comunicaciones (TIC) son el conjunto de recursos, herramientas, equipos, programas informáticos, aplicaciones, redes y medios que permiten la compilación, procesamiento, almacenamiento, transmisión de información como: voz, datos, texto, video e imágenes.',
    },
  ],
  complementario: [
    {
      tema: 'Canales de distribución',
      referencia:
        '<em>Marketing Trainee</em>. (2020) ¿Qué son los canales de distribución? / Ejemplos Importancia / Tipos [Video].',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=qjTVRRMw7bw&list=RDCMUCBR3YBLDZyfBTJ0OL_nCOWg&start_radio=1',
    },
    {
      tema: 'Método “Problema del Viajero”',
      referencia:
        'Señal Santa Fe. (2011) <em>Travelling Salesman Problem</em> (TSP) [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oSPkod-M6Gc',
    },
    {
      tema:
        'Normatividad vigente para el transporte de carga: velocidades y tiempos permitidos',
      referencia:
        'Ministerio de Transporte, Fondo de Prevención Vial, Universidad del Cauca [Unicauca]. (2010). Método para establecer límites de velocidad en carreteras colombianas.',
      tipo: 'Documento en línea',
      link:
        'http://artemisa.unicauca.edu.co/~carboled/Libros/CARTILLA%20abril%2015%202010.pdf',
    },
    {
      tema:
        'Normatividad vigente para el transporte de carga: velocidades y tiempos permitidos',
      referencia:
        'Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Julio 6 de 2002. DO. Nº 44.932.',
      tipo: 'Documento en línea',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
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
        nombre: 'Dairo Giovanni Rodríguez Agatón',
        cargo: 'Experto Temático',
        centro:
          'Regional Distrito Capital - Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
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
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenido',
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
