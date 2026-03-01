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
  links?: { label: string; url: string }[];
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
          title: "Phase 1 - Diagnosis",
          content:
            "Audited the limitations of the 2016 CMS and mapped a new taxonomy for 513 premium products (Marble, Granite, etc.).",
        },
        {
          title: "Phase 2 - System Design",
          content:
            "Designed a multi-lingual Shopify environment (4 languages) with integrated shipping and payment logic.",
        },
        {
          title: "Phase 3 - Implementation",
          content:
            "Led the internal team on repetitive workflows while I personally handled the Shopify architecture, GTM tracking, and DNS migration.",
        },
        {
          title: "Phase 4 - Launch & SEO",
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
        "This was a high-stakes project, I didn't want to pay thousands of euros for an agency to do this, so I decided to do it myself. It was quite intense and I came up with the idea and planning completely by myself. Execution is, what matters most after all - glad I aced that as well. Went basically face first and did, what I do best: learning by doing, by trial and error. Good traits to have for this: problem-solving and staying calm under pressure.",
    },
  },
  {
    id: "digital-team-leadership",
    title: "STRATEGIC LEADERSHIP & DIGITAL TALENT TRANSFORMATION",
    category: "Leadership & Operations",
    summary:
      "Initially operating as a single-person dependency, I successfully transitioned into a leadership role to architect and scale a high-performance digital function from the ground up.",
    kpis: [
      { label: "Team Built", value: "4 Specialists" },
      { label: "Revenue Growth", value: "+18%" },
      { label: "Time to Output", value: "90 Days" },
      { label: "SOPs Documented", value: "47" },
    ],
    techStack: ["Internal Knowledge Base (HTML)", "Microsoft Teams", "Local/Private LLMs", "Financial Strategy Tools"],
    featured: true,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "Initially operating as a single-person dependency for all strategic digital initiatives, I successfully transitioned into a leadership role to architect and scale a high-performance digital function. By building a four-specialist team from the ground up, I eliminated key-person dependencies and shifted my focus to high-level financial strategy and global orchestration. I have successfully infused a 'continuous learning' culture into an established organization, implementing EU AI Act-compliant workflows that have measurably increased productivity and contributed to an 18% net revenue growth.",
      businessContext: [
        { label: "Industry", value: "Digital Commerce" },
        { label: "Company Stage", value: "Growth - transitioning from a single-person digital dependency to a scalable team structure" },
        { label: "Core Challenge", value: "Lack of documented systems and scalability; high-key person risk on all digital operations" },
        { label: "Opportunity", value: "Build a lean, high-output team capable of executing complex growth initiatives under rigid budget constraints" },
      ],
      strategicPhases: [
        {
          title: "Diagnosis & Gap Analysis",
          content: "Conducted a capability gap analysis to define role architectures for paid media, email/retention, content, and analytics, ensuring alignment with long-term growth targets.",
        },
        {
          title: "The Knowledge Suite",
          content: "Built a custom internal suite for guidance, providing new hires with a digital knowledge base. This functions as a course catalog and real-time learning material to ensure procedural consistency.",
        },
        {
          title: "Talent Acquisition & Mentorship",
          content: "Led the end-to-end hiring and onboarding process for 4 specialists, including the direct recruitment and mentorship of apprentices into high-value contributors.",
        },
        {
          title: "AI Integration & Optimization",
          content: "Implemented frontier AI/LLM tools via private deployment to automate content creation and SEO workflows, maintaining productivity while adhering to strict data privacy requirements.",
        },
      ],
      technicalArchitecture: {
        stack: ["Internal HTML Knowledge Base", "Microsoft Teams", "Private LLM Infrastructure", "Departmental Budgeting Frameworks"],
        description: "A hybrid management architecture combining real-time communication with a static, deep-linked institutional knowledge base.",
        dataFlow: "Strategy → Knowledge Base Check → AI-Assisted Execution → Teams Performance Sync → Financial Oversight Review.",
        integrations: "Integrated EU AI Act-compliant frameworks for internal LLM usage and departmental financial health monitoring.",
        rationale: "Selected a static HTML-based knowledge base to ensure zero-latency access to SOPs while using private AI models to maintain absolute data sovereignty.",
      },
      executionLeadership: {
        stakeholders: "Corporate C-Suite, Finance Department, Apprentices/Junior Specialists",
        teamLeadership: "Lead Architect of Culture & Talent. Directly responsible for the hiring, training, and professional development of the entire digital function.",
        timeline: "Continuous progression from single-person dependency to a self-sufficient, high-output unit.",
        riskMitigation: "Phased hiring to manage cash-flow impact, backed by 3-month probationary performance milestones to ensure rigorous quality control.",
      },
      outcomes: [
        { label: "Key Person Dependency", value: "Eliminated" },
        { label: "Net Revenue Growth", value: "+18%" },
        { label: "SOPs Institutionalized", value: "47" },
        { label: "Operational Readiness", value: "90 Days" },
      ],
      strategicImpact:
        "Growing a team from just myself to four specialists was a profound transition. Stopped doing everything myself and started building on top of my knowledge - a team that is young and eager to achieve bigger goals. This allowed me to focus more on strategy and execute the very difficult tasks, that most employees with my few years of experience generally couldn't manage. This is what I call 'engineering growth at scale'.",
    },
  },
  {
    id: "eu-market-expansion",
    title: "STRATEGIC EU MARKET EXPANSION & B2B PENETRATION",
    category: "Market Expansion",
    summary:
      "Architected a high-velocity expansion strategy for France, Netherlands, and Benelux, integrating multilingual Shopify architecture with localized SEO and B2B partnership pipelines.",
    kpis: [
      { label: "Rev Growth (Y1)", value: "+9-11%" },
      { label: "Exec. Timeline", value: "3 Weeks" },
      { label: "Rev Growth (Y2)", value: "15%" },
      { label: "Initial Markets", value: "3 EU" },
    ],
    techStack: ["Shopify Multilingual", "Excel/HTML Engine", "Google PMax", "Localized SEO"],
    featured: true,
    type: "WORK",
    hasImage: false,
    caseStudy: {
      executiveSummary:
        "I architected a high-velocity expansion strategy to capture market share across three key European regions (France, Netherlands, and the Benelux states). Within a three-week window, I conducted a deep-dive analysis covering keyword search volume, purchasing power, and competitor landscapes, producing a graphic Excel/HTML-based roadmap for stakeholders. This project correlates directly with our core commerce overhaul [shopify-store-building], integrating a multilingual Shopify storefront with localized SEO and dedicated performance marketing budgets.",
      businessContext: [
        { label: "Industry", value: "Premium Decor & Specialized Furniture" },
        { label: "Company Stage", value: "Established brand moving into international market-share acquisition" },
        { label: "Core Challenge", value: "Fragmented international presence and lack of localized user experiences in key purchasing regions" },
        { label: "Opportunity", value: "High search volume in specific EU markets paired with an untapped B2B designer network" },
      ],
      strategicPhases: [
        {
          title: "Market Intelligence",
          content: "Conducting rigorous research into competitor density and regional purchasing power to identify high-potential 'entry zones'.",
        },
        {
          title: "Infrastructure Localisation",
          content: "Leveraging Shopify’s multilingual capabilities to ensure localized navigation and optimized SEO for each target language.",
        },
        {
          title: "Stakeholder Alignment",
          content: "Onboarded the external ad agency within 21 days to deploy market-specific PMax campaigns with independent budgeting.",
        },
        {
          title: "Omnichannel B2B Outreach",
          content: "Developing a partnership pipeline targeting European architects and interior designers to position specialized product lines.",
        },
      ],
      technicalArchitecture: {
        stack: ["Shopify Multilingual", "Excel/HTML Visualization Engine", "Google Ads (Regional PMax)"],
        description: "Localized storefronts with SEO-optimized navigation for target languages, powered by regional supplier integrations.",
        dataFlow: "Market Research → Regional Roadmap → Multilingual Shopify Sub-store → Localized PMax Scaling.",
        integrations: "Integration of regional supplier ateliers to facilitate localized assembly and B2B distribution agreements.",
        rationale: "Excel/HTML engine developed for stakeholder visualization; Shopify selected for rapid deployment of localized frontend experiences.",
      },
      executionLeadership: {
        stakeholders: "Company Leadership, Regional Supplier Ateliers, External Ad Agencies",
        teamLeadership: "Lead Strategist & Expansion Architect. Currently guiding the transition from research-phase to full market implementation.",
        timeline: "Ongoing Implementation (Research Complete). Standard planning cycle accelerated from months to 21 days.",
        riskMitigation: "Established feedback loops to analyze per-country product performance, allowing for rapid storefront adaptations based on user behavior.",
      },
      outcomes: [
        { label: "Projected Growth (Y1)", value: "+9-11%" },
        { label: "Exec. Timeline", value: "21 Days" },
        { label: "Projected Growth (Y2)", value: "15%" },
        { label: "Target Regions", value: "FR, NL, Benelux" },
        { label: "Status", value: "Ongoing" },
      ],
      strategicImpact:
        "This initiave proves my now Senior level understanding of market dynamics. Thankfully I've earned my right to autonomously plan and work overall, because of the trust in my abilities. My aim is to execute this within the whole company to kind of develop a growth mindset throughout all departments. Opening new markets can be a risky endeavor, especially when entering unprepared - I am sure my thorough research will guide us to enter as efficiently as possible. First steps will be to gain data to understand/interpret and then double down on what works.",
    },
    links: [
      { label: "Core Infrastructure (Shopify Project)", url: "/projects/shopify-store-building" }
    ]
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
          title: "The Forecast Engine - Technical Deep Dive",
          content:
            "Implemented an Ensemble Modeling approach using Linear Regression & Exponential Smoothing for momentum, combined with Monte Carlo simulations to run thousands of 'what-if' scenarios against market volatility.",
        },
        {
          title: "The Intelligence Layer - Future Roadmap",
          content:
            "Transitioning from visual dashboards to a Conversational AI Interface via Local Inference (7B-8B parameter LLMs). Implementing RAG (Retrieval-Augmented Generation) indexed against parsed invoice data.",
        },
        {
          title: "Data Operations - High Speed Parsing",
          content:
            "Engineered a high-speed backend capable of massive ingestion, successfully parsing 2,000 multi-format invoices in 86 seconds with structured output for modeling.",
        },
        {
          title: "The Strategic Layer - Decision Engine",
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
        "This project took a toll on me, but it was worth it. I learned a ton during building this and felt like a proper engineer. The learnings and data + prognosis helped my efforts in transforming our initiaves and further get us on track to reach revenue numbers never had before.",
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
        timeline: "Active Strategic Roadmap - progressing from selection to departmental resource rollout.",
        riskMitigation: "100% local deployment ensures zero data leakage, presenting a secure alternative to commercial SaaS solutions.",
      },
      outcomes: [
        { label: "Data Sovereignty", value: "100%" },
        { label: "API Licensing Costs", value: "Zero" },
        { label: "Model Scale", value: "7B-8B" },
        { label: "System Security", value: "Air-Gapped" },
      ],
      strategicImpact:
        "Fun project, but even more long-term value. Staying true to regulatory guidelines (AI Act), while being able to write content in our brand voice with many custom data points is a big win. I can imagine to widen this intelligence suite out to also handle sensitive data and it would still be local and secure. This is the future of AI in business (especially in the EU).",
    },
  },
  {
    id: "performance-marketing",
    title: "STRATEGIC PERFORMANCE MARKETING & AD-TECH OVERHAUL",
    category: "Leadership & Operations",
    summary:
      "Spearheaded a strategic shift in performance marketing, onboarding specialized Google strategist partners to replace legacy tracking with robust, data-verified infrastructure for 371% ROAS uplift.",
    kpis: [
      { label: "Total ROAS", value: "+371%" },
      { label: "Peak PMax", value: "1127%" },
      { label: "CPC Reduction", value: "-29%" },
      { label: "Testing Volume", value: "18/mo" },
    ],
    techStack: ["Google Ads", "Merchant Center", "GTM", "GA4", "Looker Studio"],
    featured: false,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "Identifying significant untapped potential in our existing ad spend, I spearheaded a strategic shift in our performance marketing function. I led the sourcing and onboarding of a specialized Google Ads agency-led by a former Google strategist-to replace fragmented, 'spooky' tracking with a robust, data-verified infrastructure. By acting as the Lead Strategist and Project Manager, I coordinated the deployment of advanced PMax and Shopping campaigns, resulting in a 371% increase in total ROAS and a 29% reduction in CPC, all while maintaining a consistent budget compared to previous years.",
      businessContext: [
        { label: "Industry", value: "DTC E-Commerce" },
        { label: "Company Stage", value: "Growth - scaling paid acquisition through data-driven precision" },
        { label: "Core Challenge", value: "Declining ROAS and unreliable attribution prevented confident scaling of ad spend" },
        { label: "Opportunity", value: "Implement verified Google Ads tracking and expert retargeting to maximize efficiency of current budgets" },
      ],
      strategicPhases: [
        {
          title: "Diagnosis",
          content: "Audited legacy ad accounts to uncover tracking discrepancies and misattributed conversions.",
        },
        {
          title: "Partner Selection",
          content: "Sourced and vetted a high-tier agency partner with deep Google-internal expertise.",
        },
        {
          title: "Infrastructure Rehaul",
          content: "Oversaw the implementation of 'clean' data collection and server-side tracking to future-proof attribution.",
        },
        {
          title: "Campaign Architecture",
          content: "Collaborated with the agency to design high-performance PMax and Shopping structures with advanced retargeting logic.",
        },
      ],
      technicalArchitecture: {
        stack: ["Google Ads (PMax, Shopping)", "Merchant Center", "Google Tag Manager", "GA4"],
        description: "Advanced PMax and Shopping structures with advanced retargeting logic and feed optimization.",
        dataFlow: "Merchant Center Feed → Google Ads PMax/Shopping → GTM Server-Side Tracking → GA4 → Looker Studio Dashboards.",
        integrations: "Integrated server-side tracking and Looker Studio for unified cross-channel visualization.",
        rationale: "Vite chosen for near-instant HMR; Tailwind CSS selected for utility-first styling without CSS specificity conflicts.",
      },
      executionLeadership: {
        stakeholders: "Secured C-suite buy-in for agency shift by demonstrating projected ROI vs. legacy performance.",
        teamLeadership: "Lead Strategist & Agency Project Manager. Coordinated with specialized Google strategist agency for high-performance campaign deployment.",
        timeline: "Integrating this agency partner into the Strategic EU Market Expansion [eu-market-expansion] to conduct audits for new territories.",
        riskMitigation: "Established automated pause thresholds for campaigns to prevent budget wastage during creative fatigue.",
      },
      outcomes: [
        { label: "Total ROAS Uplift", value: "+371%" },
        { label: "Peak PMax ROAS", value: "1127%" },
        { label: "CPC Reduction", value: "-29%" },
        { label: "Testing Volume", value: "18/mo" },
        { label: "Ad Spend", value: "Stable" },
      ],
      strategicImpact:
        "As an E-Commerce company, employees like me who are in charge, get bombarded with E-mails from agencies. I took the initiative on finding a possible partner, because my gathered data clearly indicated that our in house solution is not up to par with the potential. The results speak for themselves - ultimately the ad budget rose by like 4% and the ROI is tremendously enhanced. With the market expansion and new storefront, execution here will matter more than ever.",
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
    featured: false,
    type: "WORK",
    hasImage: true,
    caseStudy: {
      executiveSummary:
        "As Head of Digital, I identified a critical need for granular unit-economic visibility to protect margins during aggressive scaling. I architected a Python-native desktop suite that automates the ingestion of diverse supplier invoices and manages a comprehensive database of 1,153 products. By combining heavy keyword-based extraction logic with ML-driven pricing simulations, the tool provides real-time 'What-If' analysis, allowing the executive team to adjust pricing and marketing budgets based on algorithmically validated profit maximization.",
      businessContext: [
        { label: "Industry", value: "Procurement and Distribution for E-Com" },
        { label: "Company Stage", value: "Growth - scaling margin intelligence" },
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
        "Building this system was a turning point for how we understood our own profitability. I remember the relief of finally seeing a real-time 'What-If' scenario for our most expensive products and realizing we could optimize margins by 8% just by shifting our ad spend strategy. I never liked math in school, funnily enough - now, when understanding how complex algorithmic thinking can influence decisions, it turned out to be my best buddy.",
    },
  },
  {
    id: "react-landing-ecosystem",
    title: "MODULAR WEB ECOSYSTEM & SERVICE INFRASTRUCTURE",
    category: "Infrastructure & Systems",
    summary:
      "Architected a modular React-based ecosystem for service and informational web properties, enabling 83% faster deployment of high-performance domains via a reusable TypeScript component library.",
    kpis: [
      { label: "Launch Time", value: "-83%" },
      { label: "Web Properties", value: "4" },
      { label: "Conversion Rate", value: "+31%" },
      { label: "Accessibility", value: "100%" },
    ],
    techStack: ["TypeScript", "React 18", "Vite", "Tailwind CSS", "Vercel"],
    featured: false,
    type: "WORK",
    caseStudy: {
      executiveSummary:
        "To support the expansion of our brand beyond traditional e-commerce, I architected a modular React-based ecosystem for our service and informational web properties. By moving away from rigid templates to a high-performance stack (TypeScript, Vite, Tailwind), I enabled the rapid deployment of multiple domains-including specialized service sites like zimmerbrunnen-service.at. This transition reduced launch times by 83% and provided a seamless, informational layer to our digital footprint that complements our primary sales channels.",
      businessContext: [
        { label: "Industry", value: "Digital Service & High-End Maintenance" },
        { label: "Company Stage", value: "Growth - expanding into service-based revenue streams" },
        { label: "Core Challenge", value: "Legacy web creation was slow and lacked the performance needed for SEO-driven informational content" },
        { label: "Opportunity", value: "Build a reusable component library to launch high-performance, informational domains at scale" },
      ],
      strategicPhases: [
        {
          title: "Diagnosis",
          content: "Audited existing page launch workflows and identified 3-week engineering dependencies per landing page.",
        },
        {
          title: "System Design",
          content: "Architected a modular component library using TypeScript interfaces to ensure consistent design across all domains.",
        },
        {
          title: "Implementation",
          content: "Developed 34+ reusable React/Tailwind components, allowing for the rapid assembly of sites like wandbrunnen.at.",
        },
        {
          title: "Deployment",
          content: "Established a streamlined Vercel/Git-based workflow for instant updates across the multi-domain ecosystem.",
        },
      ],
      technicalArchitecture: {
        stack: ["TypeScript", "React 18", "Vite", "Tailwind CSS"],
        description: "34-component library with strict prop-types for type safety and developer experience.",
        dataFlow: "Marketing team → modular assembly → Git commit → Vercel auto-deploy → Live URL.",
        integrations: "Maintained static HTML/CSS/Vanilla JS builds for ultra-lightweight informational sites where appropriate.",
        rationale: "Vite chosen for near-instant HMR; Tailwind CSS selected for utility-first styling without CSS specificity conflicts.",
      },
      executionLeadership: {
        stakeholders: "Head of Marketing, Lead Frontend Architect",
        teamLeadership: "Enabled the marketing team to launch and update informational content independently through the modular system.",
        timeline: "12-week total build-out from architecture to the first 4 domains going live.",
        riskMitigation: "Integrated Lighthouse-driven performance monitoring to maintain scores above 90/100 across all properties.",
      },
      outcomes: [
        { label: "Launch Time Reduction", value: "-83%" },
        { label: "Conversion Improvement", value: "+31%" },
        { label: "Domains Live", value: "4" },
        { label: "Dependencies", value: "Eliminated" },
        { label: "Lighthouse Score", value: "90+" },
      ],
      strategicImpact:
        "I like tough logical challenges, so frontend work generally is something to take my mind off things. However, sometimes it's also nice to build something aesthetically pleasing and shifting the focus on usability. With AI as a sparring partner, I can whip up a simple landing page within an hour, which is something I really enjoy. Also built villasofmakarska.com for a buddy of mine - my best site yet (based on design).",
    },
    links: [
      { label: "zimmerbrunnen-service.at", url: "https://zimmerbrunnen-service.at" },
      { label: "wandbrunnen.at", url: "https://wandbrunnen.at" },
    ],
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
        "The first bigger project of my career that involved managing stakeholders in critical roles. Our main revenue drivers are the storefronts - if execution was messed up here, we could have packed our bags, so I was relieved and proud of the great work done by everyone involved. I was simultaneously a stepping stone for me personally.",
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
