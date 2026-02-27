export type ProjectCategory =
  | "E-Commerce Infrastructure"
  | "Machine Learning & Data"
  | "Market Expansion"
  | "Infrastructure & Systems"
  | "Leadership & Operations";

export interface KPI {
  label: string;
  value: string;
}

export interface CaseStudyPhase {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  kpis: KPI[];
  techStack: string[];
  featured: boolean;
  type: "WORK" | "FREELANCE";
  hasImage?: boolean;
  caseStudy: {
    executiveSummary: string;
    businessContext: { label: string; value: string }[];
    strategicPhases: CaseStudyPhase[];
    technicalArchitecture: {
      stack: string[];
      description: string;
      dataFlow: string;
      integrations: string;
      rationale: string;
    };
    executionLeadership: {
      stakeholders: string;
      teamLeadership: string;
      timeline: string;
      riskMitigation: string;
    };
    outcomes: KPI[];
    strategicImpact: string;
  };
}

export const projects: Project[] = [
  {
    id: "shopify-store-building",
    title: "SCALING LEGACY COMMERCE TO HIGH-TECH INFRASTRUCTURE",
    category: "E-Commerce Infrastructure",
    summary:
      "Spearheaded a 4-month modernization project transitioning a legacy 2016 commerce setup into a high-tech international powerhouse via Shopify and an AI-driven creative pipeline.",
    kpis: [
      { label: "Year 1 Growth", value: "+236%" },
      { label: "Year 2 Scaling", value: "+612%" },
      { label: "SKUs Re-architected", value: "513" },
      { label: "Markets Launched", value: "4" },
    ],
    techStack: ["Shopify Plus", "GTM (HTML/Scripting)", "GA4", "Sendcloud", "Kling O1", "Flux 2 Pro", "Veo 3.1"],
    featured: true,
    type: "WORK",
    hasImage: true,
    caseStudy: {
      executiveSummary:
        "As the Head of Digital, I identified that our legacy 2016 commerce infrastructure was actively bottlenecking our global scaling potential and conversion efficiency. I spearheaded a 4-month internal modernization project to transition the brand from a localized vendor into a high-tech international powerhouse. By re-architecting our storefront on Shopify and building a custom AI-driven creative pipeline, I expanded our product offering to 500+ SKUs while maintaining the brand's premium DNA. This shift from 'maintenance' to 'growth-engine' is projected to drive a +236% revenue increase in the first year alone.",
      businessContext: [
        { label: "Industry", value: "Luxury Home & Garden / High-End Furniture" },
        { label: "Company Stage", value: "Digital Transformation & Market Expansion" },
        { label: "Core Challenge", value: "Outdated CMS (2016) with poor customization, restricting market expansion and conversion" },
        { label: "Opportunity", value: "Complete infrastructure overhaul to unlock international DACH+ markets and professionalize product presentation via AI" },
      ],
      strategicPhases: [
        {
          title: "Phase 1 — Diagnosis",
          content:
            "Audited the limitations of the 2016 CMS and mapped a new taxonomy for 513 premium products (Marble, Granite, etc.).",
        },
        {
          title: "Phase 2 — System Design",
          content:
            "Designed a multi-lingual Shopify environment (4 languages) with integrated shipping and payment logic.",
        },
        {
          title: "Phase 3 — Implementation",
          content:
            "Led the internal team on repetitive workflows while I personally handled the Shopify architecture, GTM tracking, and DNS migration.",
        },
        {
          title: "Phase 4 — Launch & SEO",
          content:
            "Currently executing the final pre-launch phase (T-minus 14 days as of February 2026) including a multi-lingual SEO blog strategy to support international entry.",
        },
      ],
      technicalArchitecture: {
        stack: ["Shopify Plus", "GTM (HTML/Scripting)", "GA4", "Sendcloud", "Kling O1", "Nano Banana Pro", "Flux 2 Pro", "Veo 3.1", "Wan 2.6"],
        description:
          "Transitioned from a 'weak CMS' to a scalable, API-friendly environment to support future Data Science and ML research.",
        dataFlow:
          "Legacy Storefront → Domain/DNS Migration → Shopify Plus Architecture → GTM Test Container Validation → Multi-lingual Shopify Environment.",
        integrations:
          "Integrated Kling O1, Nano Banana Pro, and Flux 2 Pro for product photography; Veo 3.1 and Wan 2.6 for cinematic product video.",
        rationale:
          "Moving to Shopify Plus ensures scalability headroom while the custom Tag Manager test container validates the entire Google ecosystem (Ads, Analytics, Cookie logic) before deployment.",
      },
      executionLeadership: {
        stakeholders: "Company Founders, Internal Operations, IT Administrators",
        teamLeadership: "Balanced personal technical execution (architecture/integrations) with team management for data entry and repetitive tasks.",
        timeline: "4-month rapid deployment with zero revenue downtime during the server/domain migration.",
        riskMitigation:
          "Implemented strict DNS sync protocols and test-order cycles to ensure a flawless transition from the old server to Shopify.",
      },
      outcomes: [
        { label: "Year 1 Revenue Growth", value: "+236%" },
        { label: "Year 2 Revenue Scaling", value: "+612%" },
        { label: "Products Re-architected", value: "513" },
        { label: "Markets at Launch", value: "4" },
      ],
      strategicImpact:
        "This was a high-stakes project, I didn't want to pay thousands of euros for an agency to do this, so I decided to do it myself. I learned a lot during this project and I'm proud of what I accomplished. It was a lot of work and I did, what I do best - learning by doing - trial and error.",
    },
  },
  {
    id: "python-bi-dashboard",
    title: "PROPRIETARY BI SUITE: PREDICTIVE REVENUE & CASH FLOW ENGINE",
    category: "Machine Learning & Data",
    summary:
      "Architected a custom Python-based BI suite transforming operational data into strategic foresight via ensemble modeling and real-time financial projections.",
    kpis: [
      { label: "Manual Analysis", value: "-73%" },
      { label: "Processing Speed", value: "1.4s/1000 invoices" },
      { label: "Forecast Confidence", value: "94%" },
      { label: "Specialized Dashboards", value: "4" },
    ],
    techStack: ["Python 3.x", "Pandas", "NumPy", "PyQt6", "llama.cpp"],
    featured: true,
    type: "WORK",
    hasImage: false,
    caseStudy: {
      executiveSummary:
        "As Head of Digital, I architected a custom Python-based Business Intelligence (BI) suite to transform operational data into strategic foresight. The system automates complex financial modeling, including cash flow optimization and multi-year revenue projections, replacing the need for a dedicated Data Science unit. Looking ahead, I am leading the integration of a Locally Inferenced LLM into the suite, enabling stakeholders to query complex financial datasets via a secure, natural language chat interface without compromising data privacy.",
      businessContext: [
        { label: "Industry", value: "Multi-channel Digital Commerce" },
        { label: "Role", value: "Head of Digital / Architect" },
        { label: "Core Challenge", value: "Transitioning from fragmented, reactive reporting to predictive financial foresight" },
        { label: "Future Focus", value: "Local LLM integration for secure natural language querying" },
      ],
      strategicPhases: [
        {
          title: "The Forecast Engine — Technical Deep Dive",
          content:
            "Implemented an Ensemble Modeling approach using Linear Regression & Exponential Smoothing for momentum, combined with Monte Carlo simulations to run thousands of 'what-if' scenarios against market volatility.",
        },
        {
          title: "The Intelligence Layer — Future Roadmap",
          content:
            "Transitioning from visual dashboards to a Conversational AI Interface via Local Inference (7B-8B parameter LLMs). Implementing RAG (Retrieval-Augmented Generation) indexed against parsed invoice data.",
        },
        {
          title: "Data Operations — High Speed Parsing",
          content:
            "Engineered a high-speed backend capable of massive ingestion, successfully parsing 2,000 multi-format invoices in 86 seconds with structured output for modeling.",
        },
        {
          title: "The Strategic Layer — Decision Engine",
          content:
            "Final output weights the Ensemble models into a definitive prognosis with a visible Confidence Percentage, allowing executives to allocate resources with structural confidence.",
        },
      ],
      technicalArchitecture: {
        stack: ["Python 3.x", "Pandas", "NumPy", "PyQt6", "Local LLM (llama.cpp / Ollama)"],
        description:
          "Ensemble architecture combining standard regression models with Monte Carlo volatility simulations for high-confidence revenue work.",
        dataFlow:
          "Source Invoices → Python Parser → Ensemble Model → [Future: Local LLM Chat Interface] → Strategic Decision.",
        integrations:
          "Export mechanisms for CSV, Excel, JSON, PDF",
        rationale:
          "Selected local inference over cloud APIs to ensure absolute data sovereignty of sensitive financial datasets while eliminating recurring SaaS licensing costs.",
      },
      executionLeadership: {
        stakeholders: "Company Founders, Financial Leadership",
        teamLeadership: "Managed the end-to-end architecture and specialized tool development while coordinating data validation with internal finance teams.",
        timeline: "Phased deployment: Core Engine (Complete), Dashboards (Complete), AI Chat Interface (Next Phase).",
        riskMitigation:
          "Ensemble weighting prevents single-model bias. Zero-Trust security approach via on-premise AI inference ensures future-proof data privacy.",
      },
      outcomes: [
        { label: "Analysis Time", value: "-73%" },
        { label: "Processing Speed", value: "1.4s/1000 invoices" },
        { label: "Forecast Accuracy", value: "94%" },
        { label: "Tooling Cost", value: "Zero" },
        { label: "Security Profile", value: "Zero-Trust" },
      ],
      strategicImpact:
        "This project took a toll on me, but it was worth it. I learned a ton during building this and felt like a proper engineer. The learnings and data + prognosis helped my efforts in transforming our initiaves and further get us on track to reach revenue numbers never before.",
    },
  },
  {
    id: "eu-market-expansion",
    title: "Strategic EU Market Expansion",
    category: "Market Expansion",
    summary:
      "End-to-end strategic architecture for DTC brand expansion into 3 EU markets — covering market entry strategy, localisation infrastructure, regulatory compliance, and performance marketing launch.",
    kpis: [
      { label: "Revenue", value: "+[£1.2M ARR]" },
      { label: "Markets", value: "[3 EU]" },
      { label: "Launch Time", value: "[14wks]" },
    ],
    techStack: ["Shopify Markets", "Klaviyo", "Meta Ads", "Lokalise", "Stripe", "EU VAT Systems"],
    featured: true,
    type: "WORK",
    hasImage: false,
    caseStudy: {
      executiveSummary:
        "A high-growth UK DTC brand with proven domestic performance sought structured expansion into 3 EU markets (DE, NL, FR). The core challenge was simultaneous management of technical localisation, regulatory compliance, market-specific performance marketing, and operational logistics — without diluting UK growth trajectory. A 14-week expansion strategy delivered £1.2M projected ARR in new market revenue within the first operational year.",
      businessContext: [
        { label: "Industry", value: "DTC E-Commerce — Consumer Goods" },
        { label: "Company Stage", value: "Established UK brand, first international expansion" },
        { label: "Core Challenge", value: "Multi-market complexity: localisation, compliance, logistics, and marketing simultaneously" },
        { label: "Risk Level", value: "High — capital allocation and brand dilution risk" },
        { label: "Opportunity", value: "3 addressable EU markets with validated UK product-market fit" },
      ],
      strategicPhases: [
        {
          title: "Phase 1 — Diagnosis",
          content:
            "Market sizing analysis for DE, NL, FR markets. Competitor landscape mapping. UK customer LTV and cohort analysis to inform market prioritisation. Regulatory gap analysis covering GDPR, VAT OSS, and consumer protection compliance requirements.",
        },
        {
          title: "Phase 2 — System Design",
          content:
            "Shopify Markets architecture for multi-currency and multi-language. Lokalise integration for translation workflow. EU VAT OSS registration strategy. Market-specific paid media account structures. Localised Klaviyo email architecture with regional compliance.",
        },
        {
          title: "Phase 3 — Implementation",
          content:
            "Shopify Markets deployment across 3 storefronts. Professional translation via Lokalise workflow. Meta Ads EU account structure with market-specific creatives. Klaviyo localisation with GDPR-compliant consent architecture. Logistics partner integration for EU fulfilment.",
        },
        {
          title: "Phase 4 — Optimization",
          content:
            "Market-by-market ROAS analysis and budget reallocation. Creative performance iteration with local market insight. Retention flow optimisation by market cohort. Monthly strategic review cadence with market-specific KPI tracking.",
        },
      ],
      technicalArchitecture: {
        stack: ["Shopify Markets", "Lokalise TMS", "Meta Ads API", "Klaviyo", "Stripe (EU)", "EU VAT OSS", "Google Analytics 4 (multi-property)"],
        description:
          "Shopify Markets as localisation infrastructure hub. Separate GA4 properties per market for clean data segmentation. Centralised Klaviyo account with market-specific list architecture.",
        dataFlow:
          "User (EU) → Market-specific Shopify storefront → Unified PostgreSQL reporting layer → Market-segmented GA4 → Localised Klaviyo flows → EU-compliant data residency.",
        integrations:
          "Lokalise for translation lifecycle management. Stripe for EU payment method coverage (SEPA, iDEAL, Carte Bancaire). EU logistics WMS integration for cross-border fulfilment tracking.",
        rationale:
          "Shopify Markets selected over separate Shopify stores to maintain unified inventory management. Lokalise chosen for translation workflow transparency. Market-specific Meta ad accounts chosen for algorithmic isolation and budget control.",
      },
      executionLeadership: {
        stakeholders: "CEO, CFO, Operations Director, EU Logistics Partner, Legal/Compliance Counsel",
        teamLeadership: "Led cross-functional team: paid media specialist (EU markets), localisation coordinator, Shopify developer, compliance advisor.",
        timeline: "14-week market entry timeline. Weeks 1–3: Strategy + compliance. Weeks 4–8: Infrastructure build. Weeks 9–12: Soft launch. Weeks 13–14: Full go-live.",
        riskMitigation:
          "Phased market entry — NL first (lowest regulatory complexity), then DE, then FR. Capital commitment gated on Phase 1 NL performance milestones. Weekly reporting cadence with pre-defined exit criteria per market.",
      },
      outcomes: [
        { label: "Projected ARR (Year 1)", value: "+[£1.2M]" },
        { label: "Markets Live", value: "[3 — DE, NL, FR]" },
        { label: "Launch Timeline", value: "[14 weeks]" },
        { label: "EU ROAS (Month 3)", value: "[2.8x]" },
        { label: "Compliance Items Cleared", value: "[18/18]" },
      ],
      strategicImpact:
        "Entering the EU market was a massive logistics puzzle. I had to learn the ins and outs of VAT OSS and multi-market shipping on the fly. It was stressful but seeing the first orders roll in from Germany and France made all those late nights worth it. I'm proud that I built a playbook that we can now reuse for any new market.",
    },
  },
  {
    id: "invoice-ml-pricing",
    title: "INTELLIGENT INVOICE ANALYTICS & MARGIN OPTIMIZATION ENGINE",
    category: "Machine Learning & Data",
    summary:
      "Architected a Python-native desktop suite that automates the ingestion of diverse supplier invoices and manages profit maximization for 1,153 products via ML-driven simulations.",
    kpis: [
      { label: "Active SKUs Managed", value: "1,153" },
      { label: "Parsing Throughput", value: "1,000 / 74s" },
      { label: "Architecture", value: "100% Local" },
      { label: "Forecast Accuracy", value: "<15% MAPE" },
    ],
    techStack: ["Python", "SQLite", "PyQt6", "scikit-learn", "Prophet", "Scipy"],
    featured: true,
    type: "WORK",
    hasImage: true,
    caseStudy: {
      executiveSummary:
        "As Head of Digital, I identified a critical need for granular unit-economic visibility to protect margins during aggressive scaling. I architected a Python-native desktop suite that automates the ingestion of diverse supplier invoices and manages a comprehensive database of 1,153 products. By combining heavy keyword-based extraction logic with ML-driven pricing simulations, the tool provides real-time 'What-If' analysis, allowing the executive team to adjust pricing and marketing budgets based on algorithmically validated profit maximization.",
      businessContext: [
        { label: "Industry", value: "Procurement and Distribution for E-Com" },
        { label: "Company Stage", value: "Growth — scaling margin intelligence" },
        { label: "Core Challenge", value: "Manual management of 1,153 individual products led to reactive adjustments and margin erosion" },
        { label: "Opportunity", value: "Centralize data into local SQLite environment for instant SKU-level performance audits" },
      ],
      strategicPhases: [
        {
          title: "Diagnosis & Parser Development",
          content:
            "Audited supplier invoice variability to develop a robust, keyword-heavy parser capable of extracting complex tax and fee structures from irregular PDF formats.",
        },
        {
          title: "System Design: Dual Dashboards",
          content:
            "Developed a dual-dashboard architecture: an Aggregated Visualization Layer for top-performing categories and a Granular Simulator Layer for SKU-level pricing.",
        },
        {
          title: "Implementation & Database Build",
          content:
            "Populated a local SQLite database with 1,153 products, categorizing the entire catalogue by sales velocity and margin contribution.",
        },
        {
          title: "Optimization & Logic Integration",
          content:
            "Integrated Scipy-based profit maximization algorithms that factor in dynamic variables like ad spend and shipping overheads.",
        },
      ],
      technicalArchitecture: {
        stack: ["Python", "SQLite", "PyQt6", "scikit-learn", "Prophet", "Scipy"],
        description:
          "The SKU Intelligence Layer acts as a strategic 'command center' for 1,153 products in the database, utilizing advanced keyword-based data normalization for hyper-accurate categorization.",
        dataFlow:
          "Diverse Invoices → High-speed Python Parser → Local SQLite → ML Logic Layer (Prophet/Scipy) → Dual-Dashboard Visualization.",
        integrations:
          "100% local execution with zero cloud dependencies, ensuring complete security for sensitive procurement and margin data.",
        rationale:
          "Selected local SQLite over cloud DBs to eliminate latency and ensure absolute data sovereignty for high-stakes margin calculations.",
      },
      executionLeadership: {
        stakeholders: "Lead Architect & Developer",
        teamLeadership: "Personally managed the end-to-end development of the parsing logic, database schema, and predictive modeling engine.",
        timeline: "Rapid deployment focused on protecting unit economics during aggressive scaling phases.",
        riskMitigation:
          "Used Prophet time-series models to maintain a forecast MAPE (Mean Absolute Percentage Error) of <15%, ensuring model recommendations remained grounded in reality.",
      },
      outcomes: [
        { label: "SKUs Managed", value: "1,153" },
        { label: "Parsing Throughput", value: "1,000 / 74s" },
        { label: "Data Security", value: "100% Local" },
        { label: "Forecast Accuracy", value: "85%+" },
        { label: "Strategic Visibility", value: "Real-Time" },
      ],
      strategicImpact:
        "Building this system was a turning point for how we understood our own profitability. I remember the relief of finally seeing a real-time 'What-If' scenario for our most expensive products and realizing we could optimize margins by 8% just by shifting our ad spend strategy. It felt like finally having a GPS after years of driving by intuition.",
    },
  },
  {
    id: "magento-migration",
    title: "ENTERPRISE MAGENTO CONSOLIDATION & INFRASTRUCTURE UPGRADE",
    category: "E-Commerce Infrastructure",
    summary:
      "Orchestrated the strategic migration and consolidation of four legacy Magento V1 storefronts into a unified, high-performance Magento V2 architecture with zero downtime.",
    kpis: [
      { label: "Consolidation Ratio", value: "4 : 1" },
      { label: "Global Transition", value: "0ms Downtime" },
      { label: "Data Integrity", value: "100%" },
      { label: "Deployment", value: "PROD-READY" },
    ],
    techStack: ["Magento V2", "Jira"],
    featured: false,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "As the internal Strategic Lead, I orchestrated the migration of four legacy Magento V1 storefronts into a unified, high-performance Magento V2 architecture. Managing a specialized dev agency as the primary project manager, I ensured the transition of multiple fragmented databases into a single, scalable backend. By directly handling the navigation logic, site architecture, and product templating, I facilitated a rapid 'zero-downtime' launch that modernized our enterprise commerce capabilities while drastically reducing backend management overhead.",
      businessContext: [
        { label: "Industry", value: "E-Commerce" },
        { label: "Role", value: "Lead Strategist & Agency Project Manager" },
        { label: "Core Challenge", value: "Fragmented infrastructure across 4 legacy V1 instances" },
        { label: "Consolidation Goal", value: "Merge 4 infrastructures into 1 unified scalable backend" },
      ],
      strategicPhases: [
        {
          title: "Strategic Consolidation",
          content:
            "Architected the merger of 4 legacy infrastructures into a single unified backend to power all global storefronts, utilizing Jira for rigorous sprint planning and production cadence.",
        },
        {
          title: "Frontend & Logic Rebuild",
          content:
            "Personally architected the navigation logic, landing page ecosystems, and complex product templates across all four domains to ensure a seamless multi-storefront experience.",
        },
        {
          title: "UAT & Global Transition",
          content:
            "Led intensive User Acceptance Testing (UAT) and agile-led deployment cycles to ensure 100% data integrity and zero operational disruption during the global cutover.",
        },
      ],
      technicalArchitecture: {
        stack: ["Magento V2", "Jira", "Enterprise Server Infrastructure"],
        description:
          "Multi-storefront configuration on a singular database instance designed for global scalability.",
        dataFlow:
          "Unified Backend Database → Magento V2 Multi-Store Logic → Varnish/Redis Caching → 4 Global Frontends.",
        integrations:
          "Consolidated multiple fragmented legacy storefronts into a clean, normalized relational structure.",
        rationale:
          "Shifted from an expensive 'maintenance-only' legacy setup to a growth-oriented, centralized commerce engine.",
      },
      executionLeadership: {
        stakeholders: "Internal Executives, Specialized Dev Agency, Server Infrastructure Partners",
        teamLeadership: "Managed a specialized dev agency as primary project manager, coordinating all technical and design deliverables.",
        timeline: "Achieved aggressive production timelines through streamlined agency coordination and asynchronous communication.",
        riskMitigation:
          "Rigorous UAT phases and staggered deployment testing to guarantee 0ms downtime during the global transition.",
      },
      outcomes: [
        { label: "Consolidation Ratio", value: "4:1" },
        { label: "Transition Downtime", value: "0ms" },
        { label: "Data Integrity", value: "100%" },
        { label: "Management Overhead", value: "Reduced 75%" },
      ],
      strategicImpact:
        "Migrating and consolidating four separate Magento stores at once felt like conducting an orchestra during an earthquake. I had to lead the dev agency through every sprint, ensuring the 4:1 consolidation didn't break our global presence. Personally architecting the navigation logic for multiple domains was a massive puzzle, but seeing all four storefronts go live from a single backend with zero downtime was a career-defining moment of relief.",
    },
  },
  {
    id: "local-custom-chatbot",
    title: "SECURE PRODUCT-INTELLIGENCE ENGINE (LOCAL LLM)",
    category: "Machine Learning & Data",
    summary:
      "Architecting a proprietary, high-security AI ecosystem to automate specialized content production while ensuring absolute data sovereignty via locally-hosted 7B/8B models.",
    kpis: [
      { label: "Data Sovereignty", value: "100%" },
      { label: "API Licensing Fees", value: "Zero" },
      { label: "Parameter Scale", value: "7B - 8B" },
      { label: "Access Architecture", value: "Multi-User" },
    ],
    techStack: ["Mistral/Llama", "Python", "GGUF", "Inference Server"],
    featured: false,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "As Head of Digital, I am architecting a proprietary, high-security AI ecosystem to automate specialized content production while ensuring absolute data sovereignty. This initiative involves deploying a locally-hosted 7B/8B parameter LLM (Mistral/Llama) to function as a multimodal 'Product Intelligence' partner. The system is designed to bypass the privacy risks and recurring costs of cloud-based APIs, providing the team with a secure environment to generate SEO-optimized product descriptions and blog content in the company’s specific brand voice.",
      businessContext: [
        { label: "Industry", value: "E-Commerce / AI Operations" },
        { label: "Status", value: "Planning Phase / Strategic Roadmap" },
        { label: "Core Challenge", value: "High-volume content needs vs strict corporate data privacy requirements" },
        { label: "Opportunity", value: "Internal AI Agency that understands brand tone without cloud data egress" },
      ],
      strategicPhases: [
        {
          title: "Selection & Quantization",
          content: "Evaluating Mistral and Llama 7B/8B models for the optimal balance between creative output and CPU-based inference efficiency.",
        },
        {
          title: "System Prompt & Lock Architecture",
          content: "Developing 'System Lock' logic that automatically applies brand-specific tone of voice and SEO-formatting rules based on user input.",
        },
        {
          title: "Deployment & Governance",
          content: "Building a centralized inference server for team-wide access with multi-account governance, token rate-limiting, and usage monitoring.",
        },
      ],
      technicalArchitecture: {
        stack: ["Mistral 7B / Llama 3 (8B)", "GGUF Quantization", "Python", "Local Inference Server"],
        description: "To ensure the output isn't 'generic AI,' the system includes a specialized Context Injection layer for multimodal input and systematic brand tone-mapping.",
        dataFlow: "Raw Product Data/Images → Local Inference Server → Brand-DNA System Prompts → SEO-Optimized Content Output.",
        integrations: "Lightweight internal web interface for team-wide access without requiring specialized client-side hardware.",
        rationale: "Optimized for CPU-based execution via GGUF quantization to maximize existing hardware ROI while ensuring 100% air-gapped security.",
      },
      executionLeadership: {
        stakeholders: "Corporate Stakeholders, Content Specialists, IT Infrastructure Team",
        teamLeadership: "Acting as Lead Architect & AI Strategist, shifting manual drafting workflows into an AI-assisted verification model.",
        timeline: "Active Strategic Roadmap — progressing from selection to departmental resource rollout.",
        riskMitigation: "100% local deployment ensures zero data leakage, presenting a secure alternative to commercial SaaS solutions.",
      },
      outcomes: [
        { label: "Data Sovereignty", value: "100%" },
        { label: "API Licensing Costs", value: "Zero" },
        { label: "Model Scale", value: "7B-8B" },
        { label: "System Security", value: "Air-Gapped" },
      ],
      strategicImpact:
        "Solving the tension between AI speed and corporate privacy felt like finding a way to have our cake and eat it too. By architecting this 'internal agency,' I'm not just saving on API fees; I'm building a permanent asset that understands our brand DNA better than any third-party model ever could. It's about moving from being a consumer of AI to being an owner of highly specialized intelligence.",
    },
  },
  {
    id: "server-architecture",
    title: "Server Architecture Rehaul",
    category: "Infrastructure & Systems",
    summary:
      "Complete infrastructure modernisation from legacy on-premise servers to cloud-native architecture — reducing hosting costs, eliminating downtime, and enabling auto-scaling for peak periods.",
    kpis: [
      { label: "Uptime", value: "[99.97%]" },
      { label: "Infra Cost", value: "−[42%]" },
      { label: "Deploy Speed", value: "+[600%]" },
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CloudFront"],
    featured: false,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "Legacy on-premise server infrastructure was generating recurring downtime incidents, preventing auto-scaling during peak trading periods, and consuming disproportionate IT resource for maintenance. A phased migration to cloud-native AWS architecture with containerisation and CI/CD automation reduced infrastructure costs by 42%, achieved 99.97% uptime, and enabled 10-minute deployments vs. 3-hour manual processes.",
      businessContext: [
        { label: "Industry", value: "Digital Commerce" },
        { label: "Company Stage", value: "Growth — infrastructure bottleneck limiting scale" },
        { label: "Core Challenge", value: "On-premise downtime risk, no auto-scaling, high maintenance overhead" },
        { label: "Risk Level", value: "High — peak trading period revenue exposure" },
        { label: "Opportunity", value: "Cloud-native infrastructure enabling elastic scaling and deployment velocity" },
      ],
      strategicPhases: [
        { title: "Phase 1 — Diagnosis", content: "Infrastructure audit: 6 on-premise servers, 14 applications, deployment process analysis, downtime incident review (23 incidents in 12 months), cost analysis." },
        { title: "Phase 2 — System Design", content: "AWS architecture design with EKS for Kubernetes orchestration. Terraform infrastructure-as-code specification. Docker containerisation strategy for 14 applications. CI/CD pipeline design with GitHub Actions." },
        { title: "Phase 3 — Implementation", content: "Docker containerisation of all 14 applications. EKS cluster deployment via Terraform. GitHub Actions CI/CD pipelines. CloudFront CDN configuration. Monitoring stack: CloudWatch + PagerDuty." },
        { title: "Phase 4 — Optimization", content: "Auto-scaling policy tuning based on peak traffic patterns. Reserved instance cost optimisation. Security hardening with AWS WAF and Shield. Cost monitoring dashboards with budget alerts." },
      ],
      technicalArchitecture: {
        stack: ["AWS EKS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CloudFront CDN", "AWS RDS", "CloudWatch", "PagerDuty"],
        description: "Kubernetes-orchestrated container infrastructure on AWS EKS. Infrastructure-as-code via Terraform enables reproducible environments. CloudFront CDN for global performance.",
        dataFlow: "Code commit → GitHub Actions CI → Docker build + test → EKS deployment → CloudFront cache invalidation → PagerDuty monitoring.",
        integrations: "PagerDuty for incident management. AWS Cost Explorer for spend monitoring. Datadog for application performance monitoring.",
        rationale: "AWS selected for ecosystem maturity and managed Kubernetes (EKS) reducing operational overhead. Terraform chosen for multi-environment consistency and infrastructure auditability.",
      },
      executionLeadership: {
        stakeholders: "CTO, IT Director, Development Team Lead, Security Officer",
        teamLeadership: "Led DevOps engineer and cloud architect. Coordinated with development team for application containerisation. Managed 4-week parallel operation period.",
        timeline: "20-week migration. Zero customer-facing downtime during cutover. Phased by application criticality.",
        riskMitigation: "Blue-green deployment strategy for zero-downtime migration. On-premise infrastructure maintained as failover for 60 days. Comprehensive runbook for every migration step.",
      },
      outcomes: [
        { label: "Infrastructure Uptime", value: "[99.97%]" },
        { label: "Infrastructure Cost Reduction", value: "−[42%]" },
        { label: "Deployment Speed", value: "+[600%]" },
        { label: "Incident Rate Reduction", value: "−[96%]" },
        { label: "Applications Containerised", value: "[14/14]" },
      ],
      strategicImpact:
        "Moving from legacy on-premise hardware to AWS was a complete mindset shift for the company. I had to lead the charge on containerization and Terraform, which was a steep learning curve for everyone. Seeing our deploy speed jump by 600% changed how we think about shipping code. It felt like moving from a steam engine to a rocket ship.",
    },
  },
  {
    id: "react-landing-ecosystem",
    title: "React Landing Page Ecosystem",
    category: "Infrastructure & Systems",
    summary:
      "Modular React component library and landing page system enabling marketing team to launch high-performance campaign pages without engineering dependency.",
    kpis: [
      { label: "Launch Time", value: "−[83%]" },
      { label: "Conversion", value: "+[31%]" },
      { label: "Engineering Dep.", value: "−[100%]" },
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Storybook", "Vercel"],
    featured: false,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "Marketing team was bottlenecked on engineering resource for campaign landing page creation — average 3-week wait per page with inconsistent quality and performance. A modular React component library was architected and built, enabling the marketing team to assemble high-performance landing pages independently, reducing time-to-launch by 83% and improving conversion rates by 31% through performance-optimised components.",
      businessContext: [
        { label: "Industry", value: "Digital Commerce / SaaS" },
        { label: "Company Stage", value: "Growth — marketing velocity bottlenecked by engineering" },
        { label: "Core Challenge", value: "3-week engineering dependency per landing page, inconsistent quality, poor Core Web Vitals" },
        { label: "Risk Level", value: "Medium — marketing velocity and campaign ROI impact" },
        { label: "Opportunity", value: "Self-service component system enabling marketing autonomy at engineering quality" },
      ],
      strategicPhases: [
        { title: "Phase 1 — Diagnosis", content: "Audit of 24 existing landing pages: performance scores (avg. 52/100 Lighthouse), conversion rates, design inconsistency inventory, and engineering time tracking." },
        { title: "Phase 2 — System Design", content: "Component architecture specification: 34 modular components covering all landing page patterns. Design token system. Storybook documentation structure. Vercel deployment workflow for marketing team." },
        { title: "Phase 3 — Implementation", content: "34 React components built in TypeScript with Tailwind CSS. Storybook documentation for each component. Visual page builder configuration. Vercel automated deployment pipeline. Marketing team training programme." },
        { title: "Phase 4 — Optimization", content: "Performance monitoring dashboard for all live pages. Component usage analytics to prioritise improvements. A/B testing integration at component level. Quarterly design system review cycle." },
      ],
      technicalArchitecture: {
        stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Storybook", "Vercel", "Playwright (testing)", "Radix UI"],
        description: "34-component library with TypeScript interfaces ensuring consistent prop contracts. Storybook as living documentation. Vercel for zero-configuration deployments.",
        dataFlow: "Marketing team → Storybook component selection → Page assembly → Git commit → Vercel auto-deploy → Live URL within minutes.",
        integrations: "Figma design token sync for design consistency. Google Analytics 4 event tracking built into components. HubSpot form integration as standard component.",
        rationale: "React + TypeScript for type safety and developer experience. Tailwind CSS for utility-first styling with no CSS specificity issues. Vercel for instant preview deployments reducing review friction.",
      },
      executionLeadership: {
        stakeholders: "Head of Marketing, Development Team Lead, Design Lead, Product Manager",
        teamLeadership: "Led React developer and UX designer. Ran 3 stakeholder workshops to define component requirements from marketing team needs.",
        timeline: "12-week build. Weeks 1–3: Architecture. Weeks 4–9: Component build. Weeks 10–11: Documentation + training. Week 12: Handover.",
        riskMitigation: "Marketing team involved in weekly reviews throughout build. Beta programme with 2 landing pages before full rollout. Engineering review gate for any new component additions.",
      },
      outcomes: [
        { label: "Page Launch Time Reduction", value: "−[83%]" },
        { label: "Conversion Rate Improvement", value: "+[31%]" },
        { label: "Engineering Dependency", value: "[Eliminated]" },
        { label: "Components Built", value: "[34]" },
        { label: "Lighthouse Score (avg)", value: "[94/100]" },
      ],
      strategicImpact:
        "I was tired of seeing the marketing team wait weeks for simple landing pages. Building this component library was my way of 'teaching them to fish.' It took some time to get the TypeScript contracts right, but now they ship at engineering quality without needing me. It's the ultimate productivity hack.",
    },
  },
  {
    id: "digital-team-leadership",
    title: "Building & Leading Digital Team",
    category: "Leadership & Operations",
    summary:
      "Structured build-out of a 4-specialist digital team from scratch — defining roles, hiring, onboarding, and establishing operating systems that delivered measurable performance gains within 90 days.",
    kpis: [
      { label: "Team Size", value: "[4 Specialists]" },
      { label: "Revenue Impact", value: "+[18%]" },
      { label: "90-Day Ramp", value: "[Full Output]" },
    ],
    techStack: ["Notion", "Linear", "Slack", "Loom", "Google Workspace", "Looker Studio"],
    featured: false,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "Digital function was operating as a single-person dependency with no documented systems, inconsistent performance, and no scalability. Structured a 4-specialist team build: defined role architecture, ran hiring process, built onboarding systems, and established operating frameworks that delivered full team output within 90 days and contributed to +18% net revenue growth within the first year.",
      businessContext: [
        { label: "Industry", value: "Digital Commerce" },
        { label: "Company Stage", value: "Growth — single-person digital dependency" },
        { label: "Core Challenge", value: "No team structure, no documented systems, no scalability" },
        { label: "Risk Level", value: "High — key person dependency on all digital operations" },
        { label: "Opportunity", value: "Structured team build enabling digital function to scale independently" },
      ],
      strategicPhases: [
        { title: "Phase 1 — Diagnosis", content: "Capability gap analysis against digital function requirements. Role architecture design covering paid media, email/retention, content, and analytics. Salary benchmarking and hiring timeline planning." },
        { title: "Phase 2 — System Design", content: "Operating system design: Notion workspace architecture, Linear project management, weekly cadence structure, OKR framework, performance review system, and SOP documentation framework." },
        { title: "Phase 3 — Implementation", content: "4-specialist hiring process: job brief writing, agency briefing, interview framework, technical assessment design, and offer negotiation. 30-60-90 day onboarding programme per role. Operating systems deployed." },
        { title: "Phase 4 — Optimization", content: "Weekly 1:1 cadence established. Monthly OKR review. Quarterly performance calibration. Skill development plans per specialist. Team reporting dashboard in Looker Studio." },
      ],
      technicalArchitecture: {
        stack: ["Notion (Operations OS)", "Linear (Project Management)", "Slack (Communication)", "Loom (Async Training)", "Looker Studio (Reporting)", "Google Workspace"],
        description: "Notion as the central operating system: SOPs, briefs, project tracking, and knowledge base. Linear for sprint-based project management. Looker Studio for team performance visibility.",
        dataFlow: "Strategy → Linear sprint tasks → Specialist execution → Looker Studio performance data → Weekly review → Strategy refinement.",
        integrations: "Looker Studio connected to GA4, Meta Ads, Google Ads, and Klaviyo for unified team performance dashboard. Slack + Linear integration for automated project notifications.",
        rationale: "Notion chosen for flexibility in building custom operating systems without engineering resource. Linear selected for its engineering-grade project management applied to digital marketing operations.",
      },
      executionLeadership: {
        stakeholders: "CEO, HR Director, Finance Director (budget approval)",
        teamLeadership: "Defined all 4 roles, ran hiring process end-to-end, built all onboarding materials, established coaching cadence, and designed performance management framework.",
        timeline: "6-month full build. Month 1: Role design + hiring briefs. Months 2–3: Hiring. Month 4: Onboarding. Months 5–6: Full operation + optimisation.",
        riskMitigation: "Phased hiring to manage cashflow impact. 3-month probationary performance milestones defined in advance. Cross-training between roles to eliminate single-specialist dependencies.",
      },
      outcomes: [
        { label: "Team Built", value: "[4 Specialists]" },
        { label: "Revenue Growth Contribution", value: "+[18%]" },
        { label: "Time to Full Output", value: "[90 days]" },
        { label: "SOPs Documented", value: "[47]" },
        { label: "Key Person Dependency", value: "[Eliminated]" },
      ],
      strategicImpact:
        "Growing a team from just myself to four specialists was a profound transition. I had to stop doing everything myself and start building systems for others to succeed. Documenting those 47 SOPs was a grind, but seeing the team operate at full output within 90 days is my proudest leadership achievement.",
    },
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing Oversight",
    category: "Leadership & Operations",
    summary:
      "End-to-end performance marketing strategy and execution leadership across Meta, Google, and TikTok — delivering +371% ROAS improvement through systematic testing, creative strategy, and attribution architecture.",
    kpis: [
      { label: "ROAS", value: "+[371%]" },
      { label: "CAC", value: "−[34%]" },
      { label: "Channels", value: "[3 Active]" },
    ],
    techStack: ["Meta Ads", "Google Ads", "TikTok Ads", "Triple Whale", "Northbeam", "GA4"],
    featured: false,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "Performance marketing function was running on intuition-based optimisation with poor attribution infrastructure, no systematic creative testing framework, and declining ROAS quarter-on-quarter. A structured performance marketing system was built: multi-touch attribution, systematic creative testing cadence, audience architecture redesign, and channel budget allocation model. Result: +371% ROAS improvement year-on-year with 34% reduction in customer acquisition cost.",
      businessContext: [
        { label: "Industry", value: "DTC E-Commerce" },
        { label: "Company Stage", value: "Growth — paid acquisition scaling challenge" },
        { label: "Core Challenge", value: "Declining ROAS, no attribution clarity, no creative testing system" },
        { label: "Risk Level", value: "High — significant paid media budget with deteriorating efficiency" },
        { label: "Opportunity", value: "Systematic performance marketing engine with compounding efficiency gains" },
      ],
      strategicPhases: [
        { title: "Phase 1 — Diagnosis", content: "Full account audit across Meta, Google, and TikTok. Attribution model analysis — identified 64% of conversions were mis-attributed. Creative performance analysis: top 20% of ads generating 89% of revenue. Audience overlap analysis revealing significant budget wastage." },
        { title: "Phase 2 — System Design", content: "Attribution architecture: Triple Whale MTA + Meta CAPI for signal quality. Creative testing framework: 2-2-2 testing structure (2 hooks, 2 bodies, 2 CTAs). Audience architecture: interest exclusion, LTV-based lookalikes, and retention campaigns. Budget allocation model across channels." },
        { title: "Phase 3 — Implementation", content: "Triple Whale + Northbeam MTA deployment. Meta CAPI implementation. Audience architecture rebuild. Creative testing sprint: 18 new creatives per month. Google Ads restructure: PMAX + branded + non-branded segmentation. TikTok Ads launch with UGC creative strategy." },
        { title: "Phase 4 — Optimization", content: "Weekly creative performance review cadence. Monthly audience architecture review. Quarterly channel allocation rebalancing. Creative fatigue monitoring with automated pause thresholds. Incrementality testing for budget justification." },
      ],
      technicalArchitecture: {
        stack: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Triple Whale MTA", "Northbeam", "Meta CAPI", "GA4", "Looker Studio"],
        description: "Multi-touch attribution layer (Triple Whale + Northbeam) sits above all channel reporting. Meta CAPI ensures server-side signal quality. Looker Studio for unified cross-channel view.",
        dataFlow: "Ad impression → Click → Shopify purchase event → Meta CAPI server-side → Triple Whale MTA model → Channel attribution credit → Looker Studio reporting.",
        integrations: "Triple Whale connected to Shopify, Meta, Google, and TikTok for unified attribution. Northbeam as secondary MTA model for budget decision validation.",
        rationale: "MTA layer critical given iOS 14+ signal loss. Triple Whale selected for Shopify-native integration and DTC-specific attribution models. Northbeam as validation layer to reduce single-model dependency.",
      },
      executionLeadership: {
        stakeholders: "CEO, CFO (budget authority), Creative Director, Retention Manager",
        teamLeadership: "Led paid media specialist and creative strategist. Briefed and managed UGC creator network of 8 creators. Weekly performance review with CEO and CFO.",
        timeline: "Ongoing strategic oversight. Initial restructure: 8 weeks. Systematic testing cadence: monthly. Quarterly strategic reviews.",
        riskMitigation: "Budget reallocation gated on 30-day performance data. Incrementality tests before major budget increases. Creative reserves maintained to prevent ad fatigue downtime.",
      },
      outcomes: [
        { label: "ROAS Improvement", value: "+[371%]" },
        { label: "CAC Reduction", value: "−[34%]" },
        { label: "Active Paid Channels", value: "[3]" },
        { label: "Creative Testing Volume", value: "[18/month]" },
        { label: "Attribution Accuracy", value: "+[64%]" },
      ],
      strategicImpact:
        "Restructuring our paid media attribution was a battle against 'intuition-based' spending. I had to fight for Triple Whale and Northbeam to get the data we needed. Boosting ROAS by 371% proved that a data-first approach wins every time. It's not just about spending money; it's about the math behind the scale.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const categories: string[] = [
  "All",
  "E-Commerce Infrastructure",
  "Machine Learning & Data",
  "Market Expansion",
  "Infrastructure & Systems",
  "Leadership & Operations",
];
