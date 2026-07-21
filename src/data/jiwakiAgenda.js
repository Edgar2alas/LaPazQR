// Estructura jerárquica de la sección "Agenda Jiwaki", inspirada en
// https://agendajiwaki.lapaz.bo (Alcaldía de La Paz / GAMLP).
//
// Jerarquía: Categoría -> Lugar/Espacio
//
// OJO: los eventos YA NO viven aquí. Viven en src/data/eventos.js (la misma
// fuente que usa el Calendario general), y cada lugar se conecta a sus
// eventos por su "slug" a través del campo `lugarSlug` de cada evento.
// Así, un evento que registres una sola vez aparece automáticamente en el
// Calendario general Y en la Agenda Jiwaki, sin duplicar nada.
//
// Solo "Teatros Municipales" tiene datos reales de la captura de pantalla.
// El resto queda como plantilla (arrays vacíos) para completarlo después.

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
      },
      // Plantilla: mismos venues que la captura, sin eventos todavía
      // (o sin `lugarSlug` asignado en eventos.js).
      {
        slug: 'cine-teatro-6-de-agosto',
        nombre: 'Cine Teatro Municipal 6 de Agosto',
        direccion: 'Av. 6 de Agosto, Sopocachi',
      },
      {
        slug: 'teatro-aire-libre-jaime-laredo',
        nombre: 'Teatro al Aire Libre Jaime Laredo',
        direccion: '',
      },
      {
        slug: 'modesta-sanjines',
        nombre: 'Teatro Municipal Modesta Sanjinés',
        direccion: 'Calle Indaburo, Casco Urbano Central',
      },
      {
        slug: 'camara-norma-merlo',
        nombre: 'Teatro Municipal de Cámara Norma Merlo',
        direccion: '',
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