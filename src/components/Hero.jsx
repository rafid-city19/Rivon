import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 pt-24"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Main green glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px] animate-pulse" />

      {/* Top-left glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-lime-400/5 blur-[100px]" />

      {/* Bottom-right glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ================= FLOATING PARTICLES ================= */}

      <div className="pointer-events-none absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_15px_#a3e635] animate-bounce" />

      <div className="pointer-events-none absolute right-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264] animate-ping" />

      <div className="pointer-events-none absolute bottom-[25%] left-[25%] h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_12px_#a3e635] animate-pulse" />

      <div className="pointer-events-none absolute bottom-[30%] right-[15%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#67e8f9] animate-bounce" />

      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Small badge */}
        <div className="mb-7 inline-flex animate-[fadeIn_0.8s_ease-out] items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-sm font-medium text-lime-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
          </span>

          Building the future, one idea at a time.
        </div>

        {/* Heading */}
        <h1 className="animate-[fadeInUp_0.9s_ease-out] text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Build Something
          <br />

          <span className="bg-linear-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
            Amazing.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl animate-[fadeInUp_1s_ease-out_0.15s_both] text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          We build modern websites, applications, and digital solutions
          that help businesses grow, evolve, and move forward.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex animate-[fadeInUp_1s_ease-out_0.3s_both] flex-col items-center justify-center gap-4 sm:flex-row">

          {/* Primary button */}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-lime-400 px-7 py-3.5 font-bold text-slate-950 shadow-[0_0_30px_rgba(163,230,53,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_10px_40px_rgba(163,230,53,0.25)]"
          >
            {/* Shine */}
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative flex items-center gap-2">
              Get Started

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>

          {/* Secondary button */}
          <a
            href="#services"
            className="group rounded-xl border border-slate-700 bg-slate-900/40 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/60 hover:bg-slate-900 hover:text-lime-300"
          >
            <span className="flex items-center gap-2">
              Explore Our Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </a>
        </div>

        {/* Trust text */}
        <div className="mt-10 animate-[fadeIn_1.2s_ease-out_0.5s_both] text-sm text-slate-600">
          Websites • Apps • Digital Solutions
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-slate-950 to-transparent" />

      {/* ================= CUSTOM ANIMATIONS ================= */}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;