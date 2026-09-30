import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/85 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
        <a href="#top" className="text-[0.95rem] font-medium tracking-tight">
          Meenakshi Mishra
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-foreground/25 px-4 py-2 text-xs tracking-wide uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-end justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px bg-foreground transition-all duration-300 ${
              open ? "w-6 -translate-y-[3px] -rotate-45" : "w-4"
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-6 sm:px-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 self-start border border-foreground/25 px-4 py-2 text-xs tracking-wide uppercase"
            >
              Résumé
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
