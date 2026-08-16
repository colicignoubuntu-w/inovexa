import { ArrowUpRight } from 'lucide-react'
import './ServiceCard.css'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon size={24} />
      </div>

      <div className="service-card__content">
        <h3>{service.title}</h3>

        <p>
          {service.description}
        </p>
      </div>

      <div className="service-card__arrow">
        <ArrowUpRight size={20} />
      </div>
    </article>
  )
}

export default ServiceCard