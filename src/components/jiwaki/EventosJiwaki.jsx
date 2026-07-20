import { useMemo, useState } from 'react'

function formatoCorto(fechaISO) {
  const d = new Date(fechaISO + 'T00:00:00')
  return d.toLocaleDateString('es-BO', { day: '2-digit', month: 'short' })
}

function formatoLargo(fechaISO) {
  const d = new Date(fechaISO + 'T00:00:00')
  return d.toLocaleDateString('es-BO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function EventosJiwaki({ lugar }) {
  const [busqueda, setBusqueda] = useState('')
  const [rango, setRango] = useState('todas')
  const [eventoActivo, setEventoActivo] = useState(null)

  const eventosFiltrados = useMemo(() => {
    const hoy = new Date()
    hoy.setHours(0, 0, 0, 0)

    return (lugar.eventos || [])
      .filter((e) => e.titulo.toLowerCase().includes(busqueda.trim().toLowerCase()))
      .filter((e) => {
        if (rango === 'todas') return true
        const fechaEvento = new Date(e.fecha + 'T00:00:00')
        const dias = (fechaEvento - hoy) / (1000 * 60 * 60 * 24)
        if (rango === '7dias') return dias >= 0 && dias <= 7
        if (rango === '30dias') return dias >= 0 && dias <= 30
        return true
      })
      .sort((a, b) => a.fecha.localeCompare(b.fecha))
  }, [lugar, busqueda, rango])

  return (
    <div className="pb-16">
      {/* Encabezado del lugar */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <h2 className="font-display font-extrabold text-xl text-ink mb-1">{lugar.nombre}</h2>
        {lugar.direccion && (
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            <span aria-hidden="true">📍</span> {lugar.direccion}
          </p>
        )}
      </div>

      {/* Filtros: funcionan sobre el array estático, sin backend */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Palabras clave"
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-brand-orange"
        />
        <select
          value={rango}
          onChange={(e) => setRango(e.target.value)}
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-ink bg-white focus:outline-none focus:border-brand-orange"
        >
          <option value="todas">Todas las fechas</option>
          <option value="7dias">Próximos 7 días</option>
          <option value="30dias">Próximos 30 días</option>
        </select>
        <p className="flex items-center text-sm text-slate-500">
          {eventosFiltrados.length} {eventosFiltrados.length === 1 ? 'resultado' : 'resultados'}
        </p>
      </div>

      {eventosFiltrados.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
          <p className="font-display font-bold text-ink mb-1">Sin eventos que coincidan</p>
          <p className="text-sm text-slate-500">Prueba con otra palabra clave o rango de fechas.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eventosFiltrados.map((evento) => (
            <button
              key={evento.id}
              onClick={() => setEventoActivo(evento)}
              className="text-left bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col border-t-4 border-brand-orange"
            >
              {/* Imagen del evento: placeholder hasta tener el arte real */}
               <div className="aspect-[4/3] bg-slate-100" aria-hidden="true">
                {evento.imagen && (
                  <img src={evento.imagen} alt="" className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-4 flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-brand-orange">
                  {formatoCorto(evento.fecha)}
                </span>
                <h3 className="font-display font-bold text-ink leading-snug">{evento.titulo}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  {evento.hora} hrs · {lugar.nombre}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Detalle del evento */}
      {eventoActivo && (
        <div
          className="fixed inset-0 bg-ink/60 flex items-center justify-center p-4 z-50"
          onClick={() => setEventoActivo(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEventoActivo(null)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl leading-none"
            >
              ×
            </button>
            <span className="text-[11px] font-bold uppercase tracking-wide text-brand-orange px-2 py-0.5 rounded-full bg-orange-50 w-fit inline-block mb-3">
              {lugar.nombre}
            </span>
            <h3 className="font-display font-extrabold text-xl text-ink mb-3">{eventoActivo.titulo}</h3>
            <dl className="text-sm text-slate-600 flex flex-col gap-1.5">
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-800 w-16 shrink-0">Fecha</dt>
                <dd className="capitalize">
                  {formatoLargo(eventoActivo.fecha)} · {eventoActivo.hora}
                </dd>
              </div>
              {lugar.direccion && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-800 w-16 shrink-0">Lugar</dt>
                  <dd>
                    {lugar.nombre}, {lugar.direccion}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      )}
    </div>
  )
}