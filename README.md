# 🎵 Microgamma - Own Your Music, Own Your Sound

[![Deno](https://img.shields.io/badge/Deno-2.0+-000000?style=flat&logo=deno)](https://deno.land)
[![Fresh](https://img.shields.io/badge/Fresh-2.0+-14b866?style=flat&logo=deno)](https://fresh.deno.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0+-06b6d4?style=flat&logo=tailwind-css)](https://tailwindcss.com)

**Microgamma** is an innovative music player that puts you back in control of your digital music collection. Unlike traditional streaming services that lock away your music and demand monthly payments, Microgamma empowers you with complete ownership, self-hosted freedom, and a revolutionary approach to music streaming.

## 🌟 Key Features

### 🎼 Complete Music Ownership
- **Self-hosted streaming** - Run your own music server on any hardware
- **No subscriptions** - Pay once or host yourself, keep forever
- **Full control** - Your music library stays on your devices
- **Custom metadata** - Edit album covers, lyrics, and track information

### 🔧 Premium Self-Hosted Features
- **AI-powered discovery** - Optional AI features with your own API keys
- **Multi-room streaming** - Stream to multiple devices simultaneously
- **Unified device control** - Start on desktop, continue on mobile
- **Cross-platform support** - Windows, macOS, and Linux

### 🎨 Underground Revolution Design
- **Vaporwave aesthetic** - Retro-futuristic visual experience
- **Dark theme optimized** - Easy on the eyes for extended listening
- **Responsive design** - Perfect on desktop, tablet, and mobile
- **Accessibility first** - WCAG compliant with screen reader support

### 🚀 Performance Optimized
- **WebRTC streaming** - Peer-to-peer audio with zero latency
- **Lazy loading** - Fast page loads with optimized images
- **WebP images** - 90% smaller file sizes with modern formats
- **Minimal bundle** - Under 200KB gzipped client bundle

## 🛠️ Technology Stack

- **Framework:** [Fresh 2.0](https://fresh.deno.dev) - Modern web framework for Deno
- **Runtime:** [Deno 2.0+](https://deno.land) - Secure runtime for JavaScript/TypeScript
- **Styling:** [TailwindCSS 4.0](https://tailwindcss.com) - Utility-first CSS framework
- **Authentication:** [Kinde](https://kinde.com) - Secure OAuth authentication
- **Analytics:** [Countly](https://countly.com) - Privacy-focused analytics
- **Deployment:** Server-side rendering with edge deployment ready

## 🚀 Getting Started

### Prerequisites

Ensure you have [Deno 2.0+](https://docs.deno.com/runtime/getting_started/installation) installed:

```bash
curl -fsSL https://deno.land/install.sh | sh
```

### Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd microgamma
   ```

2. **Install dependencies**
   ```bash
   deno install
   ```

3. **Start development server**
   ```bash
   deno task dev
   ```

4. **Open your browser**
   ```
   http://localhost:8000
   ```

The development server includes hot reloading and will automatically restart when files change.

### Build for Production

```bash
deno task build
```

### Start Production Server

```bash
deno task start
```

## 📱 Features Overview

### Public Pages
- **Homepage** - Ownership revolution messaging and feature showcase
- **Downloads** - Platform-specific installers with security notes
- **News** - Technical updates and development announcements
- **Screenshots** - Interface previews and feature demonstrations

### Private Account Area
- **Dashboard** - Music library overview and statistics
- **Profile** - Account management and user settings
- **Secure authentication** - OAuth login/logout with Kinde

### Technical Highlights
- **SEO Optimized** - Meta descriptions, structured data, and semantic HTML
- **Accessibility Compliant** - Keyboard navigation, screen reader support, skip links
- **Mobile Responsive** - Optimized layouts for all device sizes
- **Performance Focused** - Lazy loading, image optimization, minimal JavaScript

## 🔒 Authentication

Microgamma uses [Kinde](https://kinde.com) for secure OAuth authentication:

- **Login:** `/login` - Redirects to Kinde OAuth flow
- **Logout:** `/logout` - Secure logout with session cleanup
- **Profile:** `/private/profile` - Account management (authenticated users only)

## 📊 Analytics & Privacy

- **Privacy-first analytics** with Countly
- **No tracking cookies** or invasive data collection
- **GDPR compliant** with user consent options
- **Self-hosted option** available for complete privacy control

## 🎯 Project Philosophy

Microgamma represents a fundamental shift in how we think about music ownership in the digital age:

- **Against Subscription Traps** - No recurring payments for access to your own music
- **For True Ownership** - Your music collection belongs to you, not a corporation
- **Self-Hosted Freedom** - Run on your own hardware or choose premium hosting
- **Community Driven** - Open-source with transparent development

## 🤝 Contributing

We welcome contributions from the music ownership community! Please see our contributing guidelines and respect our code of conduct focused on user freedom and privacy.

## 📄 License

This project is licensed under the terms that protect user freedom and prevent corporate exploitation of personal music collections.

## 📞 Contact & Community

- **Email:** [dcavaliere@microgamma.io](mailto:dcavaliere@microgamma.io)
- **Twitter:** [@microgamma_io](https://twitter.com/microgamma_io)
- **Discord:** [Join our community](https://discord.gg/AbmKZ6QU)

---

**Own Your Music. Own Your Revolution.** 🎵⚡
