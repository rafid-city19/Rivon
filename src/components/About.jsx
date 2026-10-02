import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-lime-400/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-sm font-semibold text-lime-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
            About Rivon
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            We believe technology
            <span className="text-lime-400"> should solve problems.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Rivon is a technology company focused on building digital
            products and solutions that make businesses smarter, faster,
            and more capable.
          </p>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">

          {/* Left - Visual */}
          <div className="relative">

            <div className="relative aspect-square max-w-lg overflow-hidden rounded-4xl border border-slate-800 bg-slate-900/40">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              {/* Center glow */}
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[80px]" />

              {/* Rivon Logo */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <h3 className="text-6xl font-black tracking-tight text-white sm:text-7xl">
                    Riv
                    <span className="text-lime-400">o</span>
                    n<span className="text-lime-400">.</span>
                  </h3>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-600">
                    Build • Grow • Evolve
                  </p>

                </div>

              </div>

              {/* Floating elements */}

              <div className="absolute left-8 top-8 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
                <span className="text-xs font-semibold text-lime-400">
                  Innovation
                </span>
              </div>

              <div className="absolute bottom-8 right-8 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
                <span className="text-xs font-semibold text-slate-400">
                  Technology
                </span>
              </div>

            </div>

          </div>

          {/* Right - Story */}
          <div>

            <span className="text-sm font-bold uppercase tracking-widest text-lime-400">
              Who We Are
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Building the technology
              <br />
              behind better businesses.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-7 text-slate-400">

              <p>
                Rivon was created with a simple idea: technology shouldn't
                just look impressive — it should actually make people's
                lives and businesses better.
              </p>

              <p>
                We combine design, development, and emerging technologies
                to create digital experiences and software that solve
                real-world problems.
              </p>

              <p>
                We're starting with digital services and products, with a
                long-term vision of building a broader technology company
                that creates solutions across different industries.
              </p>

            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">

              <div>
                <h4 className="text-2xl font-black text-white">
                  01
                </h4>

                <p className="mt-1 text-xs text-slate-600">
                  Vision
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">
                  ∞
                </h4>

                <p className="mt-1 text-xs text-slate-600">
                  Possibilities
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">
                  100%
                </h4>

                <p className="mt-1 text-xs text-slate-600">
                  Focus
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= VALUES ================= */}

        <div className="mt-24 border-t border-slate-800 pt-16">

          <div className="grid gap-8 md:grid-cols-3">

            {/* Value 1 */}
            <div className="group">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-lg transition-all duration-300 group-hover:border-lime-400/40 group-hover:bg-lime-400/10">
                💡
              </div>

              <h3 className="text-lg font-bold text-white">
                Think Different
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                We question conventional solutions and look for smarter
                ways to solve problems.
              </p>

            </div>

            {/* Value 2 */}
            <div className="group">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-lg transition-all duration-300 group-hover:border-lime-400/40 group-hover:bg-lime-400/10">
                ⚡
              </div>

              <h3 className="text-lg font-bold text-white">
                Build With Purpose
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Every product should have a reason to exist and create
                meaningful value for its users.
              </p>

            </div>

            {/* Value 3 */}
            <div className="group">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-lg transition-all duration-300 group-hover:border-lime-400/40 group-hover:bg-lime-400/10">
                🚀
              </div>

              <h3 className="text-lg font-bold text-white">
                Keep Evolving
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Technology never stops changing, and neither should we.
              </p>

            </div>

          </div>

        </div>

        {/* ================= FINAL CTA ================= */}

        <div className="mt-20 text-center">

          <p className="text-sm text-slate-600">
            This is just the beginning.
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            We're building something bigger.
          </h3>

          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_10px_30px_rgba(163,230,53,0.2)]"
          >
            Join the journey

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;