import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'


import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      

      <div className="hero__fade" />

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />

            SOFTWARE · WEB · INTELIGÊNCIA
          </div>

          <h1 className="hero__title">
            Criamos o
            <br />

            <span className="hero__title-gradient">
              próximo.
            </span>
          </h1>

          <p className="hero__description">
            Tecnologia para transformar ideias em produtos digitais.
          </p>

          <div className="hero__actions">
            <a
              href="#projetos"
              className="button button--primary"
            >
              Explorar projetos
              <ArrowRight size={18} />
            </a>

            <a
              href="#servicos"
              className="hero__code-link"
            >
              <Code2 size={17} />
              O que desenvolvemos
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__equation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.6,
          }}
        >
          <span>INOVEXA</span>

          <div className="hero__equation-line" />

          <small>
            ideia → lógica → código → produto
          </small>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero