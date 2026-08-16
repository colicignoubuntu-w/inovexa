import { motion } from 'framer-motion'
import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
} from 'lucide-react'

import './About.css'

function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about__container">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__eyebrow">
            Sobre a Inovexa
          </span>

          <h2 className="section__title">
            Tecnologia criada para
            <span className="text-gradient">
              {' '}resolver problemas reais.
            </span>
          </h2>

          <p className="section__description">
            A Inovexa nasceu para transformar ideias em soluções digitais
            modernas, funcionais e preparadas para crescer junto com cada
            negócio.
          </p>

          <p className="about__text">
            Trabalhamos com desenvolvimento de sites, sistemas e soluções
            digitais personalizadas, combinando tecnologia, design e estratégia
            para entregar projetos que realmente façam sentido para nossos
            clientes.
          </p>

          <div className="about__highlights">
            <div className="about__highlight">
              <Code2 size={20} />
              <span>Desenvolvimento sob medida</span>
            </div>

            <div className="about__highlight">
              <Lightbulb size={20} />
              <span>Soluções pensadas para cada negócio</span>
            </div>

            <div className="about__highlight">
              <Rocket size={20} />
              <span>Projetos preparados para crescer</span>
            </div>

            <div className="about__highlight">
              <Users size={20} />
              <span>Atendimento próximo e direto</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about__card">
            <span className="about__card-label">
              INOVEXA
            </span>

            <h3>
              Ideias.
              <br />
              Tecnologia.
              <br />
              <span>Resultado.</span>
            </h3>

            <p>
              Do planejamento à publicação, construímos cada projeto com foco
              em experiência, desempenho e qualidade.
            </p>

            <div className="about__numbers">
              <div>
                <strong>100%</strong>
                <span>Responsivo</span>
              </div>

              <div>
                <strong>Web</strong>
                <span>Moderna</span>
              </div>

              <div>
                <strong>UX</strong>
                <span>Focada no usuário</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About