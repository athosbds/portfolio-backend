export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  image?: string
  isPrivate?: boolean
}

export const projects: Project[] = [
  {
    id: 'hubmei-backend',
    title: 'HubMei Backend',
    description: 'API para gestão de MEIs com módulos fiscais, financeiros e monitoramento de limites. Processa 10k+ requisições/dia com 99.9% uptime.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Prometheus'],
    github: 'https://github.com/athos/hubmei-backend',
    isPrivate: true
  },
  {
    id: 'prontu-bnpl',
    title: 'Prontu BNPL API',
    description: 'API para sistema Buy Now Pay Later com fluxo de crédito, webhooks e testes de carga (100 usuários simultâneos, p95 < 400ms).',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'JWT', 'Locust'],
    github: 'https://github.com/athos/prontu-bnpl',
    isPrivate: true
  },
  {
    id: 'tripeasy',
    title: 'Tripeasy',
    description: 'Sistema de venda de ingressos com geração de QR Codes e validação em tempo real. Containerizado com Docker.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'Docker', 'QR Code', 'JWT'],
    github: 'https://github.com/athos/tripeasy-backend',
    isPrivate: false
  }
]