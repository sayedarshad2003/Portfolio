# Saiyed Arshad — Software Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

A modern, high-performance portfolio website for **Saiyed Arshad**, a results-driven **Software Developer** with **3+ years of enterprise application experience**. Focused on building scalable enterprise web applications, real-time telemetry systems, multi-tenant POS/ERP platforms, financial double-entry accounting engines, and diagnostic lab systems using **ASP.NET Core**, **C#**, **SQL Server**, and modern frontend technologies.

---

## 🌟 Key Highlights & UI Features

- 🎨 **Modern Dark Aesthetics**: Premium dark theme (`#0B0B0C`) with high-contrast accenting (`#FF4800`) and custom typography.
- ⚡ **Smooth Scroll & Animations**: Powered by **Lenis** smooth scrolling synchronized with **GSAP ScrollTrigger** and **Motion** (Framer Motion engine).
- ⏱️ **Live Muscat Station Clock**: Real-time timezone widget (`Asia/Muscat`, UTC+4) with live lat/long coordinates (`23.5880° N, 58.3829° E`).
- 🔍 **Interactive Case Study Modals**: Deep-dive project breakdowns detailing business problems, architectural solutions, tech stack, and quantitative impact metrics.
- 🎯 **Bespoke Custom Cursor & Preloader**: Fluid custom cursor with spring dynamics and full-screen counter loading sequence.
- ♿ **Accessibility & Motion Preference**: Automatic fallback detection for `prefers-reduced-motion` to ensure smooth experience across all user settings.
- 📱 **Fully Responsive Layout**: Mobile-first design tailored for screens from desktop monitors down to mobile viewports.

---

## 💼 Showcase Projects & Case Studies

The portfolio highlights six enterprise projects delivered for multi-tenant business environments across retail, hospitality, finance, healthcare, and workforce management:

| Project | Domain | Technologies | Key Highlights |
| :--- | :--- | :--- | :--- |
| **Crystal POS & MetFlora** | Enterprise Retail ERP | ASP.NET Core, C#, SQL Server, SignalR, Paymob, ClosedXML | Multi-tenant bilingual (Arabic/English) POS with Paymob payments & >40% query latency reduction. |
| **GameZone Telemetry & Billing** | Real-Time Telemetry | SignalR, WebSockets, ASP.NET Core, C#, SQL Server | Live floor occupancy dashboard with sub-second seat status broadcasting & automated overtime billing. |
| **LIMS Diagnostic System** | Healthcare / Pathology | ASP.NET, C#, SQL Server, iTextSharp, REST APIs | End-to-end barcode sample custody verification & automated tamper-evident PDF patient reports. |
| **Double-Entry Accounting** | Financial Systems | ASP.NET Core MVC, C#, SQL Server, ClosedXML, ADO.NET | Zero-discrepancy ledger validation with 100% automated VAT/tax registers & financial exports. |
| **Enterprise HRMS Platform** | Human Capital | ASP.NET Core, C#, SQL Server, Telerik Reporting, LINQ | Unified workforce management across multi-branch corporations with RBAC & automated payroll runs. |
| **Restaurant QR & Dispatch** | Hospitality Tech | ASP.NET Core, WebSockets, JavaScript, HTML5/CSS3 | Contactless QR menu ordering with real-time kitchen display dispatch via duplex WebSockets. |

---

## 🛠️ Technical Stack & Architecture

### Portfolio Tech Stack

- **Framework**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Custom CSS
- **Animation & Physics**: [GSAP 3](https://greensock.com/gsap/) + ScrollTrigger, [Lenis](https://lenis.darkroom.engineering/) Smooth Scroll, [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Developer Enterprise Skill Stack

- **Backend & Frameworks**: C#, ASP.NET Core MVC, ASP.NET WebForms, ADO.NET, LINQ, Entity Framework, REST APIs
- **Database & Storage**: SQL Server, T-SQL, Stored Procedures, CTEs, Query Optimization, Schema Design, SSMS
- **Real-Time & Frontend**: SignalR, WebSockets, JavaScript, HTML5, CSS3, Bootstrap 4/5, jQuery, AJAX, React Native (Basic)
- **Reporting & Utilities**: ClosedXML (Excel Engine), iTextSharp (PDF Generation), Telerik Reporting, Paymob Payment Gateway
- **DevOps & Infrastructure**: IIS Web Server, Git & GitHub, Visual Studio, FTP/SSH Deployment Pipelines

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v20.19.0+` or `v22.12.0+` (required by Vite 8)
- **npm**: Included with Node.js (`v10+`)
- **Git**: `v2.x+`

Verify installations:
```bash
node --version
npm --version
git --version
```

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arshadsayed/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Access the app**:
   Open your browser and navigate to `http://localhost:3000`.

---

## 📜 Available NPM Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite --port=3000 --host=0.0.0.0` | Launches local development server on port 3000 |
| `npm run build` | `vite build` | Compiles and optimizes assets into production `dist/` folder |
| `npm run preview` | `vite preview` | Serves the production build locally for verification |
| `npm run lint` | `tsc --noEmit` | Runs strict TypeScript type checking |
| `npm run clean` | `rm -rf dist server.js` | Cleans up previous build outputs |

---

## 📁 Project Directory Structure

```text
my-new-protfolio/
├── src/
│   ├── components/            # UI Components & Sections
│   │   ├── About.tsx          # About developer section & background
│   │   ├── CaseStudyModal.tsx # Full modal for deep project inspection
│   │   ├── Contact.tsx        # Contact form, location & social links
│   │   ├── CustomCursor.tsx   # Custom dynamic cursor implementation
│   │   ├── Experience.tsx     # Work history & career achievements
│   │   ├── Hero.tsx           # Interactive main headline section
│   │   ├── Navbar.tsx         # 3-Zone navigation bar with live clock
│   │   ├── Preloader.tsx      # Full-screen counter loader animation
│   │   ├── ProjectIllustrations.tsx # Visual SVG graphics for projects
│   │   ├── SelectedWork.tsx   # Project grid with filtering & modal triggers
│   │   └── SkillsMarquee.tsx  # Infinite scrolling marquee of skills
│   ├── data/
│   │   └── portfolioData.ts   # Single source of truth for personal data & projects
│   ├── types.ts               # TypeScript interfaces & definitions
│   ├── App.tsx                # Main App entry, Lenis & GSAP orchestration
│   ├── index.css              # Global Tailwind CSS imports & custom styles
│   └── main.tsx               # DOM mounting entry point
├── .env.example               # Environment variables template
├── index.html                 # HTML shell & web fonts
├── package.json               # Dependencies & scripts configuration
├── tsconfig.json              # TypeScript compiler configuration
└── vite.config.ts             # Vite bundler configuration
```

---

## ⚙️ Customization & Data Maintenance

All text content, project details, work history, and contact information are decoupled from components into a single configuration file:

📁 **[`src/data/portfolioData.ts`](src/data/portfolioData.ts)**

To update portfolio contents:
1. **Personal Information**: Edit `PERSONAL_INFO` object (Name, Title, Location, Bio, Social links).
2. **Projects & Case Studies**: Modify or append items in the `PROJECTS` array.
3. **Experience Timeline**: Update the `EXPERIENCE` list.
4. **Skills Categories**: Update `TECHNICAL_SKILLS` categories and skill sets.

---

## 📦 Production Deployment

To create an optimized production bundle:

```bash
npm run build
```

This generates a static distribution folder at `dist/`. You can deploy this folder to any modern static hosting provider:

- **Vercel / Netlify / Cloudflare Pages**: Set build command to `npm run build` and output directory to `dist`.
- **GitHub Pages**: Deploy contents of `dist/` to your `gh-pages` branch.
- **IIS Web Server**: Move `dist/` contents into the IIS site root directory.

---

## 📬 Contact & Connect

**Saiyed Arshad** — *Software Developer*

- 📍 **Location**: Ahmedabad, Gujarat (Origin: Jaipur, Rajasthan, India)
- 📧 **Email**: [arshadsayed232@gmail.com](mailto:arshadsayed232@gmail.com)
- 📞 **Phone**: [+91 9413747365](tel:+919413747365)
- 💻 **GitHub**: [github.com/arshadsayed](https://github.com/arshadsayed)
- 💼 **LinkedIn**: [linkedin.com/in/saiyed-arshad](https://linkedin.com/in/saiyed-arshad)

---

&copy; 2026 Saiyed Arshad. All rights reserved.
