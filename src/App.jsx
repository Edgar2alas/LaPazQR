import { useRef, useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import ProximosEventos from './components/ProximosEventos'
import JiwakiSection from './components/JiwakiSection'
import TuristicoSection from './components/TuristicoSection'
import ComercialSection from './components/ComercialSection'
import Calendario from './components/Calendario'
import JiwakiAgenda from './components/jiwaki/JiwakiAgenda'
import Footer from './components/Footer'

function App() {
  const [vista, setVista] = useState('inicio') // 'inicio' | 'agenda' | 'jiwaki'
  const refTurismo = useRef(null)
  const refNegocios = useRef(null)

  const irA = (destino) => {
    if (destino === 'agenda' || destino === 'inicio' || destino === 'jiwaki') {
      setVista(destino)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    // 'turismo' o 'negocios': aseguramos estar en Inicio y hacemos scroll a la sección
    setVista('inicio')
    requestAnimationFrame(() => {
      const ref = destino === 'turismo' ? refTurismo : refNegocios
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Nav active={vista} onNavigate={irA} />

      {vista === 'inicio' && (
        <>
          <ProximosEventos onVerTodo={() => irA('agenda')} />
          <JiwakiSection onExplorar={() => irA('jiwaki')} />
          <div ref={refTurismo}>
            <TuristicoSection />
          </div>
          <div ref={refNegocios}>
            <ComercialSection />
          </div>
        </>
      )}
      {vista === 'agenda' && <Calendario />}
      {vista === 'jiwaki' && <JiwakiAgenda onVolverInicio={() => irA('inicio')} />}

      <Footer />
    </div>
  )
}

export default App