# 📦 Final Project — Sanbercode Next.js

Proyek **akhir bootcamp Sanbercode** yang dibangun dengan Next.js. Aplikasi ini mengimplementasikan fitur **autentikasi, chat interaktif, mood tracking**, dan **manajemen profil** sebagai penutup program pembelajaran full-stack.

## ✨ Fitur

### 🏠 Landing Page
- **Hero Section** — Pembuka aplikasi dengan branding
- **Chat Section** — Fitur chat interaktif real-time
- **Mood Section** — Tracker suasana hati
- **Quotes Section** — Kutipan motivasi

### 🔐 Autentikasi
- **Login Page** — Form autentikasi pengguna
- **Register Page** — Pendaftaran akun baru
- **JWT/Cookie** — Autentikasi dengan `js-cookie`
- **Middleware** — Protected routes

### 👤 Profil
- **Profile Page** — Lihat profil pengguna
- **Profile Edit** — Edit data profil
- **Avatar** — Foto profil (Radix Avatar)

### 💬 Chat & Reply
- **Reply Page** — Fitur balasan interaktif

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (Pages + App Router) |
| **Language** | TypeScript/JavaScript |
| **Styling** | Tailwind CSS |
| **UI** | Flowbite, Flowbite React, shadcn/ui |
| **HTTP Client** | Axios |
| **Auth** | js-cookie (JWT management) |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |

## 📁 Struktur Proyek

```
pages/
├── index.tsx                  # Landing page
├── _app.tsx                   # App wrapper
├── login.jsx                  # Login page
└── profile/                   # Profile pages

components/
├── layouts/
│   ├── Header.tsx             # Navigasi
│   ├── HeaderProfile.jsx      # Header profil
│   └── Footer.tsx
├── pages/
│   ├── landing-page/
│   │   ├── HeroSection.tsx
│   │   ├── ChatSection.jsx
│   │   ├── MoodSection.tsx
│   │   └── QuotesSection.jsx
│   ├── home-page/
│   │   └── ReplyPage.jsx
│   ├── auth-page/
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   └── profile-page/
│       ├── ProfilPage.jsx
│       └── ProfileEdit.jsx
└── ui/
    └── avatar.tsx

middleware.js                  # Protected routes
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

## 📄 Lisensi

MIT License — Proyek bootcamp Sanbercode

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
