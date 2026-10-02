import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const UIUX = () => {
  const services = [
    {
      number: "01",
      title: "UI Design",
      description:
        "Clean, modern and visually consistent interfaces designed around your brand and your users.",
    },
    {
      number: "02",
      title: "UX Strategy",
      description:
        "We plan user journeys and experiences that make digital products easier and more enjoyable to use.",
    },
    {
      number: "03",
      title: "Web Design",
      description:
        "High-quality website experiences that balance strong visual design with usability and performance.",
    },
    {
      number: "04",
      title: "Mobile App Design",
      description:
        "Intuitive mobile experiences designed for real users, real devices and real-world interactions.",
    },
    {
      number: "05",
      title: "Design Systems",
      description:
        "Reusable components, patterns and guidelines that keep your digital products consistent as they grow.",
    },
    {
      number: "06",
      title: "Prototype & Testing",
      description:
        "Interactive prototypes that help validate ideas, discover problems and improve experiences before development.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your users, business goals and the problem your product needs to solve.",
    },
    {
      number: "02",
      title: "Research",
      description:
        "We study user behavior, competitors and existing experiences to identify opportunities.",
    },
    {
      number: "03",
      title: "Structure",
      description:
        "We organize information, user flows and interactions into a clear product experience.",
    },
    {
      number: "04",
      title: "Design",
      description:
        "We turn the strategy into polished interfaces that feel modern, intuitive and consistent.",
    },
    {
      number: "05",
      title: "Prototype",
      description:
        "We create interactive prototypes to visualize the experience and test important interactions.",
    },
    {
      number: "06",
      title: "Refine",
      description:
        "We improve the experience based on feedback, testing and what we learn throughout the process.",
    },
  ];

  const benefits = [
    "Create better first impressions",
    "Make products easier to use",
    "Improve user engagement",
    "Build stronger brand identity",
    "Reduce user frustration",
    "Design for long-term scalability",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <div className="fixed left-0 right-0 top-0 z-50 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            Riv<span className="text-lime-400">on</span>.
          </Link>

          <Link
            to="/"
            className="group flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2.5 text-sm font-bold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-lime-400/40 hover:text-lime-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Rivon
          </Link>

        </div>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-lime-400/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-slate-800" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* HERO CONTENT */}
          <div>

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                UI/UX Design
              </span>

            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Design experiences{" "}
              <span className="text-lime-400">
                people love.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              We design intuitive digital experiences that look great, feel
              natural and help people accomplish what they came to do.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Start a Design Project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-6 py-3.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:text-lime-400"
              >
                Explore Services
              </a>

            </div>

          </div>

          {/* =====================================================
              DESIGN VISUAL
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative aspect-square">

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

              {/* Main Design Interface */}
              <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-black/50">

                <div className="rounded-2xl bg-slate-950 p-6 sm:p-8">

                  {/* Window Header */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />

                    </div>

                    <div className="h-2 w-20 rounded bg-slate-800" />

                  </div>

                  {/* Design Canvas */}
                  <div className="mt-7 grid grid-cols-[80px_1fr] gap-4">

                    {/* Sidebar */}
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">

                      <div className="h-8 rounded-lg bg-lime-400" />

                      <div className="mt-3 space-y-2">

                        <div className="h-2 rounded bg-slate-700" />
                        <div className="h-2 rounded bg-slate-800" />
                        <div className="h-2 rounded bg-slate-800" />
                        <div className="h-2 rounded bg-slate-800" />

                      </div>

                    </div>

                    {/* Main Canvas */}
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">

                      <div className="h-24 rounded-xl bg-lime-400/10">

                        <div className="p-4">

                          <div className="h-3 w-24 rounded bg-lime-400/60" />

                          <div className="mt-3 h-2 w-32 rounded bg-slate-700" />

                          <div className="mt-4 h-6 w-16 rounded-lg bg-lime-400" />

                        </div>

                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">

                        <div className="h-20 rounded-xl border border-slate-800 bg-slate-950" />

                        <div className="h-20 rounded-xl border border-slate-800 bg-slate-950" />

                      </div>

                    </div>

                  </div>

                  {/* Bottom Elements */}
                  <div className="mt-5 flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <div className="h-7 w-7 rounded-lg bg-lime-400" />

                      <div>

                        <div className="h-2 w-20 rounded bg-slate-700" />

                        <div className="mt-1.5 h-2 w-12 rounded bg-slate-800" />

                      </div>

                    </div>

                    <div className="h-8 w-20 rounded-lg bg-slate-900" />

                  </div>

                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-0 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Experience
                </p>

                <p className="mt-1 text-lg font-black text-lime-400">
                  User First
                </p>

              </div>

              {/* Floating Badge */}
              <div className="absolute right-0 top-10 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Design
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  Simple & Clear
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-slate-900 bg-slate-950/80">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-900 sm:grid-cols-4">

          {[
            ["01", "Intuitive"],
            ["02", "Beautiful"],
            ["03", "Accessible"],
            ["04", "Scalable"],
          ].map(([number, text]) => (

            <div
              key={number}
              className="px-5 py-10 sm:px-8"
            >

              <p className="text-xs font-bold text-lime-400">
                {number}
              </p>

              <p className="mt-2 text-sm font-bold text-slate-300 sm:text-base">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Beyond The Visuals
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Good design looks great.{" "}
              <span className="text-slate-500">
                Great design works.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-lg leading-8 text-slate-400">
              UI/UX isn't only about colors, buttons and layouts. We focus on
              understanding people and creating experiences that make digital
              products easier, clearer and more enjoyable to use.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="bg-slate-900/30 px-6 py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              What We Design
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Experiences designed around{" "}
              <span className="text-lime-400">
                people.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-800 bg-slate-800 md:grid-cols-2 lg:grid-cols-3">

            {services.map((item) => (

              <div
                key={item.number}
                className="group bg-slate-950 p-8 transition-all duration-300 hover:bg-slate-900"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm font-bold text-slate-600 transition-colors group-hover:text-lime-400">
                    {item.number}
                  </span>

                  <span className="text-xl text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-400">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              The Impact
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Make every interaction{" "}
              <span className="text-lime-400">
                count.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              When your product is easier to understand and use, people are
              more likely to stay, engage and come back.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {benefits.map((benefit, index) => (

              <div
                key={benefit}
                className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30"
              >

                <div className="flex items-center gap-4">

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-black text-slate-950">
                    {index + 1}
                  </span>

                  <span className="text-sm font-bold text-slate-300 transition-colors group-hover:text-white">
                    {benefit}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section
        id="process"
        className="bg-slate-900/30 px-6 py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              How We Work
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              From idea to{" "}
              <span className="text-lime-400">
                experience.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {process.map((item) => (

              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30"
              >

                <span className="text-sm font-black text-lime-400">
                  {item.number}
                </span>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY RIVON
      ========================================================= */}
      <section className="relative overflow-hidden bg-lime-400 px-6 py-24 text-slate-950 sm:py-32">

        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-white/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-800">
              Why Rivon
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Don't design for screenshots. Design for people.
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "User-centered thinking",
              "Simple interactions",
              "Modern visual systems",
              "Responsive experiences",
              "Scalable design systems",
              "Business-focused design",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-slate-950/10 bg-slate-950/5 p-5"
              >

                <div className="flex items-center gap-3">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-lime-400">
                    ✓
                  </span>

                  <span className="text-sm font-bold">
                    {item}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        id="contact"
        className="px-6 py-24 sm:py-32"
      >

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/50 px-7 py-16 text-center sm:px-12">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Let's Design
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Have an idea? Let's turn it into an experience.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us about your product, website or app and let's create an
              experience people actually enjoy using.
            </p>

            <a
              href="mailto:hello@rivon.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-lime-400 px-7 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Discuss a Design Project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default UIUX;