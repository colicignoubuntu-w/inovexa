import {
  ArrowUpRight,
  Mail,
} from 'lucide-react'

import './Footer.css'

function Footer() {
  const currentYear =
    new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              href="#inicio"
              className="footer__logo"
            >
              <span className="footer__logo-symbol">
                I
              </span>

              <span className="footer__logo-name">
                INOVE<span>XA</span>
              </span>
            </a>

            <p>
              Tecnologia, software e experiências digitais.
            </p>
          </div>

          <nav className="footer__nav">
            <a href="#inicio">
              Início
            </a>

            <a href="#sobre">
              Sobre
            </a>

            <a href="#servicos">
              Serviços
            </a>

            <a href="#projetos">
              Projetos
            </a>

            <a href="#tecnologias">
              Tecnologias
            </a>

            <a href="#equipe">
              Equipe
            </a>

            <a href="#contato">
              Contato
            </a>
          </nav>

          <div className="footer__contact">
            <span>
              CONTATO
            </span>

            <a href="mailto:colicignoubuntu@gmail.com">
              <Mail size={16} />

              colicignoubuntu@gmail.com
            </a>

            <a
              href="https://wa.me/5518997816083?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Inovexa%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp

              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="footer__line" />

        <div className="footer__bottom">
          <span>
            © {currentYear} Inovexa
          </span>

          <span className="footer__signature">
            ideia → lógica → código → produto
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer