import { Dictionary } from "./dictionaries";

export const en: Dictionary = {
  common: {
    downloadFree: "Download for Free",
    downloadBtn: "Download for Free",
  },
  navbar: {
    features: "Features",
    howItWorks: "How It Works",
    philosophy: "About",
    technical: "Technical",
    download: "Download",
    free: "Free",
  },
  themeToggle: {
    dark: "Enable dark mode",
    light: "Enable light mode",
  },
  hero: {
    badge: "PTube v4.0.0 · Desktop PNGTuber Application for Windows",
    titlePrefix: "Animate your PNG avatar",
    titleHighlight: "in real-time",
    titleSuffix: " based on your voice.",
    description: "A lightweight desktop PNGTuber for Windows. Your PNG avatar responds in real-time to your microphone input, maintaining under 100MB of RAM usage and a stable 60 FPS.",
    livePreview: "PTube · Live Preview",
    statusIdle: "Idle",
    statusSpeaking: "Speaking",
    statusMute: "Muted",
    micThreshold: "Microphone threshold",
    buttonHold: "Hold to speak",
    buttonRelease: "Release...",
    testInstruction: "Hold the microphone button to test. Your avatar will immediately respond to your voice.",
    viewFeatures: "View Features",
  },
  marquee: {
    ariaLabel: "Animation presets",
  },
  featureBento: {
    title: "Comprehensive features for your avatar",
    desc: "Designed specifically for streaming needs without compromising system performance.",
    cards: {
      fourStates: {
        title: "4 Avatar States",
        desc: "Supports Idle, Speaking, Blink, and Mute states with automatic image transitions.",
        idle: "Idle avatar preview",
        speaking: "Speaking avatar preview",
        blink: "Blink",
        mute: "Muted",
        autoSwitch: "Changes automatically based on audio input",
      },
      audioEngine: {
        title: "Audio Processing",
        desc: "High-precision, real-time audio processing to minimize background noise.",
      },
      streamMode: {
        title: "Broadcast Mode",
        desc: "Seamlessly switch between Editor and Stream mode. Supports frameless transparent canvases.",
        greenScreen: "Green screen supported",
        clickThrough: "Click-through supported",
      },
      animationSystem: {
        title: "Animation System",
        desc: "Provides a variety of customizable physics-based animation presets.",
        speaking: "Speaking",
        idle: "Idle",
      },
      lightweight: {
        title: "Optimized Performance",
        desc: "Includes a performance mode for automatic resource optimization.",
        ram: "RAM Usage",
        cpu: "CPU Idle",
        anim: "Animation",
      },
      multiLanguage: {
        title: "Language Support",
        desc: "Available in 31 languages, changeable instantly.",
        others: "+25 others",
      },
      profileSystem: {
        title: "Profile System",
        desc: "Create and manage multiple profiles. Supports importing and exporting .ptube files.",
      },
      modesUtils: {
        title: "Modes & Utilities",
        desc: "Full control during live broadcasts with automatic setting synchronization.",
        hotkeys: "Conflict-free global keyboard shortcuts",
        clickThrough: "Click-through Mode",
        systemTray: "Hide to System Tray",
        lightDark: "Light and Dark Mode",
      },
    },
  },
  howItWorks: {
    title: "Quick and easy setup process",
    desc: "The setup process from installation to broadcasting takes less than ten minutes.",
    steps: [
      { title: "Select Avatar", desc: "Select your PNG avatar image, apply animation presets, and configure settings." },
      { title: "Enable Microphone", desc: "Enable your microphone and configure sensitivity. Your avatar will begin responding to your voice." },
      { title: "Start Broadcasting", desc: "Launch broadcasting software using a transparent or green screen capture to begin broadcasting." },
    ],
  },
  philosophy: {
    titlePrefix: "Lightweight and",
    titleHighlight: "efficient.",
    desc: "Every feature is designed with efficiency in mind, ensuring your system performance is never compromised.",
    notBuiltTitle: "Features not included",
    notBuiltItems: [
      "Face tracking",
      "Webcam AI processing",
      "Complex OBS integration",
      "Multiplayer / network functionality",
      "VST Plugins",
      "Cloud computing services",
      "Background services",
    ],
    prioritizedTitle: "Primary development focus",
    prioritizedItems: [
      "High-level performance",
      "Extremely low memory usage",
      "Ease of use",
      "Stable desktop application experience",
    ],
  },
  technicalHighlights: {
    badge: "Technical Information",
    title: "Advanced Technical Optimization",
    desc: "Software architecture approaches that ensure system stability and efficiency.",
    items: [
      { title: "GPU-Accelerated Rendering", desc: "Advanced GPU acceleration for rasterization and hardware overlays, maintaining a stable 60 FPS." },
      { title: "Real-Time Animation Engine", desc: "Implementation of requestAnimationFrame for sin/cos physics to ensure audio responsiveness at 60 FPS." },
      { title: "Anti-Flicker Preloading", desc: "All avatar states are loaded into memory prior to transition for instant switching without screen flicker." },
      { title: "System Memory Management", desc: "Implements performance modes to maintain efficient memory usage during extended periods." },
      { title: "LRU i18n Cache", desc: "Memory retains only recently used languages to minimize system load." },
      { title: "Isolated Local Protocol", desc: "Strict context isolation ensures images are loaded via a custom protocol without direct file system access." },
    ],
  },
  systemSecurity: {
    title: "Secure and performance-optimized",
    desc: "High security standards with efficient system requirements to protect user privacy.",
    requirementsTitle: "System Requirements",
    requirements: [
      { k: "OS", v: "Windows 10/11 (x64)" },
      { k: "CPU", v: "Intel Celeron / AMD 3020e+" },
      { k: "RAM", v: "2 GB (Application is < 80MB)" },
      { k: "Graphics", v: "Integrated GPU" },
      { k: "Microphone", v: "Required for voice activation" },
    ],
    stackTitle: "Technology Stack",
    stack: [
      { k: "Core", v: "Electron v31+ (Node.js & Chromium)" },
      { k: "Frontend", v: "HTML5 · CSS3 · Vanilla JS ES6+" },
      { k: "Audio", v: "Web Audio API (AnalyserNode, BiquadFilterNode)" },
      { k: "Notes", v: "No heavy interface frameworks utilized" },
    ],
    securityTitle: "System Security",
    security: [
      { k: "Fully Local", v: "No third-party remote scripts are used" },
      { k: "Anti-XSS", v: "Unidentified navigation is automatically blocked" },
      { k: "Restricted Permissions", v: "Access is limited strictly to media and microphone" },
    ],
    micWarning: "The application only requests microphone access for voice activation. Other privacy data remains secure.",
  },
howToUse: {
  eyebrow: "Getting Started",
  title: "How to Use PTube",
  desc: "Follow these steps to install PTube and configure it for your setup.",
  stepLabel: "STEP",
  steps: [
    {
      title: "Install PTube",
      description:
        "Download PTube-Setup.exe and complete the Windows installation.",
    },
    {
      title: "Launch PTube",
      description:
        "Open PTube and configure your avatar and microphone settings.",
    },
    {
      title: "Configure Your Settings",
      description:
        "Adjust microphone sensitivity, avatar behavior, and other available options.",
    },
    {
      title: "Start Using PTube",
      description:
        "Once configured, PTube is ready to use with your preferred streaming setup.",
    },
  ],
  presetTitle: "Recommended Settings",
  presetDesc:
    "PTube-Setting-Recommend.ptube is an optional configuration preset containing recommended settings for a balanced experience.",
    settingsBtn: "Download Recommended Settings",
},
  downloadCTA: {
    badge: "v4.0.0 available now",
    titlePrefix: "Bring your PNG avatar",
    titleHighlight: "to life.",
    desc: "A free and efficient PNGTuber application for Windows operating systems. Download now to enhance your presentation quality.",
    windowsBtn: "Windows 10/11 (x64)",
    reqBtn: "View Requirements",
    settingsBtn: "Download Recommended Settings (.ptube)",
    footerText: "PTube v4.0.0 · Free · No Account Required · No Plugins Required · Windows 10/11 (x64)",
  },
  footer: {
    desc: "A lightweight desktop PNGTuber application for efficient and stable streaming performance.",
    navTitle: "Navigation",
    communityTitle: "Community",
    rights: "© 2025-2026 RzkyyDev · All Rights Reserved",
    language: "English",
    license: "Proprietary License",
    nav: [
      { label: "Features" },
      { label: "How It Works" },
      { label: "About" },
      { label: "Technical" },
      { label: "Requirements" },
      { label: "Download" },
    ],
  },
};
