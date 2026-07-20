import Header from './components/Header'
import ComercialSection from './components/ComercialSection'
import JiwakiSection from './components/JiwakiSection'
import TuristicoSection from './components/TuristicoSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ComercialSection />
      <JiwakiSection />
      <TuristicoSection />
      <Footer />
    </div>
  )
}

export default App