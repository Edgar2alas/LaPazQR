import logoBXR from '/images/LogoBXR.png'

export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <span className="text-sm md:text-base font-medium text-slate-500">LaPazQr.com</span>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-2 flex flex-col items-center text-center">
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 -mb-16">
          <img src={logoBXR} alt="Logo BXR" className="w-full h-full object-contain" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-700 tracking-tight">
          LA PAZ <span className="text-brand-orange">QR</span>
        </h1>
        <p className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-slate-600">
          GUÍA DE CIUDAD
        </p>
        <p className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-slate-600">
          CITY GUIDE
        </p>
      </div>
    </header>
  )
}