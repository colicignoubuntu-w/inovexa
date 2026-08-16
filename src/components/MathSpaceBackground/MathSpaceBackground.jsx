import './MathSpaceBackground.css'

function MathSpaceBackground() {
  return (
    <div className="math-space" aria-hidden="true">
      <div className="math-space__stars">
        {Array.from({ length: 40 }, (_, index) => (
          <span
            key={index}
            className={`math-space__star math-space__star--${(index % 8) + 1}`}
          />
        ))}
      </div>

      <svg
        className="math-space__geometry"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1">
            <stop
              offset="0%"
              stopColor="rgba(129, 140, 248, 0)"
            />
            <stop
              offset="50%"
              stopColor="rgba(129, 140, 248, 0.65)"
            />
            <stop
              offset="100%"
              stopColor="rgba(34, 211, 238, 0)"
            />
          </linearGradient>

          <radialGradient id="planetGradient">
            <stop
              offset="0%"
              stopColor="rgba(255,255,255,0.95)"
            />
            <stop
              offset="30%"
              stopColor="rgba(129,140,248,0.9)"
            />
            <stop
              offset="100%"
              stopColor="rgba(99,102,241,0.08)"
            />
          </radialGradient>
        </defs>

        {/* Plano cartesiano */}
        <g className="math-space__axis">
          <line x1="800" y1="80" x2="800" y2="820" />
          <line x1="300" y1="450" x2="1300" y2="450" />

          <path d="M790 100 L800 80 L810 100" />
          <path d="M1280 440 L1300 450 L1280 460" />
        </g>

        {/* Vetores */}
        <g className="math-space__vectors">
          <line x1="800" y1="450" x2="1030" y2="260" />
          <circle cx="1030" cy="260" r="5" />

          <line x1="800" y1="450" x2="590" y2="290" />
          <circle cx="590" cy="290" r="5" />

          <line x1="800" y1="450" x2="1090" y2="570" />
          <circle cx="1090" cy="570" r="5" />
        </g>

        {/* Órbitas */}
        <g className="math-space__orbits">
          <ellipse cx="800" cy="450" rx="220" ry="220" />

          <ellipse
            cx="800"
            cy="450"
            rx="330"
            ry="150"
            transform="rotate(-24 800 450)"
          />

          <ellipse
            cx="800"
            cy="450"
            rx="440"
            ry="210"
            transform="rotate(28 800 450)"
          />

          <ellipse
            cx="800"
            cy="450"
            rx="520"
            ry="300"
            transform="rotate(-10 800 450)"
          />
        </g>

        {/* Planetas/pontos matemáticos */}
        <g className="math-space__planet math-space__planet--one">
          <circle cx="1025" cy="450" r="7" />
          <circle cx="1025" cy="450" r="18" className="planet-glow" />
        </g>

        <g className="math-space__planet math-space__planet--two">
          <circle cx="515" cy="345" r="5" />
          <circle cx="515" cy="345" r="15" className="planet-glow" />
        </g>

        {/* Curva matemática */}
        <path
          className="math-space__curve"
          d="
            M250 610
            C400 420, 520 740, 690 550
            S980 370, 1160 530
            S1360 660, 1510 430
          "
        />

        {/* Polígono */}
        <g className="math-space__polygon">
          <polygon points="410,180 540,125 650,220 600,340 455,315" />

          <circle cx="410" cy="180" r="4" />
          <circle cx="540" cy="125" r="4" />
          <circle cx="650" cy="220" r="4" />
          <circle cx="600" cy="340" r="4" />
          <circle cx="455" cy="315" r="4" />
        </g>

        {/* Círculos concêntricos */}
        <g className="math-space__rings">
          <circle cx="1240" cy="210" r="45" />
          <circle cx="1240" cy="210" r="75" />
          <circle cx="1240" cy="210" r="105" />
        </g>
      </svg>

      <div className="math-space__formula math-space__formula--one">
        AᵀA x = Aᵀb
      </div>

      <div className="math-space__formula math-space__formula--two">
        ∇f(x,y)
      </div>

      <div className="math-space__formula math-space__formula--three">
        ∫ f(x) dx
      </div>

      <div className="math-space__formula math-space__formula--four">
        λv = Av
      </div>

      <div className="math-space__formula math-space__formula--five">
        x² + y² = r²
      </div>

      <div className="math-space__center">
        <div className="math-space__center-glow" />
        <div className="math-space__center-core" />
      </div>

      <div className="math-space__noise" />
    </div>
  )
}

export default MathSpaceBackground