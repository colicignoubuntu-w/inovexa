import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  )
}

export default App