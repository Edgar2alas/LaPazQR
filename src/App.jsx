import { useRef, useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import ProximosEventos from './components/ProximosEventos'
import JiwakiSection from './components/JiwakiSection'
import TuristicoSection from './components/TuristicoSection'
import ComercialSection from './components/ComercialSection'
import Calendario from './components/Calendario'
import Footer from './components/Footer'

function App() {
  const [vista, setVista] = useState('inicio') // 'inicio' | 'agenda'
  const refTurismo = useRef(null)
  const refNegocios = useRef(null)

  const irA = (destino) => {
    if (destino === 'agenda' || destino === 'inicio') {
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

      {vista === 'inicio' ? (
        <>
          <ProximosEventos onVerTodo={() => irA('agenda')} />
          <JiwakiSection />
          <div ref={refTurismo}>
            <TuristicoSection />
          </div>
          <div ref={refNegocios}>
            <ComercialSection />
          </div>
        </>
      ) : (
        <Calendario />
      )}

      <Footer />
    </div>
  )
}

export default App