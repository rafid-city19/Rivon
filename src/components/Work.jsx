import React from "react";

const Work = () => {
  const projects = [
    {
      number: "01",
      category: "Brand Website",
      title: "Rivon",
      description:
        "A modern digital platform built to introduce Rivon's vision, services, and technology solutions.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      size: "large",
    },
    {
      number: "02",
      category: "Web Experience",
      title: "JuiceHub",
      description:
        "A vibrant responsive web experience designed for a modern juice brand.",
      tags: ["HTML", "CSS", "JavaScript"],
      size: "normal",
    },
    {
      number: "03",
      category: "Business Software",
      title: "Business Dashboard",
      description:
        "A concept dashboard for managing business operations, analytics, customers, and performance.",
      tags: ["React", "Dashboard", "Analytics"],
      size: "normal",
    },
    {
      number: "04",
      category: "Rivon Product",
      title: "Coming Soon",
      description:
        "Something new is being built. Stay tuned for the next Rivon product.",
      tags: ["In Development"],
      size: "normal",
    },
  ];

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-lime-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-sm font-semibold text-lime-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
              Selected Work
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas we've
              <span className="text-lime-400"> brought to life.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A look at some of the digital experiences, products, and
              experiments we're building at Rivon.
            </p>

          </div>

          {/* View all */}
          <a
            href="#contact"
            className="group flex w-fit items-center gap-2 font-semibold text-slate-400 transition-colors hover:text-lime-400"
          >
            Start a project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={project.number}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/30 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-lime-400/5 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >

              {/* Project visual */}
              <div
                className={`relative overflow-hidden bg-linear-to-br from-slate-800/80 via-slate-900 to-slate-950 ${
                  index === 0
                    ? "h-72 sm:h-96"
                    : "h-56"
                }`}
              >

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-lime-400/20" />

                {/* Fake browser window */}
                <div className="absolute left-8 right-8 top-8 overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950/80 shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">

                  {/* Browser top */}
                  <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-3">

                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />

                    <div className="ml-4 h-2 w-32 rounded-full bg-slate-800" />

                  </div>

                  {/* Browser content */}
                  <div className="p-6">

                    <div className="h-3 w-24 rounded-full bg-lime-400/60" />

                    <div className="mt-5 h-5 w-3/4 rounded-full bg-slate-700" />

                    <div className="mt-2 h-3 w-1/2 rounded-full bg-slate-800" />

                    <div className="mt-6 grid grid-cols-3 gap-3">

                      <div className="h-16 rounded-lg bg-slate-800/70" />
                      <div className="h-16 rounded-lg bg-slate-800/70" />
                      <div className="h-16 rounded-lg bg-lime-400/10" />

                    </div>

                  </div>

                </div>

                {/* Number */}
                <span className="absolute right-6 top-6 text-sm font-bold text-slate-600 transition-colors group-hover:text-lime-400/50">
                  {project.number}
                </span>

              </div>

              {/* Project information */}
              <div className="p-7">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <span className="text-xs font-bold uppercase tracking-widest text-lime-400">
                    {project.category}
                  </span>

                  <span className="text-slate-700 transition-colors group-hover:text-lime-400">
                    ↗
                  </span>

                </div>

                <h3 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-lime-400">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-12 text-center">

          <p className="text-sm text-slate-600">
            Have an idea you'd like to see here?
          </p>

          <a
            href="#contact"
            className="group mt-3 inline-flex items-center gap-2 font-bold text-white transition-colors hover:text-lime-400"
          >
            Let's build it together

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Work;