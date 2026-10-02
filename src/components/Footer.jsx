import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950 px-6 pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-lime-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= CTA ================= */}

        <div className="mb-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl sm:p-12">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-400">
                Have an idea?
              </p>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Let's build something
                <span className="text-lime-400"> amazing.</span>
              </h2>

              <p className="mt-3 max-w-xl text-slate-400">
                Have a project in mind? We'd love to hear about it and
                help turn your idea into reality.
              </p>
            </div>

            <a
              href="mailto:hello@rivon.dev"
              className="group shrink-0 rounded-xl bg-lime-400 px-6 py-3.5 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_10px_40px_rgba(163,230,53,0.2)]"
            >
              <span className="flex items-center gap-2">
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="inline-block"
            >
              <h2 className="text-3xl font-black tracking-tight text-white">
                Riv
                <span className="text-lime-400">o</span>
                n<span className="text-lime-400">.</span>
              </h2>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              We build modern websites, applications, and digital
              solutions that help businesses grow, evolve, and move
              forward.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-400 hover:text-slate-950"
              >
                f
              </a>

              <a
                href="#"
                aria-label="X"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-400 hover:text-slate-950"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-xs font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-400 hover:text-slate-950"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-400 hover:text-slate-950"
              >
                ◎
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-4 text-sm text-slate-500">

              <li>
                <a
                  href="#home"
                  className="transition-colors duration-200 hover:text-lime-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition-colors duration-200 hover:text-lime-400"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="transition-colors duration-200 hover:text-lime-400"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="transition-colors duration-200 hover:text-lime-400"
                >
                  Testimonials
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="space-y-4 text-sm text-slate-500">

              <li>Web Development</li>
              <li>App Development</li>
              <li>UI / UX Design</li>
              <li>AI Solutions</li>

            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="flex flex-col gap-4 border-t border-slate-800 py-7 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Rivon. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition-colors hover:text-lime-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-lime-400"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;