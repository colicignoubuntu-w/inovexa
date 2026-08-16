import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from 'lucide-react'

import './Contact.css'

const WHATSAPP_URL =
  'https://wa.me/5518997816083?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Inovexa%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.'

function Contact() {
  return (
    <section
      className="contact"
      id="contato"
    >
      <div className="container contact__container">
        <motion.div
          className="contact__content"
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.8,
          }}
        >
          <span className="contact__eyebrow">
            VAMOS CONVERSAR
          </span>

          <h2 className="contact__title">
            Tem uma ideia?
            <br />
            <span>
              Vamos construir.
            </span>
          </h2>

          <p className="contact__description">
            Conte o que você precisa e vamos pensar
            na melhor solução digital para o projeto.
          </p>

          <div className="contact__actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="contact__whatsapp"
            >
              <MessageCircle size={20} />

              Falar no WhatsApp

              <ArrowUpRight size={18} />
            </a>

            <a
              href="mailto:colicignoubuntu@gmail.com"
              className="contact__email"
            >
              <Mail size={18} />

              colicignoubuntu@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact__visual"
          initial={{
            opacity: 0,
            scale: 0.8,
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
            duration: 0.8,
            delay: 0.1,
          }}
        >
          <div className="contact__orbit contact__orbit--one" />
          <div className="contact__orbit contact__orbit--two" />
          <div className="contact__orbit contact__orbit--three" />

          <div className="contact__core">
            <span>INOVEXA</span>
          </div>

          <span className="contact__point contact__point--one" />
          <span className="contact__point contact__point--two" />
          <span className="contact__point contact__point--three" />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact