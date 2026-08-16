import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">
        <a
          href="#inicio"
          className="header__logo"
          onClick={closeMenu}
          aria-label="Inovexa - Página inicial"
        >
          <span className="header__logo-symbol">I</span>

          <span className="header__logo-name">
            INOVE<span>XA</span>
          </span>
        </a>

        <nav
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>

          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>

          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>

          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>

          <a href="#equipe" onClick={closeMenu}>
            Equipe
          </a>

          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>

          <a
            href="#contato"
            className="header__mobile-cta"
            onClick={closeMenu}
          >
            Solicitar orçamento
            <ArrowUpRight size={18} />
          </a>
        </nav>

        <div className="header__actions">
          <a href="#contato" className="header__cta">
            Solicitar orçamento
            <ArrowUpRight size={17} />
          </a>

          <button
            type="button"
            className="header__menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header