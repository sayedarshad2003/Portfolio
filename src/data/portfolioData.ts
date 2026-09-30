import { Project, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Saiyed Arshad",
  title: "Software Developer",
  location: "Muscat, Oman",
  origin: "Ahmedabad, Gujarat",
  email: "arshadsayed232@gmail.com",
  phone: "+91 9413747365",
  github: "https://github.com/arshadsayed",
  linkedin: "https://linkedin.com/in/saiyed-arshad",
  coordinates: "23.5880° N, 58.3829° E",
  timezone: "Asia/Muscat",
  experienceYears: "3+",
  summary: "Results-driven Software Developer with 3+ years of experience designing and delivering enterprise-grade web applications using ASP.NET, C#, and SQL Server. Proven expertise in building HRMS, accounting platforms, real-time dashboards, POS, and LIMS solutions for multi-tenant business environments."
};

export const PROJECTS: Project[] = [
  {
    id: "crystal-pos",
    title: "Crystal POS & MetFlora",
    subtitle: "Enterprise Multi-Tenant POS & Retail ERP Platform",
    category: "Enterprise Retail Platform",
    year: "2023 – Present",
    clientSector: "Retail, Boutique & Grocery Variants",
    role: "Full-Stack Developer & Database Architect",
    problem: "Multi-tenant retail and boutique merchants in the Omani market required high-speed transaction handling, rigorous Omani VAT compliance, and real-time inventory synchronization across multi-branch setups with full Arabic/English bilingual support and zero transaction lag.",
    solution: "Architected a dual-variant POS platform in ASP.NET Core MVC and ASP.NET WebForms. Optimized SQL Server CTE schemas and stored procedures, integrated Paymob digital payments, built barcode scanning pipelines, and implemented automated thermal receipt generation alongside ClosedXML VAT reports.",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "SignalR", "Paymob REST API", "ClosedXML", "iTextSharp", "Bootstrap 5"],
    metrics: [
      ">40% reduction in critical reporting query latency",
      "100% automated VAT reconciliation workflows",
      "Multi-tenant bilingual (Arabic & English) architecture"
    ],
    features: [
      "Boutique and grocery operational variants with barcode scanning",
      "Integrated Paymob payment gateway for digital transaction processing",
      "Automated Excel (ClosedXML) & PDF (iTextSharp) tax reconciliation registers",
      "Thermal receipt printing and live inventory ledger updates",
      "Bilingual Arabic/English UI with accessibility and RTL compliance"
    ],
    architectureNotes: "Engineered high-concurrency stored procedures with Common Table Expressions (CTEs) to index multi-branch inventory movements, eliminating table locking during peak retail checkout hours."
  },
  {
    id: "gamezone-management",
    title: "GameZone Telemetry & Billing",
    subtitle: "Real-Time Slot Booking & Live Occupancy Dashboard",
    category: "Real-Time State System",
    year: "2023",
    clientSector: "Hospitality & Entertainment Arenas",
    role: "Real-Time Systems Developer",
    problem: "Gaming centers and entertainment venues struggled with manual tracking of hourly gaming stations, leading to unbilled overtime, inaccurate hold/resume states, and lack of live floor occupancy visibility for managers.",
    solution: "Designed and implemented a real-time slot booking and billing platform utilizing SignalR and WebSockets. Created dynamic hold/resume session timers, automated overtime billing calculations, and an instant-sync live occupancy dashboard for floor managers.",
    stack: ["SignalR", "WebSockets", "C#", "ASP.NET Core", "SQL Server", "JavaScript"],
    metrics: [
      "Sub-second real-time seat status broadcasting via SignalR",
      "Automated overtime calculation preventing billing leaks",
      "Live multi-station occupancy dashboard"
    ],
    features: [
      "Real-time slot booking and multi-station floor map",
      "Hold, resume, and pause session controls with automatic billing recalculation",
      "Automated overtime surcharge calculations on expired sessions",
      "Live manager occupancy dashboard driven by persistent WebSocket connections"
    ],
    architectureNotes: "Leveraged ASP.NET SignalR Hubs to broadcast station state transitions across connected client terminals without polling, backed by atomic SQL Server transactions."
  },
  {
    id: "lims-diagnostics",
    title: "LIMS Diagnostic System",
    subtitle: "Laboratory Information Management & Sample Tracking",
    category: "Healthcare Diagnostic Platform",
    year: "2022 – 2023",
    clientSector: "Diagnostic Laboratories & Pathology Clinics",
    role: "Full-Stack Developer",
    problem: "Clinical testing facilities required strict custody tracking of patient specimens, barcode verification at intake, rapid quality-control dashboards, and automated generation of tamper-evident PDF test reports.",
    solution: "Engineered an end-to-end sample tracking and results management system. Built barcode scanning workflows for specimen intake, integrated analytical quality control (QC) dashboards, and automated patient report generation with iTextSharp.",
    stack: ["ASP.NET", "C#", "SQL Server", "iTextSharp (PDF)", "REST APIs", "SSMS"],
    metrics: [
      "End-to-end barcode sample custody verification",
      "Instant PDF diagnostic report generation via iTextSharp",
      "Operational QC dashboards for laboratory technicians"
    ],
    features: [
      "Sample intake with unique barcode generation and scan verification",
      "Multi-stage diagnostic result approval workflows with audit logs",
      "Automated patient report generation with custom letterheads using iTextSharp",
      "Quality control (QC) metric dashboards for lab instrumentation"
    ],
    architectureNotes: "Strict relational database constraints enforce sample chain-of-custody, preventing status progression until required technician sign-offs are logged."
  },
  {
    id: "accounting-platform",
    title: "Double-Entry Accounting System",
    subtitle: "Financial Core with VAT Registers & Automated Tax Reporting",
    category: "Financial Enterprise Software",
    year: "2022 – 2023",
    clientSector: "Enterprise Multi-Tenant Clients",
    role: "Backend & Database Developer",
    problem: "Finance teams faced lengthy month-end closing cycles and error-prone manual calculations when reconciling VAT, ledger entries, and trial balances across business branches.",
    solution: "Developed a double-entry accounting engine enforcing strict debits-equal-credits invariants. Built automated VAT/tax registers, journal entry ledgers, automated trial balance computation, and one-click ClosedXML (Excel) and iTextSharp (PDF) financial exports.",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "ClosedXML", "iTextSharp", "ADO.NET"],
    metrics: [
      "Significantly reduced month-end closing time",
      "100% automated Excel and PDF tax register export",
      "Zero-discrepancy double-entry ledger validation"
    ],
    features: [
      "Comprehensive double-entry general ledger and journal entry creation",
      "Automated VAT/tax registers for compliance auditing",
      "Dynamic trial balance calculations across custom date ranges",
      "Batch financial export to Excel (ClosedXML) and formatted PDF (iTextSharp)"
    ],
    architectureNotes: "Database-level check constraints and transaction blocks guarantee zero-balance ledger invariance across multi-currency and multi-branch ledgers."
  },
  {
    id: "hrms-platform",
    title: "Enterprise HRMS Platform",
    subtitle: "Multi-Branch Workforce, Payroll & Role Access System",
    category: "Human Capital Management",
    year: "2022 – 2024",
    clientSector: "Multi-Branch Corporations",
    role: "Full-Stack Developer",
    problem: "Multi-branch companies needed a unified platform to consolidate dispersed employee records, attendance tracking, complex payroll calculations, and granular role-based permissions.",
    solution: "Built a centralized HR platform covering employee life-cycle records, daily attendance tracking, automated payroll calculation, leave management workflows, and fine-grained role-based access control.",
    stack: ["ASP.NET Core", "C#", "SQL Server", "Telerik Reporting", "ClosedXML", "LINQ"],
    metrics: [
      "Unified workforce management for multi-branch organizations",
      "Automated payroll calculation and payslip generation",
      "Granular role-based security access matrices"
    ],
    features: [
      "Centralized employee master database with document archives",
      "Attendance capture and overtime reconciliation",
      "Multi-tier leave application and approval workflow",
      "Automated payroll runs and Telerik report generation"
    ],
    architectureNotes: "Role-based access control (RBAC) integrated directly into ASP.NET authentication middleware with branch-level data isolation."
  },
  {
    id: "restaurant-qr-menu",
    title: "Restaurant QR & Kitchen Display",
    subtitle: "Contactless Digital Ordering & Real-Time Kitchen Dispatch",
    category: "Hospitality Automation",
    year: "2023",
    clientSector: "Restaurants & Dining Chains",
    role: "Full-Stack Developer",
    problem: "Dine-in restaurants experienced order dispatch bottlenecks and delays between front-of-house table orders and back-of-house kitchen preparation lines.",
    solution: "Created a contactless QR-code dining platform enabling diners to order directly from smartphones, integrated with real-time kitchen display notifications over WebSockets and an admin management panel.",
    stack: ["ASP.NET Core", "WebSockets", "JavaScript", "HTML5", "CSS3", "SQL Server"],
    metrics: [
      "Instant order transmission from table to kitchen display",
      "Zero app installation required for restaurant patrons",
      "Dynamic menu updates via responsive admin panel"
    ],
    features: [
      "Table-specific QR code scanning and interactive mobile menu",
      "Real-time kitchen order notification display via WebSockets",
      "Dynamic menu, pricing, and availability management dashboard",
      "Live order status tracking from preparation to serving"
    ],
    architectureNotes: "WebSocket-based persistent duplex channel ensures kitchen stations receive tickets instantly with zero page reloads."
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Palansoft Private Limited",
    role: "Software Developer",
    location: "Ahmedabad, Gujarat / Muscat Market",
    period: "May 2022 – Present",
    highlights: [
      "Architected and delivered full-stack enterprise web applications using ASP.NET WebForms and ASP.NET Core MVC, serving multi-tenant clients across retail, hospitality, and laboratory sectors.",
      "Designed and optimized SQL Server schemas, stored procedures, and CTE-based queries, reducing critical report generation time by over 40%.",
      "Integrated REST APIs and third-party payment gateways (Paymob), enabling seamless digital transaction processing across POS and e-commerce modules.",
      "Implemented real-time dashboards and notification systems using SignalR and WebSockets, improving operational visibility for salon and gaming center clients.",
      "Built responsive, bilingual (Arabic/English) UIs with Bootstrap and custom CSS, ensuring cross-device compatibility and accessibility compliance.",
      "Developed automated Excel (ClosedXML) and PDF (iTextSharp) report generation modules, eliminating manual effort for VAT/tax reconciliation workflows.",
      "Maintained IIS-hosted production deployments and reduced downtime through proactive monitoring and scripted deployment pipelines.",
      "Collaborated with cross-functional teams to gather requirements, conduct code reviews, and deliver iterative releases on schedule."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2026"
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Languages & Frameworks",
    skills: ["C#", "ASP.NET Core MVC", "ASP.NET WebForms", "ADO.NET", "LINQ", "Entity Framework", "Basic React Native"]
  },
  {
    category: "Database & Storage",
    skills: ["SQL Server", "T-SQL", "Stored Procedures", "CTEs", "Query Optimization", "Schema Design", "SSMS"]
  },
  {
    category: "Frontend & Real-Time",
    skills: ["SignalR", "WebSockets", "JavaScript", "HTML5", "CSS3", "Bootstrap 4/5", "jQuery", "AJAX", "Responsive Design"]
  },
  {
    category: "APIs & Data Libraries",
    skills: ["REST APIs", "Paymob Gateway", "ClosedXML (Excel)", "iTextSharp (PDF)", "Telerik Reporting", "JSON", "XML"]
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["IIS Server", "Git", "GitHub", "FTP/SSH Deployment", "Visual Studio", "Production Pipelines"]
  }
];
