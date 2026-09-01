import { Dictionary } from "./dictionaries";

export const id: Dictionary = {
  common: {
    downloadFree: "Unduh Gratis",
    downloadBtn: "Unduh Gratis",
  },
  navbar: {
    features: "Fitur",
    howItWorks: "Cara Kerja",
    philosophy: "Tentang",
    technical: "Teknis",
    download: "Unduh",
    free: "Gratis",
  },
  themeToggle: {
    dark: "Aktifkan mode gelap",
    light: "Aktifkan mode terang",
  },
  hero: {
    badge: "PTube v4.0.0 · Aplikasi PNGTuber Desktop untuk Windows",
    titlePrefix: "Gunakan avatar PNG secara",
    titleHighlight: "real-time",
    titleSuffix: " berdasarkan suara Anda.",
    description: "Aplikasi PNGTuber desktop yang ringan untuk Windows. Avatar PNG Anda bergerak secara real-time merespons suara mikrofon, dengan penggunaan RAM di bawah 100MB dan stabil pada 60 FPS.",
    livePreview: "PTube · Pratinjau Langsung",
    statusIdle: "Idle",
    statusSpeaking: "Berbicara",
    statusMute: "Mute",
    micThreshold: "Sensitivitas mikrofon",
    buttonHold: "Tahan untuk berbicara",
    buttonRelease: "Lepaskan...",
    testInstruction: "Tahan tombol mikrofon untuk menguji. Avatar Anda akan merespons suara secara langsung.",
    viewFeatures: "Lihat Fitur",
  },
  marquee: {
    ariaLabel: "Preset animasi",
  },
  featureBento: {
    title: "Fitur lengkap untuk avatar Anda",
    desc: "Dirancang khusus untuk kebutuhan streaming tanpa membebani kinerja PC Anda.",
    cards: {
      fourStates: {
        title: "4 Status Avatar",
        desc: "Status Idle, Speaking, Blink, dan Mute dengan dukungan gambar terpisah yang beralih secara otomatis.",
        idle: "Pratinjau avatar idle",
        speaking: "Pratinjau avatar berbicara",
        blink: "Blink",
        mute: "Mute",
        autoSwitch: "Berubah otomatis berdasarkan suara",
      },
      audioEngine: {
        title: "Pemrosesan Audio",
        desc: "Pemrosesan audio presisi tinggi secara real-time untuk mengurangi kebisingan.",
      },
      streamMode: {
        title: "Mode Siaran",
        desc: "Beralih antara mode Editor dan Stream dengan mudah. Mendukung kanvas transparan tanpa bingkai.",
        greenScreen: "Layar hijau didukung",
        clickThrough: "Click-through didukung",
      },
      animationSystem: {
        title: "Sistem Animasi",
        desc: "Menyediakan berbagai preset animasi berbasis fisika yang dapat disesuaikan.",
        speaking: "Berbicara",
        idle: "Idle",
      },
      lightweight: {
        title: "Kinerja Ringan",
        desc: "Dilengkapi mode performa untuk pengoptimalan sumber daya secara otomatis.",
        ram: "Penggunaan RAM",
        cpu: "CPU Idle",
        anim: "Animasi",
      },
      multiLanguage: {
        title: "Dukungan Bahasa",
        desc: "Tersedia dalam 31 bahasa, dapat diubah secara instan.",
        others: "+25 lainnya",
      },
      profileSystem: {
        title: "Sistem Profil",
        desc: "Buat dan kelola banyak profil. Mendukung fungsi ekspor/impor berkas .ptube.",
      },
      modesUtils: {
        title: "Mode & Utilitas",
        desc: "Kontrol penuh saat siaran langsung dengan penyimpanan pengaturan otomatis.",
        hotkeys: "Pintasan keyboard global tanpa konflik",
        clickThrough: "Mode Click-through",
        systemTray: "Sembunyikan ke System Tray",
        lightDark: "Mode Terang dan Gelap",
      },
    },
  },
  howItWorks: {
    title: "Penggunaan yang mudah dan cepat",
    desc: "Proses pengaturan dari instalasi hingga siaran langsung membutuhkan waktu kurang dari sepuluh menit.",
    steps: [
      { title: "Pilih Avatar", desc: "Pilih gambar avatar PNG Anda, tambahkan preset animasi, dan konfigurasikan pengaturan." },
      { title: "Aktifkan Mikrofon", desc: "Aktifkan mikrofon dan atur sensitivitas suara. Avatar akan mulai merespons suara Anda." },
      { title: "Mulai Siaran", desc: "Gunakan piranti lunak siaran dengan mode transparan atau layar hijau untuk memulai siaran." },
    ],
  },
  philosophy: {
    titlePrefix: "Ringan dan",
    titleHighlight: "efisien.",
    desc: "Setiap fitur dirancang dengan fokus pada efisiensi, memastikan agar performa perangkat Anda tidak terbebani.",
    notBuiltTitle: "Fitur yang tidak disertakan",
    notBuiltItems: [
      "Pelacakan wajah (Face tracking)",
      "Webcam AI",
      "Integrasi OBS yang rumit",
      "Multiplayer / fungsionalitas jaringan",
      "Plugin VST",
      "Layanan komputasi awan",
      "Layanan latar belakang (Background services)",
    ],
    prioritizedTitle: "Fokus utama pengembangan",
    prioritizedItems: [
      "Performa tingkat tinggi",
      "Pemakaian memori yang sangat rendah",
      "Penggunaan yang mudah",
      "Pengalaman aplikasi desktop yang stabil",
    ],
  },
  technicalHighlights: {
    badge: "Informasi Teknis",
    title: "Pengoptimalan Teknis Tingkat Lanjut",
    desc: "Pendekatan arsitektur perangkat lunak untuk menjaga stabilitas dan efisiensi sistem.",
    items: [
      { title: "Rendering GPU-Accelerated", desc: "Akselerasi GPU tingkat lanjut untuk rasterisasi dan hardware overlays, menjaga stabilitas 60 FPS." },
      { title: "Engine Animasi Real-Time", desc: "Implementasi requestAnimationFrame untuk fisika sin/cos guna memastikan responsivitas audio pada 60 FPS." },
      { title: "Preloading Anti-Flicker", desc: "Semua state avatar dimuat di memori sebelum transisi untuk pergantian instan tanpa layar berkedip." },
      { title: "Manajemen Memori Sistem", desc: "Penerapan mode performa untuk menjaga penggunaan memori agar tetap efisien dalam penggunaan jangka panjang." },
      { title: "LRU Cache i18n", desc: "Memori hanya menyimpan bahasa yang baru digunakan untuk meminimalkan beban sistem." },
      { title: "Protokol Lokal Terisolasi", desc: "Isolasi konteks yang ketat memastikan gambar dimuat melalui protokol khusus tanpa akses berkas sistem secara langsung." },
    ],
  },
  systemSecurity: {
    title: "Aman dan dioptimalkan untuk performa",
    desc: "Standar keamanan tinggi dengan kebutuhan sistem yang efisien untuk melindungi privasi pengguna.",
    requirementsTitle: "Persyaratan Sistem",
    requirements: [
      { k: "OS", v: "Windows 10/11 (x64)" },
      { k: "CPU", v: "Intel Celeron / AMD 3020e+" },
      { k: "RAM", v: "2 GB (Aplikasi < 80MB)" },
      { k: "Grafis", v: "Integrated GPU" },
      { k: "Mikrofon", v: "Diperlukan untuk aktivasi suara" },
    ],
    stackTitle: "Tumpukan Teknologi",
    stack: [
      { k: "Core", v: "Electron v31+ (Node.js & Chromium)" },
      { k: "Frontend", v: "HTML5 · CSS3 · Vanilla JS ES6+" },
      { k: "Audio", v: "Web Audio API (AnalyserNode, BiquadFilterNode)" },
      { k: "Catatan", v: "Tanpa kerangka kerja (framework) antarmuka yang membebani" },
    ],
    securityTitle: "Keamanan Sistem",
    security: [
      { k: "Lokal Sepenuhnya", v: "Tidak menggunakan skrip jarak jauh dari pihak ketiga" },
      { k: "Anti-XSS", v: "Navigasi tak teridentifikasi otomatis diblokir" },
      { k: "Izin Terbatas", v: "Akses hanya dibatasi pada media dan mikrofon" },
    ],
    micWarning: "Aplikasi hanya memerlukan izin akses mikrofon untuk aktivasi suara. Data privasi lainnya tetap aman.",
  },
  howToUse: {
  eyebrow: "Memulai",
  title: "Cara Menggunakan PTube",
  desc: "Ikuti langkah berikut untuk memasang PTube dan menyiapkannya sesuai kebutuhan Anda.",
  stepLabel: "LANGKAH",
  steps: [
    {
      title: "Pasang PTube",
      description:
        "Unduh PTube-Setup.exe dan selesaikan proses instalasi pada Windows.",
    },
    {
      title: "Jalankan PTube",
      description:
        "Buka PTube, kemudian atur avatar dan mikrofon yang akan digunakan.",
    },
    {
      title: "Konfigurasi Pengaturan",
      description:
        "Sesuaikan sensitivitas mikrofon, perilaku avatar, dan pengaturan lainnya.",
    },
    {
      title: "Mulai Menggunakan PTube",
      description:
        "Setelah konfigurasi selesai, PTube siap digunakan dengan setup streaming Anda.",
    },
  ],
  presetTitle: "Pengaturan Rekomendasi",
  presetDesc:
    "PTube-Setting-Recommend.ptube adalah preset konfigurasi opsional yang berisi pengaturan yang direkomendasikan untuk penggunaan yang seimbang.",
    settingsBtn: "Download Recommended Settings",
},
  downloadCTA: {
    badge: "v4.0.0 tersedia sekarang",
    titlePrefix: "Jadikan avatar PNG Anda",
    titleHighlight: "lebih hidup.",
    desc: "Aplikasi PNGTuber gratis dan efisien untuk sistem operasi Windows. Unduh sekarang untuk meningkatkan kualitas presentasi Anda.",
    windowsBtn: "Windows 10/11 (x64)",
    reqBtn: "Lihat Persyaratan",
    settingsBtn: "Download Recommended Settings (.ptube)",
    footerText: "PTube v4.0.0 · Gratis · Tanpa Akun · Tanpa Plugin Tambahan · Windows 10/11 (x64)",
  },
  footer: {
    desc: "Aplikasi PNGTuber desktop ringan untuk performa streaming yang efisien dan stabil.",
    navTitle: "Navigasi",
    communityTitle: "Komunitas",
    rights: "© 2025-2026 RzkyyDev · Seluruh Hak Cipta Dilindungi",
    language: "Bahasa Indonesia",
    license: "Lisensi Proprietary",
    nav: [
      { label: "Fitur" },
      { label: "Cara Kerja" },
      { label: "Tentang" },
      { label: "Teknis" },
      { label: "Persyaratan" },
      { label: "Unduh" },
    ],
  },
};
