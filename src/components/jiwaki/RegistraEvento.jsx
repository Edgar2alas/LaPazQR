const JIWAKI_URL = 'https://agendajiwaki.lapaz.bo/'

export default function RegistraEvento() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-10 text-center mb-16 max-w-2xl mx-auto">
      <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto mb-4" aria-hidden="true" />
      <h2 className="font-display font-extrabold text-xl text-ink mb-2">
        ¿Tienes un evento cultural?
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Regístralo en la Agenda Jiwaki de la Alcaldía de La Paz y compártelo con toda la ciudad.
        Esta pantalla es una plantilla lista para conectar el formulario o flujo real cuando esté
        definido.
      </p>
      <a
        href={JIWAKI_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
      >
        Ir al formulario oficial
        <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}