/**
 * Single source of truth for the portfolio content.
 *
 * Every claim here comes from Alberto's résumé. Optional fields (`media`, `metric`,
 * `links`) exist so new material can be dropped in without touching components:
 * leave them out and the UI simply doesn't render that slot.
 */

export type Link = { label: string; href: string; external?: boolean };

export const identity = {
  name: "Alberto Zaranza",
  firstName: "Alberto",
  lastName: "Zaranza",
  role: "Engenheiro Mobile Sênior",
  tagline: "Construindo experiências mobile escaláveis.",
  summary:
    "Engenheiro mobile sênior com mais de 6 anos construindo produtos em React Native para saúde, fintech, mobilidade e agronegócio, hoje publicando para mais de 8 milhões de usuários. Atuo em todo o ciclo: arquitetura, integrações nativas, performance e o pipeline de releases que mantém um app saudável em produção.",
  location: "Brasil",
  timezone: "America/Fortaleza",
  timezoneLabel: "UTC−3",
  /** Edit freely: rendered as-is in the hero and contact sections. */
  availability: "Aberto a conversas sobre posições mobile sênior",
  email: "albertozaranza@gmail.com",
  years: "6+",
} as const;

export const socials = {
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/albertozaranza", external: true },
  github: { label: "GitHub", href: "https://github.com/albertozaranza", external: true },
} satisfies Record<string, Link>;

/** Drop the PDF at `public/alberto-zaranza-cv.pdf`; the download link only appears when the file exists. */
export const resumeFile = "alberto-zaranza-cv.pdf";

/* -------------------------------------------------------------------------- */
/* Impact                                                                      */
/* -------------------------------------------------------------------------- */

export type Metric = {
  id: string;
  /** Rendered big. Use `from`/`to` for transitions, `value` for single figures. */
  from?: number;
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
  source: string;
};

export const metrics: Metric[] = [
  {
    id: "users",
    to: 8,
    suffix: "M+",
    label: "Usuários impactados a cada release",
    detail:
      "Publico releases do superapp da Unimed para mais de 8 milhões de usuários em Android e iOS. Antes disso, conduzi releases semanais para mais de 100 mil usuários na Localiza&Co, todas monitoradas e com zero incidentes.",
    source: "Yuni Digital · Unimed",
  },
  {
    id: "rating",
    from: 4.3,
    to: 4.8,
    decimals: 1,
    label: "Nota do app nas lojas",
    detail:
      "Testes A/B mostraram que o fluxo de avaliação era um gargalo na jornada do usuário. Repensar quando e como o app pede uma avaliação elevou a nota nas lojas e, com ela, retenção e engajamento.",
    source: "Localiza&Co",
  },
  {
    id: "support",
    to: 60,
    prefix: "−",
    suffix: "%",
    label: "Chamados de suporte",
    detail:
      "Um fluxo digital de agendamento self-service substituiu uma jornada que dependia do time de suporte, reduzindo os chamados em até 60%.",
    source: "Localiza&Co",
  },
  {
    id: "images",
    to: 70,
    prefix: "+",
    suffix: "%",
    label: "Performance no carregamento de imagens",
    detail:
      "Otimizar o consumo de imagens vindas do CMS, junto com a refatoração de bibliotecas críticas, melhorou a performance de carregamento em até 70%.",
    source: "Localiza&Co",
  },
];

/* -------------------------------------------------------------------------- */
/* Selected work                                                               */
/* -------------------------------------------------------------------------- */

export type Diagram = "ab-review" | "scheduling" | "superapp" | "release";

export type CaseStudy = {
  id: string;
  company: string;
  period: string;
  title: string;
  /** Short line under the title. */
  lede: string;
  context: string;
  problem: string;
  role: string;
  decisions: string[];
  outcome: string;
  metric?: { value: string; label: string };
  stack: string[];
  diagram: Diagram;
  /** Optional real screenshots / mockups. When present they're shown next to the diagram. */
  media?: { src: string; alt: string }[];
  links?: Link[];
};

export const cases: CaseStudy[] = [
  {
    id: "review",
    company: "Localiza&Co",
    period: "2022 — 2024",
    title: "Pedir uma avaliação no momento certo",
    lede: "Tratar uma chamada de API nativa de uma linha como uma superfície de produto.",
    context:
      "Um app de mobilidade com mais de 100 mil usuários ativos, em que a nota nas lojas influencia aquisição e confiança.",
    problem:
      "A nota estava em 4,3. Testes A/B apontaram o próprio fluxo de avaliação como um dos principais gargalos da jornada do usuário.",
    role: "Engenheiro mobile no fluxo de avaliação in-app, da experimentação à implementação e ao acompanhamento em produção.",
    decisions: [
      "Usar testes A/B para localizar onde a jornada quebrava antes de mudar qualquer coisa.",
      "Refinar o momento dos pedidos de avaliação em vez de pedir com mais frequência.",
      "Melhorar o tratamento de cada resposta, para que o pedido respeite o momento do usuário.",
    ],
    outcome:
      "A nota subiu de 4,3 para 4,8, um salto que se refletiu em retenção e engajamento.",
    metric: { value: "4,3 → 4,8", label: "nota nas lojas" },
    stack: ["React Native", "TypeScript", "Testes A/B", "In-App Review (iOS/Android)", "Analytics"],
    diagram: "ab-review",
  },
  {
    id: "scheduling",
    company: "Localiza&Co",
    period: "2022 — 2024",
    title: "Transformar uma ligação em um fluxo self-service",
    lede: "O melhor chamado de suporte é aquele que ninguém precisa abrir.",
    context:
      "O agendamento dependia de contato com o time de suporte, o que gerava um alto volume de chamados.",
    problem:
      "O tempo do suporte era gasto em uma tarefa que os próprios usuários poderiam fazer, e eles não tinham autonomia sobre uma etapa rotineira.",
    role: "Desenvolvi o novo fluxo de agendamento digital no app.",
    decisions: [
      "Priorizar um fluxo simples e intuitivo em vez de um fluxo exaustivo.",
      "Levar a tarefa inteira para o app, para que possa ser concluída sem contato humano.",
    ],
    outcome:
      "Os chamados de suporte caíram em até 60%, liberando o time de atendimento e dando autonomia aos usuários.",
    metric: { value: "−60%", label: "chamados de suporte" },
    stack: ["React Native", "TypeScript", "APIs REST"],
    diagram: "scheduling",
  },
  {
    id: "superapp",
    company: "Yuni Digital · Unimed",
    period: "2024 — atual",
    title: "Um app, muitos serviços: o superapp da Unimed",
    lede: "Centralizar serviços muito diferentes sem pagar o preço em performance.",
    context:
      "O superapp da Unimed reúne diversos serviços de saúde em uma única experiência mobile para mais de 8 milhões de usuários em Android e iOS.",
    problem:
      "Cada novo serviço adiciona peso. O desafio era centralizá-los sem comprometer performance nem escalabilidade.",
    role: "Engenheiro React Native sênior construindo fluxos centrais e capacidades compartilhadas da plataforma.",
    decisions: [
      "Construir sobre a Nova Arquitetura do React Native (Fabric, TurboModules e JSI).",
      "Publicar atualizações over-the-air com CodePush e hot-updater para encurtar o ciclo de feedback.",
      "Estruturar as notificações no OneSignal como uma capacidade da qual todo módulo pode depender.",
      "Conectar fluxos de gamificação a dispositivos IoT e otimizar o gerenciamento de arquivos.",
    ],
    outcome:
      "Uma experiência moderna e unificada, que elevou a percepção de valor do app e reduziu custos operacionais.",
    metric: { value: "8M+", label: "usuários por release" },
    stack: ["React Native", "TypeScript", "Fabric", "TurboModules", "JSI", "OneSignal", "CodePush", "IoT"],
    diagram: "superapp",
    links: [
      { label: "App Store", href: "https://apps.apple.com/br/app/unimed/id6741066760", external: true },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=br.coop.unimed.app&hl=pt_BR",
        external: true,
      },
    ],
  },
  {
    id: "release",
    company: "Magnetis",
    period: "2021 — 2022",
    title: "De dias para minutos: o release de uma biblioteca compartilhada",
    lede: "Quando um release é lento, todo time que depende dele também fica lento.",
    context:
      "A primeira gestora de investimentos digital do Brasil, onde uma biblioteca open source era usada por vários times.",
    problem:
      "Publicar essa biblioteca levava dias, o que atrasava o desenvolvimento de funcionalidades e gerava retrabalho entre os times.",
    role: "Melhorei e automatizei o processo de release. Também atuei na navegação unificada e em uma grande migração de base de usuários.",
    decisions: [
      "Automatizar o ciclo de release de ponta a ponta em vez de otimizar etapas manuais isoladas.",
      "Unificar a navegação para diferentes perfis de cliente com uma arquitetura focada em simplicidade.",
      "Planejar a migração da base de usuários para que acontecesse sem interrupções, algo crítico para a confiança em uma fintech.",
    ],
    outcome:
      "Os releases da biblioteca passaram de dias para minutos, acelerando as entregas de todos os times que a utilizavam.",
    metric: { value: "dias → min", label: "tempo de release" },
    stack: ["React Native", "TypeScript", "CI/CD", "Open source", "Tipagem de componentes"],
    diagram: "release",
  },
];

export const sideProjects: (Link & { description: string; stack: string })[] = [
  {
    label: "ContactApp",
    href: "https://github.com/albertozaranza/contact-app-expo",
    external: true,
    description: "App de gerenciamento de contatos e chat.",
    stack: "Expo · Firebase",
  },
  {
    label: "Coding Aracati",
    href: "https://codingaracati.github.io/landing-page",
    external: true,
    description: "Landing page de uma comunidade local de tecnologia.",
    stack: "Web",
  },
];

/* -------------------------------------------------------------------------- */
/* Approach                                                                    */
/* -------------------------------------------------------------------------- */

export type Discipline = {
  id: string;
  title: string;
  principle: string;
  body: string;
  evidence: string[];
  tools: string[];
};

export const disciplines: Discipline[] = [
  {
    id: "architecture",
    title: "Arquitetura Mobile",
    principle: "Estrutura que sobrevive ao crescimento.",
    body: "Fronteiras modulares, arquitetura de navegação intencional e a Nova Arquitetura onde ela compensa, para que a base de código absorva novos times e novos produtos sem perder velocidade.",
    evidence: [
      "Superapp que centraliza serviços de saúde na Yuni Digital",
      "Navegação unificada para múltiplos perfis de cliente na Magnetis",
      "Definição de arquitetura e de tecnologias como líder técnico na hooney+",
      "MVP arquitetado do zero até a publicação nas lojas na ioasys",
    ],
    tools: ["React Native", "TypeScript", "Expo", "React Navigation", "Fabric", "JSI"],
  },
  {
    id: "performance",
    title: "Engenharia de Performance",
    principle: "Primeiro medir, depois otimizar.",
    body: "Profiling antes de refatorar. Listas, imagens e bibliotecas críticas são onde apps mobile costumam perder frames, então é por onde eu começo.",
    evidence: [
      "Carregamento de imagens até 70% mais rápido com otimização via CMS",
      "Refatoração e migração de bibliotecas críticas sem incidentes",
      "Virtualização de listas com FlatList, SectionList e FlashList",
    ],
    tools: ["Reanimated", "FlashList", "React DevTools", "Firebase Performance"],
  },
  {
    id: "native",
    title: "Integrações Nativas",
    principle: "Conectar as plataformas sem vazar complexidade.",
    body: "À vontade dos dois lados da bridge: TurboModules, particularidades de iOS e Android, SDKs de terceiros e hardware, encapsulados em APIs que o time de produto consegue usar.",
    evidence: [
      "Liveness com o SDK da Unico, migrado de Bridge nativa para WebView na MB Labs",
      "Fluxos de gamificação conectados a dispositivos IoT",
      "Plataforma de notificações com OneSignal",
      "Trabalho nativo com Java/Kotlin desde o início da carreira",
    ],
    tools: ["TurboModules", "Android", "iOS", "Kotlin/Java", "OneSignal"],
  },
  {
    id: "design-systems",
    title: "Design Systems",
    principle: "Consistência é infraestrutura.",
    body: "Componentes tipados e documentados, compartilhados entre times, transformam decisões de design em padrão e fazem do caminho certo o caminho mais fácil.",
    evidence: [
      "Melhoria na tipagem de componentes para uma melhor experiência de desenvolvimento na Magnetis",
      "Padrões de código que elevaram produtividade e qualidade na Localiza&Co",
    ],
    tools: ["React", "Storybook", "TypeScript"],
  },
  {
    id: "observability",
    title: "Observabilidade",
    principle: "Saber antes que o usuário avise.",
    body: "Crash reporting, traces de performance e analytics de produto desde o primeiro dia, para que produção seja algo que se lê, não que se adivinha.",
    evidence: [
      "100% das falhas e integrações com APIs monitoradas na MB Labs",
      "100% dos releases monitorados com BugSnag e Datadog na Localiza&Co",
      "Eventos de Analytics no onboarding e na Home para apoiar decisões de produto",
    ],
    tools: ["BugSnag", "Datadog", "Sentry", "Firebase"],
  },
  {
    id: "delivery",
    title: "Entrega Contínua",
    principle: "Pequeno, frequente, reversível.",
    body: "Pipelines automatizados, rollouts graduais e atualizações over-the-air mantêm os releases tediosos, que é exatamente o objetivo.",
    evidence: [
      "Releases para mais de 8 milhões de usuários do superapp da Unimed em Android e iOS",
      "Releases semanais para mais de 100 mil usuários com zero incidentes",
      "Tempo de release de biblioteca reduzido de dias para minutos",
      "Distribuição automatizada com Fastlane e Firebase App Distribution",
    ],
    tools: ["Azure DevOps", "GitHub Actions", "Fastlane", "Firebase App Distribution", "CodePush", "Jest"],
  },
  {
    id: "ux",
    title: "Experiência do Usuário",
    principle: "Entregar, medir, refinar.",
    body: "Trato UX como responsabilidade de engenharia: hipóteses, experimentos e métricas, perto dos times de design e de negócio.",
    evidence: [
      "Nota nas lojas de 4,3 para 4,8 com mudanças de UX validadas por testes A/B",
      "Até 60% menos chamados de suporte após um fluxo self-service",
    ],
    tools: ["Testes A/B", "Analytics", "Experimentação"],
  },
];

/* -------------------------------------------------------------------------- */
/* Experience                                                                  */
/* -------------------------------------------------------------------------- */

export type Role = {
  company: string;
  role: string;
  start: string;
  end: string;
  /** True for the current position. */
  current?: boolean;
  domain: string;
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Yuni Digital",
    role: "Engenheiro React Native Sênior",
    start: "jul 2024",
    end: "atual",
    current: true,
    domain: "Saúde",
    summary: "Construindo o superapp da Unimed: uma experiência mobile para mais de 8 milhões de usuários.",
    highlights: [
      "Arquitetura com Fabric, TurboModules e JSI, e atualizações OTA via CodePush e hot-updater.",
      "Fluxos de gamificação conectados a dispositivos IoT.",
      "Estruturação das notificações com OneSignal e otimização do gerenciamento de arquivos.",
    ],
  },
  {
    company: "MB Labs",
    role: "Engenheiro React Native Sênior",
    start: "jun 2025",
    end: "nov 2026",
    domain: "E-commerce",
    summary:
      "Evolução de apps React Native com foco em arquitetura, integrações nativas, performance, observabilidade e qualidade das entregas.",
    highlights: [
      "Liveness (prova de vida) com o SDK da Unico, migrando a integração nativa via Bridge para WebView para simplificar a manutenção e ampliar a compatibilidade.",
      "Monitoramento ampliado para 100% das falhas e das integrações com APIs.",
      "Automação de versionamento e distribuição com Fastlane e Firebase App Distribution.",
      "Migração da Responsys para a Emarsys e eventos de Analytics em toda a jornada de onboarding e Home.",
    ],
  },
  {
    company: "hooney+",
    role: "Líder Técnico",
    start: "abr 2025",
    end: "dez 2025",
    domain: "Liderança técnica",
    summary: "Definição de arquitetura, escolha de tecnologias e organização de squads multidisciplinares.",
    highlights: [
      "Cultura de colaboração, ownership e melhoria contínua nos squads.",
      "Alinhamento entre tecnologia e negócio, com foco em qualidade, escalabilidade e impacto para o usuário.",
    ],
  },
  {
    company: "Localiza&Co",
    role: "Engenheiro React Native",
    start: "ago 2022",
    end: "mai 2024",
    domain: "Mobilidade",
    summary: "Evolução de um app mobile usado por mais de 100 mil usuários ativos.",
    highlights: [
      "Nota nas lojas de 4,3 para 4,8 após melhorias no fluxo de avaliação validadas por testes A/B.",
      "Fluxo de agendamento digital que reduziu os chamados de suporte em até 60%.",
      "Carregamento de imagens até 70% mais rápido e refatoração de bibliotecas críticas sem incidentes.",
      "Releases semanais, 100% monitorados com BugSnag e Datadog.",
    ],
  },
  {
    company: "Magnetis",
    role: "Engenheiro React Native",
    start: "jul 2021",
    end: "ago 2022",
    domain: "Fintech",
    summary: "A primeira gestora de investimentos digital do Brasil.",
    highlights: [
      "Ciclo de release de biblioteca open source reduzido de dias para minutos.",
      "Navegação unificada para diferentes perfis de cliente.",
      "Grande migração de base de usuários sem interrupções.",
    ],
  },
  {
    company: "ioasys",
    role: "Engenheiro React Native",
    start: "fev 2020",
    end: "jun 2021",
    domain: "Estúdio de produto",
    summary: "Transformei uma ideia de produto em um app funcional, da arquitetura à publicação nas lojas.",
    highlights: [
      "MVP construído do zero e validado com usuários reais.",
      "Escala para bases de 100 a 10.000 usuários com performance estável.",
    ],
  },
  {
    company: "IFCE",
    role: "Desenvolvedor Mobile",
    start: "jan 2018",
    end: "jan 2020",
    domain: "Setor público",
    summary: "Sistema de mapeamento geoespacial para apoiar políticas públicas orientadas por dados.",
    highlights: [
      "Mapeamento e análise de cerca de 100 estabelecimentos comerciais com Java/Kotlin.",
      "Otimização de um app com banco de dados limitado para cerca de 50 usuários simultâneos.",
    ],
  },
];

export const education = {
  degree: "Bacharelado em Ciência da Computação",
  school: "Instituto Federal do Ceará (IFCE)",
  period: "2015 — 2021",
};

export const navigation: Link[] = [
  { label: "Impacto", href: "#impact" },
  { label: "Trabalhos", href: "#work" },
  { label: "Abordagem", href: "#approach" },
  { label: "Experiência", href: "#experience" },
  { label: "Sobre", href: "#about" },
];
