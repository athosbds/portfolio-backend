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
    description: 'Sistema de venda de ingressos com geração de QR Codes únicos, validação em tempo real e containerização com Docker. Projeto desenvolvido e inscrito no South Summit Madrid 2026.',
    fullDescription: `Sistema completo para venda de ingressos com integração PIX e QR Code. O projeto foi desenvolvido como MVP funcional, com foco em simplicidade e eficiência, demonstrando boas práticas de desenvolvimento com FastAPI.

    O Tripeasy foi **desenvolvido e inscrito no South Summit Madrid 2026**, uma das principais conferências de inovação e empreendedorismo da Europa, que conecta startups a investidores e grandes corporações globais. A participação no South Summit representa uma oportunidade de ganhar visibilidade internacional e validar a solução em um dos maiores ecossistemas de inovação do mundo.

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
      'Integração com Strapi Cloud utilizando componentes dinâmicos para modelagem de conteúdo',
      '📌 Projeto desenvolvido e inscrito no South Summit Madrid 2026',
    ],
    challenges: [
      'Garantir unicidade dos QR Codes em alta escala (colisão de hashes)',
      'Validação em tempo real com baixa latência (< 200ms)',
      'Estruturar banco para consultas rápidas por QR Code',
      'Implementar sistema de check-in que previna uso duplicado',
      'Preparar documentação e inscrição para o South Summit Madrid 2026',
    ],
    architecture: 'Monolito modular com FastAPI, banco PostgreSQL e containers Docker para deploy simplificado. Armazenamento inicial em memória migrado para PostgreSQL.',
    tech: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'QR Code', 'JWT', 'Pydantic'],
    github: 'https://github.com/athos/tripeasy-backend',
    image: '/images/tripeasy.png',
    en: {
      description: 'Ticket sales system with unique QR Code generation, real-time validation, and Docker containerization. Project developed and submitted to South Summit Madrid 2026.',
      fullDescription: `Complete ticket sales system with PIX and QR Code integration. Developed as a functional MVP focused on simplicity and efficiency, showcasing FastAPI best practices.

    Tripeasy was **developed and submitted to South Summit Madrid 2026**, one of Europe's leading innovation and entrepreneurship conferences, connecting startups with investors and global corporations. Participating in South Summit represents an opportunity to gain international visibility and validate the solution in one of the world's largest innovation ecosystems.

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
        'Strapi Cloud integration using dynamic components for flexible content modeling',
        '📌 Project developed and submitted to South Summit Madrid 2026',
      ],
      architecture: 'Modular monolith with FastAPI, PostgreSQL, and Docker containers for simplified deployment. Initial in-memory storage migrated to PostgreSQL.',
    },
  },
  {
    id: 'notahub-fiscal',
    title: 'NotaHub Fiscal',
    description: 'Worker Python para emissão de documentos fiscais (NF-e, NFC-e, NFS-e, CT-e) com integração SEFAZ/SVRS, SEFIN Nacional e geração de PDFs (DANFE/DACTE). Processa milhares de documentos com compliance, idempotência e auto-numeração atômica.',
    fullDescription: `O NotaHub Fiscal é um microserviço robusto desenvolvido em Python (FastAPI) para o ecossistema do ERP NotaHub, responsável por toda a camada de emissão, cancelamento, consulta e geração de documentos fiscais eletrônicos. O sistema suporta NF-e (modelo 55), NFC-e (modelo 65), NFS-e (MEI e PJ via SEFIN Nacional) e CT-e (modelo 57), abrangendo os principais regimes tributários (CRT 1, 2 e 3) e ambientes (homologação e produção).

    A solução foi construída com foco em escalabilidade, segurança e observabilidade, integrando-se diretamente aos webservices da SEFAZ (SVRS, SVSP, PR, MG, MT, MS) via SOAP com mTLS, e à SEFIN Nacional via REST com mTLS. Possui um módulo de compliance que valida regras fiscais (CFOP, CST/CSOSN, NCM, etc.) antes da transmissão, garantindo que apenas documentos tecnicamente corretos sejam enviados ao fisco.

    Destaques incluem: geração de DANFE/DACTE/DANFSe com layout oficial (brazilfiscalreport), QR Code e código de barras; sistema de auto-numeração atômica com lock pessimista no banco de dados; idempotência com chave SHA‑256; logs de auditoria imutáveis; retry automático com backoff exponencial; e modo mock para testes. O worker também gerencia preferências fiscais, produtos e regras fiscais via API REST.`,
    features: [
      'Emissão, cancelamento e consulta de NF-e, NFC-e, NFS-e e CT-e',
      'Geração de DANFE, DACTE e DANFSe (PDF) com QR Code e código de barras (biblioteca oficial brazilfiscalreport)',
      'Compliance fiscal: validação de CFOP, CST/CSOSN, NCM, regras de origem/destino',
      'Auto-numeração atômica por série/ambiente com bloqueio pessimista (SELECT FOR UPDATE)',
      'Idempotência via hash do payload + lock PostgreSQL (pg_advisory_lock)',
      'Logs de auditoria imutáveis com sanitização de dados sensíveis (certificados, senhas)',
      'Retry automático com backoff exponencial para falhas de rede (tenacity)',
      'Integração SOAP (SEFAZ) e REST (SEFIN Nacional) com mTLS',
      'Modo mock para testes sem certificado real (autorizado/rejeitado/erro)',
      'CRUD de produtos e preferências fiscais (série, número inicial, provedor)',
      'Middleware de segurança: CORS, Rate Limiting, OWASP Headers, CSP',
      'Monitoramento com health checks e métricas (Prometheus)',
    ],
    challenges: [
      'Corrigir dezenas de erros de schema XML da SEFAZ (cStat 215, 225, 232, 275, 732, etc.) ajustando tags obrigatórias e opcionais (IE do destinatário, CSOSN, CFOP, etc.)',
      'Implementar assinatura XML com diferentes perfis (RSA-SHA1/C14N 20010315 para NF-e, RSA-SHA256/exc‑c14n para SEFIN Nacional) e manter apenas o certificado folha na cadeia',
      'Garantir idempotência e evitar duplicatas em cenários de retry, utilizando locks de banco e chaves de idempotência',
      'Criar um sistema de auto-numeração atômico que resista a concorrência (vários workers) e permita rollback em caso de falha na transmissão',
      'Adaptar o código para múltiplos ambientes (homologação/produção) e provedores (SVRS, SVSP, SEFIN Nacional, Cariacica) com roteamento dinâmico por UF',
      'Integrar com o novo padrão nacional NFS-e (DPS) e com o legado ABRASF (Cariacica), migrando gradativamente para o modelo unificado',
      'Gerar PDFs fiscais (DANFE, DACTE, DANFSe) totalmente conforme os leiautes oficiais (NT 008/2026, MOC v7.0)',
    ],
    architecture: 'Arquitetura monolítica modular com FastAPI, seguindo o padrão Repository para acesso a dados. O banco PostgreSQL armazena documentos, auditoria, produtos e preferências; Redis é usado para filas de processamento assíncrono. O worker roda com múltiplos processos (gunicorn/uvicorn) e utiliza locks em nível de banco para garantir atomicidade. A comunicação com os fiscos é feita via mTLS (certificados ICP-Brasil) e os XMLs são assinados com xml_signer personalizado, suportando perfis OFICIAL_LEGACY e MODERN. Toda a geração de PDFs foi centralizada na biblioteca brazilfiscalreport para garantir conformidade. O sistema conta com middleware de segurança, rate limiting, logs estruturados e health checks.',
    tech: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'Redis', 'Docker', 'mTLS', 'JWT', 'SQLAlchemy', 'Pydantic', 'reportlab', 'brazilfiscalreport', 'lxml', 'requests', 'httpx', 'tenacity', 'Prometheus'],
    github: 'https://github.com/athos/notahub-fiscal',
    image: '/images/notahub-fiscal.jpeg',
    en: {
      description: 'Python worker for issuing tax documents (NF-e, NFC-e, NFS-e, CT-e) with SEFAZ/SVRS and SEFIN Nacional integration, including PDF generation (DANFE/DACTE). Processes thousands of documents with compliance, idempotency, and atomic auto‑numbering.',
      fullDescription: `NotaHub Fiscal is a robust Python microservice (FastAPI) built for the NotaHub ERP ecosystem, handling the entire lifecycle of electronic tax document issuance, cancellation, query, and PDF generation. It supports NF-e (model 55), NFC-e (model 65), NFS-e (MEI and corporate via SEFIN Nacional), and CT-e (model 57), covering major tax regimes (CRT 1, 2, 3) and both homologation and production environments.

    The solution was designed with scalability, security, and observability in mind, integrating directly with SEFAZ web services (SVRS, SVSP, PR, MG, MT, MS) over SOAP with mTLS, and with SEFIN Nacional over REST with mTLS. A built‑in compliance module validates fiscal rules (CFOP, CST/CSOSN, NCM, origin/destination rules) before transmission, ensuring that only technically correct documents are sent to the tax authorities.

    Key features include: official‑layout DANFE/DACTE/DANFSe PDF generation (brazilfiscalreport) with QR codes and barcodes; atomic auto‑numbering with pessimistic database locks; idempotency via SHA‑256 payload hashing; immutable audit logs; automatic retry with exponential backoff; and a mock mode for testing. The worker also manages fiscal preferences, products, and tax rules through a REST API.`,
      features: [
        'Issuance, cancellation, and query of NF-e, NFC-e, NFS-e, and CT-e',
        'DANFE, DACTE, and DANFSe PDF generation (official layout) with QR codes and barcodes (brazilfiscalreport)',
        'Fiscal compliance: validation of CFOP, CST/CSOSN, NCM, origin/destination rules',
        'Atomic auto‑numbering per series/environment with pessimistic locking (SELECT FOR UPDATE)',
        'Idempotency via payload hash + PostgreSQL advisory locks',
        'Immutable audit logs with sensitive data sanitization (certificates, passwords)',
        'Automatic retry with exponential backoff for network failures (tenacity)',
        'SOAP (SEFAZ) and REST (SEFIN Nacional) integration with mTLS',
        'Mock mode for testing without real certificates (authorized/rejected/error)',
        'CRUD for products and fiscal preferences (series, starting number, provider)',
        'Security middleware: CORS, Rate Limiting, OWASP Headers, CSP',
        'Monitoring with health checks and Prometheus metrics',
      ],
      architecture: 'Modular monolithic architecture with FastAPI, following the Repository pattern for data access. PostgreSQL stores documents, audit logs, products, and preferences; Redis is used for asynchronous task queues. The worker runs with multiple processes (gunicorn/uvicorn) and uses database‑level locks to ensure atomicity. Communication with tax authorities uses mTLS (ICP‑Brasil certificates) and XML signatures are handled by a custom xml_signer supporting OFFICIAL_LEGACY and MODERN profiles. PDF generation is centralized with brazilfiscalreport for full compliance. The system includes security middleware, rate limiting, structured logging, and health checks.',
    },
  },
  {
    id: 'truckcenter-ks-fiscal',
    title: 'TruckCenterKS Fiscal API',
    description: 'API completa para gestão fiscal de auto-peças, com emissão de NF-e (modelo 55) e NFS-e (IPM Campo Largo), sincronização automática de notas de compra via SEFAZ, rate limiting, cache e geração de DANFE/DANFSe em PDF.',
    fullDescription: `O TruckCenterKS Fiscal API é um sistema robusto desenvolvido em FastAPI para o ecossistema do cliente Kochinski Manutenção de Veículos (KS Truck Peças), responsável pela emissão, cancelamento, consulta e download de documentos fiscais eletrônicos. O projeto atende integralmente às necessidades de uma empresa de auto‑peças, integrando‑se com a SEFAZ-PR para NF-e modelo 55 e com o provedor IPM (Campo Largo/PR) para NFS-e.

    A solução foi construída com foco em automação, segurança e resiliência. Destaques incluem:
    - **Sincronização automática de notas de compra**: um scheduler em background consulta o serviço NFeDistribuçaoDFe da SEFAZ a cada 30 minutos, importa novos documentos e extrai NCM, CFOP, e itens, mantendo o cadastro de produtos atualizado.
    - **Rate limiter e cache com Redis**: protege contra bloqueios por excesso de consultas (cStat 656) e reduz chamadas repetidas à SEFAZ.
    - **Validações inteligentes**: correção automática de NCM a partir do cadastro, ajuste de CFOP conforme UF do destinatário, e devolução de numeração em rejeições.
    - **Emissão de NF-e e NFS-e**: fluxo completo com compliance, assinatura XML, envio para SEFAZ e IPM, e geração de DANFE/DANFSe com layout oficial.
    - **Endpoints de consulta e download**: permite recuperar XMLs e PDFs autorizados, além de consultar NFS-e por número ou chave.
    - **Monitoramento de saúde**: health checks dos provedores externos (SEFAZ-PR e IPM) com métricas e logs estruturados.

    O sistema foi validado em produção com centenas de notas emitidas e canceladas, atendendo a casos reais de venda e compra do cliente.`,
    features: [
      'Emissão, cancelamento e consulta de NF-e (modelo 55) e NFS-e (IPM Campo Largo)',
      'Sincronização automática de notas de compra (scheduler a cada 30min) com rate limit e cache Redis',
      'Importação de XMLs de compra com extração de NCM, CFOP e itens, atualizando produtos e estoque',
      'Validação e correção automática de NCM e CFOP baseada no cadastro de produtos',
      'Devolução automática de numeração em rejeições (evita queima de números)',
      'Geração de DANFE e DANFSe em PDF com layout oficial (brazilfiscalreport) e logo da empresa',
      'Rate limiter de 20 consultas/hora para serviço NFeDistribuicaoDFe (SEFAZ)',
      'Cache de respostas da SEFAZ com TTL de 55 minutos',
      'Persistência de NSU (último ponto de paginação) para sincronização contínua',
      'Endpoints de download de XML e DANFSe (link da prefeitura para NFS-e)',
      'Monitoramento de saúde dos provedores (SEFAZ-PR e IPM) com métricas históricas',
      'Logs JSON estruturados e auditoria de operações fiscais',
      'Suporte a múltiplos tenants com certificados digitais A1 e criptografia',
    ],
    challenges: [
      'Corrigir dezenas de rejeições da SEFAZ-PR (cStat 225, 554, 778, 974, 976, 539, 577, etc.) ajustando IE, CSRT, NCM, CFOP e timezone do cancelamento',
      'Implementar o provider IPM para NFS-e Campo Largo, com formato multipart/form-data, Basic Auth e parser de respostas em XML/JSON',
      'Criar um scheduler resiliente que sincronize notas de compra sem exceder o limite de 20 consultas/hora da SEFAZ',
      'Projetar um rate limiter com Redis (janela deslizante) e cache para evitar bloqueios e reduzir latência',
      'Garantir a devolução de números em rejeições sem comprometer a sequência oficial (evitar duplicidade)',
      'Integrar a geração de DANFE com a biblioteca BrazilFiscalReport, incluindo logo personalizada da empresa',
      'Gerenciar certificados A1 de forma segura (criptografia, materialização temporária, validação de validade)',
    ],
    architecture: 'Arquitetura monolítica modular com FastAPI, SQLAlchemy e PostgreSQL. O sistema utiliza Redis para cache e rate limiting. O scheduler é implementado como uma task assíncrona no lifespan da aplicação, executando sincronizações a cada 30 minutos. A camada de transporte inclui clientes SOAP (SEFAZ) e REST/multipart (IPM). Os XMLs são assinados com xml_signer (perfis OFICIAL_LEGACY e MODERN). A geração de PDFs é centralizada na biblioteca brazilfiscalreport. O monitoramento inclui health checks customizados e logs estruturados em JSON. O deploy é feito via Docker Compose em VPS com proxy reverso Nginx.',
    tech: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'Redis', 'Docker', 'mTLS', 'SOAP', 'REST', 'SQLAlchemy', 'Pydantic', 'brazilfiscalreport', 'reportlab', 'lxml', 'requests', 'httpx', 'tenacity', 'Prometheus'],
    github: 'https://github.com/athos/truckcenter-ks-fiscal',
    image: '/images/truckcenter-ks.jpeg',
    en: {
      description: 'Complete fiscal management API for auto‑parts, with NF-e (model 55) and NFS-e (IPM Campo Largo) issuance, automatic purchase invoice sync via SEFAZ, rate limiting, caching, and DANFE/DANFSe PDF generation.',
      fullDescription: `TruckCenterKS Fiscal API is a robust FastAPI system built for the Kochinski Manutenção de Veículos (KS Truck Peças) ecosystem, handling issuance, cancellation, query, and download of electronic tax documents. The project fully meets the needs of an auto‑parts company, integrating with SEFAZ-PR for NF-e model 55 and with the IPM provider (Campo Largo/PR) for NFS-e.

    The solution focuses on automation, security, and resilience. Highlights include:
    - **Automatic purchase invoice sync**: a background scheduler queries the SEFAZ NFeDistribuçaoDFe service every 30 minutes, imports new documents, and extracts NCM, CFOP, and items, keeping the product catalog up‑to‑date.
    - **Redis rate limiter and cache**: protects against SEFAZ blocking (cStat 656) and reduces redundant calls.
    - **Smart validations**: automatic NCM correction from product catalog, CFOP adjustment based on destination UF, and number rollback on rejections.
    - **NF-e and NFS-e issuance**: full compliance flow, XML signing, transmission to SEFAZ and IPM, and official‑layout DANFE/DANFSe PDF generation.
    - **Query and download endpoints**: retrieve authorized XMLs and PDFs, and query NFS-e by number or key.
    - **Health monitoring**: custom health checks for external providers (SEFAZ-PR and IPM) with metrics and structured logging.

    The system has been validated in production with hundreds of issued and cancelled documents, covering real‑world sales and purchase scenarios.`,
      features: [
        'Issuance, cancellation, and query of NF-e (model 55) and NFS-e (IPM Campo Largo)',
        'Automatic purchase invoice sync (30‑min scheduler) with Redis rate limiting and caching',
        'Purchase XML import with NCM, CFOP, and item extraction, updating products and stock',
        'Automatic NCM and CFOP validation and correction based on product catalog',
        'Automatic number rollback on rejections (prevents number burning)',
        'DANFE and DANFSe PDF generation with official layout (brazilfiscalreport) and company logo',
        '20‑request/hour rate limiter for the SEFAZ NFeDistribuicaoDFe service',
        'SEFAZ response caching with 55‑minute TTL',
        'NSU (last pagination point) persistence for continuous sync',
        'XML and DANFSe download endpoints (prefecture link for NFS-e)',
        'Health monitoring of external providers (SEFAZ-PR and IPM) with historical metrics',
        'Structured JSON logging and audit trails for fiscal operations',
        'Multi‑tenant support with A1 digital certificates and encryption',
      ],
      architecture: 'Modular monolithic architecture with FastAPI, SQLAlchemy, and PostgreSQL. Redis is used for caching and rate limiting. The scheduler runs as an asynchronous task in the application lifespan, performing syncs every 30 minutes. The transport layer includes SOAP clients (SEFAZ) and REST/multipart clients (IPM). XMLs are signed with xml_signer (OFFICIAL_LEGACY and MODERN profiles). PDF generation is centralized with brazilfiscalreport. Health checks and JSON logging are built‑in. Deployment is via Docker Compose on a VPS with an Nginx reverse proxy.',
    },
  },
]