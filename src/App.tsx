import { Starfield } from './components/Starfield'
import { Hero } from './components/Hero'
import { Constellation } from './components/Constellation'
import { WorkTrail } from './components/WorkTrail'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Deep indigo vignette over the starfield */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 90% at 50% -10%, #1a1640 0%, #0f1026 38%, #07071a 100%)',
        }}
      />
      <Starfield />

      <main>
        <Hero />
        <Constellation />
        <WorkTrail />
        <Footer />
      </main>
    </div>
  )
}

export default App
