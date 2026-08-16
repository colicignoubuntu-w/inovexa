import { MessageCircle } from 'lucide-react'

import './WhatsAppButton.css'

const WHATSAPP_URL =
  'https://wa.me/5518997816083?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Inovexa%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.'

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Falar com a Inovexa pelo WhatsApp"
    >
      <span className="whatsapp-button__pulse" />

      <MessageCircle size={22} />
    </a>
  )
}

export default WhatsAppButton