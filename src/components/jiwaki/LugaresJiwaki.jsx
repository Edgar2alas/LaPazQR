import logoBXR from '/images/LogoBXR.png'
import { eventos } from '../../data/eventos'

export default function LugaresJiwaki({ categoria, onSeleccionar }) {
  if (!categoria.lugares?.length) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-10 text-center mb-16">
        <p className="font-display font-bold text-ink text-lg mb-1">Próximamente</p>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Todavía no cargamos los espacios de "{categoria.nombre}". La estructura ya está lista;
          solo falta añadir los lugares en <code>src/data/jiwakiAgenda.js</code>.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-16">
      {categoria.lugares.map((lugar) => {
        const numEventos = eventos.filter((e) => e.lugarSlug === lugar.slug).length
        return (
          <button
            key={lugar.slug}
            onClick={() => onSeleccionar(lugar.slug)}
            className="group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all p-8 flex flex-col items-center text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-orange-50 transition-colors flex items-center justify-center p-2">
              <img src={logoBXR} alt="" className="w-full h-full object-contain" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-ink group-hover:text-brand-orange transition-colors leading-snug">
              {lugar.nombre}
            </h3>
            <span className="text-xs text-slate-400">
              {numEventos ? `${numEventos} eventos` : 'Sin eventos por ahora'}
            </span>
          </button>
        )
      })}
    </div>
  )
}