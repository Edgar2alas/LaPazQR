// Agrega más lugares acá. type: "video" muestra un embed de YouTube;
// type: "placeholder" muestra una tarjeta vacía por ahora.
const lugares = [
  {
    nombre: 'Iglesia San Francisco',
    type: 'video',
    videoId: 'Zushv2bj_J0', // ID del video sin el &t=1s
  },
  { nombre: 'Próximamente', type: 'placeholder' },
  { nombre: 'Próximamente', type: 'placeholder' },
  { nombre: 'Próximamente', type: 'placeholder' },
]

export default function TuristicoSection() {
  return (
    <section className="bg-slate-900 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-8">
          Lugares turísticos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lugares.map((lugar, i) =>
            lugar.type === 'video' ? (
              <div
                key={lugar.nombre}
                className="rounded-xl overflow-hidden bg-slate-800"
              >
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${lugar.videoId}`}
                    title={lugar.nombre}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-white text-center py-3 font-medium">
                  {lugar.nombre}
                </p>
              </div>
            ) : (
              <div
                key={`lugar-placeholder-${i}`}
                className="rounded-xl border-2 border-dashed border-slate-600 aspect-video flex items-center justify-center"
              >
                <span className="text-slate-400 font-medium">
                  {lugar.nombre}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}