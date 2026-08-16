import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Team from './components/Team/Team'

import SpaceScene from './components/SpaceScene/SpaceScene'

function App() {
  return (
    <>
      <SpaceScene />

      <div className="site-content">
        <Header />

        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Technologies />
          <Team />
        </main>
      </div>
    </>
  )
}

export default App