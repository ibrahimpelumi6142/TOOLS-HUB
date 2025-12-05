# 📦 ToolsHub – All-In-One Online Utility Platform

ToolsHub is a modern **multi-tool SaaS platform** offering high-performance utilities for PDFs, images, AI text, social media downloaders, and developer tools — built with **Next.js 14**, **Node.js**, **Sharp**, **Cloudflare**, and scalable API-driven architecture.

> 🚀 Designed and built end-to-end by **Lasisi Ibrahim Pelumi**, Full-Stack Engineer & Automation Developer.

---

## 🌟 Features Overview

### 📄 PDF Tools
- PDF ➝ Word  
- Merge PDF  
- PDF ➝ Image  
- Compress PDF  
- PDF Split *(coming soon)*  

### 🖼 Image Tools
- Image Resizer  
- Image Compressor  
- Format Converter  
- Background Removal *(coming soon)*  

### 🤖 AI Tools
- AI Summarizer  
- AI Writer  
- AI Chat Assistant (OpenAI API)  
- Code Explainer  

### 🎥 Social & Media Tools
- Instagram Downloader  
- TikTok Downloader  
- YouTube Thumbnail Downloader  
- Video ➝ Audio Converter  

### 🧰 Developer Tools
- UUID Generator  
- Base64 Encode/Decode  
- Regex Tester *(coming soon)*  

---

## 🛠 System Architecture

ToolsHub is built on a scalable, modular backend-driven design:

- ⚡ **Next.js 14 (App Router)**
- 🟦 **Node.js Backend Processing**
- 🖼 **Sharp** for image manipulation  
- 📝 Multiple PDF processing libraries  
- ☁️ **Cloudflare + Nginx** for global performance and SSL  
- 🔐 Secure environment secrets for API keys  

---

## 🧬 Project Structure

```txt

toolshub/
 ├─ app/
     ├─ page.tsx      <-- homepage
 │   ├─ tools/...           # UI pages for each tool
 │   ├─ api/...             # Backend API route handlers
 │   └─ layout.tsx          # Root layout
 ├─ components/             # Reusable UI components
 ├─ lib/                    # Utility functions & helpers
 ├─ public/                 # Static assets
 ├─ docs/                   # Technical documentation
 ├─ .env.example            # Example environment variables
 └─ README.md               # Project documentation

```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```txt
git clone https://github.com/ibrahimpelumi6142/toolshub.git
cd toolshub
```

### 2️⃣ Install Dependencies

```txt
npm install
```

### 3️⃣ Add Environment Variables

#### Create a .env file:
```txt
OPENAI_API_KEY=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
RAPIDAPI_KEY=
FILE_UPLOAD_PATH=./uploads
```

### 4️⃣ Run the Development Server

```txt
npm run dev
```

### Visit:

👉 http://localhost:3000

---

## 🧩 Adding a New Tool

### Create a UI page:

```txt
app/tools/tool-name/page.tsx
```

### Create backend API route:

```txt
app/api/tool-name/route.ts
```

#### Example:

```txt
app/tools/image-resizer/page.tsx
app/api/image-resizer/route.ts
```

### 🧪 Testing

```txt
npm run test
```

---

## 📦 Deployment Options

- Platform	Supported
- Vercel	✅
- Node.js + PM2	✅
- Docker	✅
- Cloudflare Tunnel	✅
- *Note: For heavy processing (PDF/Image tools), a VPS with Node.js + PM2 is recommended instead of Vercel.*

---

## Recommended Production Setup

- Nginx reverse proxy
- PM2
- Cloudflare SSL or Certbot
- CDN caching

---

## 💳 Monetization Options

- Google AdSense
- Stripe subscriptions
- Pay-per-use billing
- Credit-based AI tools

## 📈 Roadmap

- User accounts
- Stripe integration
- Bulk PDF tools
- More AI tools
- Tool marketplace
- Mobile app

---

## 👨‍💻 Author
- Lasisi Ibrahim Pelumi
- Full-Stack Engineer • SaaS Developer • Automation Specialist
- 📍 Sheffield, UK
- GitHub: https://github.com/ibrahimpelumi6142
- Email: ibrahimpelumi6142@gmail.com

---

## ⭐ Contributing Guide

### Contributing to ToolsHub

#### How to Contribute
  - Fork the repository
  - Create a new branch
  - Commit your changes
  - Open a pull request

#### Guidelines
- Keep code modular
- Use clear naming
- Add comments where useful
- Follow Next.js + Node.js best practices

---

## 📝 CHANGELOG

# 📌 Changelog – ToolsHub

## v1.0.0 – Initial Release
- Added PDF tools
- Added image tools
- Added social downloaders
- Added AI tools
- Added documentation
- Added environment config
- Implemented API architecture

---

## 🚀 **Live ToolsHub Platform:**  

👉 https://onlinequicktools.com

---
  
## 📜 LICENSE (MIT)

### MIT License

- Copyright (c)
- 2025 Lasisi Ibrahim Pelumi
- Permission is hereby granted, free of charge, to any person obtaining a copy...
