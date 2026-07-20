const negocios = [
  {
    nombre: 'Restaurante Ichuri',
    logo: '/images/IchuriLogo.png', // TODO: reemplazar por el logo real
    url: 'https://www.ichuri.net/',
    tieneEventos: true,
  },
  {
    nombre: 'Nayra Qata Coffee',
    logo: '/images/NayraLogo.png', // TODO: reemplazar por el logo real
    url: 'https://marvincasas1773958950000.1060191.misitiohostgator.com/',
    tieneEventos: true,
  },
]

const espaciosLibres = 2

export default function ComercialSection() {
  return (
    <section className="bg-brand-orange py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1 text-center">
          Negocios asociados
        </p>
        <h2 className="text-white text-2xl sm:text-3xl font-display font-extrabold text-center mb-10">
          Come, toma y vive la cultura paceña
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {negocios.map((negocio) => (
            <a
              key={negocio.nombre}
              href={negocio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col items-center justify-center gap-1 aspect-square"
            >
              {negocio.tieneEventos && (
                <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-wide bg-brand-red text-white px-1.5 py-0.5 rounded-full">
                  Eventos
                </span>
              )}
              <img
                src={negocio.logo}
                alt={negocio.nombre}
                className="w-[100%] h-[75%] object-contain"
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
              className="border-2 border-dashed border-white/60 rounded-2xl p-4 flex items-center justify-center aspect-square"
            >
              <span className="text-white/80 text-xs md:text-sm text-center font-medium">Próximo negocio</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}