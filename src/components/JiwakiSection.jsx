const JIWAKI_URL = 'https://agendajiwaki.lapaz.bo/' // agenda oficial de la Alcaldía

export default function JiwakiSection() {
  return (
    <section className="bg-gradient-to-r from-brand-orange to-orange-500 py-14 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white text-center md:text-left">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-light">Jiwaki</p>
          <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold italic -mt-1">agenda</p>
          <p className="mt-3 text-sm sm:text-base uppercase tracking-wide text-white/90">
            La agenda cultural andina y boliviana, directo de la Alcaldía de La Paz
          </p>
        </div>

        <a
          href={JIWAKI_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir a Jiwaki agenda"
          className="group flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 hover:bg-white/20 transition-colors shrink-0"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14 text-white group-hover:scale-110 transition-transform">
            <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z" />
          </svg>
        </a>
      </div>
    </section>
  )
}