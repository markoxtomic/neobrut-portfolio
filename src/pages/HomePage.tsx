import { useState } from "react";
import { featuredProjects } from "../data/projects";
import type { Project } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

interface HomePageProps {
  onOpenCaseStudy: (project: Project) => void;
  onNavigate: (page: string) => void;
}

export function HomePage({ onOpenCaseStudy, onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center pt-16"
        style={{ borderBottom: "3px solid #000" }}
      >
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-24 w-full">
          {/* Label */}
          <div className="flex flex-col gap-1 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Selected Portfolio of Marko Tomic</span>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#FFCC00]" style={{ border: "2px solid #000" }} />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Head of Digital & Strategy</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-8"
            style={{ maxWidth: "900px", lineHeight: "1.08" }}
          >
            Engineering Digital<br className="hidden md:block" /> Growth at Scale.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-12 max-w-2xl leading-relaxed">
            Turning fragmented operations into structured, revenue-generating systems.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12" style={{ border: "3px solid #000" }}>
            <div className="p-5 md:p-6" style={{ borderRight: "2px solid #000", background: "#FFCC00" }}>
              <div className="text-3xl md:text-4xl font-black leading-none mb-2">+18%</div>
              <div className="text-xs font-mono uppercase tracking-widest">Net Revenue Growth</div>
              <div className="text-xs font-mono text-gray-600 mt-1">2024 → 2025</div>
            </div>
            <div className="p-5 md:p-6" style={{ borderRight: "2px solid #000", background: "#fff" }}>
              <div className="text-3xl md:text-4xl font-black leading-none mb-2">+371%</div>
              <div className="text-xs font-mono uppercase tracking-widest">ROAS Uplift</div>
              <div className="text-xs font-mono text-gray-600 mt-1">Agency Selection & Scale</div>
            </div>
            <div className="p-5 md:p-6" style={{ borderRight: "2px solid #000", background: "#fff" }}>
              <div className="text-3xl md:text-4xl font-black leading-none mb-2">TEAM OF 4</div>
              <div className="text-xs font-mono uppercase tracking-widest">Specialists</div>
              <div className="text-xs font-mono text-gray-600 mt-1">Built & Scaled</div>
            </div>
            <div className="p-5 md:p-6" style={{ background: "#000", color: "#fff" }}>
              <div className="text-2xl md:text-3xl font-black leading-none mb-2 text-[#FFCC00] uppercase">AI Embedded</div>
              <div className="text-xs font-mono uppercase tracking-widest">Into Core Workflows</div>
              <div className="text-xs font-mono text-gray-400 mt-1">Operational Edge</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate("projects")}
              className="font-black uppercase tracking-widest px-10 py-5 text-sm"
              style={{
                background: "#000",
                color: "#fff",
                border: "4px solid #000",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FFCC00";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#000";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
            >
              Explore Recent Work →
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="font-black uppercase tracking-widest px-10 py-5 text-sm"
              style={{
                background: "#fff",
                color: "#000",
                border: "3px solid #000",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#000";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
            >
              Discuss Strategy
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 md:py-28" style={{ borderBottom: "3px solid #000" }}>
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-[#FFCC00]" style={{ border: "2px solid #000" }} />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Featured Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                Selected<br />Projects
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                Infrastructure · Intelligence · Growth
              </div>
            </div>
          </div>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 4).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            ))}
          </div>

          {/* All Projects CTA */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => onNavigate("projects")}
              className="font-black uppercase tracking-widest text-xs px-10 py-4 flex items-center gap-3"
              style={{
                border: "3px solid #000",
                background: "#fff",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#000";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
            >
              All Projects
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* CAREER SECTION */}
      <section id="career" className="py-20 md:py-28 bg-black text-white" style={{ borderBottom: "3px solid #000" }}>
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FFCC00]" style={{ border: "2px solid #000" }} />
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-gray-400">Career</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16">Experience</h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#FFCC00] hidden md:block ml-6" />

            {/* Role 1: Head of Digital */}
            <div className="md:pl-16 mb-16">
              <div className="hidden md:flex absolute left-0 w-12 h-12 bg-[#FFCC00] items-center justify-center" style={{ border: "3px solid #fff", top: "0" }}>
                <div className="w-3 h-3 bg-black" />
              </div>
              <div className="p-6 md:p-10" style={{ border: "3px solid #FFCC00", background: "#111" }}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <span className="font-mono text-sm tracking-widest text-gray-400">2024 - Present</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-[#FFCC00] text-[#FFCC00] uppercase tracking-wider">
                    Current
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-black uppercase mb-2">Head of Digital</h3>
                <div className="text-[#FFCC00] font-bold mb-8 text-xl">Revisage GmbH</div>

                <div className="space-y-4">
                  {[
                    "Leading team in adopting frontier technologies for business transformation.",
                    "Orchestrated infrastructure rehaul and ERP integration (Direct DB).",
                    "Engineered Business Intelligence Suite (Python).",
                    "Developed ML Invoice Analytics for pricing optimization.",
                    "Executed end-to-end Shopify relaunch and custom development.",
                    "Core strategist for digital expansion and sales growth.",
                    "Architected AI-driven workflows using n8n and Frontier models.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-[#FFCC00] font-bold shrink-0">→</span>
                      <span className="text-sm md:text-base text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 2: Digital Business & E-Com Manager */}
            <div className="md:pl-16 mb-16">
              <div className="p-6 md:p-10" style={{ border: "2px solid #333", background: "#111" }}>
                <div className="font-mono text-sm tracking-widest text-gray-400 mb-6">2021 - 2024</div>

                <h3 className="text-3xl md:text-5xl font-black uppercase mb-2">Digital Business & E-Com Manager</h3>
                <div className="text-[#FFCC00] font-bold mb-8 text-xl">Revisage GmbH</div>

                <div className="space-y-4">
                  {[
                    "Directed Magento M1 to M2 transition and consolidation.",
                    "Strategic lead for IT infrastructure and partner management.",
                    "Managed e-commerce stores and catalog optimization.",
                    "Led project management and multichannel sales growth.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-[#FFCC00] font-bold shrink-0">→</span>
                      <span className="text-sm md:text-base text-gray-400 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 3: Co-Founder */}
            <div className="md:pl-16">
              <div className="p-6 md:p-10" style={{ border: "2px solid #333", background: "#111" }}>
                <div className="font-mono text-sm tracking-widest text-gray-400 mb-6">2018 - 2019</div>

                <h3 className="text-3xl md:text-5xl font-black uppercase mb-2">Co-Founder</h3>
                <div className="text-[#FFCC00] font-bold mb-8 text-xl">Shopify Dropshipping Store "HaptIQ"</div>

                <div className="space-y-4">
                  {[
                    "Scaled to 653 units sold at €79.95 in year one.",
                    "Managed Meta and Google Ads performance marketing.",
                    "Foundational entrepreneurial and e-commerce experience.",
                    "Direct business continuity through 2022 (by Co-Founder).",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-[#FFCC00] font-bold shrink-0">→</span>
                      <span className="text-sm md:text-base text-gray-400 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVISORY SECTION */}
      <section id="advisory" className="py-20 md:py-28" style={{ borderBottom: "3px solid #000" }}>
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FFCC00]" style={{ border: "2px solid #000" }} />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Advisory</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 md:mb-0">
              Advisory<br />Services
            </h2>
            <p className="text-gray-600 max-w-sm text-sm leading-relaxed font-medium">
              Strategic advisory for businesses requiring executive-level digital expertise without full-time overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: "3px solid #000" }}>
            {[
              {
                num: "01",
                title: "E-Commerce Architecture",
                desc: "End-to-end Shopify Plus infrastructure design, platform migration strategy, and conversion architecture for scaling DTC brands.",
                accent: true,
              },
              {
                num: "02",
                title: "Business Intelligence Systems",
                desc: "Custom Python BI platform design and implementation. Unified data infrastructure connecting all revenue and operational data sources.",
                accent: false,
              },
              {
                num: "03",
                title: "AI Workflow Automation",
                desc: "Identifying and implementing AI-powered automation across operational workflows. From invoice processing to customer intelligence.",
                accent: false,
              },
              {
                num: "04",
                title: "Performance Strategy Oversight",
                desc: "Multi-channel paid acquisition strategy, attribution architecture, and systematic creative testing frameworks for growth-stage brands.",
                accent: false,
              },
              {
                num: "05",
                title: "Technical Project Leadership",
                desc: "Fractional technical leadership for complex digital projects requiring both strategic oversight and hands-on execution capability.",
                accent: false,
              },
              {
                num: "06",
                title: "Market Expansion Strategy",
                desc: "Structured international market entry frameworks covering technical localisation, compliance, and market-specific performance marketing.",
                accent: true,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-7"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "2px solid #000" : "none",
                  borderBottom: i < 3 ? "2px solid #000" : "none",
                  background: service.accent ? "#FFCC00" : "#fff",
                }}
              >
                <div className="font-mono text-xs font-bold text-gray-400 mb-4">{service.num}</div>
                <h3 className="font-black uppercase text-xl leading-tight mb-4">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => onNavigate("contact")}
              className="font-black uppercase tracking-widest text-sm px-12 py-5 flex items-center gap-3"
              style={{
                background: "#000",
                color: "#fff",
                border: "3px solid #000",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FFCC00";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#000";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
            >
              Book Strategy Call →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 md:py-28" style={{ borderBottom: "3px solid #000", background: "#F5F5F5" }}>
        <div className="max-width-screen-xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FFCC00]" style={{ border: "2px solid #000" }} />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32" style={{ borderBottom: "3px solid #000" }}>
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FFCC00]" style={{ border: "2px solid #000" }} />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Contact</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-[0.95]">
                Get In<br />Touch.
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                Available for strategic advisory, technical project leadership, and fractional digital leadership roles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:markoxtomic@gmail.com"
                className="flex items-center justify-center gap-6 px-14 py-10 font-black uppercase tracking-widest text-xl bg-black text-white border-[6px] border-black transition-all hover:bg-[#FFCC00] hover:text-black shrink-0"
                style={{ transitionDuration: '0.15s' }}
              >
                E-Mail →
              </a>
              <a
                href="https://www.linkedin.com/in/markoxtomic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-6 px-14 py-10 font-black uppercase tracking-widest text-xl bg-white text-black border-[6px] border-black transition-all hover:bg-black hover:text-white shrink-0"
                style={{ transitionDuration: '0.15s' }}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What types of organisations do you work with?",
      a: "Primarily growth-stage and mid-market businesses in e-commerce, DTC, and digital-first sectors. Companies that have proven product-market fit and are scaling - where strategic digital leadership creates compounding commercial impact.",
    },
    {
      q: "What does an advisory engagement look like?",
      a: "Structured around business outcomes, not hours. Typically: monthly strategic review sessions, on-demand consultation, and oversight of specific digital programmes. Engagement depth is calibrated to the complexity of the challenge - from a focused project sprint to fractional Head of Digital arrangements.",
    },
    {
      q: "How is your approach different from a digital marketing agency?",
      a: "Agencies execute within a defined brief. The advisory model operates at the strategic layer: defining what should be built, why, how it connects to revenue, and how it scales. Agency relationships are often managed as part of this - coordinating output toward a unified performance architecture.",
    },
    {
      q: "Can you lead technical projects without a full internal team?",
      a: "Yes. Programme leadership, vendor coordination, technical specification, and QA oversight can all be provided independently of whether the client has an internal technical team. A network of vetted specialists covers development, data engineering, and analytics execution when required.",
    },
    {
      q: "What's your experience with AI implementation?",
      a: "Practical, applied AI - not theoretical (a little bit of both actually). Invoice processing automation, ML pricing models, Python BI with anomaly detection, and AI-assisted operational workflows. The focus is always on systems that create measurable business outcomes, not technology for its own sake.",
    },
    {
      q: "How quickly can you begin an engagement?",
      a: "Typically 2-3 weeks from initial conversation to engagement start. A structured discovery call is the first step - understanding the business context, challenge, and opportunity before any engagement architecture is proposed.",
    },
  ];

  return (
    <div style={{ border: "3px solid #000" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "2px solid #000" : "none" }}>
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between"
            style={{ background: openIndex === i ? "#FFCC00" : "#fff", transition: "background 0.15s ease" }}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-black uppercase text-sm md:text-base tracking-wide pr-4">{faq.q}</span>
            <span
              className="font-mono font-bold text-xl flex-shrink-0"
              style={{
                transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
                display: "inline-block",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: openIndex === i ? "400px" : "0",
              overflow: "hidden",
              transition: "max-height 0.25s ease",
            }}
          >
            <div className="px-6 py-5 text-sm leading-relaxed text-gray-700 bg-white" style={{ borderTop: "2px solid #000" }}>
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
