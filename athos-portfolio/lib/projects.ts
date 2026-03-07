import { Language } from './i18n/translations'

type ProjectTranslation = {
  description: string
  fullDescription?: string
  features?: string[]
  architecture?: string
}

export type Project = {
  id: string
  title: string
  description: string
  fullDescription?: string
  features?: string[]
  challenges?: string[]
  architecture?: string
  tech: string[]
  github?: string
  live?: string
  image?: string
  en?: ProjectTranslation
}

export function getProjectContent(project: Project, lang: Language) {
  if (lang === 'en' && project.en) {
    return {
      ...project,
      description: project.en.description,
      fullDescription: project.en.fullDescription ?? project.fullDescription,
      features: project.en.features ?? project.features,
      architecture: project.en.architecture ?? project.architecture,
    }
  }
  return project
}

export const projects: Project[] = [
  {
    id: 'hubmei-backend',
    title: 'HubMei Backend',
    description: 'API para gestão de MEIs com módulos fiscais, financeiros e monitoramento de limites. Processa 10k+ requisições/dia com 99.9% de uptime.',
    fullDescription: `O HubMei é uma API completa para gestão de Microempreendedores Individuais (MEIs), desenvolvida para simplificar obrigações fiscais e financeiras. O sistema foi arquitetado com foco em escalabilidade, segurança e observabilidade, processando mais de 10 mil requisições diárias com 99.9% de uptime.

    A solução integra módulos de notas fiscais, DAS, DARF, despesas, alertas automáticos e dashboard financeiro, além de um sofisticado sistema de planos (free/plus/pro) com soft-block técnico.`,
    features: [
      'Sistema de autenticação com JWT (próprio + integração Strapi)',
      '8 middlewares de segurança: CORS, Rate Limiting, CSP, Headers OWASP completos',
      'Fila de processamento com prioridades (alta/média/baixa) para tarefas assíncronas',
      'Webhooks de saída com assinatura HMAC e retry com backoff exponencial',
      'Logs imutáveis de ações sensíveis (plan_change_logs) para auditoria',
      'Dashboard financeiro consolidado com cache inteligente (TTL 60s)',
      'Monitoramento com Prometheus e health checks reais de banco e tabelas',
      'Sistema de planos com bloqueio granular de endpoints por assinatura',
      'Cálculo de receita líquida e projeções previdenciárias para MEI caminhoneiro',
      'Validação e normalização automática de CNPJ/CPF',
    ],
    challenges: [
      'Implementar soft-block por plano sem afetar performance (middleware com apenas 1 query por request)',
      'Garantir consistência em filas de processamento com retentativas e prioridades',
      'Criar sistema de webhooks confiável com assinatura HMAC e backoff exponencial',
      'Projetar logs imutáveis para rastreabilidade completa de mudanças de plano',
      'Otimizar dashboard financeiro com apenas 3 consultas ao banco + cache',
    ],
    architecture: 'Arquitetura monolítica modular com 8 middlewares em cadeia: CORS → Security Headers → Request ID → Logging → Cache → Auth → Rate Limit → CSP. Banco PostgreSQL com índices estratégicos e filas processadas via banco (sem Redis).',
    tech: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Prometheus', 'SQLAlchemy', 'Pydantic'],
    github: 'https://github.com/athos/hubmei-backend',
    image: '/images/hubmei.png',
    en: {
      description: 'API for Individual Microentrepreneur (MEI) management with tax and financial modules, limit monitoring. Processes 10k+ requests/day with 99.9% uptime.',
      fullDescription: `HubMei is a complete API for managing Individual Microentrepreneurs (MEIs), built to simplify tax and financial obligations. The system was architected with a focus on scalability, security, and observability, processing over 10,000 daily requests with 99.9% uptime.

    The solution integrates modules for invoices, DAS, DARF, expenses, automated alerts, and a financial dashboard — alongside a sophisticated subscription plan system (free/plus/pro) with technical soft-blocking.`,
      features: [
        'JWT authentication system (native + Strapi integration)',
        '8 security middlewares: CORS, Rate Limiting, CSP, full OWASP headers',
        'Priority-based processing queue (high/medium/low) for async tasks',
        'Outbound webhooks with HMAC signature and exponential backoff retry',
        'Immutable audit logs for sensitive actions (plan_change_logs)',
        'Consolidated financial dashboard with smart caching (60s TTL)',
        'Prometheus monitoring with real health checks for DB and tables',
        'Granular endpoint blocking per subscription plan',
        'Net revenue calculation and pension projections for truck driver MEIs',
        'Automatic CNPJ/CPF validation and normalization',
      ],
      architecture: 'Modular monolithic architecture with 8 chained middlewares: CORS → Security Headers → Request ID → Logging → Cache → Auth → Rate Limit → CSP. PostgreSQL with strategic indexes and database-backed queues (no Redis).',
    },
  },
  {
    id: 'prontu-bnpl',
    title: 'Prontu BNPL API',
    description: 'Sistema Buy Now Pay Later com fluxo completo de crédito, webhooks e testes de carga simulando 100 usuários simultâneos (p95 < 400ms).',
    fullDescription: `API completa para plataforma BNPL (Buy Now Pay Later), permitindo que clientes comprem agora e paguem depois. O sistema foi desenvolvido com foco em idempotência, rastreabilidade e performance, passando por rigorosos testes de carga.

    Implementa fluxo completo desde aplicação de crédito até confirmação de pagamentos, com geração automática de parcelas, webhooks para notificações em tempo real e exportação de relatórios.`,
    features: [
      'Fluxo completo: aplicação → confirmação → empréstimo → parcelas',
      'Endpoints idempotentes com Idempotency-Key (evita duplicidade)',
      'Taxonomia de erros problem+json (RFC 9457) com handlers globais',
      'Webhooks com HMAC, idempotência e retry automático',
      'Testes de carga com Locust (100 usuários simultâneos, p95 < 400ms)',
      'Dashboard com métricas consolidadas de empréstimos',
      'Exportação de relatórios em CSV via StreamingResponse',
      'Middleware de sanitização de logs removendo PII (dados pessoais)',
      'Importação de whitelist via CSV com validação',
      'Migrations com Alembic e versionamento de schema',
    ],
    challenges: [
      'Garantir idempotência em cenários de retry sem criar registros duplicados',
      'Projetar taxonomia de erros consistente em toda API (20+ endpoints)',
      'Otimizar queries para suportar alta carga (100 usuários simultâneos)',
      'Implementar sanitização de logs sem comprometer performance',
      'Criar sistema de webhooks resiliente com retry e backoff',
    ],
    architecture: 'API RESTful com PostgreSQL, SQLAlchemy 2.0 e testes de carga integrados desde o início do desenvolvimento. Padrão repository para camada de dados e handlers globais de erro.',
    tech: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Docker', 'JWT', 'Locust', 'Pydantic'],
    github: 'https://github.com/athos/prontu-bnpl',
    image: '/images/prontu.png',
    en: {
      description: 'Buy Now Pay Later system with a complete credit flow, webhooks, and load testing simulating 100 simultaneous users (p95 < 400ms).',
      fullDescription: `Complete API for a BNPL (Buy Now Pay Later) platform, enabling customers to buy now and pay later. The system was built with a focus on idempotency, traceability, and performance, validated through rigorous load testing.

    Implements the full flow from credit application to payment confirmation, with automatic installment generation, real-time webhook notifications, and CSV report exports.`,
      features: [
        'Complete flow: application → confirmation → loan → installments',
        'Idempotent endpoints with Idempotency-Key (prevents duplicate records)',
        'problem+json error taxonomy (RFC 9457) with global handlers',
        'Webhooks with HMAC, idempotency, and automatic retry',
        'Load testing with Locust (100 simultaneous users, p95 < 400ms)',
        'Dashboard with consolidated loan metrics',
        'CSV report export via StreamingResponse',
        'Log sanitization middleware removing PII (personal data)',
        'Whitelist import via CSV with validation',
        'Migrations with Alembic and schema versioning',
      ],
      architecture: 'RESTful API with PostgreSQL, SQLAlchemy 2.0, and load testing integrated from day one. Repository pattern for the data layer and global error handlers.',
    },
  },
  {
    id: 'tripeasy',
    title: 'Tripeasy',
    description: 'Sistema de venda de ingressos com geração de QR Codes únicos, validação em tempo real e containerização com Docker.',
    fullDescription: `Sistema completo para venda de ingressos com integração PIX e QR Code. O projeto foi desenvolvido como MVP funcional, com foco em simplicidade e eficiência, demonstrando boas práticas de desenvolvimento com FastAPI.

    Implementa fluxo completo desde a criação do pedido até a validação do ingresso na entrada do evento, com geração de QR Codes únicos e validação em tempo real.`,
    features: [
      'Geração de QR Codes únicos para cada ingresso (hash MD5 + order_code)',
      'Validação em tempo real nos pontos de entrada (check-in)',
      'Fluxo completo: criação → confirmação → check-in',
      'Diferenciação por tipo de ingresso (VIP, Standard, Meia)',
      'Persistência com PostgreSQL e SQLAlchemy',
      'Containerização com Docker para fácil deploy',
      'Health checks e monitoramento básico',
      'Endpoints documentados com OpenAPI/Swagger',
    ],
    challenges: [
      'Garantir unicidade dos QR Codes em alta escala (colisão de hashes)',
      'Validação em tempo real com baixa latência (< 200ms)',
      'Estruturar banco para consultas rápidas por QR Code',
      'Implementar sistema de check-in que previna uso duplicado',
    ],
    architecture: 'Monolito modular com FastAPI, banco PostgreSQL e containers Docker para deploy simplificado. Armazenamento inicial em memória migrado para PostgreSQL.',
    tech: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'QR Code', 'JWT', 'Pydantic'],
    github: 'https://github.com/athos/tripeasy-backend',
    image: '/images/tripeasy.png',
    en: {
      description: 'Ticket sales system with unique QR Code generation, real-time validation, and Docker containerization.',
      fullDescription: `Complete ticket sales system with PIX and QR Code integration. Developed as a functional MVP focused on simplicity and efficiency, showcasing FastAPI best practices.

    Implements the full flow from order creation to ticket validation at the venue entrance, with unique QR Code generation and real-time check-in validation.`,
      features: [
        'Unique QR Code generation per ticket (MD5 hash + order_code)',
        'Real-time validation at entry points (check-in)',
        'Complete flow: creation → confirmation → check-in',
        'Ticket type differentiation (VIP, Standard, Half-price)',
        'Persistence with PostgreSQL and SQLAlchemy',
        'Docker containerization for easy deployment',
        'Health checks and basic monitoring',
        'Endpoints documented with OpenAPI/Swagger',
      ],
      architecture: 'Modular monolith with FastAPI, PostgreSQL, and Docker containers for simplified deployment. Initial in-memory storage migrated to PostgreSQL.',
    },
  },
]
