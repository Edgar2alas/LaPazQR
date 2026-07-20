import { lugares } from '../data/lugares'

export default function TuristicoSection() {
  return (
    <section className="bg-ink py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1 text-center">
          Descubre la ciudad
        </p>
        <h2 className="text-white text-2xl sm:text-3xl font-display font-extrabold text-center mb-10">
          Lugares turísticos de La Paz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lugares.map((lugar) =>
            lugar.tipo === 'video' ? (
              <div key={lugar.id} className="rounded-2xl overflow-hidden bg-slate-800">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${lugar.videoId}`}
                    title={lugar.nombre}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <p className="text-white font-display font-bold">{lugar.nombre}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wide mt-0.5">{lugar.zona}</p>
                  <p className="text-slate-300 text-sm mt-2">{lugar.descripcion}</p>
                </div>
              </div>
            ) : (
              <div key={lugar.id} className="rounded-2xl overflow-hidden bg-slate-800 flex flex-col">
                <div
                  className="aspect-video flex items-center justify-center text-6xl"
                  style={{ background: `linear-gradient(135deg, ${lugar.color}, #14110f)` }}
                >
                  <span aria-hidden="true">{lugar.icono}</span>
                </div>
                <div className="p-4">
                  <p className="text-white font-display font-bold">{lugar.nombre}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wide mt-0.5">{lugar.zona}</p>
                  <p className="text-slate-300 text-sm mt-2">{lugar.descripcion}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}