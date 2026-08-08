<p align="center">
  <img src="https://raw.githubusercontent.com/rzkyydev/rzkyydev/refs/heads/main/db/icon%20(1).png" alt="PTube Logo" width="128">
</p>

<h1 align="center">PTube (v4.0.0)</h1>

<p align="center">
  Aplikasi <strong>PNGTuber Virtual Avatar Studio</strong> yang modern, sangat ringan, dan kaya fitur. Dirancang khusus untuk kecepatan, efisiensi tinggi, dan kesederhanaan.
</p>

---

## 🖼️ Preview Avatar

<p align="center">
  <img src="https://raw.githubusercontent.com/rzkyydev/rzkyydev/refs/heads/main/db/Picsart_26-07-14_14-39-39-821.png" alt="Preview Avatar Speaking" width="360">
  <img src="https://raw.githubusercontent.com/rzkyydev/rzkyydev/refs/heads/main/db/Picsart_26-07-14_14-39-19-407.png" alt="Preview Avatar Idle" width="360">
</p>

<p align="center"><em>State Speaking dan Idle — beralih otomatis mengikuti suara mikrofon.</em></p>

---

## 📖 Deskripsi Proyek

PTube adalah aplikasi desktop PNGTuber native Windows yang dioptimalkan secara ekstrem untuk PC berspesifikasi rendah maupun *high-end*. Dibangun menggunakan teknologi web standar (Vanilla JavaScript, HTML5, CSS3) pada lingkungan Electron, PTube menawarkan animasi 60 FPS yang sangat mulus tanpa memberatkan sistem Anda. Aplikasi ini ditargetkan untuk *streamer*, *content creator*, maupun pengguna kasual yang menggunakan OBS Studio dan membutuhkan *overlay* avatar interaktif yang responsif terhadap suara tanpa mengorbankan performa *game* yang sedang dimainkan. PTube mampu menekan penggunaan RAM di bawah **100MB** dan pemakaian CPU hampir **0%** saat *idle*.

---

## ✨ Fitur-Fitur Lengkap

### 🎨 Antarmuka & Visual (UI/UX)

- **Dark Glassmorphism Design**: Desain UI transparan bergaya kaca modern (terinspirasi dari Discord, Arc Browser, dan macOS) dengan *color palette* Rose Pink/Berry.
- **Light / Dark Mode**: Pilihan tema Terang dan Gelap yang bisa diubah kapan saja.
- **Grid Preview Stage**: Latar belakang *checkerboard* pada Editor untuk memudahkan melihat transparansi avatar.
- **Custom Stage Color**: Ubah warna *background* sesuai keinginan (misalnya hijau terang untuk *Chroma Key/Green Screen* di OBS).

### 🎙️ Engine Audio & Mikrofon Canggih

PTube tidak hanya menangkap suara, tetapi memprosesnya secara *real-time* layaknya *Digital Audio Workstation* (DAW) ringan:

- **Analisis Volume RMS**: Menggunakan Web Audio API untuk merespons suara secara presisi.
- **Highpass & Lowpass Filters**: Filter perangkat keras (*BiquadFilterNode*) aktif secara otomatis untuk memotong suara *rumble/hum* (di bawah 85Hz) dan *hiss* bising (di atas 7500Hz).
- **Noise Gate & Threshold**: Konfigurasi batas volume minimal agar suara ketikan *keyboard* atau kipas angin tidak menggerakkan avatar.
- **Attack & Release Smoothing**: Atur seberapa cepat avatar merespons suara (Attack) dan kembali diam setelah Anda berhenti bicara (Release).
- **Pengurangan Kebisingan (Noise Reduction)**: Algoritma *Noise Floor Estimation* adaptif untuk membedakan suara manusia dan *background noise*.

### 🏃 Efek Animasi Dinamis (GPU-Accelerated)

Berbagai gaya animasi untuk menghidupkan karakter Anda:

- **Speaking Effects**: *Bounce, Jump, Shake, Wobble, Pulse, Spin Jump, Side Hop, Cyber Glitch, Stationary*.
- **Idle Effects (Saat Diam)**: *Float/Breathe, Pulse, Sway Pendulum, Gentle Bounce, Slight Spin*.
- **Eye Blinking**: Animasi berkedip acak yang sangat mulus berdasarkan interval *delay* alami manusia.

### 🎭 Manajemen Profil & Avatar

- **4 State Avatar**: Mendukung gambar terpisah untuk *Idle*, *Speaking*, *Blink*, dan *Mute*.
- **Multiple Profiles**: Buat, duplikasi, ubah nama, atau hapus *preset* avatar tanpa batas. Sangat cocok bagi Anda yang memiliki banyak persona.
- **Import/Export Profile**: Bagikan konfigurasi avatar (termasuk *file* gambarnya) kepada teman Anda dalam format *file* khusus `.ptube`.
- **Drag-and-Drop**: Cukup seret gambar avatar Anda ke antarmuka aplikasi.

### ⚙️ Mode & Utilitas Windows

- **Editor Mode & Stream Mode**: Peralihan satu tombol. Mode Stream membuang semua antarmuka (*frameless*) dan latar belakang, menjadikannya kanvas transparan utuh yang siap direkam.
- **Click-Through (Pass Mouse)**: Saat Mode Stream aktif, avatar tidak akan menghalangi klik *mouse* Anda saat bermain *game*.
- **Global Hotkeys**: Atur pintasan (*shortcut*) *keyboard* khusus untuk *Stream Mode*, *Click-Through*, dan *Mute Mic*. Fitur anti-konflik mendeteksi jika tombol yang sama digunakan dua kali.
- **System Tray Integration**: PTube dapat disembunyikan (*hide*) secara penuh ke System Tray di sudut kanan bawah Windows.
- **Auto-Saving**: Semua perubahan langsung tersimpan otomatis secara instan.

### 🌍 Dukungan Multi-Bahasa (i18n)

Mendukung lebih dari **30 Bahasa** di dunia, termasuk *English, Bahasa Indonesia, Japanese, Korean, Spanish, French*, dan lainnya, dengan transisi bahasa tanpa *loading*.

---

## 🧠 Keunggulan Teknis & "Special Code" (Technical Highlights)

Proyek ini mengandung teknik *coding* tingkat lanjut untuk mendorong performa *web app* ke batas maksimal:

### 1. Eksekusi GPU-Accelerated & Chrome Switches (`main.js`)

Electron diluncurkan dengan belasan *command line switches* agresif yang di-tuning khusus untuk *overlay streaming*:

- `--enable-gpu-rasterization` & `--enable-hardware-overlays`: Memaksa *rendering* dialihkan ke GPU.
- `--disable-background-timer-throttling` dan `--disable-backgrounding-occluded-windows`: **Sangat krusial** agar animasi avatar tidak berhenti/patah-patah saat PTube berjalan di latar belakang (saat Anda membuka *game* layar penuh).
- `--max-old-space-size=256` dan `--expose-gc`: Membatasi alokasi RAM V8 Engine.

### 2. Caching & Preloading Bebas Flicker (`js/avatar.js`)

*Class* `AvatarManager` memuat gambar secara asinkron (*Preloading*) dan menyimpannya di memori sebelum melakukan transisi *state* (idle, speaking, blink, mute). Hal ini memastikan pergantian ekspresi avatar terjadi secara instan (0 milidetik *delay*) tanpa efek *flicker* (layar berkedip) yang merupakan masalah klasik pada aplikasi berbasis web biasa.

### 3. Engine Animasi Real-Time (`js/animation.js`)

Animasi tidak menggunakan `keyframes` CSS biasa. Aplikasi memanfaatkan fungsi JavaScript `requestAnimationFrame` untuk mengkalkulasi fisika pergerakan secara matematis (rumus *sin* dan *cos* pada *bounce/sway/shake*), lalu mengaplikasikannya via CSS `transform: translate3d(...) rotate(...) scale(...)`. Penggunaan `translate3d` memaksa browser melakukan *Hardware Acceleration*, merespons *delay* audio mikrofon dengan *frame rate* stabil 60 FPS.

### 4. Manajemen Memori Agresif (Manual Garbage Collection) (`js/utils.js` & `js/app.js`)

Terdapat mode khusus **Performance Mode (< 100MB RAM)**. Jika mode ini aktif, sistem akan secara periodik mengecek pemakaian memori. Jika RAM naik di atas 85MB, fungsi `window.v8gc()` atau `global.gc()` (Garbage Collector Manual) akan dipanggil untuk membersihkan sisa memori kotor, mencegah kebocoran (*memory leak*) walau aplikasi dipakai berhari-hari.

### 5. LRU Cache pada Lokalisasi / i18n (`js/i18n.js`)

Sistem terjemahan bahasa (*internationalization*) dibuat dengan struktur **LRU (Least Recently Used) Cache**. Hanya 3 bahasa terakhir yang disimpan di RAM. Jika Anda mengubah bahasa, bahasa lama yang sudah tidak dipakai akan secara otomatis dihapus dari memori dan *DOM script tag*-nya dihancurkan untuk membebaskan ruang (*Garbage Collection assist*).

### 6. Custom Protocol `ptube://`

Untuk keamanan maksimum, *Context Isolation* diaktifkan dan `nodeIntegration` dimatikan. Untuk memuat gambar pengguna dari PC, PTube mendaftarkan custom protocol `ptube://` untuk melewati batasan CSP (*Content Security Policy*) secara sah dan aman tanpa membuka akses *file system* Node.js secara liar di antarmuka depan.

---

## 💻 Persyaratan Sistem

- **OS:** Windows 10/11 (x64)
- **Prosesor:** Intel Celeron / AMD 3020e atau lebih tinggi (Aplikasi ini dibuat khusus untuk PC Kentang!)
- **Memori:** RAM 2 GB (PTube normalnya memakai < 80 MB)
- **Grafik:** Integrated GPU (Intel HD/UHD/Iris) atau lebih baik
- **Mikrofon:** Wajib ada untuk aktivasi suara

---

## 🛠️ Stack Teknologi

- **Core:** Electron Framework v31+ (Node.js & Chromium)
- **UI & Frontend:** HTML5, CSS3 (Pure Vanilla), JavaScript ES6+ (Tanpa React/Vue agar RAM tetap mungil).
- **Audio Processing:** Web Audio API (`MediaStream`, `AnalyserNode`, `BiquadFilterNode`).

---

## 🔒 Keamanan (Security)

Banyak streamer sangat sensitif terhadap ekstensi yang meminta banyak izin (*permissions*). PTube mengedepankan keamanan berlapis:

- **No Remote Scripts:** Semua kode berjalan lokal 100%. Tidak ada unduhan *script* dari pihak ketiga saat aplikasi berjalan.
- **Untrusted Navigation Blocked:** Aplikasi menolak navigasi otomatis atau *pop-up window* yang tidak dikenali, melindungi dari eksploit XSS.
- **Strict Media Permission:** Akses sistem dibatasi hanya untuk media/mikrofon (`audioCapture`).

---

## 📄 Lisensi & Hak Cipta

Berlisensi di bawah **Proprietary License**. Dilarang menyalin, memodifikasi, atau mendistribusikan ulang kode tanpa izin resmi. (Silakan lihat file `LICENSE` untuk rincian lebih lanjut).

Copyright © 2025-2026 RzkyyDev. All Rights Reserved.
