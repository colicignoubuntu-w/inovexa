import { motion } from 'framer-motion'

import './Services.css'

const services = [
  {
    number: '01',
    title: 'WEB',
  },
  {
    number: '02',
    title: 'SOFTWARE',
  },
  {
    number: '03',
    title: 'AUTOMAÇÃO',
  },
  {
    number: '04',
    title: 'INTELIGÊNCIA ARTIFICIAL',
  },
]

function Services() {
  return (
    <section
      className="section services"
      id="servicos"
    >
      <div className="container services__container">
        <motion.div
          className="services__header"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="services__eyebrow">
            O QUE CONSTRUÍMOS
          </span>

          <h2 className="services__title">
            Tecnologia
            <br />
            <span>em movimento.</span>
          </h2>
        </motion.div>

        <div className="services__list">
          {services.map((service, index) => (
            <motion.div
              className="services__item"
              key={service.title}
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <span className="services__number">
                {service.number}
              </span>

              <span className="services__name">
                {service.title}
              </span>

              <div className="services__line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services