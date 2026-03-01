interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white" style={{ borderTop: "3px solid #000" }}>
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-0 py-16" style={{ borderBottom: "2px solid #222" }}>
          {/* Logo + Statement */}
          <div className="md:border-r-2 md:border-[#222] md:pr-10 mb-10 md:mb-0">
            <div className="text-7xl font-black tracking-tighter mb-6" style={{ letterSpacing: "-0.05em" }}>MT</div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Engineering scalable digital growth through structured systems and measurable execution.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:px-10 md:border-r-2 md:border-[#222] mb-10 md:mb-0">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-5">Navigation</div>
            <div className="space-y-3">
              {[
                { label: "Projects", page: "projects" },
                { label: "Career", page: "home" },
                { label: "Advisory", page: "home" },
                { label: "FAQ", page: "home" },
                { label: "Contact", page: "contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.page)}
                  className="block text-gray-400 text-sm font-medium hover:text-white transition-colors text-left"
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFCC00")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9CA3AF")}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="md:pl-10">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-5">Status</div>
            <div className="space-y-4">
              {[
                "Available for consultancy",
                "Technical implementations",
                "Strategic leadership roles",
              ].map((status, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFCC00] rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-300">{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-xs font-mono text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} MT - Head of Digital & Strategy
          </div>
          <div className="text-xs font-mono text-gray-600 uppercase tracking-widest">
            Built with structure. Executed with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
