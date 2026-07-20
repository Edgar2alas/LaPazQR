// Negocios activos del prototipo. Agrega más objetos a este array
// cuando se sumen nuevos participantes.
const negocios = [
  {
    nombre: 'Restaurante Ichuri',
    logo: '/images/IchuriLogo.png', // TODO: reemplazar por el logo real
    url: 'https://www.ichuri.net/', // TODO: agregar link real
  },
  {
    nombre: 'Nayra Qata Coffee',
    logo: '/images/NayraLogo.png', // TODO: reemplazar por el logo real
    url: 'https://marvincasas1773958950000.1060191.misitiohostgator.com/', // TODO: agregar link real
  },
]

const espaciosLibres = 2 // slots "próximo negocio" mientras se suman más

export default function ComercialSection() {
  return (
    <section className="bg-brand-orange py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="sr-only">Negocios asociados</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {negocios.map((negocio) => (
            <a
              key={negocio.nombre}
              href={negocio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-1 flex flex-col items-center justify-center gap-0 aspect-square"
            >
              <img
                src={negocio.logo}
                alt={negocio.nombre}
                className="w-[100%] h-[85%] object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <span className="text-xs md:text-sm font-semibold text-center text-slate-700 leading-tight">
                {negocio.nombre}
              </span>
            </a>
          ))}

          {[...Array(espaciosLibres)].map((_, i) => (
            <div
              key={`negocio-libre-${i}`}
              className="border-2 border-dashed border-white/60 rounded-lg p-4 flex items-center justify-center aspect-square"
            >
              <span className="text-white/80 text-xs md:text-sm text-center font-medium">
                Próximo negocio
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}