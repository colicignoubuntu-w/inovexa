import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { projects } from '../../data/projects'

import './Projects.css'

function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="container">
        <div className="projects__header">
          <motion.div
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
            <span className="projects__eyebrow">
              PROJETOS SELECIONADOS
            </span>

            <h2 className="projects__title">
              Ideias que
              <br />
              <span>viraram produto.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            Uma seleção de sites, interfaces e soluções digitais desenvolvidas
            para diferentes necessidades.
          </motion.p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <motion.article
              className={`project ${
                index % 2 !== 0 ? 'project--reverse' : ''
              }`}
              key={project.id}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="project__visual">
                <a
                  href={project.url}
                  target={project.url === '#' ? undefined : '_blank'}
                  rel={project.url === '#' ? undefined : 'noreferrer'}
                  className="project__image-link"
                >
                  <div className="project__image-wrapper">
                    <img
                      src={project.image}
                      alt={`Projeto ${project.name}`}
                      className="project__image"
                      loading="lazy"
                    />

                    <div className="project__image-overlay" />

                    <div className="project__open">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </a>
              </div>

              <div className="project__content">
                <div className="project__top">
                  <span className="project__number">
                    {project.number}
                  </span>

                  <span className="project__category">
                    {project.category}
                  </span>
                </div>

                <h3 className="project__name">
                  {project.name}
                </h3>

                <p className="project__description">
                  {project.description}
                </p>

                <div className="project__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project__link"
                  >
                    Ver projeto
                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects