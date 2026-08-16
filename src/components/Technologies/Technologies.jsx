import { motion } from 'framer-motion'

import { technologies } from '../../data/technologies'

import './Technologies.css'

function Technologies() {
  return (
    <section
      className="technologies"
      id="tecnologias"
    >
      <div className="container technologies__container">
        <motion.div
          className="technologies__header"
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
          <span className="technologies__eyebrow">
            TECNOLOGIAS
          </span>

          <h2 className="technologies__title">
            Ferramentas para
            <br />
            <span>construir o próximo.</span>
          </h2>
        </motion.div>

        <div className="technologies__universe">
          <div className="technologies__orbit technologies__orbit--one" />
          <div className="technologies__orbit technologies__orbit--two" />
          <div className="technologies__orbit technologies__orbit--three" />

          <div className="technologies__core">
            <span>INOVEXA</span>
          </div>

          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              className={`technologies__node technologies__node--${index + 1}`}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >
              <span className="technologies__node-name">
                {technology.name}
              </span>

              <small>
                {technology.category}
              </small>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies