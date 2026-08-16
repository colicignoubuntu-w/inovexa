import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { team } from '../../data/team'

import './Team.css'

function Team() {
  return (
    <section className="team" id="equipe">
      <div className="container team__container">

        <motion.div
          className="team__header"
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
          <span className="team__eyebrow">
            QUEM CONSTRÓI
          </span>

          <h2 className="team__title">
            Pessoas por trás
            <br />
            <span>das ideias.</span>
          </h2>

          <p className="team__description">
            Tecnologia, criatividade e estratégia trabalhando
            juntas para transformar ideias em produtos digitais.
          </p>
        </motion.div>

        <div className="team__grid">
          {team.map((member, index) => (
            <motion.article
              className="team__member"
              key={member.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="team__member-top">
                <span className="team__number">
                  {member.number}
                </span>

                <span className="team__symbol">
                  {member.symbol}
                </span>
              </div>

              <div className="team__member-content">
                <h3>
                  {member.name}
                </h3>

                <span className="team__role">
                  {member.role}
                </span>

                <p>
                  {member.description}
                </p>
              </div>

              <div className="team__member-bottom">
                <span>INOVEXA</span>

                <ArrowUpRight size={16} />
              </div>

              <div className="team__member-line" />
            </motion.article>
          ))}
        </div>

        <div className="team__connection">
          <div className="team__connection-line" />

          <div className="team__connection-core">
            <span>INOVEXA</span>
          </div>

          <div className="team__connection-line" />
        </div>

      </div>
    </section>
  )
}

export default Team