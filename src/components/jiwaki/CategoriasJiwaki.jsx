import logoBXR from '/images/LogoBXR.png'

export default function CategoriasJiwaki({ categorias, onSeleccionar }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-16">
      {categorias.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onSeleccionar(cat.slug)}
          className="group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all p-8 flex flex-col items-center text-center gap-3"
        >
          <div className="w-14 h-14 rounded-full bg-slate-100 group-hover:bg-orange-50 transition-colors flex items-center justify-center p-2.5">
            <img src={logoBXR} alt="" className="w-full h-full object-contain" aria-hidden="true" />
          </div>
          <h3 className="font-display font-bold text-lg text-ink group-hover:text-brand-orange transition-colors leading-snug">
            {cat.nombre}
          </h3>

          {cat.tipo === 'listado' && (
            <span className="text-xs text-slate-400">
              {cat.lugares?.length ? `${cat.lugares.length} espacios` : 'Próximamente'}
            </span>
          )}
          {cat.tipo === 'accion' && (
            <span className="text-xs font-semibold text-brand-orange inline-flex items-center gap-1">
              Difunde tu evento <span aria-hidden="true">→</span>
            </span>
          )}
        </button>
      ))}
    </div>
  )
}