import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const AISolutions = () => {
  const solutions = [
    {
      number: "01",
      title: "AI Chatbots",
      description:
        "Intelligent conversational assistants that help customers, answer questions and support your team around the clock.",
    },
    {
      number: "02",
      title: "AI Automation",
      description:
        "Automate repetitive tasks and workflows so your team can spend more time on work that actually matters.",
    },
    {
      number: "03",
      title: "AI Integration",
      description:
        "Connect AI capabilities with your existing website, applications and business systems.",
    },
    {
      number: "04",
      title: "AI-Powered Tools",
      description:
        "Custom AI tools designed around specific business problems, workflows and opportunities.",
    },
    {
      number: "05",
      title: "Intelligent Search",
      description:
        "Make large collections of information easier to explore with smarter search and natural-language interaction.",
    },
    {
      number: "06",
      title: "AI Content Systems",
      description:
        "Build AI-assisted systems that help teams create, organize and manage content more efficiently.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Identify",
      description:
        "We understand your business and identify where AI can create genuine value.",
    },
    {
      number: "02",
      title: "Evaluate",
      description:
        "We determine what should be automated, assisted or kept under human control.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We design the AI experience, workflow and interaction around your actual users.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "We integrate AI capabilities into a reliable and practical product or business system.",
    },
    {
      number: "05",
      title: "Test",
      description:
        "We evaluate accuracy, usability, edge cases and performance before deployment.",
    },
    {
      number: "06",
      title: "Improve",
      description:
        "We monitor the solution and continuously improve it as your needs evolve.",
    },
  ];

  const benefits = [
    "Reduce repetitive tasks",
    "Improve response times",
    "Support customers 24/7",
    "Make information easier to access",
    "Increase team productivity",
    "Create new digital capabilities",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* =========================================================
          SERVICE PAGE HEADER
      ========================================================= */}
      <div className="fixed left-0 right-0 top-0 z-50 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            Riv<span className="text-lime-400">on</span>.
          </Link>

          {/* Back Button */}
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
        {/* Background Effects */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-lime-400/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-slate-800" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* HERO CONTENT */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                AI Solutions
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Put AI to work for{" "}
              <span className="text-lime-400">your business.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              We build practical AI solutions that automate work, improve
              experiences and help businesses unlock new possibilities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Explore AI for Your Business

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

          {/* AI VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square">
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

              {/* Main AI Interface */}
              <div className="absolute left-1/2 top-1/2 w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-black/50">
                <div className="rounded-2xl bg-slate-950 p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-sm font-black text-slate-950">
                        AI
                      </div>

                      <div>
                        <div className="h-3 w-24 rounded bg-slate-700" />
                        <div className="mt-2 h-2 w-16 rounded bg-slate-800" />
                      </div>
                    </div>

                    <div className="h-8 w-8 rounded-full bg-slate-900" />
                  </div>

                  {/* Chat */}
                  <div className="mt-8 space-y-4">
                    <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-slate-900 p-4">
                      <div className="h-2 w-32 rounded bg-slate-700" />
                      <div className="mt-2 h-2 w-24 rounded bg-slate-800" />
                    </div>

                    <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-slate-800 bg-lime-400/5 p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-lime-400" />
                        <div className="h-2 w-28 rounded bg-lime-400/50" />
                      </div>

                      <div className="mt-3 h-2 w-full rounded bg-slate-800" />
                      <div className="mt-2 h-2 w-4/5 rounded bg-slate-800" />
                    </div>
                  </div>

                  {/* Input */}
                  <div className="mt-7 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-3">
                    <div className="h-3 flex-1 rounded bg-slate-800" />

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 text-xs font-black text-slate-950">
                      →
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI Badge */}
              <div className="absolute bottom-8 left-0 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Intelligence
                </p>

                <p className="mt-1 text-lg font-black text-lime-400">
                  Always Learning
                </p>
              </div>

              {/* Floating Automation Badge */}
              <div className="absolute right-0 top-10 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Automation
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
            ["01", "Intelligent"],
            ["02", "Automated"],
            ["03", "Scalable"],
            ["04", "Practical"],
          ].map(([number, text]) => (
            <div key={number} className="px-5 py-10 sm:px-8">
              <p className="text-xs font-bold text-lime-400">{number}</p>

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
              Beyond The Hype
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              AI should solve{" "}
              <span className="text-slate-500">real problems.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-400">
              AI isn't valuable simply because it's AI. We focus on practical
              applications where intelligent systems can save time, improve
              decisions, automate work or create better customer experiences.
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
              AI designed around{" "}
              <span className="text-lime-400">your needs.</span>
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
              Give your team{" "}
              <span className="text-lime-400">leverage.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              The right AI system doesn't replace your team. It gives them
              better tools to work faster, find information and focus on
              higher-value work.
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
              From opportunity to{" "}
              <span className="text-lime-400">intelligence.</span>
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
              Don't add AI just because everyone else is.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Business-first approach",
              "Practical AI applications",
              "Human-centered experiences",
              "Scalable architecture",
              "Responsible implementation",
              "Long-term improvement",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-950/10 bg-slate-950/5 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-lime-400">
                    ✓
                  </span>

                  <span className="text-sm font-bold">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section id="contact" className="px-6 py-24 sm:py-32">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/50 px-7 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Explore AI
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Have an AI idea? Let's make it useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us about the problem you're trying to solve and we'll
              explore where AI can make a real difference.
            </p>

            <a
              href="mailto:hello@rivon.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-lime-400 px-7 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Discuss an AI Project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AISolutions;