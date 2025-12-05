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

See detailed architecture docs in `/docs/architecture.md`.

---

## 🧬 Project Structure

toolshub/
├─ app/tools/... # UI pages for each tool
├─ app/api/... # Serverless backend routes
├─ components/ # UI components
├─ lib/ # Utility functions
├─ public/ # Static assets
├─ docs/ # Technical documentation
├─ .env.example # Sample environment variables
└─ README.md # Project documentation


---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ibrahimpelumi6142/toolshub.git
cd toolshub

2️⃣ Install Dependencies
npm install

3️⃣ Add Environment Variables

Create a .env file using .env.example:

OPENAI_API_KEY=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
RAPIDAPI_KEY=
FILE_UPLOAD_PATH=./uploads

4️⃣ Run the Development Server
npm run dev


Visit:
👉 http://localhost:3000

🧩 Adding a New Tool

Create a folder inside:

app/tools/tool-name/


Add an API route:

app/api/tool-name/route.ts


ToolsHub automatically integrates the tool UI + API.

Example:

app/tools/image-resizer/page.tsx
app/api/image-resizer/route.ts

🧪 Testing

Run tests using:

npm run test


Optional: Integrate Jest or Vitest.

📦 Deployment Options

ToolsHub supports:

Platform	Supported
Vercel	✅
Node.js + PM2	✅
Docker	✅
Cloudflare Tunnel	✅
Production Setup (Recommended)

Nginx reverse proxy

PM2 process manager

SSL via Cloudflare or Certbot

Static asset caching

See /docs/deployment.md for steps.

💳 Monetization Options

ToolsHub can support:

Google AdSense

Stripe subscription plans

Pay-per-use billing

Credit-based AI tools

📈 Roadmap

 User accounts & authentication

 Stripe monetization

 Bulk PDF tools

 More AI generators

 Tool marketplace

 Mobile app version

👨‍💻 Author

Lasisi Ibrahim Pelumi
Full-Stack Engineer • SaaS Developer • Automation Specialist
📍 Sheffield, UK

GitHub: https://github.com/ibrahimpelumi6142

Email: ibrahimpelumi6142@gmail.com

⭐ Contributing

Contributions are welcome!
Feel free to open an issue or submit a pull request.

📜 LICENSE (MIT License)
MIT License

Copyright (c) 2025 Lasisi Ibrahim 
Pelumi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...

📄 .env.example
# === ToolsHub Environment Variables ===

# OpenAI / AI Tools
OPENAI_API_KEY=

# Base URL (local development)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Social Media APIs (optional)
RAPIDAPI_KEY=

# Image & PDF routing configs
FILE_UPLOAD_PATH=./uploads

📝 CHANGELOG.md
# 📌 Changelog – ToolsHub

## v1.0.0 – Initial Release
- Added PDF tools (convert, merge, compress)
- Added image tools (resize, compress, convert)
- Added social downloaders (Instagram, TikTok, YouTube)
- Added AI tools (summarizer, writer, assistant)
- Created documentation folder
- Added environment config
- Implemented API architecture

🤝 CONTRIBUTING.md
# Contributing to ToolsHub

Thanks for your interest in contributing!

## How to Contribute
1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Open a pull request  

## Coding Guidelines
- Keep code modular and reusable  
- Use descriptive file names  
- Add comments where needed  
- Follow Next.js and Node.js best practices  

## Issues
Create an issue if:
- You found a bug  
- You want a new tool added  
- You want to suggest improvements  
