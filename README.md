# Saiyed Arshad — Software Developer Portfolio

A responsive, animated personal portfolio for **Saiyed Arshad**, a software developer focused on enterprise web applications, ASP.NET, C#, SQL Server, and real-time systems.

Built with React, TypeScript, Vite, Tailwind CSS, GSAP, and Lenis.

## Highlights

- Dark, responsive portfolio interface with a custom cursor and loading screen
- Smooth scrolling and scroll-triggered animations
- Project showcase with detailed case-study modals
- Experience, technical skills, about, and contact sections
- Links to email, GitHub, and LinkedIn profiles
- Accessibility-aware motion handling: reduced-motion preferences are respected

## Portfolio content

The portfolio presents enterprise application work including:

- **Crystal POS & MetFlora** — multi-tenant retail POS and ERP platform
- **GameZone Telemetry & Billing** — live booking, billing, and occupancy system
- **LIMS Diagnostic System** — laboratory sample tracking and reporting platform
- **Double-Entry Accounting System** — VAT registers and financial reporting
- **Enterprise HRMS Platform** — workforce, payroll, leave, and access management
- **Restaurant QR & Kitchen Display** — contactless ordering and real-time kitchen dispatch

## Technology stack

| Area | Technologies |
| --- | --- |
| Framework | React 19, TypeScript, Vite |
| Styling | Tailwind CSS 4, custom CSS |
| Animation | GSAP, ScrollTrigger, Lenis, Motion |
| Icons | Lucide React |
| Package manager | npm (a Bun lockfile is also included) |

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) **20.19+ or 22.12+** (required by Vite 8)
- npm (installed with Node.js)
- Git

Verify that the tools are installed:

```bash
node --version
npm --version
git --version
```

## Clone and run

Open a terminal (PowerShell, Command Prompt, Git Bash, or a macOS/Linux terminal) and run:

```bash
git clone https://github.com/sayedarshad2003/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open the URL printed by Vite in your browser. By default, this project runs at:

```text
http://localhost:3000
```

To expose the development server to other devices on your local network, use the same command above and open `http://<your-computer-ip>:3000` from the other device.

### Windows PowerShell commands

```powershell
git clone https://github.com/sayedarshad2003/Portfolio.git
Set-Location Portfolio
npm install
npm run dev
```

### macOS/Linux commands

```bash
git clone https://github.com/sayedarshad2003/Portfolio.git
cd Portfolio
npm install
npm run dev
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server on port 3000. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally after `npm run build`. |
| `npm run lint` | Runs the TypeScript type check without emitting files. |

Typical production-build verification:

```bash
npm run lint
npm run build
npm run preview
```

## Environment variables

The current portfolio frontend does **not** require an environment variable to run.

An [`.env.example`](.env.example) file is included for Gemini/AI Studio integrations. If you later add Gemini API calls, create a local environment file and add your key:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Keep real API keys in `.env.local` only; never commit them to GitHub. Vite exposes browser-side variables only when they use the `VITE_` prefix, so any future client-side configuration should follow that convention.

## Customizing the portfolio

Most content can be edited in [`src/data/portfolioData.ts`](src/data/portfolioData.ts):

- Personal details and social links
- Project case studies
- Work experience and education
- Technical skills

The page layout is assembled in [`src/App.tsx`](src/App.tsx), while individual sections live in [`src/components`](src/components).

## Project structure

```text
Portfolio/
├── src/
│   ├── components/          # Portfolio sections and UI components
│   ├── data/
│   │   └── portfolioData.ts # Profile, projects, experience, and skills
│   ├── App.tsx              # Page composition and animation setup
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── .env.example             # Optional environment-variable template
├── package.json             # Scripts and dependencies
└── vite.config.ts           # Vite configuration
```

## Deployment

Create the deployable static files with:

```bash
npm run build
```

Upload the generated `dist/` folder to any static hosting provider, such as GitHub Pages, Netlify, Vercel, Cloudflare Pages, or an IIS static site. Configure the host's build command as `npm run build` and its publish/output directory as `dist` when it builds the project for you.

## Contact

- Email: [arshadsayed232@gmail.com](mailto:arshadsayed232@gmail.com)
- GitHub: [arshadsayed](https://github.com/arshadsayed)
- LinkedIn: [saiyed-arshad](https://linkedin.com/in/saiyed-arshad)

---

Built to showcase enterprise software development work across retail, hospitality, finance, healthcare, and HR systems.
