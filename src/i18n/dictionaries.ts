export interface Dictionary {
  common: {
    downloadFree: string;
    downloadBtn: string;
  };
  navbar: {
    features: string;
    howItWorks: string;
    philosophy: string;
    technical: string;
    changelog: string;
    download: string;
    free: string;
  };
  themeToggle: {
    dark: string;
    light: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    livePreview: string;
    statusIdle: string;
    statusSpeaking: string;
    statusMute: string;
    micThreshold: string;
    buttonHold: string;
    buttonRelease: string;
    muteToggle: string;
    testInstruction: string;
    viewFeatures: string;
  };
  marquee: {
    ariaLabel: string;
  };
  scrolly: {
    eyebrow: string;
    title: string;
    desc: string;
    steps: { tag: string; title: string; desc: string; }[];
  };
  featureBento: {
    title: string;
    desc: string;
    cards: {
      fourStates: { title: string; desc: string; idle: string; speaking: string; blink: string; mute: string; autoSwitch: string; };
      audioEngine: { title: string; desc: string; };
      streamMode: { title: string; desc: string; greenScreen: string; transparent: string; hotkey: string; };
      animationSystem: { title: string; desc: string; speaking: string; idle: string; };
      animatedImages: { title: string; desc: string; apng: string; gif: string; png: string; note: string; };
      speakHold: { title: string; desc: string; speak: string; hold: string; note: string; };
      lightweight: { title: string; desc: string; low: string; balanced: string; high: string; note: string; };
      multiLanguage: { title: string; desc: string; others: string; };
      profileSystem: { title: string; desc: string; };
      modesUtils: { title: string; desc: string; hotkeys: string; autoStream: string; systemTray: string; lightDark: string; };
    };
  };
  howItWorks: {
    title: string;
    desc: string;
    steps: { title: string; desc: string; }[];
  };
  philosophy: {
    titlePrefix: string;
    titleHighlight: string;
    desc: string;
    notBuiltTitle: string;
    notBuiltItems: string[];
    prioritizedTitle: string;
    prioritizedItems: string[];
  };
  technicalHighlights: {
    badge: string;
    title: string;
    desc: string;
    items: { title: string; desc: string; }[];
  };
  systemSecurity: {
    title: string;
    desc: string;
    requirementsTitle: string;
    requirements: { k: string; v: string; }[];
    stackTitle: string;
    stack: { k: string; v: string; }[];
    securityTitle: string;
    security: { k: string; v: string; }[];
    micWarning: string;
  };
  howToUse: {
    eyebrow: string;
    title: string;
    desc: string;
    stepLabel: string;
    steps: { title: string; description: string; }[];
    presetTitle: string;
    presetDesc: string;
    settingsBtn: string;
  };
  downloadCTA: {
    title: string;
    desc: string;
    latest: string;
    allReleases: string;
    itchBtn: string;
    recommended: string;
    windows: { name: string; req: string; installer: string; hint: string; };
    mac: { name: string; req: string; arm: string; intel: string; hint: string; quarantine: string; };
    linux: { name: string; req: string; appimage: string; deb: string; hint: string; };
    optional: string;
    recommendedSettingsBtn: string;
    recommendedSettingsDesc: string;
    updatesTitle: string;
    updatesDesc: string;
  };
  changelog: {
    eyebrow: string;
    title: string;
    desc: string;
    viewChangelog: string;
    latest: string;
    loading: string;
    published: string;
    linkRelease: string;
  };
  footer: {
    desc: string;
    navTitle: string;
    communityTitle: string;
    rights: string;
    language: string;
    license: string;
    nav: { label: string; }[];
  };
}
