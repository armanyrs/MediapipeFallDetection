# SPYDER - Smart Pose sYstem for Detection & Exercise Rehab

**Kelompok 4 – MediaPipe Pose Detection Project**

Proyek web berbasis MediaPipe untuk deteksi pose real-time dengan fitur:

- **Fall Detection**: Deteksi jatuh, sleeping (ROI), dan gesture bantuan
- **Rehab Medic**: 7 latihan rehabilitasi medis + Rehab Mode
- **Smart Notifications**: Telegram bot & Tuya/Bardi smart device integration
- **Authentication**: Firebase login dengan mode tamu
- **Serverless**: 100% client-side, powered by Cloudflare Workers

---

## 👥 Tim Pengembang

**Politeknik Elektronika Negeri Surabaya (PENS)**  
Mata Kuliah: Workshop Kecerdasan Buatan | Semester 5  
Jurusan: Teknologi Rekayasa Multimedia (TRM)  
Dosen Pengampu: Sritrusta Sukaridhoto, ST., Ph.D.

**Kelompok 4:**

- Ahmad Nur Fuady (5323600005)
- Armany Rizqullah Saputra (5323600029)
- Rafif Zaidan Nuhaa (5323600013)
- M. Bayu Iskandar (5323600025)

---

## 🎬 Demo

- **Live Demo:** https://mediapipefallandhelpdetection.netlify.app
- **Demo Video:** https://youtu.be/dThCuthprNU  
  _(Trigger siren Bardi saat jatuh)_

---

## ✨ Fitur Utama

### 1. 🚨 Fall Detection

- Deteksi jatuh real-time menggunakan MediaPipe Pose Landmarker
- Sleeping detection dengan ROI (Region of Interest) area kasur
- HELP gesture detection:
  - Arms crossed (tangan menyilang di dada)
  - One-hand raise-and-hold (mengangkat tangan meminta bantuan)
- Notifikasi otomatis via Telegram
- Trigger alarm Bardi/Tuya smart device

### 2. 🏋️ Rehab Medic - 7 Latihan Rehabilitasi

1. Bicep Curl
2. Knee Extension
3. Front Raise
4. Shoulder Flexion
5. Sit to Stand
6. Shoulder Abduction
7. Hip Abduction

**Plus Rehab Mode:** Program latihan terstruktur dengan tracking progress otomatis!

### 3. 🔔 Smart Notifications

- Telegram bot integration
- Bardi/Tuya smart siren integration
- Cooldown system untuk mencegah spam notifikasi

### 4. 🔐 Authentication & History

- Firebase login dengan Google Sign-In
- Mode tamu (data tersimpan lokal di browser)
- Riwayat latihan tersimpan di cloud (Firebase Firestore) atau localStorage
- Form accuracy tracking dan mean error analysis

---

## 🚀 Cara Menjalankan

### Super Mudah - Tanpa Instalasi!

**SPYDER adalah 100% serverless - tidak butuh npm, Node.js, atau instalasi apapun!**

#### Langkah-langkah:

**1. Clone atau Download**

```bash
git clone <repo-url>
cd MediapipeFallandHelpDetection-main
```

**2. Buka di Browser**

- **Paling Mudah:** Double-click file `index.html`
- **Live Server (VS Code):** Right-click `index.html` → Open with Live Server
- **Python:** `python -m http.server 8080`
- **PHP:** `php -S localhost:8080`

**3. Login atau Mode Tamu**

- Login dengan akun Firebase, atau
- Klik "Lanjutkan sebagai Tamu"

**4. Izinkan akses kamera dan mulai gunakan!** 🎉

---

### ⚙️ Backend (Sudah Aktif!)

Backend sudah deployed ke Cloudflare Workers dan aktif 24/7:

- **Tuya API:** `https://tuya-proxy.labhcmlt9-cf7.workers.dev/`
- **Telegram:** `https://telegram-proxy.labhcmlt9-cf7.workers.dev/`

**Tidak perlu setup backend apapun!**

---

### ✅ Keuntungan Serverless

- ✅ **Zero Installation** - Tidak perlu npm atau Node.js
- ✅ **Pure Client-Side** - Langsung jalan di browser
- ✅ **No Server** - Backend sudah di cloud
- ✅ **Global CDN** - Cepat dari mana saja
- ✅ **Auto-scaling** - Handle traffic tinggi otomatis
- ✅ **Free Hosting** - Deploy di Netlify/Vercel/GitHub Pages
- ✅ **Works Offline** - Deteksi pose tetap jalan (kecuali notifikasi)

---

## 📖 Panduan Penggunaan

### Login / Mode Tamu

1. Buka aplikasi → Otomatis redirect ke login
2. **Login (Recommended):**
   - Login dengan Google/Email
   - Data tersimpan di Firebase (cloud)
   - Akses dari device manapun
3. **Mode Tamu:**
   - Klik "Lanjutkan sebagai Tamu"
   - Data tersimpan lokal di browser
   - Tidak perlu akun

---

### Fall Detection

1. Aktifkan toggle **"Kamera"**
2. Aktifkan toggle **"Fall Detection"**
3. **(Opsional) Setup ROI area kasur:**
   - Klik "Edit ROI"
   - Drag di video untuk buat area
   - Drag sudut untuk resize, Shift+drag untuk rotate
   - Klik "Save ROI"
4. **Sistem akan otomatis detect:**
   - Jatuh (posisi horizontal di lantai)
   - Sleeping (posisi horizontal di ROI kasur)
   - HELP gesture (tangan menyilang/raise hand)
5. Notifikasi otomatis jika terdeteksi emergency

---

### Rehab Medic

#### Mode Latihan Standar:

1. Aktifkan **"Kamera"** dan **"Rehab Medic"**
2. Pilih latihan dari dropdown
3. Lakukan gerakan, sistem hitung repetisi otomatis
4. Lihat statistik: reps, angle, stage, form accuracy

#### Rehab Mode (Program Latihan):

1. Pilih **"🏥 Rehab Mode"** dari dropdown
2. Tambah latihan ke queue (pilih exercise + set reps)
3. Klik **"▶ Mulai Rehab"**
4. Ikuti instruksi step-by-step
5. Lihat summary dan riwayat tersimpan otomatis

---

### ⌨️ Keyboard Shortcuts

- `Space` - Pause/Resume
- `R` - Reset counter
- `M` - Mirror video (flip horizontal)
- `D` - Toggle debug info

---

## 🛠️ Teknologi

- **Frontend:** Pure HTML/CSS/JavaScript (ES6 Modules)
- **Pose Detection:** MediaPipe Tasks Vision v0.10.14
- **Backend:** Cloudflare Workers (Serverless)
- **Authentication:** Firebase Auth v10.7.1
- **Database:** Firebase Firestore + localStorage
- **Notifications:** Telegram Bot API + Tuya IoT Platform
- **Model:** `pose_landmarker_full/float16/1` (Google Cloud Storage)

---

## 💻 Browser Requirements

- **Recommended:** Chrome/Edge
- **Supported:** Firefox, Safari (iOS 14.3+)
- **Requirements:**
  - WebRTC (`getUserMedia` untuk kamera)
  - ES6 Modules
  - WebAssembly

**Note:** Beberapa browser butuh HTTPS atau `localhost` untuk akses kamera.

---

## 📊 Performance

- **FPS:** ~30-60 FPS (tergantung hardware)
- **Model Size:** ~25MB (cached oleh browser)
- **Latency:** <50ms per frame
- **Offline:** Works offline (kecuali notifications)

---

## 📁 File Structure

```
MediapipeFallandHelpDetection-main/
├── index.html              # Landing page
├── login.html              # Authentication
├── app.html                # Main application
├── credits.html            # About
│
├── integrated.js           # Main app logic
├── login.js                # Login logic
├── firebase-config.js      # Firebase setup
├── config.js               # Config loader
├── rehab_medic.js          # Exercise logic
│
├── styles.css              # Global styles
├── favicon.svg             # App icon
│
├── client/
│   └── alarm_bridge.js     # API bridge
│
├── .env                    # Config (GITIGNORED)
├── .env.example            # Template
├── .gitignore
├── package.json
└── README.md
```

---

## 🔒 Security

- ✅ Firebase credentials aman (window globals)
- ✅ `.env` di-gitignore
- ✅ API keys di Cloudflare Worker environment variables
- ✅ CORS enabled di workers
- ✅ Authentication required untuk fitur premium

---

## 📝 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan tugas akademik di **Politeknik Elektronika Negeri Surabaya (PENS)**.

Silakan gunakan dan modifikasi untuk kebutuhan non-komersial dengan mencantumkan atribusi kepada penulis asli.

---

## 🙏 Credits

- **MediaPipe** - Google AI (Pose detection model)
- **Firebase** - Google Cloud (Auth & Database)
- **Cloudflare Workers** - Serverless infrastructure
- **Tuya IoT Platform** - Smart device integration
- **Telegram Bot API** - Notification system

---

<div align="center">

**Developed with ❤️ by Kelompok 4 - TRM PENS**

🎓 Politeknik Elektronika Negeri Surabaya

</div>
