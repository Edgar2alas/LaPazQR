const paradas = [
  { id: 'inicio', label: 'Inicio', color: '#f26522' },
  { id: 'agenda', label: 'Agenda', color: '#8b1e2e' },
  { id: 'turismo', label: 'Turismo', color: '#2f6690' },
  { id: 'negocios', label: 'Negocios', color: '#1b5e3f' },
]

export default function Nav({ active, onNavigate }) {
  return (
    <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="relative flex items-center justify-between sm:justify-center sm:gap-10 py-3">
          {/* Línea del teleférico */}
          <li
            className="absolute left-4 right-4 sm:left-0 sm:right-0 top-1/2 -translate-y-1/2 h-[3px] bg-slate-200 -z-10"
            aria-hidden="true"
          />
          {paradas.map((parada) => {
            const isActive = active === parada.id
            return (
              <li key={parada.id}>
                <button
                  onClick={() => onNavigate(parada.id)}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 border-white shadow transition-transform ${
                      isActive ? 'scale-125' : 'group-hover:scale-110'
                    }`}
                    style={{
                      backgroundColor: parada.color,
                      boxShadow: `0 0 0 2px ${isActive ? parada.color : 'transparent'}`,
                    }}
                  />
                  <span
                    className={`text-[11px] sm:text-xs font-semibold uppercase tracking-wide ${
                      isActive ? 'text-slate-800' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {parada.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}