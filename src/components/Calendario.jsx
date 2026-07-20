import { useMemo, useState } from 'react'
import { eventos, categorias } from '../data/eventos'

const DIAS_SEMANA = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

function aISO(date) {
  return date.toISOString().slice(0, 10)
}

function generarGrid(mes) {
  const year = mes.getFullYear()
  const month = mes.getMonth()
  const primerDia = new Date(year, month, 1)
  const ultimoDia = new Date(year, month + 1, 0)
  const offset = (primerDia.getDay() + 6) % 7 // semana empieza lunes
  const celdas = []
  for (let i = 0; i < offset; i++) celdas.push(null)
  for (let d = 1; d <= ultimoDia.getDate(); d++) celdas.push(new Date(year, month, d))
  while (celdas.length % 7 !== 0) celdas.push(null)
  return celdas
}

export default function Calendario() {
  const hoy = new Date()
  const [mes, setMes] = useState(new Date(hoy.getFullYear(), hoy.getMonth(), 1))
  const [filtro, setFiltro] = useState('todas')
  const [diaSeleccionado, setDiaSeleccionado] = useState(aISO(hoy))
  const [eventoAbierto, setEventoAbierto] = useState(null)

  const eventosFiltrados = useMemo(
    () => eventos.filter((e) => filtro === 'todas' || e.categoria === filtro),
    [filtro]
  )

  const eventosPorFecha = useMemo(() => {
    const mapa = {}
    for (const e of eventosFiltrados) {
      if (!mapa[e.fecha]) mapa[e.fecha] = []
      mapa[e.fecha].push(e)
    }
    return mapa
  }, [eventosFiltrados])

  const celdas = useMemo(() => generarGrid(mes), [mes])

  const eventosDelDia = (eventosPorFecha[diaSeleccionado] || []).sort((a, b) =>
    a.hora.localeCompare(b.hora)
  )

  const cambiarMes = (delta) => setMes(new Date(mes.getFullYear(), mes.getMonth() + delta, 1))

  const irAHoy = () => {
    setMes(new Date(hoy.getFullYear(), hoy.getMonth(), 1))
    setDiaSeleccionado(aISO(hoy))
  }

  const nombreMes = mes.toLocaleDateString('es-BO', { month: 'long', year: 'numeric' })

  return (
    <section className="bg-cream min-h-[70vh] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
            Agenda Jiwaki · La Paz
          </p>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-ink">Calendario cultural</h1>
        </div>

        {/* Controles */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => cambiarMes(-1)}
              aria-label="Mes anterior"
              className="w-9 h-9 rounded-full bg-white shadow-sm hover:shadow flex items-center justify-center text-slate-600"
            >
              ‹
            </button>
            <h2 className="font-display font-bold text-lg text-slate-800 capitalize w-40 text-center">
              {nombreMes}
            </h2>
            <button
              onClick={() => cambiarMes(1)}
              aria-label="Mes siguiente"
              className="w-9 h-9 rounded-full bg-white shadow-sm hover:shadow flex items-center justify-center text-slate-600"
            >
              ›
            </button>
            <button
              onClick={irAHoy}
              className="ml-2 text-xs font-semibold uppercase tracking-wide text-brand-orange hover:text-brand-red"
            >
              Hoy
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFiltro('todas')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                filtro === 'todas'
                  ? 'bg-ink text-white border-ink'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
              }`}
            >
              Todas
            </button>
            {Object.entries(categorias).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setFiltro(key)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors"
                style={
                  filtro === key
                    ? { backgroundColor: cat.color, borderColor: cat.color, color: 'white' }
                    : { borderColor: '#e2e8f0', color: cat.color, backgroundColor: 'white' }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Grid del mes */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-100">
              {DIAS_SEMANA.map((d) => (
                <div
                  key={d}
                  className="py-2 text-center text-[11px] font-bold uppercase tracking-wide text-slate-400"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {celdas.map((fechaCelda, i) => {
                if (!fechaCelda) {
                  return (
                    <div
                      key={`vacio-${i}`}
                      className="min-h-[86px] sm:min-h-[104px] border-b border-r border-slate-100 bg-slate-50/40"
                    />
                  )
                }
                const iso = aISO(fechaCelda)
                const eventosDia = eventosPorFecha[iso] || []
                const esHoy = iso === aISO(hoy)
                const seleccionado = iso === diaSeleccionado

                return (
                  <button
                    key={iso}
                    onClick={() => setDiaSeleccionado(iso)}
                    className={`min-h-[86px] sm:min-h-[104px] border-b border-r border-slate-100 p-1.5 sm:p-2 text-left flex flex-col gap-1 transition-colors ${
                      seleccionado ? 'bg-orange-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full ${
                        esHoy ? 'bg-brand-orange text-white' : 'text-slate-600'
                      }`}
                    >
                      {fechaCelda.getDate()}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      {eventosDia.slice(0, 2).map((e) => (
                        <span
                          key={e.id}
                          className="hidden sm:block text-[10px] font-medium truncate rounded px-1 py-0.5"
                          style={{
                            backgroundColor: `${categorias[e.categoria].color}1a`,
                            color: categorias[e.categoria].color,
                          }}
                        >
                          {e.titulo}
                        </span>
                      ))}
                      {eventosDia.length > 0 && (
                        <span className="flex sm:hidden gap-0.5">
                          {eventosDia.slice(0, 3).map((e) => (
                            <span
                              key={e.id}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: categorias[e.categoria].color }}
                            />
                          ))}
                        </span>
                      )}
                      {eventosDia.length > 2 && (
                        <span className="hidden sm:block text-[10px] text-slate-400 font-medium">
                          +{eventosDia.length - 2} más
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Agenda del día seleccionado */}
          <aside className="bg-white rounded-2xl shadow-sm p-5 h-fit lg:sticky lg:top-20">
            <h3 className="font-display font-bold text-slate-800 mb-1 capitalize">
              {new Date(diaSeleccionado + 'T00:00:00').toLocaleDateString('es-BO', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
              })}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {eventosDelDia.length} {eventosDelDia.length === 1 ? 'evento' : 'eventos'}
            </p>

            {eventosDelDia.length === 0 ? (
              <p className="text-sm text-slate-400">
                No hay eventos programados este día. Elige otra fecha en el calendario.
              </p>
            ) : (
              <ul className="flex flex-col gap-3 max-h-[420px] overflow-y-auto scroll-fina pr-1">
                {eventosDelDia.map((e) => (
                  <li key={e.id}>
                    <button
                      onClick={() => setEventoAbierto(e)}
                      className="w-full text-left rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all p-3"
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-wide"
                        style={{ color: categorias[e.categoria].color }}
                      >
                        {categorias[e.categoria].label} · {e.hora}
                      </span>
                      <p className="font-semibold text-sm text-slate-800 leading-snug mt-0.5">{e.titulo}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{e.lugar}</p>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      </div>

      {/* Modal de detalle */}
      {eventoAbierto && (
        <div
          className="fixed inset-0 bg-ink/60 flex items-center justify-center p-4 z-50"
          onClick={() => setEventoAbierto(null)}
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setEventoAbierto(null)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl leading-none"
            >
              ×
            </button>
            <span
              className="text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full w-fit inline-block mb-3"
              style={{
                color: categorias[eventoAbierto.categoria].color,
                backgroundColor: `${categorias[eventoAbierto.categoria].color}1a`,
              }}
            >
              {categorias[eventoAbierto.categoria].label}
            </span>
            <h3 className="font-display font-extrabold text-xl text-ink mb-2">{eventoAbierto.titulo}</h3>
            <p className="text-sm text-slate-600 mb-4">{eventoAbierto.descripcion}</p>
            <dl className="text-sm text-slate-600 flex flex-col gap-1.5">
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-800 w-20">Fecha</dt>
                <dd className="capitalize">
                  {new Date(eventoAbierto.fecha + 'T00:00:00').toLocaleDateString('es-BO', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                  })}{' '}
                  · {eventoAbierto.hora}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-800 w-20">Lugar</dt>
                <dd>{eventoAbierto.lugar}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-800 w-20">Dirección</dt>
                <dd>{eventoAbierto.direccion}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-800 w-20">Precio</dt>
                <dd>{eventoAbierto.precio}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </section>
  )
}