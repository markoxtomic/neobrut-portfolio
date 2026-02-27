interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  overlayActive: boolean;
}

export function Navbar({ currentPage, onNavigate, overlayActive }: NavbarProps) {
  const navItems = ["Projects", "Career", "Advisory", "FAQ", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-white"
      style={{
        borderBottom: "3px solid #000",
        opacity: overlayActive ? 0.4 : 1,
        transition: "opacity 0.2s ease",
        pointerEvents: overlayActive ? "none" : "auto",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="font-black text-2xl tracking-tighter hover:text-[#FFCC00] transition-none"
          style={{ letterSpacing: "-0.05em" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFCC00")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#000")}
        >
          MT
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const pageKey = item.toLowerCase();
            const isActive = currentPage === pageKey || (currentPage === "home" && item === "Projects" && false);
            return (
              <button
                key={item}
                onClick={() => onNavigate(pageKey)}
                className="font-mono font-bold text-xs uppercase tracking-widest px-4 py-2 transition-none"
                style={{
                  background: isActive ? "#000" : "transparent",
                  color: isActive ? "#fff" : "#000",
                  border: isActive ? "2px solid #000" : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background = "#000";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#000";
                  }
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden font-mono font-bold text-xs uppercase tracking-widest px-3 py-2"
          style={{ border: "2px solid #000" }}
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            if (menu) menu.classList.toggle("hidden");
          }}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-white" style={{ borderTop: "2px solid #000" }}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              onNavigate(item.toLowerCase());
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
            className="block w-full text-left px-5 py-4 font-mono font-bold text-xs uppercase tracking-widest"
            style={{ borderBottom: "1px solid #eee" }}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
