export type Language = 'pt' | 'en'

type StackCategory = {
  title: string
  items: string[]
}

type Translations = {
  nav: { projects: string; contact: string }
  hero: { role: string; bio: string; viewProjects: string; contact: string }
  projects: {
    title: string
    details: string
    privateLabel: string
    viewCode: string
    privateRepo: string
    back: string
    viewOthers: string
    featuresTitle: string
    architectureTitle: string
  }
  stack: { title: string; subtitle: string; mainTech: string; categories: StackCategory[] }
  contact: { title: string; description: string; languages: string }
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: { projects: 'Projetos', contact: 'Contato' },
    hero: {
      role: 'Backend Developer',
      bio: 'Desenvolvedor Backend com foco em Python e FastAPI. Interessado em infraestrutura, redes e integração de sistemas. Motivado a aprender novas tecnologias e contribuir com soluções criativas para problemas reais.',
      viewProjects: 'Ver Projetos',
      contact: 'Contato',
    },
    projects: {
      title: 'Projetos em Destaque',
      details: 'Detalhes',
      privateLabel: 'Privado',
      viewCode: 'Ver no GitHub',
      privateRepo: 'Repositório privado',
      back: 'Voltar para projetos',
      viewOthers: 'Ver outros projetos',
      featuresTitle: 'Features principais',
      architectureTitle: 'Arquitetura',
    },
    stack: {
      title: 'Stacks e Habilidades',
      subtitle: 'Especialidades técnicas e ferramentas que utilizo no dia a dia',
      mainTech: 'Principais Tecnologias',
      categories: [
        {
          title: '🐍 Backend – Python',
          items: [
            'Python avançado (POO, async, generators)',
            'FastAPI, Flask',
            'Type hints, Pydantic',
            'Estruturas de dados e algoritmos',
          ],
        },
        {
          title: '🗄 Banco de Dados',
          items: ['PostgreSQL', 'MySQL', 'SQLAlchemy ORM', 'Alembic (migrations)', 'Redis (cache)'],
        },
        {
          title: '🔐 Segurança & API',
          items: ['JWT, HMAC', 'Rate limiting', 'CORS, CSP Headers', 'Idempotência', 'problem+json (RFC 9457)'],
        },
        {
          title: '🧪 Testes & Performance',
          items: ['Testes unitários e E2E', 'Mocks', 'Load testing (Locust)', 'Otimização de queries'],
        },
        {
          title: '🐳 DevOps & Infra',
          items: ['Docker', 'VPS, Linux, SSH', 'Git, GitHub', 'Gerenciamento de processos', 'Monitoramento básico'],
        },
        {
          title: '📄 Arquitetura',
          items: ['APIs RESTful', 'Webhooks', 'Filas assíncronas', 'Organização modular', 'Documentação OpenAPI'],
        },
      ],
    },
    contact: {
      title: 'Contato',
      description: 'Estou disponível para oportunidades Backend e consultoria em arquitetura. Envie uma mensagem ou acesse meus perfis abaixo.',
      languages: '🇧🇷 Português · 🇺🇸 Inglês B1/B2 · 🇪🇸 Espanhol intermediário',
    },
  },

  en: {
    nav: { projects: 'Projects', contact: 'Contact' },
    hero: {
      role: 'Backend Developer',
      bio: 'Backend Developer focused on Python and FastAPI. Interested in infrastructure, networking, and system integration. Motivated to learn new technologies and contribute creative solutions to real-world problems.',
      viewProjects: 'View Projects',
      contact: 'Contact',
    },
    projects: {
      title: 'Featured Projects',
      details: 'Details',
      privateLabel: 'Private',
      viewCode: 'View on GitHub',
      privateRepo: 'Private repository',
      back: 'Back to projects',
      viewOthers: 'View other projects',
      featuresTitle: 'Key Features',
      architectureTitle: 'Architecture',
    },
    stack: {
      title: 'Tech Stack & Skills',
      subtitle: 'Technical specialties and tools I use on a daily basis',
      mainTech: 'Main Technologies',
      categories: [
        {
          title: '🐍 Backend – Python',
          items: [
            'Advanced Python (OOP, async, generators)',
            'FastAPI, Flask',
            'Type hints, Pydantic',
            'Data structures and algorithms',
          ],
        },
        {
          title: '🗄 Database',
          items: ['PostgreSQL', 'MySQL', 'SQLAlchemy ORM', 'Alembic (migrations)', 'Redis (cache)'],
        },
        {
          title: '🔐 Security & API',
          items: ['JWT, HMAC', 'Rate limiting', 'CORS, CSP Headers', 'Idempotency', 'problem+json (RFC 9457)'],
        },
        {
          title: '🧪 Testing & Performance',
          items: ['Unit and E2E testing', 'Mocks', 'Load testing (Locust)', 'Query optimization'],
        },
        {
          title: '🐳 DevOps & Infra',
          items: ['Docker', 'VPS, Linux, SSH', 'Git, GitHub', 'Process management', 'Basic monitoring'],
        },
        {
          title: '📄 Architecture',
          items: ['RESTful APIs', 'Webhooks', 'Async queues', 'Modular organization', 'OpenAPI documentation'],
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: "I'm available for Backend opportunities and architecture consulting. Send a message or visit my profiles below.",
      languages: '🇧🇷 Portuguese · 🇺🇸 English B1/B2 · 🇪🇸 Spanish intermediate',
    },
  },
}
