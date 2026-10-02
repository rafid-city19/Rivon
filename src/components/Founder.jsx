import React from "react";
import ScrollReveal from "./ScrollReveal";

const Founder = () => {
  const skills = [
    "Web Development",
    "React",
    "JavaScript",
    "UI/UX",
    "AI",
    "Entrepreneurship",
  ];

  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-120 w-120 -translate-y-1/2 rounded-full bg-lime-400/5 blur-[140px]" />

      <div className="pointer-events-none absolute -right-60 top-1/4 h-120 w-120 rounded-full bg-cyan-400/2 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ================= HEADING ================= */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              Meet the Founder
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              The person building
              <span className="text-lime-400"> Rivon.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* ================= IMAGES ================= */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto h-135 w-full max-w-lg sm:h-150">
              {/* Large Glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

              {/* Decorative Circle */}
              <div className="absolute -left-3 top-16 h-28 w-28 rounded-full border border-lime-400/10 sm:-left-8" />

              {/* Decorative Ring */}
              <div className="absolute -bottom-4 right-0 h-40 w-40 rounded-full border border-lime-400/10 sm:-right-6" />

              {/* Floating Dot */}
              <div className="absolute right-8 top-5 h-3 w-3 animate-pulse rounded-full bg-lime-400 shadow-[0_0_20px_rgba(183,255,0,0.6)]" />

              {/* Floating Dot */}
              <div className="absolute bottom-24 left-0 h-2 w-2 rounded-full bg-lime-400/70" />

              {/* ================= IMAGE 1 ================= */}
              <div
                className="
                  group
                  absolute
                  left-0
                  top-0
                  w-[70%]
                  overflow-hidden
                  rounded-4xl
                  border
                  border-slate-800
                  bg-slate-900
                  shadow-2xl
                  shadow-black/40
                  transition-all
                  duration-700
                  hover:-translate-y-2
                  hover:border-lime-400/30
                  hover:shadow-lime-400/10
                  sm:w-[65%]
                "
              >
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src="/founder-1.png"
                    alt="Rafid Hassan - Founder of Rivon"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Label */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
                    Founder
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    Rafid Hassan
                  </h3>
                </div>
              </div>

              {/* ================= IMAGE 2 ================= */}
              <div
                className="
                  group
                  absolute
                  bottom-0
                  right-0
                  z-10
                  w-[62%]
                  overflow-hidden
                  rounded-4xl
                  border
                  border-slate-700
                  bg-slate-900
                  shadow-2xl
                  shadow-black/50
                  transition-all
                  duration-700
                  hover:-translate-y-2
                  hover:border-lime-400/30
                  hover:shadow-lime-400/10
                  sm:w-[58%]
                "
              >
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src="/founder-2.png"
                    alt="Rafid Hassan"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Small Accent */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/20 bg-slate-950/60 backdrop-blur-md">
                  <span className="text-sm text-lime-400">✦</span>
                </div>
              </div>

              {/* Rivon Badge */}
              <div
                className="
                  absolute
                  bottom-12
                  left-1/2
                  z-20
                  -translate-x-1/2
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-950/80
                  px-5
                  py-2.5
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:border-lime-400/30
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                    Building Rivon
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ================= CONTENT ================= */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-sm font-semibold text-lime-400">
                Rafid Hassan
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Developer.
                <br />
                Builder.
                <br />
                Founder.
              </h3>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                I'm a developer and technology enthusiast building Rivon with
                the goal of creating useful digital products, services, and
                solutions.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
                I'm interested in web development, software, AI, and exploring
                how technology can solve real-world problems.
              </p>

              {/* ================= SKILLS ================= */}
              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-slate-800
                      bg-slate-900/60
                      px-3.5
                      py-2
                      text-xs
                      font-medium
                      text-slate-400
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-lime-400/30
                      hover:bg-lime-400/5
                      hover:text-lime-400
                    "
                    style={{
                      transitionDelay: `${index * 30}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-slate-800" />

              {/* ================= LINKS ================= */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/rafid-city19"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-lime-400
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-slate-950
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-lime-300
                    hover:shadow-lg
                    hover:shadow-lime-400/10
                  "
                  target="_blank"
                >
                  GitHub
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rafid-hassan-54a23932a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    group
    flex
    items-center
    gap-2
    rounded-xl
    border
    border-slate-800
    px-5
    py-3
    text-sm
    font-bold
    text-slate-300
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-lime-400/40
    hover:text-lime-400
  "
                >
                  LinkedIn
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Founder;
