import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#tours" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-md shadow-card-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Duka Hiking logo" width={44} height={44} className="h-11 w-11 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div
              className={`text-sm font-bold tracking-[0.2em] ${
                scrolled ? "text-earth-deep" : "text-white"
              }`}
            >
              DUKA HIKING
            </div>
            <div
              className={`text-[10px] tracking-[0.25em] uppercase ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Travel &amp; Tours
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-foreground hover:text-forest"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-forest-foreground shadow-card-soft transition-transform hover:scale-[1.03] hover:bg-forest-deep"
          >
            Book a Trip
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid h-10 w-10 place-items-center rounded-full border ${
              scrolled ? "border-border text-foreground" : "border-white/30 text-white"
            }`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        } bg-parchment border-t border-border`}
      >
        <nav className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-foreground border-b border-border/60 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-forest-foreground"
          >
            Book a Trip
          </a>
        </nav>
      </div>
    </header>
  );
}
