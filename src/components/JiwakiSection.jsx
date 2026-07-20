import { categoriasJiwaki } from '../data/jiwakiAgenda'

const JIWAKI_URL = 'https://agendajiwaki.lapaz.bo/' // agenda oficial de la Alcaldía

export default function JiwakiSection({ onExplorar }) {
  const categoriasPreview = categoriasJiwaki.filter((c) => c.tipo === 'listado').slice(0, 4)

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-orange to-orange-500 py-14 px-4">
      {/* Textura sutil, solo decorativa */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, white 0, transparent 40%), radial-gradient(circle at 85% 70%, white 0, transparent 35%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-light">Jiwaki</p>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold italic -mt-1">
              agenda
            </p>
            <p className="mt-3 text-sm sm:text-base uppercase tracking-wide text-white/90 max-w-md">
              La cartelera cultural de la Alcaldía de La Paz: teatros, museos, bibliotecas y mucho más.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onExplorar}
              className="bg-white text-brand-orange font-display font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Explorar agenda Jiwaki
            </button>
            <a
              href={JIWAKI_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al sitio oficial de Jiwaki"
              title="Sitio oficial de Jiwaki"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors shrink-0"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
              >
                <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Vista previa de categorías: teaser clicable hacia la agenda interna */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categoriasPreview.map((cat) => (
            <button
              key={cat.slug}
              onClick={onExplorar}
              className="text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/25 border border-white/20 rounded-full px-4 py-1.5 transition-colors"
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}