import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

interface CaseStudyOverlayProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyOverlay({ project, onClose }: CaseStudyOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className="overlay-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        animation: "backdropIn 0.2s ease forwards",
      }}
    >
      <div
        ref={panelRef}
        className="overlay-panel relative bg-white w-full overflow-y-auto"
        style={{
          width: "min(92vw, 1200px)",
          maxHeight: "90vh",
          border: "4px solid #000",
          animation: "panelIn 0.25s ease forwards",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 z-10 bg-black text-white font-mono font-bold text-lg w-12 h-12 flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-6 md:p-10 lg:p-12">
          {/* A. HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 pb-10 border-b-4 border-black">
            <div className="flex-1">
              <div className="inline-block bg-black text-white font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
                {project.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">
                {project.title}
              </h2>
            </div>
            <div
              className="lg:min-w-[280px] p-5"
              style={{ border: "3px solid #000" }}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-widest mb-3 text-gray-500">
                KPI Snapshot
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cs.outcomes.slice(0, 4).map((kpi, i) => (
                  <div key={i} className="bg-[#FFCC00] p-3" style={{ border: "2px solid #000" }}>
                    <div className="text-lg font-black leading-none">{kpi.value}</div>
                    <div className="text-xs font-mono mt-1 leading-tight">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* B. EXECUTIVE SUMMARY */}
          <section className="mb-10">
            <SectionLabel label="Executive Summary" />
            <p className="text-lg leading-relaxed font-medium max-w-3xl">
              {cs.executiveSummary}
            </p>
          </section>

          {/* C. BUSINESS CONTEXT */}
          <section className="mb-10">
            <SectionLabel label="Business Context" />
            <div className="grid md:grid-cols-2 gap-0" style={{ border: "3px solid #000" }}>
              {cs.businessContext.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4"
                  style={{
                    borderBottom: i < cs.businessContext.length - 1 ? "2px solid #000" : "none",
                    borderRight: i % 2 === 0 ? "2px solid #000" : "none",
                  }}
                >
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 min-w-[100px] pt-0.5">
                    {item.label}
                  </div>
                  <div className="font-medium text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* D. STRATEGIC APPROACH */}
          <section className="mb-10">
            <SectionLabel label="Strategic Approach" />
            <div className="grid md:grid-cols-2 gap-4">
              {cs.strategicPhases.map((phase, i) => (
                <div
                  key={i}
                  className="p-5"
                  style={{ border: "3px solid #000" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-black text-white font-mono font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="font-black uppercase text-sm tracking-wide">{phase.title.split("—")[1]?.trim() || phase.title}</div>
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-2">{phase.title.split("—")[0]?.trim()}</div>
                  <p className="text-sm leading-relaxed">{phase.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* E. TECHNICAL ARCHITECTURE */}
          <section className="mb-10">
            <SectionLabel label="Technical Architecture" />
            <div className="p-6" style={{ border: "3px solid #000", background: "#F5F5F5" }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest mb-2 text-gray-500">Stack</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.technicalArchitecture.stack.map((tech, i) => (
                      <span key={i} className="text-xs font-mono font-bold bg-black text-white px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest mb-2 text-gray-500">Architecture</div>
                  <p className="text-sm leading-relaxed mb-4">{cs.technicalArchitecture.description}</p>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest mb-2 text-gray-500">Tool Rationale</div>
                  <p className="text-sm leading-relaxed">{cs.technicalArchitecture.rationale}</p>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest mb-2 text-gray-500">Data Flow</div>
                  <div className="p-4 font-mono text-xs leading-relaxed bg-black text-[#FFCC00] mb-4" style={{ border: "2px solid #000" }}>
                    {cs.technicalArchitecture.dataFlow}
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest mb-2 text-gray-500">Integrations</div>
                  <p className="text-sm leading-relaxed">{cs.technicalArchitecture.integrations}</p>
                </div>
              </div>
            </div>
          </section>

          {/* F. EXECUTION & LEADERSHIP */}
          <section className="mb-10">
            <SectionLabel label="Execution & Leadership" />
            <div className="grid md:grid-cols-2 gap-0" style={{ border: "3px solid #000" }}>
              <LeadershipBlock label="Stakeholders" value={cs.executionLeadership.stakeholders} borderRight borderBottom />
              <LeadershipBlock label="Team Leadership" value={cs.executionLeadership.teamLeadership} borderBottom />
              <LeadershipBlock label="Timeline" value={cs.executionLeadership.timeline} borderRight />
              <LeadershipBlock label="Risk Mitigation" value={cs.executionLeadership.riskMitigation} />
            </div>
          </section>

          {/* G. KPIs & OUTCOMES */}
          <section className="mb-10">
            <SectionLabel label="KPIs & Measurable Outcomes" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0" style={{ border: "3px solid #000" }}>
              {cs.outcomes.map((kpi, i) => (
                <div
                  key={i}
                  className="p-5 text-center"
                  style={{
                    borderRight: i < cs.outcomes.length - 1 ? "2px solid #000" : "none",
                    background: i % 2 === 0 ? "#FFCC00" : "#fff",
                  }}
                >
                  <div className="text-2xl md:text-3xl font-black leading-none mb-2">{kpi.value}</div>
                  <div className="text-xs font-mono uppercase tracking-wide leading-tight">{kpi.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel label="Personal Reflections & Notes" />
            <div className="p-6 bg-black text-white" style={{ border: "3px solid #000" }}>
              <p className="text-base md:text-lg leading-relaxed font-medium">{cs.strategicImpact}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="w-4 h-4 bg-[#FFCC00]" style={{ border: "2px solid #000" }} />
      <h3 className="text-xs font-mono font-bold uppercase tracking-widest">{label}</h3>
      <div className="flex-1 h-px bg-black" />
    </div>
  );
}

function LeadershipBlock({
  label,
  value,
  borderRight,
  borderBottom,
}: {
  label: string;
  value: string;
  borderRight?: boolean;
  borderBottom?: boolean;
}) {
  return (
    <div
      className="p-5"
      style={{
        borderRight: borderRight ? "2px solid #000" : "none",
        borderBottom: borderBottom ? "2px solid #000" : "none",
      }}
    >
      <div className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-2">{label}</div>
      <p className="text-sm leading-relaxed">{value}</p>
    </div>
  );
}
