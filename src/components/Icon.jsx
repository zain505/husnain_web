function Icon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  switch (name) {
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 4v10" />
          <path d="m8 10 4 4 4-4" />
          <path d="M5 19h14" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )
    case 'chevron-left':
      return (
        <svg {...common}>
          <path d="m15 6-6 6 6 6" />
        </svg>
      )
    case 'chevron-right':
      return (
        <svg {...common}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg {...common}>
          <path d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M3 12h18" />
        </svg>
      )
    case 'folder':
      return (
        <svg {...common}>
          <path d="M3 8a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
      )
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="3" />
          <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 4.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 5 3.4 9.2 7 10 3.6-.8 7-5 7-10V6Z" />
          <path d="m9.5 12 2 2 3-4" />
        </svg>
      )
    case 'server':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M7 7h.01M7 17h.01M17 7h-4M17 17h-4" />
        </svg>
      )
    case 'monitor':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M8 18h9a4 4 0 0 0 1-7.88A6 6 0 0 0 6.4 9.1 4.5 4.5 0 0 0 8 18Z" />
        </svg>
      )
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
          <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
        </svg>
      )
    case 'network':
      return (
        <svg {...common}>
          <rect x="10" y="3" width="4" height="4" rx="1" />
          <rect x="3" y="17" width="4" height="4" rx="1" />
          <rect x="17" y="17" width="4" height="4" rx="1" />
          <path d="M12 7v5M5 17v-3h14v3" />
        </svg>
      )
    case 'building':
      return (
        <svg {...common}>
          <path d="M3 10 12 4l9 6" />
          <path d="M5 10v9M9 10v9M15 10v9M19 10v9M3 19h18" />
        </svg>
      )
    case 'shield-badge':
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 5 3.4 9.2 7 10 3.6-.8 7-5 7-10V6Z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    case 'cart':
      return (
        <svg {...common}>
          <circle cx="10" cy="19" r="1.5" />
          <circle cx="17" cy="19" r="1.5" />
          <path d="M3 5h2l2.2 9.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H7" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path d="M4 19V9" />
          <path d="M10 19V5" />
          <path d="M16 19v-7" />
          <path d="M22 19V3" />
          <path d="M2 19h20" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 13 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      )
    case 'gauge':
      return (
        <svg {...common}>
          <path d="M5 15a7 7 0 1 1 14 0" />
          <path d="m12 12 4-4" />
          <path d="M8 18h8" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.76 19.76 0 0 1-8.63-3.07 19.3 19.3 0 0 1-6-6A19.76 19.76 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72l.38 2.52a2 2 0 0 1-.57 1.73L7.1 9.79a16 16 0 0 0 7.11 7.11l1.82-1.81a2 2 0 0 1 1.73-.57l2.52.38A2 2 0 0 1 22 16.92Z" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M7 9v8" />
          <path d="M7 6.5h.01" />
          <path d="M12 17V12a2.5 2.5 0 0 1 5 0v5" />
          <path d="M12 9v8" />
        </svg>
      )
    case 'rocket':
      return (
        <svg {...common}>
          <path d="M5 19c2-4 6-8 11-11 1 5-1 9-5 12l-3 1Z" />
          <path d="M14 5c1-1 3-2 5-2 0 2-1 4-2 5" />
          <path d="m6 15-2 5 5-2" />
          <circle cx="14" cy="10" r="1.5" />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
