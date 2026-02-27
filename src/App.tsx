import { useState, useCallback, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { CaseStudyOverlay } from "./components/CaseStudyOverlay";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import type { Project } from "./data/projects";

type Page = "home" | "projects";

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const scrollPositionRef = useRef(0);

  const handleNavigate = useCallback((page: string) => {
    const sections: Record<string, string> = {
      career: "career",
      advisory: "advisory",
      faq: "faq",
      contact: "contact",
    };

    if (page === "home") {
      setCurrentPage("home");
      window.scrollTo(0, 0);
    } else if (page === "projects") {
      setCurrentPage("projects");
      window.scrollTo(0, 0);
    } else if (sections[page]) {
      // Navigate to home and scroll to section
      if (currentPage !== "home") {
        setCurrentPage("home");
        setTimeout(() => {
          const el = document.getElementById(sections[page]);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(sections[page]);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentPage]);

  const handleOpenCaseStudy = useCallback((project: Project) => {
    scrollPositionRef.current = window.scrollY;
    setActiveProject(project);
  }, []);

  const handleCloseCaseStudy = useCallback(() => {
    setActiveProject(null);
    // Restore scroll position after state update
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPositionRef.current);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        overlayActive={activeProject !== null}
      />

      <main>
        {currentPage === "home" && (
          <HomePage
            onOpenCaseStudy={handleOpenCaseStudy}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === "projects" && (
          <ProjectsPage onOpenCaseStudy={handleOpenCaseStudy} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Case Study Overlay */}
      <CaseStudyOverlay
        project={activeProject}
        onClose={handleCloseCaseStudy}
      />
    </div>
  );
}
