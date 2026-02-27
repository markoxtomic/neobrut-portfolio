import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  compact?: boolean;
  style?: React.CSSProperties;
}

export function ProjectCard({ project, onOpenCaseStudy, compact = false, style }: ProjectCardProps) {
  return (
    <div
      className="project-card bg-white flex flex-col h-full"
      style={{
        border: "3px solid #000",
        transition: "transform 0.15s ease, border-color 0.15s ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLElement).style.borderColor = "#FFCC00";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = "#000";
      }}
    >
      <div className={`flex flex-col flex-1 ${compact ? "p-5" : "p-8"}`}>
        {/* Badges */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-block">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5"
              style={{ background: "#000", color: "#fff" }}
            >
              {project.category}
            </span>
          </div>
          <div className="inline-block">
            <span
              className="text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-1 border"
              style={{ borderColor: "#FFCC00", color: "#000", borderWidth: "2px" }}
            >
              {project.type}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-black uppercase leading-tight mb-4 ${compact ? "text-lg" : "text-2xl md:text-3xl"}`} style={{ letterSpacing: "-0.02em" }}>
          {project.title}
        </h3>

        {/* Summary */}
        <p className={`text-sm leading-relaxed text-gray-700 mb-6 flex-1 ${compact ? "line-clamp-2" : ""}`}>
          {project.summary}
        </p>

        {/* Separator Line */}
        {!compact && <div className="w-full h-[2px] bg-black mb-6" />}

        {/* KPI Row */}
        <div className={`flex gap-4 ${compact ? "mb-4" : "mb-8 text-center"}`}>
          {project.kpis.slice(0, 3).map((kpi, i) => (
            <div
              key={i}
              className="flex-1 text-left"
            >
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">{kpi.label}</div>
              <div className={`font-black leading-none ${compact ? "text-base" : "text-xl md:text-2xl"}`} style={{ color: "#FFCC00" }}>
                {kpi.value.replace(/[\[\]]/g, '')}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.slice(0, compact ? 3 : 5).map((tech, i) => (
            <span key={i} className="text-[10px] font-mono border border-black px-2 py-1 uppercase font-bold">
              {tech}
            </span>
          ))}
          {project.techStack.length > (compact ? 3 : 5) && (
            <span className="text-[10px] font-mono text-gray-400 px-1 py-1">
              +{project.techStack.length - (compact ? 3 : 5)}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="case-study-btn w-full font-black uppercase text-xs tracking-widest py-4 px-6 text-center flex items-center justify-center group"
          style={{ border: "2px solid #000", background: "#000", color: "#fff", transition: "all 0.15s ease" }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget;
            btn.style.background = "#FFCC00";
            btn.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget;
            btn.style.background = "#000";
            btn.style.color = "#fff";
          }}
        >
          <span>Complete Case Study</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
}

