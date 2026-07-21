import { useState } from 'react'
import { categoriasJiwaki } from '../../data/jiwakiAgenda'
import { eventos } from '../../data/eventos'
import CategoriasJiwaki from './CategoriasJiwaki'
import LugaresJiwaki from './LugaresJiwaki'
import EventosJiwaki from './EventosJiwaki'
import RegistraEvento from './RegistraEvento'

export default function JiwakiAgenda({ onVolverInicio }) {
  const [categoriaSlug, setCategoriaSlug] = useState(null)
  const [lugarSlug, setLugarSlug] = useState(null)

  const categoria = categoriasJiwaki.find((c) => c.slug === categoriaSlug) || null
  const lugar = categoria?.lugares?.find((l) => l.slug === lugarSlug) || null
  const eventosDelLugar = lugar ? eventos.filter((e) => e.lugarSlug === lugar.slug) : []

  const irACategorias = () => {
    setCategoriaSlug(null)
    setLugarSlug(null)
  }

  const irALugares = () => setLugarSlug(null)

  const seleccionarCategoria = (slug) => {
    setCategoriaSlug(slug)
    setLugarSlug(null)
  }

  // Migas de pan
  const migas = [{ label: 'Agenda Jiwaki', onClick: categoria ? irACategorias : null }]
  if (categoria) migas.push({ label: categoria.nombre, onClick: lugar ? irALugares : null })
  if (lugar) migas.push({ label: lugar.nombre, onClick: null })

  return (
    <section className="bg-cream min-h-[70vh]">
      {/* Barra superior estilo Jiwaki, con los colores/tipografía del sitio */}
      <div className="bg-gradient-to-r from-brand-orange to-orange-500 py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="font-display text-white text-xl sm:text-2xl leading-none">
            <span className="font-light">Jiwaki</span>{' '}
            <span className="font-bold italic">agenda</span>
          </p>
          <button
            onClick={onVolverInicio}
            aria-label="Volver al inicio"
            title="Volver al inicio"
            className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-6">
        {/* Migas de pan */}
        <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-1.5 text-sm mb-6">
          {migas.map((m, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-slate-300">/</span>}
              {m.onClick ? (
                <button
                  onClick={m.onClick}
                  className="text-slate-500 hover:text-brand-orange font-medium transition-colors"
                >
                  {m.label}
                </button>
              ) : (
                <span className="text-ink font-semibold">{m.label}</span>
              )}
            </span>
          ))}
        </nav>

        {!categoria && (
          <CategoriasJiwaki categorias={categoriasJiwaki} onSeleccionar={seleccionarCategoria} />
        )}

        {categoria?.tipo === 'accion' && <RegistraEvento categoria={categoria} />}

        {categoria?.tipo === 'listado' && !lugar && (
          <LugaresJiwaki categoria={categoria} onSeleccionar={setLugarSlug} />
        )}

        {lugar && <EventosJiwaki lugar={lugar} eventos={eventosDelLugar} />}
      </div>
    </section>
  )
}