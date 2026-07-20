// Datos de ejemplo (mock) para la sección "Agenda Jiwaki", inspirados en
// https://agendajiwaki.lapaz.bo (Alcaldía de La Paz / GAMLP).
//
// Jerarquía: Categoría -> Lugar/Espacio -> Eventos
//
// Solo "Teatros Municipales > Teatro Municipal Alberto Saavedra Pérez" tiene
// datos reales de la captura de pantalla. El resto queda como plantilla
// (arrays vacíos) para que se pueda ir completando sin tocar los componentes.
//
// TODO: reemplazar por el consumo real de la API municipal cuando esté
// disponible (ver también el TODO de src/data/eventos.js).

export const categoriasJiwaki = [
  {
    slug: 'teatros-municipales',
    nombre: 'Teatros Municipales',
    tipo: 'listado',
    lugares: [
      {
        slug: 'alberto-saavedra-perez',
        nombre: 'Teatro Municipal Alberto Saavedra Pérez',
        direccion: 'C. Indaburo, esq. Genaro Sanjinés',
         eventos: [
          {
            id: 'asp-1',
            titulo: '15ta versión La Paz Baila Tango – Festival Nacional del Tango Bolivia 2026',
            fecha: '2026-07-02',
            hora: '19:30',
            imagen: '/images/evento1.png',
          },
          {
            id: 'asp-2',
            titulo: 'Obra Danza Árabe "Ali Baba y las 40 Ladronas"',
            fecha: '2026-07-04',
            hora: '18:00',
            imagen: '/images/evento2.png',
          },
          {
            id: 'asp-3',
            titulo: 'The Beatles Coral',
            fecha: '2026-07-08',
            hora: '19:30',
            imagen: '/images/evento3.png',
          },
          {
            id: 'asp-4',
            titulo: 'De Bolivia al Mundo: Savia Andina',
            fecha: '2026-07-10',
            hora: '19:30',
            imagen: '/images/evento4.png',
          },
          {
            id: 'asp-5',
            titulo: 'Un viaje monumental por las grandes óperas de la historia',
            fecha: '2026-07-18',
            hora: '19:00',
            imagen: '/images/evento5.png',
          },
          {
            id: 'asp-6',
            titulo: 'Kimsa Tunka Tunka Pusini: Encuentro de Teatro Breve, Dramaturgia "Guido Arze"',
            fecha: '2026-07-24',
            hora: '19:30',
            imagen: '/images/evento6.png',
          },
        ],
      },
      // Plantilla: mismos venues que la captura, sin eventos todavía.
      {
        slug: 'cine-teatro-6-de-agosto',
        nombre: 'Cine Teatro Municipal 6 de Agosto',
        direccion: '',
        eventos: [],
      },
      {
        slug: 'teatro-aire-libre-jaime-laredo',
        nombre: 'Teatro al Aire Libre Jaime Laredo',
        direccion: '',
        eventos: [],
      },
      {
        slug: 'modesta-sanjines',
        nombre: 'Teatro Municipal Modesta Sanjinés',
        direccion: '',
        eventos: [],
      },
      {
        slug: 'camara-norma-merlo',
        nombre: 'Teatro Municipal de Cámara Norma Merlo',
        direccion: '',
        eventos: [],
      },
    ],
  },
  { slug: 'museos-municipales', nombre: 'Museos Municipales', tipo: 'listado', lugares: [] },
  { slug: 'bibliotecas-municipales', nombre: 'Bibliotecas Municipales', tipo: 'listado', lugares: [] },
  {
    slug: 'pipiripi',
    nombre: 'Espacio Interactivo Memoria y Futuro Pipiripi',
    tipo: 'listado',
    lugares: [],
  },
  { slug: 'casas-distritales', nombre: 'Casas Distritales', tipo: 'listado', lugares: [] },
  { slug: 'feria-cultural-familia', nombre: 'Feria Cultural de la Familia', tipo: 'listado', lugares: [] },
  { slug: 'mas-actividades', nombre: 'Más actividades Culturales', tipo: 'listado', lugares: [] },
  // "Registra tu evento" no es un listado: es una acción/CTA.
  { slug: 'registra-evento', nombre: 'Registra tu evento', tipo: 'accion' },
]