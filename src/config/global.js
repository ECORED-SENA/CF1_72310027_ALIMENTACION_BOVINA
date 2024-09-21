export default {
  global: {
    componenteFormativo:
      'Sistema digestivo, requerimientos nutricionales de bovinos y pastoreo',
    descripcionCurso:
      'El componente formativo explica el sistema digestivo de los bovinos, compuesto por cuatro compartimientos para la digestión mediante fermentación. Describe sus requerimientos nutricionales (agua, energía, proteínas, fibra, vitaminas y minerales) y la necesidad de suplementos para mejorar la producción. Además, aborda distintos sistemas de pastoreo (continuo, rotacional, alterno, franjas, diferido y estabulado), con sus ventajas y desventajas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ganado bovino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistema digestivo de los bovinos ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Anatomía',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Requerimientos nutricionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de pastoreo ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Ganado bovino ',
      referencia:
        'TvAgro (2024).Características del ganado bovino comercial - TvAgro por Juan Gonzalo Angel Restrepo. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=poXTQMJihqs  ',
    },
    {
      tema: 'Sistema digestivo de los bovinos ',
      referencia:
        'TvAgro. (2016).Cómo funciona el sistema digestivo de los Rumiantes - TvAgro por Juan Gonzalo Angel. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PjW00pyrgRI  ',
    },
    {
      tema: 'Anatomía ',
      referencia: 'IMAIOS (2024). Bovino - Anatomía general.  ',
      tipo: 'Simulador',
      link:
        'https://www.imaios.com/es/vet-anatomy/bovino/bovino-anatomia-general',
    },
    {
      tema: 'Requerimientos nutricionales ',
      referencia:
        'Lanuza A., F. (s.f.). <em>Requerimientos de nutrientes según estado fisiológico en bovinos de leche</em>. Instituto de Investigaciones Agropecuarias – Centro Regional de Investigación Remehue, Boletín INIA N° 148. Sitio Argentino de Producción Animal. ',
      tipo: '',
      link:
        'https://www.produccion-animal.com.ar/produccion_bovina_de_leche/produccion_bovina_leche/331-Requerimientos.pdf ',
    },
    {
      tema: 'Sistemas de pastoreo ',
      referencia:
        'Interés Agronómico. (2022). Pastoreo rotacional - Principios básicos. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_igtBYf0CMY  ',
    },
  ],
  glosario: [
    {
      termino: 'Abomaso',
      significado:
        'cuarto compartimiento del estómago, donde se descomponen los alimentos mediante ácidos y enzimas digestivas. ',
    },
    {
      termino: 'Fermentación',
      significado:
        'proceso bioquímico en el rumen y retículo donde microorganismos descomponen carbohidratos estructurales del forraje para generar ácidos grasos y energía. ',
    },
    {
      termino: 'Materia seca',
      significado:
        'porción de los alimentos que permanece después de eliminar toda el agua, fundamental para medir la ingesta adecuada de nutrientes en los bovinos. ',
    },
    {
      termino: 'Minerales',
      significado:
        'nutrientes esenciales como fósforo, calcio, magnesio, potasio, hierro, zinc, y otros, necesarios para el crecimiento y funcionamiento del rumen en los bovinos. ',
    },
    {
      termino: 'Omaso',
      significado:
        'tercer compartimiento del estómago bovino, responsable de absorber agua y minerales antes de que los alimentos lleguen al abomaso. ',
    },
    {
      termino: 'Pastoreo continuo',
      significado:
        'sistema donde el ganado permanece durante largos periodos en un mismo potrero, utilizando el forraje extensivamente. ',
    },
    {
      termino: 'Pastoreo rotacional',
      significado:
        'sistema intensivo en el que el ganado se traslada entre diferentes potreros para maximizar el aprovechamiento del forraje. ',
    },
    {
      termino: 'Retículo',
      significado:
        'segundo compartimiento del estómago de los bovinos, que filtra las partículas de alimento y las separa según su tamaño. ',
    },
    {
      termino: 'Rumen',
      significado:
        'primer compartimiento del estómago de los bovinos, donde se inicia la fermentación de los alimentos por microorganismos. ',
    },
    {
      termino: 'Suplementos alimenticios',
      significado:
        'aditivos añadidos a la dieta de los bovinos cuando el forraje no satisface los requerimientos nutricionales. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Arango Nieto, L. (2012).<em>Ganadería bovina en América Latina:</em>( ed.). D - FAO.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/66078 ',
    },
    {
      referencia:
        'Moron, L. (2009). Ventajas y desventajas de los sistemas de pastoreo. Bogotá, Colombia: Universidad de la Salle.',
      link: '',
    },
    {
      referencia:
        'Pozzolo, O. (2007). Cosecha de Forrajes. Argentina: Universidad Nacional de Entre Ríos.',
      link: '',
    },
    {
      referencia:
        'Relling, A. y Mattiolo, G. (2003). Fisiología digestiva y metabólica de los rumiantes. Argentina: Universidad Nacional de La Plata. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
