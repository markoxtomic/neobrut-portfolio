import { useState } from "react";
import { projects, categories } from "../data/projects";
import type { Project } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

interface ProjectsPageProps {
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectsPage({ onOpenCaseStudy }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-black text-white py-16 md:py-20" style={{ borderBottom: "3px solid #000" }}>
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#FFCC00]" style={{ border: "2px solid #000" }} />
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-gray-400">Project Library</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">All Projects</h1>
          <p className="text-gray-400 max-w-xl text-sm leading-relaxed font-medium">
            A structured library of work spanning e-commerce infrastructure, machine learning systems, market expansion strategy, and digital operations leadership.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-16 z-30 bg-white" style={{ borderBottom: "3px solid #000" }}>
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-mono font-bold text-xs uppercase tracking-widest px-4 py-2"
                style={{
                  border: "2px solid #000",
                  background: activeCategory === cat ? "#000" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#000",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    (e.currentTarget as HTMLElement).style.background = "#FFCC00";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    (e.currentTarget as HTMLElement).style.background = "#fff";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const isActive = activeCategory === "All" || project.category === activeCategory;
            return (
              <div
                key={project.id}
                style={{
                  opacity: isActive ? 1 : 0.4,
                  transition: `opacity 0.2s ease ${i * 50}ms`,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <ProjectCard
                  project={project}
                  onOpenCaseStudy={onOpenCaseStudy}
                  compact={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
}
