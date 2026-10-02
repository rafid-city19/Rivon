import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav
      className={`fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "px-3 pt-3 sm:px-6" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-4 transition-all duration-500 sm:px-8 lg:px-10 ${
          scrolled
            ? "rounded-2xl border border-slate-800/70 bg-slate-950/80 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : "bg-slate-950/90 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <a to="#home" className="group relative z-50">
          <h3 className="text-3xl font-black tracking-tight text-white transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
            Riv
            <span className="text-lime-400">o</span>
            n<span className="text-lime-400">.</span>
          </h3>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group relative px-2 py-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {link.name}

                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="group relative hidden overflow-hidden rounded-xl bg-lime-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_10px_30px_rgba(163,230,53,0.2)] lg:block"
        >
          <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative flex items-center gap-2">
            Let's Talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 transition-all duration-300 hover:border-lime-400/50 hover:bg-slate-800 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-3 right-3 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
            menuOpen
              ? "pointer-events-auto max-h-150 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
          }`}
        >
          <div className="p-3">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-500 ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-5 opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuOpen
                      ? `${index * 60}ms`
                      : "0ms",
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 font-semibold text-slate-300 transition-all duration-300 hover:bg-slate-900 hover:pl-6 hover:text-lime-400"
                  >
                    <span>{link.name}</span>

                    <span className="translate-x-0 text-lime-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div
              className={`mt-2 border-t border-slate-800 pt-3 transition-all duration-500 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen ? "360ms" : "0ms",
              }}
            >
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3.5 font-bold text-slate-950 transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_8px_25px_rgba(163,230,53,0.2)]"
              >
                Let's Talk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;