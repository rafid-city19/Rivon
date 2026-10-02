import React from "react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      number: "01",
      icon: "🏢",
      title: "Business Management",
      description:
        "Centralize your business operations with powerful tools for managing teams, tasks, finances, and daily workflows.",
    },
    {
      number: "02",
      icon: "💳",
      title: "POS & Inventory",
      description:
        "Manage sales, products, inventory, customers, and transactions from one simple and powerful platform.",
    },
    {
      number: "03",
      icon: "👥",
      title: "CRM & HR",
      description:
        "Organize customer relationships, employee information, attendance, payroll, and team management.",
    },
    {
      number: "04",
      icon: "🤖",
      title: "AI Automation",
      description:
        "Automate repetitive work and integrate intelligent AI tools into your business to save time and increase productivity.",
    },
    {
      number: "05",
      icon: "📊",
      title: "Business Analytics",
      description:
        "Turn your business data into useful insights with dashboards, reports, analytics, and real-time information.",
    },
    {
      number: "06",
      icon: "🌐",
      title: "Custom Platforms",
      description:
        "Have a unique idea? We can design and build a custom digital platform around your exact business requirements.",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-lime-400/5 blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-sm font-semibold text-lime-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
            Our Solutions
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technology built around
            <span className="text-lime-400"> your business.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Powerful digital solutions designed to solve real business problems,
            simplify operations, and create new opportunities for growth.
          </p>
        </div>

        {/* ================= SOLUTIONS ================= */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/30 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-lime-400/5"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-lime-400/30 group-hover:bg-lime-400/10">
                  {solution.icon}
                </div>

                <span className="text-sm font-bold text-slate-700 transition-colors duration-300 group-hover:text-lime-400/50">
                  {solution.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-lime-400">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {solution.description}
                </p>
              </div>

              {/* Explore */}
              <div className="relative mt-7 flex items-center justify-between border-t border-slate-800 pt-5">
                <span className="text-sm font-semibold text-slate-600 transition-colors duration-300 group-hover:text-slate-400">
                  Learn more
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-all duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-slate-950">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-lime-400/10 bg-linear-to-r from-lime-400/5 via-slate-900/50 to-transparent p-8 sm:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Don't see what you need?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell us about your problem and we'll create a solution around
                your needs.
              </p>
            </div>

            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Explore Solutions
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
