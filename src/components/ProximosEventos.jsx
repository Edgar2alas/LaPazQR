import { eventos, categorias } from '../data/eventos'

function formatoFecha(fechaISO) {
  const d = new Date(fechaISO + 'T00:00:00')
  return d.toLocaleDateString('es-BO', { weekday: 'short', day: 'numeric', month: 'short' })
}

export default function ProximosEventos({ onVerTodo }) {
  const proximos = [...eventos].sort((a, b) => a.fecha.localeCompare(b.fecha)).slice(0, 4)

  return (
    <section className="bg-cream py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
              Agenda cultural
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink">
              Lo próximo en La Paz
            </h2>
          </div>
          <button
            onClick={onVerTodo}
            className="self-start sm:self-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-red transition-colors"
          >
            Ver calendario completo
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {proximos.map((evento) => {
            const cat = categorias[evento.categoria]
            return (
              <article
                key={evento.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-5 flex flex-col gap-3 border-t-4"
                style={{ borderColor: cat.color }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-wide w-fit px-2 py-0.5 rounded-full"
                  style={{ color: cat.color, backgroundColor: `${cat.color}1a` }}
                >
                  {cat.label}
                </span>
                <h3 className="font-display font-bold text-slate-800 leading-snug">{evento.titulo}</h3>
                <p className="text-sm text-slate-500">{evento.lugar}</p>
                <p className="mt-auto text-sm font-semibold text-slate-700 capitalize">
                  {formatoFecha(evento.fecha)} · {evento.hora}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}