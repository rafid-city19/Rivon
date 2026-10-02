import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const BusinessSolutions = () => {
  const solutions = [
    {
      number: "01",
      title: "Business Management Systems",
      description:
        "Centralize your business operations with custom systems built around the way your team actually works.",
    },
    {
      number: "02",
      title: "CRM Solutions",
      description:
        "Manage customers, leads, communication and relationships from one organized digital platform.",
    },
    {
      number: "03",
      title: "POS Systems",
      description:
        "Modern point-of-sale solutions designed to simplify transactions, inventory and everyday business operations.",
    },
    {
      number: "04",
      title: "HR & Payroll",
      description:
        "Manage employees, attendance, payroll and internal processes with streamlined digital systems.",
    },
    {
      number: "05",
      title: "Inventory Management",
      description:
        "Track products, stock levels and business activity with better visibility and control.",
    },
    {
      number: "06",
      title: "Custom Business Software",
      description:
        "Software designed specifically around your business processes, requirements and future goals.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We learn how your business operates, where the challenges are and what you want to improve.",
    },
    {
      number: "02",
      title: "Analyze",
      description:
        "We identify inefficiencies, repetitive processes and opportunities where technology can create value.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We design the system, workflows and user experience around your team and customers.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "We develop a reliable business solution using modern technologies and scalable architecture.",
    },
    {
      number: "05",
      title: "Deploy",
      description:
        "We test the system, prepare your team and deploy the solution into your real business environment.",
    },
    {
      number: "06",
      title: "Improve",
      description:
        "We continue improving the system as your business grows and your requirements change.",
    },
  ];

  const benefits = [
    "Reduce manual work",
    "Improve operational efficiency",
    "Centralize business data",
    "Make better decisions",
    "Improve team productivity",
    "Scale your operations",
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

          {/* Hero Content */}
          <div>

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                Business Solutions
              </span>

            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Make your business{" "}
              <span className="text-lime-400">
                work smarter.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              We build digital business solutions that simplify operations,
              connect your teams and help your business grow with technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Improve Your Business

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-6 py-3.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:text-lime-400"
              >
                Explore Solutions
              </a>

            </div>

          </div>

          {/* =====================================================
              BUSINESS DASHBOARD VISUAL
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative aspect-square">

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

              <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-black/50">

                <div className="rounded-2xl bg-slate-950 p-6 sm:p-8">

                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between">

                    <div>

                      <div className="h-3 w-28 rounded bg-slate-700" />

                      <div className="mt-2 h-2 w-20 rounded bg-slate-800" />

                    </div>

                    <div className="flex items-center gap-2">

                      <div className="h-8 w-8 rounded-lg bg-slate-900" />

                      <div className="h-8 w-8 rounded-full bg-lime-400/20" />

                    </div>

                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-3">

                    {[
                      ["Revenue", "$24.8K"],
                      ["Orders", "1,284"],
                      ["Growth", "+18%"],
                    ].map(([label, value]) => (

                      <div
                        key={label}
                        className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                      >

                        <p className="text-[9px] uppercase tracking-wider text-slate-500">
                          {label}
                        </p>

                        <p className="mt-2 text-sm font-black text-white">
                          {value}
                        </p>

                      </div>

                    ))}

                  </div>

                  {/* Chart */}
                  <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">

                    <div className="flex items-center justify-between">

                      <div className="h-2 w-24 rounded bg-slate-700" />

                      <div className="h-2 w-12 rounded bg-lime-400/60" />

                    </div>

                    <div className="mt-7 flex h-28 items-end gap-2">

                      {[35, 50, 42, 65, 55, 78, 68, 90].map(
                        (height, index) => (

                          <div
                            key={index}
                            className="flex-1 rounded-t bg-lime-400/50 transition-all duration-300 hover:bg-lime-400"
                            style={{ height: `${height}%` }}
                          />

                        )
                      )}

                    </div>

                  </div>

                  {/* Activity */}
                  <div className="mt-4 space-y-3">

                    {[1, 2, 3].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-3"
                      >

                        <div className="h-8 w-8 rounded-lg bg-lime-400/10" />

                        <div className="flex-1">

                          <div className="h-2 w-24 rounded bg-slate-700" />

                          <div className="mt-2 h-2 w-16 rounded bg-slate-800" />

                        </div>

                        <div className="h-2 w-10 rounded bg-slate-800" />

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-0 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Operations
                </p>

                <p className="mt-1 text-lg font-black text-lime-400">
                  More Control
                </p>

              </div>

              {/* Floating Badge */}
              <div className="absolute right-0 top-10 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Growth
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  Work Smarter
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
            ["01", "Efficient"],
            ["02", "Connected"],
            ["03", "Scalable"],
            ["04", "Data-Driven"],
          ].map(([number, text]) => (

            <div key={number} className="px-5 py-10 sm:px-8">

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
              Digital Business
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Technology should make{" "}
              <span className="text-slate-500">
                business easier.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-lg leading-8 text-slate-400">
              Businesses shouldn't have to depend on disconnected tools,
              spreadsheets and manual processes forever. We create systems
              that bring everything together and make everyday work simpler.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section
        id="solutions"
        className="bg-slate-900/30 px-6 py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              What We Build
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Solutions built around{" "}
              <span className="text-lime-400">
                your business.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-800 bg-slate-800 md:grid-cols-2 lg:grid-cols-3">

            {solutions.map((item) => (

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
              The Opportunity
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Give your business{" "}
              <span className="text-lime-400">
                better tools.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              The right digital system can reduce unnecessary work, improve
              visibility and give your team more time to focus on growth.
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
              From business problem to{" "}
              <span className="text-lime-400">
                digital solution.
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
              Don't digitize your business just for the sake of it.
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "Business-first approach",
              "Custom-built solutions",
              "Modern technology",
              "Scalable systems",
              "Simple user experiences",
              "Long-term thinking",
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
              Let's Build
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Have a business problem? Let's solve it.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us about your business, the challenges you're facing and
              what you'd like to improve.
            </p>

            <a
              href="mailto:hello@rivon.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-lime-400 px-7 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Discuss Your Business

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

export default BusinessSolutions;