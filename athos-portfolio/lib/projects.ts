export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 'hubmei-backend',
    title: 'HubMei Backend',
    description: 'API para gestão de MEIs com módulos fiscais, financeiros e monitoramento de limites. Processa 10k+ requisições/dia com 99.9% de uptime.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Prometheus'],
    github: 'https://github.com/athos/hubmei-backend',
    image: '/images/hubmei.png'
  },
  {
    id: 'prontu-bnpl',
    title: 'Prontu BNPL API',
    description: 'Sistema Buy Now Pay Later com fluxo completo de crédito, webhooks e testes de carga simulando 100 usuários simultâneos (p95 < 400ms).',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Locust'],
    github: 'https://github.com/athos/prontu-bnpl',
    image: '/images/prontu.png'  
  },
  {
    id: 'tripeasy',
    title: 'Tripeasy',
    description: 'Sistema de venda de ingressos com geração de QR Codes únicos, validação em tempo real e containerização com Docker.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'Docker', 'QR Code', 'JWT'],
    github: 'https://github.com/athos/tripeasy-backend',
    image: '/images/tripeasy.png'  
  }
]