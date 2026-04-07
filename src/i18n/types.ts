export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  sidebar: {
    title: string;
    subtitle: string;
    progress: string;
    resetProgress: string;
    lightMode: string;
    darkMode: string;
  };
  home: {
    badge: string;
    heading: string;
    officialTag: string;
    description: string;
    description2: string;
    description3: string;
    startLearning: string;
    whatYouLearn: string;
    chaptersSubtitle: string;
    phasePrefix: string;
    coreFormula: string;
    formulaDescription: string;
    features: { icon: string; title: string; desc: string }[];
  };
  chapter: {
    prefix: string;
    suffix: string;
    notFound: string;
    metaSuffix: string;
    backHome: string;
    analogyDefault: string;
    keyConcept: string;
    comparisonLabel: string;
  };
  quiz: {
    title: string;
    retry: string;
    correct: string;
    incorrect: string;
  };
  agentLoop: {
    title: string;
    stepPrefix: string;
    stepSuffix: string;
    prev: string;
    next: string;
    steps: { label: string; description: string }[];
    boxes: string[];
  };
  toolExplorer: {
    title: string;
    searchPlaceholder: string;
    readOnly: string;
    noResults: string;
    allCategory: string;
    categories: Record<string, string>;
    tools: { name: string; category: string; description: string }[];
  };
  permissionSim: {
    title: string;
    modes: Record<string, string>;
    modeDescriptions: Record<string, string>;
    statuses: {
      autoPass: string;
      allowed: string;
      blocked: string;
      needConfirm: string;
      needConfirmWarn: string;
    };
    actions: { name: string; icon: string }[];
  };
  architecture: {
    title: string;
    nodes: { id: string; label: string; description: string }[];
  };
  phases: Record<string, string>;
}
