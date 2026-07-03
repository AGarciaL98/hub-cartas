import Hero from './components/Hero.jsx'
import AppCard from './components/AppCard.jsx'
import Footer from './components/Footer.jsx'
import { apps } from './data/apps.js'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-950 bg-[radial-gradient(ellipse_at_top,_rgba(63,174,107,0.12),_transparent_60%)]">
      <main className="flex-1 w-full max-w-5xl mx-auto px-4">
        <Hero />
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-16">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
