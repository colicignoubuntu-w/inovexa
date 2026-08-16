import { motion } from 'framer-motion'

import { services } from '../../data/services'
import ServiceCard from '../ServiceCard/ServiceCard'

import './Services.css'

function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section__eyebrow">
            O que fazemos
          </span>

          <h2 className="section__title">
            Soluções digitais para
            <span className="text-gradient"> diferentes desafios.</span>
          </h2>

          <p className="section__description">
            Da presença digital de uma empresa até sistemas mais completos,
            desenvolvemos soluções pensadas para cada projeto.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services